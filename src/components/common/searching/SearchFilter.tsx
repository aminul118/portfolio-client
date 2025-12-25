'use client';

import { Input } from '@/components/ui/input';
import useDebounce from '@/hooks/useDebounce';
import { Search, X } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

interface SearchFilterProps {
  placeholder?: string;
  paramName?: string;
}

const SearchFilter = ({
  placeholder = 'Search...',
  paramName = 'search',
}: SearchFilterProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get(paramName) || '');
  const debouncedValue = useDebounce(value, 500);

  // Update URL with debounced value
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const initialValue = searchParams.get(paramName) || '';

    if (debouncedValue === initialValue) return;

    if (debouncedValue) {
      params.set(paramName, debouncedValue);
      params.set('page', '1');
    } else {
      params.delete(paramName);
      params.delete('page');
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  }, [debouncedValue, paramName, router, searchParams]);

  // CLEAR BUTTON HANDLER
  const clearSearch = () => {
    setValue('');
    const params = new URLSearchParams(searchParams.toString());
    params.delete(paramName);
    params.delete('page');

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  return (
    <div className="relative">
      <Search
        size={20}
        className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2"
      />

      {value && (
        <button
          type="button"
          onClick={clearSearch}
          className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 text-red-500 hover:cursor-pointer hover:bg-slate-800"
        >
          <X size={20} />
        </button>
      )}

      <Input
        placeholder={placeholder}
        className="w-sm pr-10 pl-10"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={isPending}
      />
    </div>
  );
};

export default SearchFilter;
