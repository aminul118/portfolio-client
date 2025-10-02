import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Ban } from 'lucide-react';
import Link from 'next/link';

const Forbidden = () => {
  return (
    <section className="grid min-h-screen place-items-center">
      <Card className="w-full max-w-lg p-16">
        <CardContent className="text-center">
          <Ban size={80} className="text-destructive mx-auto" />
          <h1 className="mt-4 text-2xl">Access Denied</h1>
          <p className="mb-4">You do not have permission to view this page.</p>
          <Button asChild>
            <Link href="/">Go back home</Link>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default Forbidden;
