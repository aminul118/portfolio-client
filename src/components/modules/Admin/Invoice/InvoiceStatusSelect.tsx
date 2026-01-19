'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useActionHandler from '@/hooks/useActionHandler';
import { updateInvoice } from '@/services/invoice/invoice';
import { IInvoice } from '@/types';
import { useTransition } from 'react';

type Props = {
  invoice: IInvoice;
};

const InvoiceStatusSelect = ({ invoice }: Props) => {
  const { executePost } = useActionHandler();
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
      await executePost({
        action: () => updateInvoice({ status: value }, invoice._id!),
        success: {
          message: `Status updated to ${value}`,
          loadingText: `Updating status to ${value}...`,
        },
        errorMessage: 'Failed to update status',
      });
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
        <SelectItem value="PAID">Paid</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default InvoiceStatusSelect;
