import DownloadResume from '@/components/modules/Public/Home/DownloadResume';
import SocialLinks from '@/components/modules/Public/Home/SocialLinks';
import WriterEffect from '@/components/ui/writer-effect';
import images from '@/constants/images';
import Image from 'next/image';

const HeroBanner = () => {
  return (
    // Main Hero Section
    // min-h-[700px] ensures your website minimum height stays 700px
    <section className="relative min-h-[600px] overflow-hidden bg-slate-900 pt-12 2xl:pt-32">
      {/* ================= Background Glow Effects ================= */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-[520px] w-[520px] rounded-full bg-purple-500/10 blur-3xl" />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ================= Container ================= */}
      <div className="relative container mx-auto flex min-h-[600px] flex-col justify-between gap-12 px-2 lg:flex-row">
        {/* ================= Left Content ================= */}
        <div className="max-w-2xl">
          <div className="flex h-full flex-col justify-center gap-6 pb-12 text-white/60">
            {/* Intro Text */}
            <div>
              <p className="mt-12 text-sm font-medium tracking-widest text-slate-400 uppercase lg:text-base">
                Hello, I&apos;m
              </p>

              {/* Main Name */}
              <h1 className="mt-2 text-4xl leading-tight font-bold text-white lg:text-5xl xl:text-6xl">
                Md. Aminul Islam
              </h1>

              {/* Animated Title */}
              <div className="mt-3 flex items-center gap-3">
                <div className="h-px w-8 bg-gradient-to-r from-blue-500 to-transparent" />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-xl font-semibold text-transparent lg:text-2xl">
                  <WriterEffect
                    words={[
                      'Full Stack Developer',
                      'MERN Stack Expert',
                      'Next.js Developer',
                      'SEO Specialist',
                    ]}
                  />
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-lg text-base leading-relaxed text-slate-400 lg:text-lg">
              Passionate software developer crafting modern, scalable web
              applications with{' '}
              <span className="text-slate-300">TypeScript</span>,{' '}
              <span className="text-slate-300">React</span>,{' '}
              <span className="text-slate-300">Next.js</span>, and the{' '}
              <span className="text-slate-300">MERN stack</span>. Turning ideas
              into elegant digital experiences.
            </p>

            {/* Buttons */}
            <DownloadResume />
            <div className="mt-6">
              <p className="mb-3 flex items-center gap-2 text-xs font-medium tracking-wider text-slate-500 uppercase">
                <span className="inline-block h-px w-5 bg-gradient-to-r from-blue-500 to-transparent" />
                Find me on
              </p>
              <SocialLinks />
            </div>
          </div>
        </div>

        {/* ================= Right Image ================= */}
        <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:w-auto lg:max-w-none">
          {/* 
            This div RESERVES space.
            It keeps layout stable while image is absolutely positioned.
            We increased size on large screens.
          */}
          <div className="h-[260px] w-full sm:h-[300px] sm:w-[420px] lg:h-[360px] lg:w-[500px] xl:h-[420px] xl:w-[600px]" />

          {/* Glow Behind Image (scaled for large screens) */}
          <div className="pointer-events-none absolute right-10 bottom-10 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl lg:h-[420px] lg:w-[420px]" />

          {/* 
            Image is absolutely positioned.
            bottom-0 ensures it always touches the bottom border line.
          */}
          <Image
            src={images.banner.hero}
            width={700}
            height={420}
            alt="aminul islam web developer image"
            priority
            className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain drop-shadow-2xl lg:right-0 lg:left-auto lg:translate-x-0"
          />
        </div>
      </div>

      {/* Bottom border gradient line */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
    </section>
  );
};

export default HeroBanner;
