import ExperienceTimeline from '@/components/modules/Public/Experience/ExperienceTimeline';
import SectionHeading from '@/components/ui/SectionHeading';
import generateMetaTags from '@/Seo/generateMetaTags';
import { getExperience } from '@/services/Experience/experience';
import { Metadata } from 'next';

const ExperiencePage = async () => {
  const { data } = await getExperience();
  return (
    <>
      <section className="container mx-auto px-4 py-16" id="experience">
        {/* Background Gradients */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <SectionHeading
          heading="Professional Journey"
          description="A timeline of my growth, roles, and achievements in software engineering."
          className="text-white"
        />

        <div className="relative z-10 w-full px-4 sm:px-0">
          <ExperienceTimeline data={data || []} />
        </div>
      </section>
    </>
  );
};

export default ExperiencePage;

//  SEO Metatag
export const metadata: Metadata = generateMetaTags({
  title: 'Professional Experience | Md. Aminul Islam',
  description:
    'Explore the professional journey of Md. Aminul Islam. View career highlights, roles at TabEdge, and expertise in building scalable web applications with MERN stack and Next.js.',
  keywords:
    'Aminul Islam Experience, Software Engineer Career, Full Stack Developer History, TabEdge Developer, Web Development Portfolio, Professional Journey, Tech Career, Work Experience',
  websitePath: '/experience',
});
