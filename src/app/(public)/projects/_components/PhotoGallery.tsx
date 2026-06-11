'use client';

import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Counter from 'yet-another-react-lightbox/plugins/counter';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import 'yet-another-react-lightbox/plugins/counter.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

interface PhotoGalleryProps {
  photos: string[];
  title: string;
}

const PhotoGallery = ({ photos, title }: PhotoGalleryProps) => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const slides = photos.map((photo) => ({
    src: photo,
    alt: title,
  }));

  return (
    <>
      {/* Gallery Grid */}
      <div className="mt-8">
        <h2 className="mb-4 text-lg font-semibold sm:text-xl">
          Project Gallery
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:gap-4 lg:grid-cols-3">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="group relative cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setLightboxIndex(idx)}
            >
              <Image
                src={photo}
                alt={`${title} - screenshot ${idx + 1}`}
                width={600}
                height={400}
                className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-48"
              />
              {/* Hover overlay */}
              <div className="backdrop-blur-0 absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:bg-black/40 group-hover:backdrop-blur-[2px]">
                <span className="scale-0 rounded-full bg-white/20 px-4 py-2 text-xs font-medium text-white transition-transform duration-300 group-hover:scale-100 sm:text-sm">
                  View Full Image
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Professional Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        plugins={[Zoom, Thumbnails, Counter, Slideshow]}
        zoom={{
          maxZoomPixelRatio: 3,
          scrollToZoom: true,
        }}
        thumbnails={{
          position: 'bottom',
          width: 100,
          height: 60,
          gap: 8,
          borderRadius: 8,
        }}
        counter={{
          container: { style: { top: 0, bottom: 'unset' } },
        }}
        slideshow={{
          autoplay: false,
          delay: 3000,
        }}
        animation={{
          fade: 300,
          swipe: 400,
        }}
        carousel={{
          finite: false,
          padding: '16px',
        }}
        styles={{
          container: { backgroundColor: 'rgba(0, 0, 0, 0.92)' },
        }}
      />
    </>
  );
};

export default PhotoGallery;
