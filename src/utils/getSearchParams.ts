import { useSearchParams } from 'next/navigation';

const getSearchParams = <T extends string>(
  ...keys: T[]
): { [K in T]: string | null } => {
  const searchParams = useSearchParams();

  const result = {} as { [K in T]: string | null };

  keys.forEach((key) => {
    result[key] = searchParams.get(key);
  });

  return result;
};

export default getSearchParams;

/**
 * -----------------------------------------------------------
 *                         Use Process
 * -----------------------------------------------------------
 *   const { page, limit } = getSearchParams("page", "limit");
 */
