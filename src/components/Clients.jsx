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
      <div className="w-full max-w-6xl">
        <Swiper
          slidesPerView={7}
          spaceBetween={10}
          freeMode={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[FreeMode, Autoplay]}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="w-36 h-36 flex items-center justify-center rounded-xl border-2 border-blue-400 p-2 shadow-lg">
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
