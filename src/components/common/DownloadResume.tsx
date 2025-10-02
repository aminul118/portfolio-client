import Link from 'next/link';
import { IoCloudDownloadOutline } from 'react-icons/io5';

const DownloadResume = () => {
  return (
    <Link
      href="/Aminul-Resume.pdf"
      className="btn-outline flex w-52 items-center justify-center gap-2 rounded-full border px-4 py-1"
      aria-label="Download my resume"
    >
      Download Resume <IoCloudDownloadOutline />
    </Link>
  );
};

export default DownloadResume;
