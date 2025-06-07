import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

const clients = [
  {
      name: "Homi Baba",
      logo: "Homi_bhabha.jpeg",
      design: "Kone",
      description: "Located in Mullapur, Chandigarh with 13 units."
    },
    {
      name: "Punjab Police Officer Inst.",
      logo: "punjab_police.jpeg",
      design: "Kone",
      description: "Located in Sec-32, Chandigarh with 1 unit."
    },
    {
      name: "Nirvana Greens",
      logo: "nirwana_greens.jpeg",
      design: "Kone",
      description: "Located in Kharar with 7 units."
    },
    {
      name: "4 Season",
      logo: "four_seasons.jpeg",
      design: "Kone",
      description: "Located in Mohali, Plot-114 with 1 unit."
    },
    {
      name: "Dial 112",
      logo: "dial_112.jpeg",
      design: "Kone",
      description: "Located in Sec-3, Panchkula with 3 units."
    },
    {
      name: "Hotel Kannview",
      logo: "hotel_kenview.jpeg",
      design: "Shindler",
      description: "Located in Mohali with 1 unit."
    },
    {
      name: "Hotel Sky View",
      logo: "skyview_hotel.jpeg",
      design: "INVT",
      description: "Located in Zirakpur with 1 unit."
    },
    {
      name: "Hotel The Spades",
      logo: "The_spade.jpeg",
      design: "Jonson",
      description: "Located in Zirakpur with 1 unit."
    },
    {
      name: "KK Garments",
      logo: "kk_apparel.jpeg",
      design: "Monarch",
      description: "Located in Chandigarh with 1 unit."
    }
  
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
            0: { slidesPerView: 3, spaceBetween: 10 },
            360: { slidesPerView: 3, spaceBetween: 10 },
            480: { slidesPerView: 3, spaceBetween: 10 },
            640: { slidesPerView: 4, spaceBetween: 10 },
            768: { slidesPerView: 8, spaceBetween: 3 },
            1024: { slidesPerView: 8, spaceBetween: 1 },
            1280: { slidesPerView: 8, spaceBetween: 3 },
          }}
          className="w-full"
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                className="w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center rounded-xl border-2 border-blue-400  shadow-lg"
                data-aos="flip-left"
                data-aos-delay={index * 100}
              >
                <img
                  src={`/logo/${client.logo}`}
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