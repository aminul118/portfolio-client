'use client';

import { Button } from '@/components/ui/button';
import ButtonSpinner from '../loader/ButtonSpinner';

interface Props {
  text?: string;
  className?: string;
  loading?: boolean;
  disable?: boolean;
}

const SubmitButton = ({
  text = 'Submit',
  className,
  loading = false,
  disable = false,
}: Props) => {
  return (
    <Button type="submit" className={className} disabled={loading || disable}>
      {loading ? (
        <>
          {text}
          <ButtonSpinner />
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default SubmitButton;
