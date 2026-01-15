'use client';

import ReactQuil from '@/components/common/rich-text/ReactQuil';
import { Button } from '@/components/ui/button';
import { CardContent, CardFooter } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field';
import ImageDrop from '@/components/ui/image-drop';
import { Input } from '@/components/ui/input';
import MultipleImageDrop from '@/components/ui/multiple-image-drop';
import useActionHandler from '@/hooks/useActionHandler';
import { createProject } from '@/services/project/projects';
import { projectValidationSchema } from '@/zod/project';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

type FormValues = z.infer<typeof projectValidationSchema>;

export default function AddProjects() {
  const { executePost } = useActionHandler();
  const form = useForm<FormValues>({
    resolver: zodResolver(projectValidationSchema),
    defaultValues: {
      title: '',
      slug: '',
      liveLink: '',
      github: '',
      content: '',
      technology: [],
      isFeatured: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();

    // Exclude the raw File from the JSON blob
    const { thumbnail, ...rest } = data;
    formData.append('data', JSON.stringify(rest));

    if (thumbnail instanceof File) {
      formData.append('file', thumbnail);
    }

    await executePost({
      action: () => createProject(formData),
      success: {
        onSuccess: () => form.reset(),
        loadingText: 'Project adding...',
        message: 'Project added successfully',
        redirectPath: '/admin/projects',
      },
      errorMessage: 'Failed to add project.',
    });
  };

  return (
    <div className="w-full py-12">
      <CardContent>
        <form id="add-project-form" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="2xl::grid-cols-2 grid gap-6">
            <FieldGroup className="grid grid-cols-2">
              {/* Title */}
              <Controller
                name="title"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Title</FieldLabel>
                    <Input {...field} placeholder="Portfolio Website" />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Slug */}
              <Controller
                name="slug"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Slug</FieldLabel>
                    <Input {...field} placeholder="portfolio-website" />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Live Link */}
              <Controller
                name="liveLink"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Live URL</FieldLabel>
                    <Input {...field} placeholder="https://example.com" />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* GitHub */}
              <Controller
                name="github"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>GitHub URL (optional)</FieldLabel>
                    <Input {...field} placeholder="https://github.com/..." />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Technology */}
              <Controller
                name="technology"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    className="col-span-2"
                  >
                    <FieldLabel>Technologies</FieldLabel>
                    <Input
                      placeholder="React, Next.js, Tailwind"
                      onChange={(e) =>
                        field.onChange(
                          e.target.value
                            .split(',')
                            .map((t) => t.trim())
                            .filter(Boolean),
                        )
                      }
                    />
                    <FieldDescription>
                      Separate technologies with commas
                    </FieldDescription>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Thumbnail */}
              <Controller
                name="thumbnail"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Thumbnail</FieldLabel>
                    <ImageDrop onChange={field.onChange} />
                  </Field>
                )}
              />

              {/* Photos */}
              <Controller
                name="photos"
                control={form.control}
                render={({ field }) => (
                  <Field>
                    <FieldLabel>Gallery Images (optional)</FieldLabel>
                    <MultipleImageDrop onChange={field.onChange} />
                  </Field>
                )}
              />
            </FieldGroup>
            <FieldGroup>
              {/* Content */}
              <Controller
                name="content"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Description</FieldLabel>
                    <ReactQuil
                      value={field.value || ''}
                      onChange={field.onChange}
                    />
                  </Field>
                )}
              />
            </FieldGroup>
          </div>

          {/* Featured */}
          <Controller
            name="isFeatured"
            control={form.control}
            render={({ field }) => (
              <Field orientation="horizontal" className="mt-4">
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <FieldLabel>Featured Project</FieldLabel>
              </Field>
            )}
          />
        </form>
      </CardContent>

      <CardFooter className="mt-4">
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="add-project-form">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </div>
  );
}
