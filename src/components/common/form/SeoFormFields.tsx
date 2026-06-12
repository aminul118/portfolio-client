import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface SeoFormFieldsProps {
  control: any;
}

const SeoFormFields = ({ control }: SeoFormFieldsProps) => {
  return (
    <div className="space-y-6">
      {/* SEO Title */}
      <FormField
        control={control}
        name="seo.title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              SEO Title <span className="text-destructive">*</span>
            </FormLabel>
            <FormControl>
              <Input placeholder="SEO Title" {...field} />
            </FormControl>
            <FormDescription
              className={
                (field.value?.length || 0) > 60
                  ? 'text-destructive font-medium'
                  : ''
              }
            >
              {field.value?.length || 0}/60 characters recommended
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* SEO Keywords */}
      <FormField
        control={control}
        name="seo.keywords"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              SEO Keywords <span className="text-destructive">*</span>
            </FormLabel>
            <FormControl>
              <Input placeholder="Keywords (comma separated)" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* SEO Description */}
      <FormField
        control={control}
        name="seo.description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              SEO Description <span className="text-destructive">*</span>
            </FormLabel>
            <FormControl>
              <Textarea
                className="h-36"
                placeholder="SEO Description"
                {...field}
              />
            </FormControl>
            <FormDescription
              className={
                (field.value?.length || 0) > 160
                  ? 'text-destructive font-medium'
                  : ''
              }
            >
              {field.value?.length || 0}/160 characters recommended
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default SeoFormFields;
