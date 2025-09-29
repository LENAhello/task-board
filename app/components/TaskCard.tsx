

type Props = {
    title: string;
};
  
export default function TaskCard({ title }: Props) {
    return (
        <li className="p-2 bg-gray-50 rounded shadow-sm hover:bg-gray-100 transition">
            {title}
        </li>
    );
}
  