'use client';

import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command';
import { useGetAllTeamMembersQuery } from '@/redux/features/team/team.api';
import { Search } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import ButtonSpinner from '../loader/ButtonSpinner';

export default function SearchTeamMember() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const router = useRouter();

  // 🔹 Demo static data (first load)
  const staticMembers = useMemo(
    () => [
      {
        _id: '1',
        name: 'Professor Dr. Fatema Ashraf',
        slug: '?search=fatema',
      },
      {
        _id: '2',
        name: 'Prof. Dr. Sharmeen Yasmeen',
        slug: '?search=Prof. Dr. Sharmeen Yasmeen',
      },
      {
        _id: '3',
        name: 'Dr. Moomtahina Fatima',
        slug: '?search=moomtahina',
      },
      {
        _id: '4',
        name: 'Furkan Hossain',
        slug: '?search=furkan',
      },
    ],
    [],
  );

  // 🔹 Fetch from API only if user types
  const { data, isLoading, isFetching } = useGetAllTeamMembersQuery(
    { search, limit: 5 },
    { skip: !open || search.length === 0 }, // 👈 only call API if modal is open AND user typed
  );

  // Decide which data to show: static OR API
  const members = useMemo(() => {
    const apiMembers = data?.data ?? [];
    if (search.length === 0) {
      return staticMembers;
    }
    return apiMembers;
  }, [search, data, staticMembers]);

  return (
    <div className="w-full min-w-3xs">
      {/* Fake Input Trigger */}
      <Button
        variant="outline"
        className="text-muted-foreground w-full justify-start"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        <span>Search team...</span>
      </Button>

      {/* Search Dialog */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search team..."
          value={search}
          onValueChange={setSearch}
        />
        <CommandList>
          {(isLoading || isFetching) && search.length > 0 && (
            <ButtonSpinner className="py-2" />
          )}

          <CommandEmpty>No team member found.</CommandEmpty>

          <CommandGroup heading="Team Members">
            {members.map((member) => (
              <CommandItem
                key={member.slug}
                onSelect={() => {
                  setOpen(false);
                  router.push(`/team/${member.slug}`); // 👈 e.g. /team/fatema
                }}
              >
                {member.name}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup>
            {members.length > 0 && (
              <CommandItem asChild>
                <Link href="/team">Show All</Link>
              </CommandItem>
            )}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
