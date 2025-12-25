'use client';

import 'quill/dist/quill.snow.css';
import { useEffect, useRef } from 'react';
import { useQuill } from 'react-quilljs';
import './quil.css';

const ReactQuil = ({ value, onChange, height = 700 }: IQuil) => {
  const { quill, quillRef } = useQuill();
  const initialized = useRef(false);

  useEffect(() => {
    if (!quill) return;

    //  Set initial content ONLY ONCE
    if (!initialized.current) {
      quill.clipboard.dangerouslyPasteHTML(value || '');
      initialized.current = true;
    }

    //  Listen for text changes
    const handler = () => {
      onChange(quill.root.innerHTML);
    };

    quill.on('text-change', handler);

    return () => {
      quill.off('text-change', handler);
    };
  }, [quill, onChange]);

  return (
    <div ref={quillRef} style={{ height }} className="border text-white" />
  );
};

export default ReactQuil;

interface IQuil {
  value: string;
  onChange: (value: string) => void;
  height?: number;
}
