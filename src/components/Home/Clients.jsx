import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";

const clients = [
  { img: "kundanwala.png", alt: "Kundanwala Jewels" },
  { img: "punjab-chemicals.png", alt: "Punjab Chemicals" },
  { img: "emergency-112.png", alt: "Emergency 112" },
  { img: "police-logo.png", alt: "Police Department" },
  { img: "thdc-india.png", alt: "THDC India Limited" },
  { img: "regulatory-board.png", alt: "Regulatory Board" },
  { img: "vision-india.png", alt: "Vision India Group" },
  { img: "air-force-naval.png", alt: "Air Force Naval Housing" },
];

const Clients = () => {
  return (
    <div className="w-full py-12 bg-white flex flex-col items-center">
      {/* Title */}
      <h2 className="text-blue-500 text-lg font-semibold tracking-wider">
        OUR CLIENTS
      </h2>
      <h3 className="text-gray-800 text-3xl font-bold mt-2 mb-6 text-center">
        We have worked with many of the best businesses!
      </h3>

      {/* Clients Logo Slider */}
      <div className="w-full max-w-6xl px-4">
        <Swiper
          slidesPerView={7}
          spaceBetween={20}
          freeMode={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[FreeMode, Autoplay]}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },  // Mobile view - One slide at a time
            480: { slidesPerView: 2, spaceBetween: 30 },  // Small tablets - Two slides at a time
            640: { slidesPerView: 3, spaceBetween: 20 },  // Larger tablets - Three slides at a time
            768: { slidesPerView: 3, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
            1280: { slidesPerView: 5, spaceBetween: 30 },
          }}
          className="w-full"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center rounded-xl border-2 border-blue-400 p-4 shadow-lg">
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
