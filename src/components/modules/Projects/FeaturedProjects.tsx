'use client';

import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { useGetAllProjectsQuery } from '@/redux/features/project/project.api';
import { IProject } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { FaLink } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const FeaturedProjectsSlider = () => {
  const params = { isFeatured: true };
  const { data, isLoading } = useGetAllProjectsQuery(params);

  const projects = data?.data || [];

  if (isLoading) return <p>Loading...</p>;
  if (!projects.length) return <p>No featured projects found.</p>;

  return (
    <Container className="text-center">
      <SectionHeading
        heading="Featured Projects"
        description="A showcase of my work blending creativity and functionality, featuring interactive designs, seamless development, and innovative solutions."
      />

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper py-6"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project: IProject) => {
          const { _id, title, liveLink, thumbnail, slug } = project;
          return (
            <SwiperSlide key={_id}>
              <div className="group rounded-lg bg-slate-900 shadow-md">
                <p className="py-2 text-center text-xl font-semibold">
                  {title}
                </p>

                <div className="h-[200px] w-full overflow-hidden 2xl:h-[350px]">
                  <Image
                    src={thumbnail}
                    width={600}
                    height={0}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    priority={true}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 p-4">
                  <Link
                    href={`/projects/${slug}`}
                    className="btn-outline flex items-center justify-center gap-2 rounded-full border px-4 py-1"
                  >
                    Details <FiArrowUpRight />
                  </Link>

                  <Link
                    href={liveLink}
                    target="_blank"
                    className="btn-outline flex items-center justify-center gap-2 rounded-full border px-4 py-1"
                  >
                    Preview <FaLink />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default FeaturedProjectsSlider;
