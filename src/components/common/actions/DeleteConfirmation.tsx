'use client';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { ReactNode } from 'react';
import { toast } from 'sonner';
import Tooltip from '../Tooltip';

interface IDeleteResponse {
  success: boolean;
  message?: string;
}

interface IDeleteConfirmation {
  onConfirm: () => Promise<IDeleteResponse>;
  children?: ReactNode;
}

const DeleteConfirmation = ({ children, onConfirm }: IDeleteConfirmation) => {
  const handleDelete = async () => {
    const toastId = toast.loading('Removing...');
    try {
      const res = await onConfirm();

      console.log('RES-->', res);
      if (res.success) {
        toast.success(res.message ?? 'Removed Successfully', { id: toastId });
      }
    } catch {
      toast.error('Failed to delete. Please try again.', { id: toastId });
    }
  };

  return (
    <AlertDialog>
      {/* Remove Tooltip or replace with a fragment if Tooltip does not accept children */}
      <Tooltip content="Delete">
        <AlertDialogTrigger asChild>
          {children ?? (
            <Button variant="destructive" size="sm">
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
        </AlertDialogTrigger>
      </Tooltip>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete and
            remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteConfirmation;
