import NotFound from '@/components/common/error/NotFound';
import InvoiceDetailsClient from '@/components/modules/Admin/Invoice/InvoiceDetailsClient';
import { getSingleInvoice } from '@/services/invoice/invoice';
import { Params } from '@/types';

const InvoiceDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;
  const { data: invoice } = await getSingleInvoice(slug);

  if (!invoice) {
    return <NotFound title="Invoice not found" />;
  }

  return <InvoiceDetailsClient invoice={invoice} />;
};

export default InvoiceDetailsPage;
