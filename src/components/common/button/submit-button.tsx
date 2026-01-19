'use client';

import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';
import ButtonSpinner from '../loader/ButtonSpinner';

interface Props {
  text?: string;
  className?: string;
  icon?: ReactNode;
  loading?: boolean;
  disable?: boolean;
}

const SubmitButton = ({
  text = 'Submit',
  className,
  icon,
  loading = false,
  disable = false,
}: Props) => {
  return (
    <Button type="submit" className={className} disabled={loading || disable}>
      <span className="flex items-center gap-2">
        {loading ? (
          <>
            <ButtonSpinner /> {text}
          </>
        ) : (
          <>
            {icon ? <>{icon}</> : null} {text}
          </>
        )}
      </span>
    </Button>
  );
};

export default SubmitButton;
