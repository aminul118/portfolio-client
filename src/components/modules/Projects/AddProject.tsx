'use client';

import ReactQuil from '@/components/common/rich-text/ReactQuil';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Container from '@/components/ui/Container';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import ImageDrop from '@/components/ui/image-drop';
import { Input } from '@/components/ui/input';
import MultipleImageDrop from '@/components/ui/multiple-image-drop';
import SubmitButton from '@/components/ui/submit-button';
import { addProjectAction } from '@/services/project/addProjects';
import { projectValidationSchema } from '@/validations/project';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import z from 'zod';

type FormValues = z.infer<typeof projectValidationSchema>;

const AddProject = () => {
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

  const onSubmit = async (values: FormValues) => {
    const res = await addProjectAction(values);
    console.log(res);
    if (res.success) {
      toast.success('Project added successfully!');
      form.reset();
      redirect('/admin/projects');
    }
  };

  return (
    <Container>
      <div className="flex justify-between">
        <div>
          <h2 className="mb-2 text-2xl font-semibold">Add Project</h2>
          <p className="text-muted-foreground mb-6 text-sm">
            Please fill in your project details below.
          </p>
        </div>

        <aside>
          <Button asChild>
            <Link href="/admin/projects">Show all projects</Link>
          </Button>
        </aside>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {/* Title */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Panda Mart" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Live Link */}
            <FormField
              control={form.control}
              name="liveLink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Live Link</FormLabel>
                  <FormControl>
                    <Input placeholder="https://example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Slug */}
            <FormField
              control={form.control}
              name="slug"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Slug</FormLabel>
                  <FormControl>
                    <Input placeholder="panda-mart" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Github */}
            <FormField
              control={form.control}
              name="github"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Github Repo (optional)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://github.com/aminul/project"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Technology */}
            <FormField
              control={form.control}
              name="technology"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Technology (comma separated)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="react, next js, tailwind"
                      value={field.value.join(', ')}
                      onChange={(e) => {
                        const list = e.target.value
                          .split(',')
                          .map((i) => i.trim())
                          .filter((i) => i.length > 0);

                        field.onChange(list);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Thumbnail */}
            <FormField
              control={form.control}
              name="thumbnail"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thumbnail</FormLabel>
                  <FormControl>
                    <ImageDrop onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Photos */}
            <FormField
              control={form.control}
              name="photos"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Photos</FormLabel>
                  <FormControl>
                    <MultipleImageDrop onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Content */}
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Details</FormLabel>
                <FormControl>
                  <ReactQuil
                    height={500}
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Featured */}
          <FormField
            control={form.control}
            name="isFeatured"
            render={({ field }) => (
              <FormItem className="flex items-center gap-3">
                <FormLabel>Featured Project?</FormLabel>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(!!checked)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <div className="flex justify-end">
            <SubmitButton />
          </div>
        </form>
      </Form>
    </Container>
  );
};

export default AddProject;
