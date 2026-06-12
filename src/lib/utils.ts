import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCleanDescription = (content: string | undefined): string => {
  if (!content) return '';

  if (content.trim().startsWith('[')) {
    try {
      const parsed = JSON.parse(content);
      const extractText = (nodes: any[]): string => {
        return nodes
          .map((node) => {
            if (node.text) return node.text;
            if (node.children) return extractText(node.children);
            return '';
          })
          .join(' ');
      };
      return extractText(parsed).slice(0, 160);
    } catch {
      return content.replace(/<[^>]*>/g, '').slice(0, 160);
    }
  }

  return content.replace(/<[^>]*>/g, '').slice(0, 160);
};
