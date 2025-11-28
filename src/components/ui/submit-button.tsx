'use client';

import { Button } from '@/components/ui/button';
import { useFormStatus } from 'react-dom';
import ButtonSpinner from '../common/loader/ButtonSpinner';

interface Props {
  text?: string;
  className?: string;
}

const SubmitButton = ({ text = 'Submit', className }: Props) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className={className} disabled={pending}>
      {pending ? (
        <>
          {text} <ButtonSpinner />
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default SubmitButton;
