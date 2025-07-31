import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Ban } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const Forbidden = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <Ban size={80} className="text-destructive mb-6" />
      <SectionHeading
        heading="Access Denied"
        description=" You are not authorized to access this page."
      />
      <Button variant="outline" asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default Forbidden;
