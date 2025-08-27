import othersSkillsData from './OtherSkillsData';
import SectionHeading from '@/components/ui/SectionHeading';

const OtherSkills = () => {
  return (
    <div
      className="2xl:flex flex-col justify-center container mx-auto px-4 py-12 lg:py-20 text-white/60"
      id="other-skills"
      data-aos="fade-up"
    >
      <SectionHeading
        heading="Additional Skills"
        description="A showcase of my expertise and tools of the trade, reflecting my journey in mastering technology and design. These skills drive my creativity and innovation in every project."
      />

      <div className="grid grid-cols-4 md:grid-cols-7 gap-8 md:gap-14 lg:gap-16 max-w-2xl mx-auto text-center text-white/60 mb-12 px-6">
        {othersSkillsData.map((skill, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Animated Gradient Square Ring */}
            <div
              className={`absolute w-12 h-12 lg:w-16 lg:h-16 rounded-md [animation:spin_6s_linear_infinite] p-[2px] bg-gradient-to-r ${skill.gradient}`}
            >
              <div className="w-full h-full bg-black rounded-md"></div>
            </div>

            {/* Icon */}
            <div className="text-4xl lg:text-[44px] relative z-10 mt-[6px] lg:mt-[10px]">
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

export default OtherSkills;
