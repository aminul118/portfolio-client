import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import generateMetaTags from '@/seo/generateMetaTags';
import { getProjects } from '@/services/project/projects';
import { SearchParams } from '@/types';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaLink } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';

const ProjectPage = async ({ searchParams }: SearchParams) => {
  const params = await searchParams;
  const { data, meta } = await getProjects(params);

  return (
    <>
      <Container>
        <SectionHeading
          heading="Projects"
          description="A showcase of my work blending creativity and functionality, featuring interactive designs, seamless development, and innovative solutions."
        />
        <div className="grid grid-cols-2 items-center justify-center gap-6 lg:grid-cols-3">
          {data?.map((project) => (
            <div key={project._id} className="h-full w-full">
              <div className="group rounded-lg bg-slate-900 shadow-md">
                <p className="py-2 text-center text-xl font-semibold">
                  {project.title}
                </p>

                <div className="h-[200px] w-full overflow-hidden 2xl:h-[350px]">
                  <Image
                    src={project.thumbnail}
                    width={600}
                    height={0}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    priority
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 p-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="btn-outline flex items-center justify-center gap-2 rounded-full border px-4 py-1"
                  >
                    Details <FiArrowUpRight />
                  </Link>

                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="btn-outline flex items-center justify-center gap-2 rounded-full border px-4 py-1"
                  >
                    Preview <FaLink />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default ProjectPage;

// >> SEO Start
export const metadata: Metadata = generateMetaTags({
  title: 'Projects | Aminul Islam',
  description:
    'Aminul Islam is a skilled Software Developer specializing in MERN stack, Next.js, TypeScript and scalable web applications. Currently working at TabEdge, delivering high-performance solutions.',
  keywords:
    'Software Developer, MERN Stack Developer, Next.js Developer, React Developer, TypeScript Developer, Full-Stack Developer, Web Development, API Development, Payment Solutions, E-commerce Development,SEO Specialist, Scalable Web Apps, DevOps, Software Engineer, Aminul118, Hyper118',
  websitePath: '/projects',
});
// >> SEO End
