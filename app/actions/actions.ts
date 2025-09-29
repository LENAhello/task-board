'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache";

export async function createBoard(formData: FormData){
    await prisma.board.create({
        data: {
            title: formData.get('title') as string,
            userId: 'cmfzjoac00000bn9ch4qcdeao',
        }
    });

    revalidatePath('/boards');
}

export async function createList(formData: FormData){
    await prisma.list.create({
        data: {
            title: formData.get('title') as string,
            order: 2,
            boardId: formData.get('id') as string,
        }
    });

    revalidatePath('/boards');
}

export async function createTask(formData: FormData){
    await prisma.task.create({
        data: {
            title: formData.get('title') as string,
            order: 3,
            listId: formData.get('id') as string,
        }
    });

    revalidatePath('/boards');
}
