import TaskCard from "./TaskCard";

type Props = {
  title: string;
  tasks: string[];
};

export default function ListColumn({ title, tasks }: Props) {
  return (
    <div className="bg-white rounded-xl shadow w-64 flex-shrink-0">
        <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        <ul className="p-4 space-y-2">
            {tasks.map((t, i) => (
                <TaskCard key={i} title={t} />
            ))}
        </ul>
    </div>
  );
}
