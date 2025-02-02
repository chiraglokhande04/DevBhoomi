import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Harshit Tiwari",
    text: "As a property developer in Delhi, I rely on Devbhoomi Elevator Services for elevator installations in our residential projects. Their professionalism and commitment to quality are commendable. It's always a pleasure working with their dedicated team."
  },
  {
    name: "Sachin Singh",
    text: "We recently moved into a new apartment complex in Bangalore, where Devbhoomi Elevator Services had installed the elevators. The smooth and reliable operation of the elevators has been a great convenience for us. We're grateful to have such a dependable service provider."
  }
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Default to 2 slides on larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For screens larger than 768px, show 2 slides
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, // For screens between 768px and 480px, show 1 slide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, // For very small screens, show 1 slide
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-center text-3xl font-bold mb-10">Hear it from your customers</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex items-stretch space-x-5">
            <div className="w-full my-5 h-[250px] text-sm md:text-[17px] md:h-[250px] p-6 bg-white shadow-lg rounded-lg text-center mx-2 flex flex-col justify-between">
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <p className="text-blue-600 font-semibold">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
