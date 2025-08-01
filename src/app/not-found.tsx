import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SearchSlash } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <SearchSlash size={80} className="text-muted-foreground mb-6" />
      <SectionHeading
        heading="Oops! Page not found"
        description="We couldn’t find the page you were looking for."
      />
      <Button asChild>
        <Link href="/">Go back home</Link>
      </Button>
    </div>
  );
};

export default NotFound;
