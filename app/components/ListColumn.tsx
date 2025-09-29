'use client'
import { DndContext } from "@dnd-kit/core";
import { createTask } from "../actions/actions";
import AddDialog from "./AddDialog";
import TaskCard from "./TaskCard";

type Props = {
  title: string;
  id: string;
  tasks: {id: string; title: string; createdAt: Date; order: number; listId: string;}[];
};

export default function ListColumn({ title, id, tasks }: Props) {
  return (
    <div className="bg-white rounded-xl shadow w-64 flex-shrink-0">
        <div className="p-4 border-b flex justify-between">
            <h2 className="text-lg font-semibold">{title}</h2>
            <AddDialog id={id} create={createTask}/>
        </div>
        <ul className="p-4 space-y-2">
          {tasks.map((t, i) => (
            <TaskCard key={i} title={t.title} />
          ))}
        </ul>
    </div>
  );
}
