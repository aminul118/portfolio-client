import { aboutMe, hobbies } from '@/constants/aboutMe';
import AboutImage from './AboutImage';

const AboutDetails = () => {
  return (
    <div className="container mx-auto mt-24 overflow-x-hidden px-3">
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
                          text: 'text-blue-500',
                          hoverBg: 'hover:bg-blue-500/10',
                          hoverBorder: 'hover:border-blue-500/30',
                        },
                        {
                          bg: 'bg-emerald-500/10',
                          border: 'border-emerald-500/20',
                          text: 'text-emerald-500',
                          hoverBg: 'hover:bg-emerald-500/10',
                          hoverBorder: 'hover:border-emerald-500/30',
                        },
                        {
                          bg: 'bg-amber-500/10',
                          border: 'border-amber-500/20',
                          text: 'text-amber-500',
                          hoverBg: 'hover:bg-amber-500/10',
                          hoverBorder: 'hover:border-amber-500/30',
                        },
                        {
                          bg: 'bg-purple-500/10',
                          border: 'border-purple-500/20',
                          text: 'text-purple-500',
                          hoverBg: 'hover:bg-purple-500/10',
                          hoverBorder: 'hover:border-purple-500/30',
                        },
                      ];
                      const color = colors[i % colors.length];

                      return (
                        <div
                          key={i}
                          className={`group rounded-xl border ${color.border} bg-white/5 p-6 backdrop-blur-sm transition-all ${color.hoverBorder} ${color.hoverBg}`}
                        >
                          <div className="mb-4 flex items-center gap-3">
                            <div
                              className={`rounded-lg ${color.bg} p-2 ${color.text}`}
                            >
                              {TechIcon && <TechIcon className="text-xl" />}
                            </div>
                            <h3 className="text-lg font-semibold text-white/90">
                              {tech.title}
                            </h3>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {tech.items.map((item, idx) => (
                              <span
                                key={idx}
                                className="rounded-md bg-white/5 px-3 py-1 text-sm text-gray-300 transition-colors hover:bg-white/10 hover:text-white"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
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
                  <div className="mt-6 flex flex-wrap justify-center gap-8 rounded-2xl border border-white/10 bg-white/5 p-8">
                    {hobbies.map((hobby, index: number) => {
                      const Icon = hobby.icon;
                      return (
                        <div
                          key={index}
                          className="group flex flex-col items-center gap-3"
                        >
                          <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-gray-800 to-black text-3xl text-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-400">
                            <div className="absolute inset-0 rounded-full bg-blue-500/20 opacity-0 blur transition-opacity group-hover:opacity-100"></div>
                            <Icon className="relative z-10" />
                          </div>
                          <span className="text-base font-medium text-gray-400 transition-colors group-hover:text-white">
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
    </div>
  );
};

export default AboutDetails;
