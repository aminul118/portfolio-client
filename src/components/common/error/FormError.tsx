'use client';

import { FieldDescription } from '@/components/ui/field';

type Props = {
  state: any;
  field: string;
};

const FormError = ({ state, field }: Props) => {
  // Zod Error Catch
  const getFieldError = () => {
    if (state?.errors) {
      const error = state.errors.find((err: any) => err.field === field);
      return error?.message || null;
    }
    return null;
  };

  const errorMessage = getFieldError();

  if (!errorMessage) return null;

  return (
    <FieldDescription className="text-red-600">{errorMessage}</FieldDescription>
  );
};

export default FormError;
