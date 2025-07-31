/* eslint-disable react/no-unescaped-entities */
import { FaEnvelope, FaLocationArrow } from 'react-icons/fa';
import { FaPhone, FaWhatsapp } from 'react-icons/fa6';
import Logo from '../../common/Logo';

const ContactInfo = () => {
  return (
    <div className=" p-6 rounded-lg  mx-auto">
      <h2 className="text-2xl font-bold mb-4 ">Contact Information</h2>
      <p>
        Thanks for stopping by! If you have any questions, ideas, or simply want
        to collaborate, feel free to reach out. Use the contact details below or
        fill out the quick form to send me a message directly. I'm excited to
        connect and create something amazing together!
      </p>
      <div className="space-y-2 mt-4">
        <p className="text-2xl font-bold">Contact</p>
        <p className="flex items-center gap-2">
          <FaPhone /> +880 17810 820 64
        </p>
        <p className="flex items-center gap-2">
          <FaWhatsapp /> +880 17810 820 64
        </p>

        <p className="flex items-center gap-2">
          <FaEnvelope /> mr.aminul118@gmail.com
        </p>
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
