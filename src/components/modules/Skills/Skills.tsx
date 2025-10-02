import SectionHeading from '@/components/ui/SectionHeading';
import skillsData from './SkillsData';

const Skills = () => {
  return (
    <div
      className="container mx-auto flex-col justify-center px-4 py-12 text-white/60 lg:py-20 2xl:flex"
      id="skills"
      data-aos="fade-up"
    >
      <SectionHeading
        heading="Skills"
        description="A showcase of my expertise and tools of the trade, reflecting my journey in mastering technology and design. These skills drive my creativity and innovation in every project."
      />

      <div className="mx-auto mb-12 grid max-w-2xl grid-cols-4 gap-8 px-6 text-center text-white/60 md:grid-cols-7 md:gap-14 lg:gap-16">
        {skillsData.map((skill, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Animated Gradient Square Ring */}
            <div
              className={`absolute h-12 w-12 [animation:spin_6s_linear_infinite] rounded-md bg-gradient-to-r p-[2px] lg:h-16 lg:w-16 ${skill.gradient}`}
            >
              <div className="h-full w-full rounded-md bg-black"></div>
            </div>

            {/* Icon */}
            <div className="relative z-10 mt-[6px] text-4xl lg:mt-[10px] lg:text-[44px]">
              {skill.icon}
            </div>

            {/* Skill Name */}
            <p className="mt-7 text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
