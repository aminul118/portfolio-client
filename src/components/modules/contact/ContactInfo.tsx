/* eslint-disable react/no-unescaped-entities */
import Logo from '@/components/common/Logo';
import { FaEnvelope, FaLocationArrow } from 'react-icons/fa';
import { FaPhone, FaWhatsapp } from 'react-icons/fa6';

const ContactInfo = () => {
  return (
    <div
      className="p-6 rounded-lg mx-auto text-primary/80"
      data-aos="fade-right"
    >
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <p>
        Thanks for stopping by! If you have any questions, ideas, or simply want
        to collaborate, feel free to reach out. Use the contact details below or
        fill out the quick form to send me a message directly. I'm excited to
        connect and create something amazing together!
      </p>
      <div className="space-y-2 mt-4">
        <p className="text-2xl font-bold">Contact</p>

        {/* Phone link */}
        <p className="flex items-center gap-2">
          <FaPhone />
          <a href="tel:+8801781082064" className="hover:underline">
            +880 17810 820 64
          </a>
        </p>

        {/* WhatsApp link */}
        <p className="flex items-center gap-2">
          <FaWhatsapp />
          <a
            href="https://wa.me/8801781082064"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            +880 17810 820 64
          </a>
        </p>

        {/* Email link */}
        <p className="flex items-center gap-2">
          <FaEnvelope />
          <a href="mailto:mr.aminul118@gmail.com" className="hover:underline">
            mr.aminul118@gmail.com
          </a>
        </p>

        {/* Location */}
        <p className="flex items-center gap-2">
          <FaLocationArrow /> Dhaka Bangladesh
        </p>
      </div>

      <div>
        <p className="text-2xl font-bold my-4">Social</p>
        <Logo />
      </div>
    </div>
  );
};

export default ContactInfo;
