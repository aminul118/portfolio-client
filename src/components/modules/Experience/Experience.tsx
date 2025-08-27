import SectionHeading from '@/components/ui/SectionHeading';
import experiences from '@/constants/experiences';

const Experience = () => {
  return (
    <div
      className="py-16 container mx-auto px-2 "
      id="experience"
      data-aos="fade-up"
    >
      <SectionHeading
        heading="Experience"
        description="A showcase of my work blending creativity and functionality, featuring interactive designs, seamless development, and innovative solutions."
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 mt-10">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="bg-slate-950 shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
            <p className="text-md text-white/90">{exp.company}</p>
            <p className="text-sm text-white/90 mb-4">{exp.duration}</p>
            <p className="text-white/60">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
