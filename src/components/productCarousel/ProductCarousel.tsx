import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useProducts } from "../../hooks/useProducts";
import "swiper/css";
import "swiper/css/navigation";

interface Props {
  start?: number;
  limit?: number;
  title?: string;
  redirectUrl: string;
}

const ProductCarousel = ({
  start = 0,
  limit = 12,
  title = "Productos Destacados",
  redirectUrl = "#",
}: Props) => {
  const { products, loading, error } = useProducts({ start, limit });

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-gray-800 text-left">{title}</h2>
        <a
          href={redirectUrl}
          className="inline-flex text-white items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-5 py-2.5 rounded-lg shadow-md transition-all duration-300"
        >
          Ver más
        </a>
      </div>

      {error && <p className="text-center text-red-500">{error}</p>}

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"> 
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow-md space-y-4 animate-pulse"
            >
              <div className="w-full h-40 bg-gray-200 rounded-md" />
              <div className="h-4 bg-gray-200 rounded w-3/4" />
              <div className="h-4 bg-gray-200 rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          style={
            {
              "--swiper-navigation-color": "var(--color-yellow-400)",
              "--swiper-navigation-size": "28px",
            } as React.CSSProperties
          }
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {products.length > 0 &&
            products.map((prod) => (
              <SwiperSlide key={prod.id}>
                <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                  <div className="relative w-full h-44 md:h-52 overflow-hidden">
                    <img
                      src={prod.images}
                      alt={prod.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <span className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                      Nuevo
                    </span>
                  </div>
                  <div className="p-5 flex flex-col gap-3">
                    <h3 className="text-gray-800 font-medium text-sm md:text-left line-clamp-2 min-h-[40px]">
                      {prod.name}
                    </h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-lg md:text-xl font-bold text-gray-900">
                        ${prod?.price?.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
    </section>
  );
};
export default ProductCarousel;
