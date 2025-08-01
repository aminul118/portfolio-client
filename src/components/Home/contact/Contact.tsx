import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import SectionHeading from '@/components/ui/SectionHeading';

const Contact = () => {
  return (
    <div className="container mx-auto py-12 lg:py-20" id="contact">
      <SectionHeading heading="Contact Me" />
      <div className="grid lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
