'use client';

import { IExperience } from '@/types'; // Adjust import if needed based on alias
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { useRef } from 'react';

interface Props {
  experience: IExperience;
  index: number;
}

const ExperienceCard = ({ experience, index }: Props) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative mb-8 flex w-full flex-col items-center justify-between md:mb-12 md:flex-row ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Spacer for desktop layout */}
      <div className="hidden w-5/12 md:block" />

      {/* Timeline Node */}
      <div className="absolute top-0 left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-slate-900 bg-linear-to-br from-blue-500 to-purple-600 shadow-lg shadow-blue-500/30 transition-transform duration-300 hover:scale-110 md:left-1/2 md:-ml-5 md:h-12 md:w-12">
        <Briefcase className="h-4 w-4 text-white md:h-5 md:w-5" />
      </div>

      {/* Content Card */}
      <div className="ml-12 w-[calc(100%-3rem)] md:ml-0 md:w-5/12">
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-blue-500/10 dark:bg-black/40">
          {/* Animated gradient blob background */}
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl transition-all duration-500 group-hover:bg-blue-500/30" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl transition-all duration-500 group-hover:bg-purple-500/30" />

          {/* Date Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400 backdrop-blur-sm">
            <Calendar className="h-3.5 w-3.5" />
            <span>{experience.timeline}</span>
          </div>

          <h3 className="mb-1 text-xl font-bold text-white transition-colors group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent md:text-2xl">
            {experience.position}
          </h3>

          <div className="mb-4 flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-gray-400" />
            <span className="font-medium text-gray-300">
              {experience.companyName}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-gray-400 md:text-base">
            {experience.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceTimeline = ({ data }: { data: IExperience[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={containerRef} className="relative mx-auto mt-16 max-w-6xl pb-12">
      {/* Vertical Line */}
      <div className="absolute top-0 left-9 h-full w-0.5 bg-white/10 md:left-1/2 md:-ml-px">
        <motion.div
          style={{ height }}
          className="absolute top-0 w-full bg-linear-to-b from-blue-500 via-purple-500 to-transparent"
        />
      </div>

      <div className="space-y-8 md:space-y-12">
        {data.map((experience, index) => (
          <ExperienceCard
            key={experience._id || index}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
