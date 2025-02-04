import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

const clients = [
  { img: "https://devbhoomielevator.com/wp-content/uploads/2024/03/5.png", alt: "Kundanwala Jewels" },
  { img: "https://devbhoomielevator.com/wp-content/uploads/2024/03/images-2.png", alt: "Punjab Chemicals" },
  { img: "https://devbhoomielevator.com/wp-content/uploads/2024/03/image-2.png", alt: "Emergency 112" },
  { img: "https://devbhoomielevator.com/wp-content/uploads/2024/03/11.png", alt: "Police Department" },
  { img: "https://devbhoomielevator.com/wp-content/uploads/2024/03/10.png", alt: "THDC India Limited" },
  { img: "https://devbhoomielevator.com/wp-content/uploads/2024/03/8.png", alt: "Regulatory Board" },
  { img: "https://devbhoomielevator.com/wp-content/uploads/2024/03/4.png", alt: "Vision India Group" },
  { img: "https://devbhoomielevator.com/wp-content/uploads/2024/03/3.png", alt: "Air Force Naval Housing" },
];

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full py-12 bg-white flex flex-col items-center">
      {/* Title */}
      <h2
        className="text-blue-500 text-lg font-semibold tracking-wider"
        data-aos="fade-down"
      >
        OUR CLIENTS
      </h2>
      <h3
        className="text-gray-800 text-3xl font-bold mt-2 mb-6 text-center"
        data-aos="fade-up"
      >
        We have worked with many of the best businesses!
      </h3>

      {/* Clients Logo Slider */}
      <div className="w-full max-w-6xl px-4" data-aos="zoom-in">
        <Swiper
          slidesPerView={7}
          spaceBetween={2}
          freeMode={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[FreeMode, Autoplay]}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 2 },
            480: { slidesPerView: 2, spaceBetween: 3 },
            640: { slidesPerView: 3, spaceBetween: 2 },
            768: { slidesPerView: 8, spaceBetween: 3 },
            1024: { slidesPerView: 8, spaceBetween: 1 },
            1280: { slidesPerView: 8, spaceBetween: 3 },
          }}
          className="w-full"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                className="w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center rounded-xl border-2 border-blue-400  shadow-lg"
                data-aos="flip-left"
                data-aos-delay={index * 100}
              >
                <img
                  src={client.img}
                  alt={client.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Clients;
