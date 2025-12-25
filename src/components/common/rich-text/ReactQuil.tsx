'use client';

import 'quill/dist/quill.snow.css';
import { useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import './quil.css';

const ReactQuil = ({ value, onChange, height = 700 }: IQuil) => {
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML(value);
      quill.on('text-change', () => {
        onChange(quill.root.innerHTML);
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

interface IQuil {
  value: string;
  onChange: (value: string) => void;
  height?: number;
}
