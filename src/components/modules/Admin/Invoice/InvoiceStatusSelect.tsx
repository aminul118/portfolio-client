'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { updateInvoice } from '@/services/invoice/invoice';
import { IInvoice } from '@/types';
import { useTransition } from 'react';
import { toast } from 'sonner';

type Props = {
  invoice: IInvoice;
};

const InvoiceStatusSelect = ({ invoice }: Props) => {
  const [isPending, startTransition] = useTransition();

  //  If already PAID → lock it
  if (invoice.status === 'PAID') {
    return (
      <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-center text-sm font-medium text-green-700">
        Paid
      </span>
    );
  }

  const handleChange = (value: string) => {
    if (value === invoice.status) return;

    startTransition(async () => {
      try {
        await updateInvoice({ status: value }, invoice._id!);
        toast.success(`Status updated to ${value}`);
      } catch {
        toast.error('Failed to update status');
      }
    });
  };

  return (
    <Select
      defaultValue={invoice.status}
      onValueChange={handleChange}
      disabled={isPending}
    >
      <SelectTrigger className="w-[140px]">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="PENDING">Pending</SelectItem>
        <SelectItem value="UNPAID">Unpaid</SelectItem>

        {/* allow going to PAID only once */}
        <SelectItem value="PAID">Paid</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default InvoiceStatusSelect;
