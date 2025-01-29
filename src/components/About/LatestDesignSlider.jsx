import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination, Autoplay } from 'swiper/modules';

const images = [
  'https://devbhoomielevator.com/wp-content/uploads/2024/03/7.webp',
  'https://devbhoomielevator.com/wp-content/uploads/2024/03/6.webp',
  'https://devbhoomielevator.com/wp-content/uploads/2024/03/3.webp',
  'https://devbhoomielevator.com/wp-content/uploads/2024/03/4.webp',
  'https://devbhoomielevator.com/wp-content/uploads/2024/03/5.webp',
  'https://devbhoomielevator.com/wp-content/uploads/2024/03/1.webp',
  'https://devbhoomielevator.com/wp-content/uploads/2024/03/2.webp'
];

export default function LatestDesignsSlider() {
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
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 4 }
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Design ${index + 1}`} className="rounded-lg shadow-lg h-[400px] border border-1 border-blue-400" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
