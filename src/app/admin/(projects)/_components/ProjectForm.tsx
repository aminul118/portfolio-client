'use client';

import SubmitButton from '@/components/common/button/submit-button';
import SeoFormFields from '@/components/common/form/SeoFormFields';
import PlateRichEditor from '@/components/rich-text/core/rich-editor';
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
import { Form } from '@/components/ui/form';
import ImageDrop from '@/components/ui/image-drop';
import { Input } from '@/components/ui/input';
import MultipleImageDrop from '@/components/ui/multiple-image-drop';
import useActionHandler from '@/hooks/useActionHandler';
import { createProject, updateProject } from '@/services/project/projects';
import { IProject } from '@/types';
import { projectValidationSchema } from '@/zod/project';
import { zodResolver } from '@hookform/resolvers/zod';
import { Plus, Save } from 'lucide-react';
import { Suspense, useEffect, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';

type FormValues = z.infer<typeof projectValidationSchema>;

interface Props {
  project?: IProject;
  onCancel?: () => void;
  onUpdated?: () => void;
}

const ProjectForm = ({ project, onCancel, onUpdated }: Props) => {
  const { executePost } = useActionHandler();
  const isEdit = !!project;

  const defaultValues = useMemo<FormValues>(
    () => ({
      title: project?.title || '',
      slug: project?.slug || '',
      liveLink: project?.liveLink || '',
      github: project?.github || '',
      content: project?.content || '',
      technology: project?.technology || [],
      isFeatured: !!project?.isFeatured,
      thumbnail: undefined as any,
      photos: undefined as any,
      seo: {
        title: project?.seo?.title || '',
        description: project?.seo?.description || '',
        keywords: project?.seo?.keywords || '',
      },
    }),
    [project],
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(projectValidationSchema),
    defaultValues,
  });

  useEffect(() => {
    if (project) {
      form.reset(defaultValues);
    }
  }, [project, form, defaultValues]);

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();

    const { thumbnail, photos, ...rest } = data;
    formData.append('data', JSON.stringify(rest));

    if (thumbnail instanceof File) {
      formData.append('thumbnail', thumbnail);
    }

    if (Array.isArray(photos)) {
      photos.forEach((p) => {
        if (p instanceof File) formData.append('photos', p);
      });
    }

    if (isEdit && project) {
      await executePost({
        action: () => updateProject(formData, project._id),
        success: {
          onSuccess: () => {
            onUpdated?.();
          },
          loadingText: 'Project updating...',
          message: 'Project updated successfully',
        },
        errorMessage: 'Failed to update project.',
      });
    } else {
      await executePost({
        action: () => createProject(formData),
        success: {
          onSuccess: () => {
            form.reset();
            onUpdated?.();
          },
          loadingText: 'Project adding...',
          message: 'Project added successfully',
          redirectPath: '/admin/projects',
        },
        errorMessage: 'Failed to add project.',
      });
    }
  };

  return (
    <div className="w-full rounded-2xl">
      <CardContent className={isEdit ? 'pt-6' : ''}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <FieldGroup className="grid grid-cols-2 gap-6">
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
                        defaultValue={(field.value || []).join(', ')}
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
                      <FieldLabel>
                        Thumbnail {isEdit ? '(optional new)' : ''}
                      </FieldLabel>
                      <ImageDrop onChange={field.onChange} />
                      {isEdit && (
                        <FieldDescription>
                          Leave empty to keep current thumbnail.
                        </FieldDescription>
                      )}
                    </Field>
                  )}
                />

                {/* Photos */}
                <Controller
                  name="photos"
                  control={form.control}
                  render={({ field }) => (
                    <Field>
                      <FieldLabel>
                        Gallery Images{' '}
                        {isEdit ? '(optional new)' : '(optional)'}
                      </FieldLabel>
                      <MultipleImageDrop onChange={field.onChange} />
                      {isEdit && (
                        <FieldDescription>
                          Leave empty to keep existing gallery.
                        </FieldDescription>
                      )}
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
                      <Suspense fallback={<div>Loading editor...</div>}>
                        <PlateRichEditor
                          value={field.value || ''}
                          onChange={field.onChange}
                        />
                      </Suspense>
                    </Field>
                  )}
                />
              </FieldGroup>

              {/* SEO Section */}
              <SeoFormFields control={form.control} />
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

            {isEdit ? (
              <CardFooter className="mt-6 flex justify-end gap-2 border-t px-0 pt-4">
                <Button type="button" variant="outline" onClick={onCancel}>
                  Cancel
                </Button>
                <SubmitButton
                  text="Update"
                  loading={form.formState.isSubmitting}
                  loadingEffect
                  loadingText="Updating..."
                  icon={<Save className="h-4 w-4" />}
                />
              </CardFooter>
            ) : (
              <SubmitButton
                className="mt-6"
                icon={<Plus className="h-4 w-4" />}
                text="Add Project"
                loading={form.formState.isSubmitting}
                loadingEffect
                loadingText="Adding..."
              />
            )}
          </form>
        </Form>
      </CardContent>
    </div>
  );
};

export default ProjectForm;
