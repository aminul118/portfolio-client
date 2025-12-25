import { getLinks } from '@/services/social-links/links';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa';

type FlexAlignType = {
  flexAlign?: 'justify-center';
};

const SocialLinks = async ({ flexAlign }: FlexAlignType) => {
  const { data } = await getLinks();

  return (
    <div className={`flex gap-3 text-xl ${flexAlign}`}>
      {data?.github && (
        <Link href={data.github} target="_blank" aria-label="My Github Link">
          <FaGithub />
        </Link>
      )}

      {data?.linkedIn && (
        <Link
          href={data.linkedIn}
          target="_blank"
          aria-label="My Linkedin link"
        >
          <FaLinkedinIn />
        </Link>
      )}

      {data?.facebook && (
        <Link
          href={data.facebook}
          target="_blank"
          aria-label="My facebook link"
        >
          <FaFacebook />
        </Link>
      )}

      {data?.telegram && (
        <Link
          href={data.telegram}
          target="_blank"
          aria-label="Contact with telegram"
        >
          <FaTelegram />
        </Link>
      )}
    </div>
  );
};

export default SocialLinks;
