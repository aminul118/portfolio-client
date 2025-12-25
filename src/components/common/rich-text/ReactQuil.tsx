'use client';

import 'quill/dist/quill.snow.css';
import { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import './quil.css';

interface IQuil {
  value: string;
  onChange: (value: string) => void;
  height?: number;
}

const ReactQuil = ({ value, onChange, height = 700 }: IQuil) => {
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(value); // Set initial value
      quill.on('text-change', () => {
        onChange(quill.root.innerHTML); // Send changes to parent
      });
    }
  }, [onChange, quill, value]);

  return (
    <div
      ref={quillRef}
      className="bg-black"
      style={{ height, color: 'white', border: 'none' }}
    />
  );
};

export default ReactQuil;
