import SectionHeading from '@/components/ui/SectionHeading';
import experiences from '@/constants/experiences';

const Experience = () => {
  return (
    <div
      className="container mx-auto px-2 py-16"
      id="experience"
      data-aos="fade-up"
    >
      <SectionHeading
        heading="Experience"
        description="A showcase of my work blending creativity and functionality, featuring interactive designs, seamless development, and innovative solutions."
      />

      <div className="mx-auto mt-10 grid max-w-6xl gap-12 md:grid-cols-2">
        {experiences.map((exp, i) => (
          <div
            key={i}
            className="rounded-lg bg-slate-950 p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            data-aos="fade-up"
          >
            <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
            <p className="text-md text-white/90">{exp.company}</p>
            <p className="mb-4 text-sm text-white/90">{exp.duration}</p>
            <p className="text-white/60">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
