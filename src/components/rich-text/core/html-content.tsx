import { BaseEditorKit } from '@/components/rich-text/kits/editor-base-kit';
import { EditorStatic } from '@/components/rich-text/ui/editor-static';
import { createSlateEditor } from 'platejs';

interface IHtml {
  content: string;
  className?: string;
}

const HtmlContent = ({ content, className }: IHtml) => {
  if (!content || typeof content !== 'string') return null;

  const isPlateContent = content.trim().startsWith('[');
  let plateValue = null;

  if (isPlateContent) {
    try {
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed)) {
        plateValue = parsed;
      }
    } catch {
      // Not valid JSON, fallback to HTML
    }
  }

  if (plateValue) {
    const staticEditor = createSlateEditor({ plugins: BaseEditorKit });

    return (
      <div className={className}>
        <EditorStatic value={plateValue} editor={staticEditor} variant="none" />
      </div>
    );
  }

  return (
    <div
      suppressHydrationWarning
      className={className}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default HtmlContent;
