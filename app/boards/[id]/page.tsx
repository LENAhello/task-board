import ListColumn from "@/app/components/ListColumn";
import React from "react";

const page = async ({ params }: {params: Promise<{ id: string }>}) => {
    const { id } = await params;

    // temporary fake data
    const board = {
        id,
        title: `Board ${id}`,
        lists: [
            { id: "a", title: "Todo", tasks: ["Task 1", "Task 2"] },
            { id: "b", title: "Doing", tasks: ["Task 3"] },
            { id: "c", title: "Done", tasks: ["Task 4"] },
        ],
    };
    
    return (
        <main className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">{board.title}</h1>
            <div className="flex gap-6 overflow-x-auto">
                {board.lists.map((list) => (
                    <ListColumn key={list.id} title={list.title} tasks={list.tasks} />
                ))}
            </div>
        </main>
    );
};

export default page;
