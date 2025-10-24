import { createList } from "@/app/actions/actions";
import AddDialog from "@/app/components/AddDialog";
import BoardClient from "@/app/components/BoardClient";
import { prisma } from "@/lib/prisma";
import React from "react";

const page = async ({ params }: {params: Promise<{ id: string }>}) => {
    const { id } = await params;

    const board = await prisma.board.findUnique({
        where: { id: id }, // find board by its ID
        include: {
            lists: {
                include: {
                    tasks: true, // also fetch tasks for each list
                },
            },
        },
    });
    if (!board) return <p>Board not found</p>;
    

    return (
        <main className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">{board?.title}</h1>
            <div className="flex gap-6 overflow-x-auto">
                {/* {board?.lists.map((list) => (
                    <ListColumn key={list.id} id={list.id} title={list.title} tasks={list.tasks} />
                ))} */}
                <BoardClient lists={board?.lists}/>
            </div>
            <div>
                <AddDialog id={id} create={createList} title='Add New List'/>
            </div>
        </main>
    );
};

export default page;
