import SectionHeading from '@/components/ui/SectionHeading';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <div className="container mx-auto overflow-x-hidden py-12 lg:py-20">
      <SectionHeading heading="Contact Me" />
      <div className="grid lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
