import Link from 'next/link';
import { IoCloudDownloadOutline } from 'react-icons/io5';

const DownloadResume = () => {
  return (
    <div>
      <Link
        href="https://drive.google.com/file/d/19R1yOwSkOh4U3dEWRYJHgQt4_zTjCXjM/view?usp=sharing"
        target="_blank"
        className="btn-outline flex w-52 items-center justify-center gap-2 rounded-full border px-4 py-1"
        aria-label="Download my resume"
      >
        Download Resume <IoCloudDownloadOutline />
      </Link>
    </div>
  );
};

export default DownloadResume;
