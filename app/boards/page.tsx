import Link from "next/link";
import React from "react";
import BoardCard from "../components/BoardCard";
import prisma from "@/lib/prisma";


const page = async () => {
    const boards = [
        { id: "1", title: "Project Alpha" },
        { id: "2", title: "Shopping List" },
    ];
    
    const users = await prisma.user.findMany();
    return (
        <main className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">Your Boards</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {boards.map((board) => (
                    <BoardCard key={board.id} id={board.id} title={board.title} />
                ))}
            </div>
            <div>
                {users.map((user, i) => (
                    <h1 key={i}>{user.email}</h1>
                ))}
            </div>
        </main>
    );
};

export default page;
