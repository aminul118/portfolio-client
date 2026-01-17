import InvoiceForm from '@/components/modules/Admin/Invoice/InvoiceForm';
import { Metadata } from 'next';

const InvoiceCreatePage = () => {
  return (
    <>
      <InvoiceForm />
    </>
  );
};

export default InvoiceCreatePage;

// SEO
export const metadata: Metadata = {
  title: 'Create Invoice | Aminul Islam',
};
