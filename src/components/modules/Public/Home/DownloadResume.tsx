import { getLinks } from '@/services/social-links/links';
import Link from 'next/link';
import { IoCloudDownloadOutline } from 'react-icons/io5';

const DownloadResume = async () => {
  const { data } = await getLinks();

  return (
    <div>
      {data?.resume && (
        <Link
          href={data?.resume}
          target="_blank"
          className="btn-outline flex w-52 items-center justify-center gap-2 rounded-full border px-4 py-1"
          aria-label="Download my resume"
        >
          Download Resume <IoCloudDownloadOutline />
        </Link>
      )}
    </div>
  );
};

export default DownloadResume;
