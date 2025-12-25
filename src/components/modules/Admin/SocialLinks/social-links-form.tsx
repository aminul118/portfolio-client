'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { ILinks, updateLinks } from '@/services/social-links/links';
import { LinksFormValues, linksSchema } from '@/zod/socialLinksSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

type Props = {
  initialData?: ILinks;
};

const SocialLinksForm = ({ initialData }: Props) => {
  const form = useForm<LinksFormValues>({
    resolver: zodResolver(linksSchema),
    defaultValues: {
      facebook: initialData?.facebook ?? '',
      linkedIn: initialData?.linkedIn ?? '',
      github: initialData?.github ?? '',
      telegram: initialData?.telegram ?? '',
      whatsapp: initialData?.whatsapp ?? '',
      resume: initialData?.resume ?? '',
    },
  });

  const onSubmit = async (values: LinksFormValues) => {
    if (!initialData) return;

    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const res = await updateLinks(formData, initialData._id);
    console.log(res);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-lg space-y-4"
      >
        {FIELDS.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: rhfField }) => (
              <FormItem>
                <FormLabel>{field.label}</FormLabel>
                <FormControl>
                  <Input placeholder={field.placeholder} {...rhfField} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit" className="w-full">
          Update Links
        </Button>
      </form>
    </Form>
  );
};

export default SocialLinksForm;

const FIELDS: {
  name: keyof LinksFormValues;
  label: string;
  placeholder: string;
}[] = [
  {
    name: 'facebook',
    label: 'Facebook',
    placeholder: 'https://facebook.com/...',
  },
  {
    name: 'linkedIn',
    label: 'LinkedIn',
    placeholder: 'https://linkedin.com/in/...',
  },
  { name: 'github', label: 'GitHub', placeholder: 'https://github.com/...' },
  { name: 'telegram', label: 'Telegram', placeholder: 'https://t.me/...' },
  { name: 'whatsapp', label: 'WhatsApp', placeholder: 'https://wa.me/...' },
  {
    name: 'resume',
    label: 'Resume',
    placeholder: 'https://drive.google.com/...',
  },
];
