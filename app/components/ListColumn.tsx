'use client'

import AddDialog from './AddDialog'
import { createTask } from '../actions/actions'
import { useDraggable, useDroppable } from '@dnd-kit/core'

type Task = {
  id: string
  title: string
  order: number
  listId: string
}

export default function ListColumn({
  title,
  id,
  tasks,
}: {
  title: string
  id: string
  tasks: Task[]
}) {

  const { setNodeRef } = useDroppable({
    id: id,
  });
  return (
    <div className="bg-gray-100 rounded-xl shadow w-64 flex flex-col">
      <div className="p-4 border-b flex justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <AddDialog id={id} create={createTask} />
      </div>
      <div ref={setNodeRef} className="p-3 border-black border-2">
        {tasks.length === 0 ? 
        ( 
          <p className="text-gray-500 text-sm text-center">No tasks yet</p>
        ):( 
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} />)
          ))
        }
      </div>
    </div>
  )
}

function TaskCard({ task }: { task: Task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable
    ({
      id: task.id,
      data: { listId: task.listId },
    })

    const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="p-3 mb-2 bg-white rounded-lg shadow cursor-grab"
    >
      {task.title}
    </div>
  )
}
