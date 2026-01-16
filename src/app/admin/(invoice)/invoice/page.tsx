import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import InvoiceTable from '@/components/modules/Admin/Invoice/InvoiceTable';
import { Button } from '@/components/ui/button';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getInvoices } from '@/services/invoice/invoice';
import { SearchParams } from '@/types';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const InvoicePage = async ({ searchParams }: SearchParams) => {
  const params = await cleanSearchParams(searchParams);
  const { data, meta } = await getInvoices(params);
  return (
    <div>
      <ClientTableWrapper tableTitle="Invoices" action={<Action />} meta={meta}>
        <TableFilters />
        <InvoiceTable invoice={data} />
      </ClientTableWrapper>
    </div>
  );
};

const Action = () => {
  return (
    <>
      <Button asChild>
        <Link href="/admin/create-invoice">
          <Plus /> Create Invoice
        </Link>
      </Button>
    </>
  );
};

export default InvoicePage;
