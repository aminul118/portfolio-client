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
import { EllipsisIcon, Send, Trash2Icon } from 'lucide-react';
import { useState } from 'react';
import SendInvoiceDialog from './SendInvoiceDialog';

interface Props {
  invoice: IInvoice;
}

const BannerActions = ({ invoice }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [sendOpen, setSendOpen] = useState(false);

  const handleDelete = async (id: string) => {
    return await deleteSingleInvoice(id);
  };

  return (
    <>
      {/* DROPDOWN */}
      <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
        <DropdownMenuTrigger asChild>
          <div className="flex justify-end">
            <Button
              size="icon"
              variant="ghost"
              className="shadow-none"
              aria-label="Actions"
            >
              <EllipsisIcon size={16} aria-hidden="true" />
            </Button>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="min-w-48">
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
              setMenuOpen(false); // ✅ close menu FIRST
              setSendOpen(true); // ✅ then open dialog
            }}
          >
            <Send className="mr-2 h-4 w-4" />
            Send Invoice
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="text-destructive focus:text-destructive"
            onSelect={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              setDeleteOpen(true);
            }}
          >
            <Trash2Icon className="mr-2 h-4 w-4" />
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* MODALS */}

      <DeleteFromTableDropDown
        open={deleteOpen}
        setOpen={setDeleteOpen}
        onConfirm={() => handleDelete(invoice._id!)}
      />

      {invoice && (
        <SendInvoiceDialog
          open={sendOpen}
          setOpen={setSendOpen}
          invoice={invoice}
        />
      )}
    </>
  );
};

export default BannerActions;
