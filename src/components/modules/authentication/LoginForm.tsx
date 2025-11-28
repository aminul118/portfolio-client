'use client';

import FormError from '@/components/common/FormError';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import Password from '@/components/ui/password';
import SubmitButton from '@/components/ui/submit-button';
import { loginUser } from '@/services/auth/loginUser';
import getSearchParams from '@/utils/getSearchParams';
import { useActionState } from 'react';

const LoginForm = () => {
  const [state, formAction] = useActionState(loginUser, null);
  const { redirect } = getSearchParams(['redirect']);

  return (
    <form action={formAction}>
      {redirect && <Input type="hidden" name="redirect" value={redirect} />}

      <FieldGroup className="grid grid-cols-1 gap-4">
        {/* Email */}
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@doe.com"
          />
          <FormError state={state} field="email" />
        </Field>

        {/* Password */}
        <Field>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <Password
            id="password"
            name="password"
            placeholder="Enter your password"
          />

          <FormError state={state} field="password" />
        </Field>

        <SubmitButton className="mt-4" text="Login" />
      </FieldGroup>
    </form>
  );
};

export default LoginForm;
