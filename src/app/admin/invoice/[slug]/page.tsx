import NotFound from '@/components/common/error/NotFound';
import InvoiceDetails from '@/components/modules/Admin/Invoice/InvoiceDetails';
import { getSingleInvoice } from '@/services/Invoice/invoice';
import { Params } from '@/types';

const InvoiceDetailsPage = async ({ params }: Params) => {
  const { slug } = await params;
  const { data: invoice } = await getSingleInvoice(slug);

  if (!invoice) {
    return <NotFound title="Invoice not found" />;
  }

  return <InvoiceDetails invoice={invoice} />;
};

export default InvoiceDetailsPage;
