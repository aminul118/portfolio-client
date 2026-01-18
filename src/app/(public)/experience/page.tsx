import SectionHeading from '@/components/ui/SectionHeading';
import generateMetaTags from '@/seo/generateMetaTags';
import { getExperience } from '@/services/experience/experience';
import { Metadata } from 'next';

const ExperiencePage = async () => {
  const { data } = await getExperience();
  return (
    <>
      <section className="container mx-auto px-2 py-16" id="experience">
        <SectionHeading
          heading="Experience"
          description="A showcase of my work blending creativity and functionality, featuring interactive designs, seamless development, and innovative solutions."
        />

        <div className="mx-auto mt-10 grid max-w-6xl gap-12 md:grid-cols-2">
          {data?.map((exp, i) => (
            <div
              key={i}
              className="rounded-lg bg-slate-950 p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-white">
                {exp.position}
              </h3>
              <p className="text-md text-white/90">{exp.companyName}</p>
              <p className="mb-4 text-sm text-white/90">{exp.timeline}</p>
              <p className="text-white/60">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ExperiencePage;

//  SEO
export const metadata: Metadata = generateMetaTags({
  title: 'Experience | Aminul Islam',
  description:
    'Aminul Islam is a skilled Software Developer specializing in MERN stack, Next.js, TypeScript and scalable web applications. Currently working at TabEdge, delivering high-performance solutions.',
  keywords:
    'Software Developer, MERN Stack Developer, Next.js Developer, React Developer, TypeScript Developer, Full-Stack Developer, Web Development, API Development, Payment Solutions, E-commerce Development,SEO Specialist, Scalable Web Apps, DevOps, Software Engineer, Aminul118, Hyper118',
  websitePath: '/projects',
});
