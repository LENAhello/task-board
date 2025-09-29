import React from "react";


type CreateFormProps = {
    create: (formData: FormData) => Promise<void>;
    id: string;
};
const CreateForm = ({create, id} : CreateFormProps) => {
    return (
        <form action={create} className="flex gap-2">
            <input
                type="text"
                name="title"
                placeholder="Title"
                className="flex-1 border p-2 rounded-lg"
                required
            />
            <input 
                type="hidden" 
                name="id" 
                value={id} 
            />
            <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
                    Create
             </button>
        </form>
    );
};

export default CreateForm;
