import Link from 'next/link';
import { IoCloudDownloadOutline } from 'react-icons/io5';

const DownloadResume = () => {
  return (
    <Link
      href="/Aminul-Resume.pdf"
      className="flex items-center justify-center gap-2 border rounded-full px-4 py-1 w-52 btn-outline"
      aria-label="Download my resume"
    >
      Download Resume <IoCloudDownloadOutline />
    </Link>
  );
};

export default DownloadResume;
