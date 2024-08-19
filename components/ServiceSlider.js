import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxRulerSquare,
  RxLayers,
  RxThickArrowRight,
  RxCode,
  RxGear,
} from "react-icons/rx";

import { FreeMode, Pagination } from 'swiper';


// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Custom Websites',
    description: "Designing and developing custom websites that reflect your brand's unique identity.",
  },
  {
    icon: <RxPencil2 />,
    title: 'Web Apps',
    description: "Creating interactive and scalable web applications tailored to your specific needs.",
  },
  {
    icon: <RxDesktop />,
    title: 'Website Optimization',
    description: "Enhancing your website's performance for a faster and more efficient user experience.",
  },
  {
    icon: <RxRulerSquare />,
    title: 'UI/UX Design',
    description: "Designing intuitive and visually appealing interfaces that improve user experience.",
  },
  {
    icon: <RxGear />,
    title: 'Maintenance & Support',
    description: "Providing ongoing maintenance and support to ensure your website runs smoothly.",
  },
  {
    icon: <RxCode />,
    title: 'Custom Software',
    description: "Developing custom software that perfectly fits your business needs.",
  },
  {
    icon: <RxLayers />,
    title: 'API Development',
    description: "Building robust APIs to facilitate the integration and expansion of your digital services.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {
        serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6
              py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]
              transition-all duration-300'>
                <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal'>
                    {item.description}
                  </p>
                </div>
                <div className='text-3xl'>
                  <RxThickArrowRight className='group-hover:rotate-45
                  group-hover:text-accent transition-all duration-300' />
                </div>
              </div>
            </SwiperSlide>
          );
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
