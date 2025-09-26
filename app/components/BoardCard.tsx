import Link from "next/link";

type Props = {
  id: string;
  title: string;
};

export default function BoardCard({ id, title }: Props) {
    
    return (
        <Link
            href={`/boards/${id}`}
            className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition block"
        >
            <h2 className="text-xl font-semibold">{title}</h2>
        </Link>
    );
}
