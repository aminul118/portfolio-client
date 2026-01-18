import SectionHeading from '@/components/ui/SectionHeading';
import { getExperience } from '@/services/experience/experience';

const Experience = async () => {
  const { data } = await getExperience();

  return (
    <section className="container mx-auto px-2 py-16" id="experience">
      <SectionHeading
        heading="Experience"
        description="A showcase of my work blending creativity and functionality, featuring interactive designs, seamless development, and innovative solutions."
      />

      <div className="relative mx-auto mt-16 max-w-5xl">
        {/* center line */}
        <div className="absolute top-0 left-1/2 hidden h-full w-[2px] -translate-x-1/2 bg-white/10 md:block" />

        <div className="space-y-12">
          {data?.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <div
                key={exp._id}
                className={`relative flex w-full flex-col md:flex-row ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* timeline dot */}
                <span className="absolute top-6 left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-slate-950 md:block" />

                <div
                  className={`w-full rounded-lg bg-slate-950 p-6 shadow-lg md:w-[45%] ${
                    isLeft ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <h3 className="text-lg font-semibold text-white">
                    {exp.position}
                  </h3>

                  <p className="text-sm text-white/80">{exp.companyName}</p>

                  <p className="text-xs text-white/60">{exp.timeline}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
