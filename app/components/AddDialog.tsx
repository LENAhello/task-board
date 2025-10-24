import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface AddTaskDialogProps {
    id?: string; 
    create: (formData: FormData) => Promise<void>;
    title: string;
}

export default function AddDialog({ id, create, title }: AddTaskDialogProps) {

    return (
        <>
            <Dialog>
                {/* Button that opens the modal */}
                <DialogTrigger asChild>
                    <Button variant="outline">{title}</Button>
                </DialogTrigger>

                {/* Modal content */}
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Task</DialogTitle>
                    </DialogHeader>

                    {/* Form with server action */}
                    <form action={create} className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="title">Title</Label>
                        <Input id="title" name="title" placeholder="Task Title" required />
                    </div>

                    <Input type="hidden" name="id" value={id} />

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Add</Button>
                    </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}
