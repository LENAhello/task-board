'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache";
import z, { success } from "zod";
import { LoginSchema, RegisterSchema } from "../utils/validationSchemas";
import * as bcrypt from 'bcryptjs';

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

export async function moveTask(taskId: string, newListId: string) {
    try {
        await prisma.task.update({
            where: { id: taskId },
            data: { listId: newListId },
        });
    } catch (error) {
        console.error("Error moving task:", error);
    }
}

export async function loginAction(data: z.infer<typeof LoginSchema>){

    const validation = LoginSchema.safeParse(data);
    if (!validation.success) {
        return { error : validation.error.issues[0].message};
    }

    console.log(data);
    return { success: 'Logged in successfully'}
}

export async function registerAction(data: z.infer<typeof RegisterSchema>){

    const validation = RegisterSchema.safeParse(data);
    if (!validation.success) {
        return { success: false, message: validation.error.issues[0].message};
    }

    const { username, password, email } = validation.data;
    const user = await prisma.user.findUnique({ where : {email} });
    if (user) return { success: false, message: 'User already exist!'};

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await prisma.user.create({
        data: { email, name: username, password: hashedPassword}
    });

    console.log(data);
    return { success: true, message: 'User registered successfully'}
}