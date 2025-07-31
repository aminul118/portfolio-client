import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedinIn, FaTelegram } from 'react-icons/fa';

type FlexAlignType = {
  flexAlign?: 'justify-center';
};

const Logo = ({ flexAlign }: FlexAlignType) => {
  return (
    <div className={`flex gap-3 text-xl ${flexAlign}`}>
      <Link
        href="https://github.com/aminul118"
        target="_blank"
        aria-label="My Github Link"
      >
        <FaGithub />
      </Link>
      <Link
        href="https://www.linkedin.com/in/aminul118"
        target="_blank"
        aria-label="My Linkedin link"
      >
        <FaLinkedinIn />
      </Link>

      <Link
        href="https://www.facebook.com/aminul118"
        target="_blank"
        aria-label="My facebook link"
      >
        <FaFacebook />
      </Link>
      <Link
        href="https://t.me/aminul118"
        target="_blank"
        aria-label="Contact with telegram"
      >
        <FaTelegram />
      </Link>
    </div>
  );
};

export default Logo;
