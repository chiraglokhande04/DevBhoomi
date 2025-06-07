import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

const images = [
  '/content/7.webp',
  '/content/6.webp',
  '/content/3.webp',
  '/content/4.webp',
  '/content/5.webp',
  '/content/1.webp',
  '/content/2.webp'
];

export default function LatestDesignsSlider() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Animation triggers once when element is in view
    });
  }, []);

  return (
    <div className="bg-black text-white py-10 pb-20">
      <div className="text-center mb-10">
        <p className="text-blue-400 uppercase tracking-wide">Our Work</p>
        <h2 className="text-3xl font-bold">Our Latest Designs</h2>
      </div>
      <div className="max-w-5xl mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={15}
          slidesPerView={4}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            360: { slidesPerView: 2 }, // On small screens (mobile)
            768: { slidesPerView: 2 }, // On medium screens (tablet)
            1024: { slidesPerView: 3 }, // On larger screens (desktop)
            1280: { slidesPerView: 4 }, // On very large screens (larger desktops)
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} data-aos="fade-up"> {/* Add AOS animation */}
              <img
                src={img}
                alt={`Design ${index + 1}`}
                className="rounded-lg shadow-lg h-[300px] md:h-[400px] border-1 border-blue-400"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
