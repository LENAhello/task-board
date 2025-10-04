'use client'
import { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import ListColumn from './ListColumn';

type Task = {
    id: string
    title: string
    order: number
    listId: string
};

type List = {
    id: string
    title: string
    order: number
    tasks: Task[]
};

export default function BoardClient({ lists }: {lists: List[]}) {

    const [tasks, setTasks] = useState<Task[]>(lists.flatMap(l => l.tasks));

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event;

        if (!over) return;

        const taskId = active.id as string;
        const newList = over.id as Task['listId'];

        setTasks(() =>
            tasks.map((task) =>
              task.id === taskId
                ? {
                    ...task,
                    listId: newList,
                  }
                : task,
            ),
          );
    }

    return (
        <div className="p-4">
        <div className="flex gap-8">
            <DndContext onDragEnd={handleDragEnd}>
                {lists.map((list) => (
                    <ListColumn key={list.id} id={list.id} title={list.title} tasks={tasks.filter((task) => task.listId === list.id)} />
                ))}
            </DndContext>
        </div>
        </div>
    );
}
