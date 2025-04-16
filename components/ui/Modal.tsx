import {ReactNode} from "react";
import {
  Dialog, DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/Dialog";
import {X} from "lucide-react";
import {Button} from "@/components/ui/Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children
}: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[600px]'>
        <DialogHeader className='flex justify-between items-center'>
          <div>
            <DialogTitle className='text-xl'>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </div>
          <DialogClose asChild>
            <Button>
              <X className='w-5 h-5' />
              <span className='sr-only'>Закрыть</span>
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className='py-4'>{children}</div>
      </DialogContent>
    </Dialog>
  )
}