'use client';

import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
import ButtonSpinner from '../common/loader/ButtonSpinner';

const SubmitButton = ({ children, className }: Props) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className={className} disabled={pending}>
      {pending ? (
        <>
          {children} <ButtonSpinner />
        </>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;

interface Props {
  children: React.ReactNode;
  className?: string;
}
