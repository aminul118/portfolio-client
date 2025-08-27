import Image from 'next/image';
import images from '@/constants/images';
import SectionHeading from '@/components/ui/SectionHeading';

const Education = () => {
  return (
    <div className="container mx-auto px-1" data-aos="fade-up">
      <SectionHeading heading="Education Journey" />
      <Image
        src={images.daffodil}
        width={1900}
        height={400}
        alt="Daffodil International University"
        className="mx-auto container lg:h-[600px] object-cover rounded-md"
        priority={true}
      />
      <div className="py-6 mb-20 text-white/60 px-2">
        <h2 className="text-3xl font-medium">
          B.sc. in computer science & Engineering
        </h2>
        <h2>Daffodil International University</h2>
        <p>2020 - 2023</p>
        <br />
        <hr />
        <p className="mt-2 text-justify">
          During my B.Sc. in Computer Science & Engineering at Daffodil
          International University (2020 - 2023), I built a solid foundation in
          programming, web development, and database management. Throughout my
          academic journey, I actively participated in the Computer Programming
          Club, where I engaged in coding competitions, and collaborative
          projects that enhanced my problem-solving abilities and technical
          expertise. Beyond coursework, I took on hands-on projects, exploring
          modern web technologies, some algorithms, and software development
          practices. My passion for learning led me to continuously improve my
          skills in full-stack development, API integration, and system design.
          These experiences have prepared me to tackle real-world challenges and
          contribute effectively to the tech industry.
        </p>
      </div>
    </div>
  );
};

export default Education;
