import AboutImage from '@/components/modules/Public/About/AboutImage';
import Container from '@/components/ui/Container';
import { aboutMe, hobbies } from '@/constants/aboutMe';
import generateMetaTags from '@/seo/generateMetaTags';
import { Metadata } from 'next';

const AboutPage = () => {
  return (
    <>
      <Container className="mt-6">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div className="mt-6 ml-6">
            <AboutImage />
          </div>

          <div className="flex-1 text-justify lg:mt-6">
            {/* About me section */}
            {aboutMe.map((about, index: number) => {
              const Icon = about.icon;
              return (
                <div key={index} className="mb-8">
                  <h2 className="flex items-center gap-3 pb-4 text-2xl font-bold text-white/80 lg:text-4xl">
                    {Icon && <Icon />}
                    {about.title}
                  </h2>
                  {about.paragraphs.map((para, index: number) => (
                    <p key={index} className="mb-4">
                      {para}
                    </p>
                  ))}

                  {/* Tech Stack Section */}
                  {about.techStack ? (
                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                      {about.techStack.map((tech, i) => {
                        const TechIcon = tech.icon;
                        const colors = [
                          {
                            bg: 'bg-blue-500/10',
                            border: 'border-blue-500/20',
                            text: 'text-blue-400',
                            glow: 'group-hover:shadow-blue-500/10',
                          },
                          {
                            bg: 'bg-emerald-500/10',
                            border: 'border-emerald-500/20',
                            text: 'text-emerald-400',
                            glow: 'group-hover:shadow-emerald-500/10',
                          },
                          {
                            bg: 'bg-amber-500/10',
                            border: 'border-amber-500/20',
                            text: 'text-amber-400',
                            glow: 'group-hover:shadow-amber-500/10',
                          },
                          {
                            bg: 'bg-purple-500/10',
                            border: 'border-purple-500/20',
                            text: 'text-purple-400',
                            glow: 'group-hover:shadow-purple-500/10',
                          },
                        ];
                        const color = colors[i % colors.length];

                        return (
                          <div
                            key={i}
                            className={`group relative overflow-hidden rounded-2xl border ${color.border} bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-slate-900/60 ${color.glow} hover:-translate-y-1 hover:shadow-2xl`}
                          >
                            <div className="mb-5 flex items-center gap-4">
                              <div
                                className={`flex size-12 items-center justify-center rounded-xl ${color.bg} ${color.text} transition-transform duration-300 group-hover:scale-110`}
                              >
                                {TechIcon && <TechIcon className="text-2xl" />}
                              </div>
                              <h3 className="text-xl font-bold tracking-tight text-white/90">
                                {tech.title}
                              </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {tech.items.map((item, idx) => (
                                <span
                                  key={idx}
                                  className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>

                            {/* Subtle background glow on hover */}
                            <div
                              className={`absolute -top-8 -right-8 size-24 rounded-full ${color.bg} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-40`}
                            />
                          </div>
                        );
                      })}
                    </div>
                  ) : null}

                  {/* List Fallback */}
                  {!about.techStack && !about.timeline && about.list && (
                    <ul className="mt-3 list-outside list-disc space-y-1 pl-5">
                      {about.list.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {/* Hobbies Section */}
                  {about.title === 'My Hobbies and Interests' && (
                    <div className="mt-8 grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-md sm:grid-cols-3 md:grid-cols-5">
                      {hobbies.map((hobby, index: number) => {
                        const Icon = hobby.icon;
                        return (
                          <div
                            key={index}
                            className="group flex flex-col items-center gap-4 transition-all duration-300"
                          >
                            <div className="relative flex size-16 items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-3xl text-slate-300 shadow-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:text-blue-400 group-hover:shadow-blue-500/10">
                              <div className="absolute inset-0 rounded-2xl bg-blue-500/10 opacity-0 blur-xl transition-opacity group-hover:opacity-100"></div>
                              <Icon className="relative z-10" />
                            </div>
                            <span className="text-sm font-semibold tracking-wide text-slate-400 transition-colors group-hover:text-white">
                              {hobby.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </>
  );
};

export default AboutPage;

// SEO Metatag
export const metadata: Metadata = generateMetaTags({
  title: 'About Me | Md. Aminul Islam - Full Stack Developer',
  description:
    'Learn more about Md. Aminul Islam, a dedicated Full Stack Developer and SEO Specialist. Passionate about building scalable, user-centric web applications and solving complex problems.',
  keywords:
    'About Aminul Islam, Full Stack Developer Biography, Software Engineer Profile, MERN Stack Developer Info, Developer Background, Career Summary, Tech Enthusiast, Dhaka Bangladesh Developer',
  websitePath: '/about',
});
