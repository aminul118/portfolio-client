import TableFilters from '@/components/common/table/TableFilters';
import ClientTableWrapper from '@/components/common/wrapper/ClientTableWrapper';
import CreateInvoiceDialog from '@/components/modules/Admin/Invoice/CreateInvoiceDialog';
import InvoiceTable from '@/components/modules/Admin/Invoice/InvoiceTable';
import cleanSearchParams from '@/lib/cleanSearchParams';
import { getInvoices } from '@/services/invoice/invoice';
import { SearchParams } from '@/types';
import { Metadata } from 'next';

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

export default InvoicePage;

const Action = () => {
  return (
    <>
      <CreateInvoiceDialog />
    </>
  );
};

// SEO
export const metadata: Metadata = {
  title: 'Invoice | Aminul Islam',
};
