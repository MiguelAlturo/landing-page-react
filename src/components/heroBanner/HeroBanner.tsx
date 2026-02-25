import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const HeroBanner = () => {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={800}
        className="w-full"
      >
        {[1, 2, 3].map((item) => (
          <SwiperSlide key={item}>
            <div className="relative w-full h-[55vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
              
              <img
                src={`https://placehold.co/1920x900?text=Slide+${item}`}
                alt={`img_${item}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
                <div className="max-w-2xl text-white space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                    Título del Slide {item}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg opacity-90">
                    Texto descriptivo adaptable para móvil.
                  </p>
                  <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 transition px-6 py-3 rounded-lg shadow-lg text-black">
                    Ver más
                  </button>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;