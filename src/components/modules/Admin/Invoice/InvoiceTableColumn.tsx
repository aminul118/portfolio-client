import DateFormat from '@/components/common/formater/date-format';
import { Column } from '@/components/common/table/TableManageMent';
import { Button } from '@/components/ui/button';
import { IInvoice } from '@/types';
import { Download } from 'lucide-react';
import Link from 'next/link';
import InvoiceActions from './InvoiceActions';

const InvoiceTableColumn: Column<IInvoice>[] = [
  {
    header: 'SI',
    accessor: (_, index) => index + 1,
  },
  {
    header: 'Company Name',
    accessor: (i) => i.payableTo.name,
  },
  {
    header: 'Download',
    accessor: (i) => (
      <Button variant="outline">
        <Link target="_blank" href={i.pdfUrl!}>
          <Download />
        </Link>
      </Button>
    ),
  },
  {
    header: 'Date & Time',
    accessor: (i) => <DateFormat date={i.createdAt!} />,
  },
  {
    header: 'Actions',
    accessor: (i) => <InvoiceActions invoice={i} />,
  },
];

export default InvoiceTableColumn;
