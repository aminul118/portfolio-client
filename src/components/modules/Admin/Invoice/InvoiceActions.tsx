'use client';

import DeleteFromTableDropDown from '@/components/common/actions/DeleteFromTableDropDown';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { deleteSingleInvoice } from '@/services/invoice/invoice';
import { IInvoice } from '@/types';
import { EllipsisIcon, Eye, Trash2Icon } from 'lucide-react';
import { useState } from 'react';

interface Props {
  invoice: IInvoice;
}

const BannerActions = ({ invoice }: Props) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleDelete = async (id: string) => {
    return await deleteSingleInvoice(id);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex justify-end">
            <Button
              size="icon"
              variant="ghost"
              className="shadow-none"
              aria-label="Edit item"
            >
              <EllipsisIcon size={16} aria-hidden="true" />
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-48">
          <DropdownMenuItem
            onClick={() => {
              setDetailsOpen(true);
            }}
          >
            <Eye /> Banner Details
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="text-destructive focus:text-destructive"
            onClick={() => setDeleteOpen(true)}
          >
            <Trash2Icon className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <BannerDetailsModal
        open={detailsOpen}
        setOpen={setDetailsOpen}
        banner={banner}
      /> */}
      <DeleteFromTableDropDown
        open={deleteOpen}
        setOpen={setDeleteOpen}
        onConfirm={() => handleDelete(invoice._id!)}
      />
    </>
  );
};

export default BannerActions;
