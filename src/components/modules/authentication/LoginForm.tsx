'use client';

import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Password from '@/components/ui/password';
import SubmitButton from '@/components/ui/submit-button';
import useSearchParamsValues from '@/hooks/useSearchParamsValues';
import { loginUser } from '@/services/auth/loginUser';

import { useActionState } from 'react';

const LoginForm = () => {
  const [state, formAction] = useActionState(loginUser, null);
  const { redirect } = useSearchParamsValues('redirect');

  return (
    <form action={formAction}>
      {redirect && <Input type="hidden" name="redirect" value={redirect} />}

      <FieldGroup className="grid grid-cols-1 gap-4">
        <Field>
          <FieldLabel>Email</FieldLabel>
          <Input name="email" type="email" placeholder="john@doe.com" />
        </Field>

        <Field>
          <FieldLabel>Password</FieldLabel>
          <Password name="password" placeholder="Enter password" />
        </Field>

        <SubmitButton className="mt-4" text="Login" />
      </FieldGroup>
    </form>
  );
};

export default LoginForm;
