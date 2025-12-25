'use client';

import { IProject } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaLink } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const FeaturedCard = ({ projects }: { projects: IProject[] }) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      navigation
      modules={[Autoplay, Navigation]}
      className="mySwiper py-6"
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {projects?.map((project) => (
        <SwiperSlide key={project._id}>
          <div className="group rounded-lg bg-slate-900 shadow-md">
            <p className="py-2 text-center text-xl font-semibold">
              {project.title}
            </p>

            <div className="h-[200px] w-full overflow-hidden 2xl:h-[350px]">
              <Image
                src={project.thumbnail}
                width={600}
                height={350}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>

            <div className="grid grid-cols-2 gap-2 p-4">
              <Link
                href={`/projects/${project.slug}`}
                className="flex items-center justify-center gap-2 rounded-full border px-4 py-1"
              >
                Details <FiArrowUpRight />
              </Link>

              <Link
                href={project.liveLink}
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-full border px-4 py-1"
              >
                Preview <FaLink />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FeaturedCard;
