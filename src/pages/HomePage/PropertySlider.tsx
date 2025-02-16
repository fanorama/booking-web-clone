import hotelService from "@services/hotelService";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

interface Property {
  id: number;
  name: string;
  image: string;
  desc: string;
  availables_count: number;
}

const PropertySlider = () => {
  const swiperRef = useRef<SwiperClass>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const [properties, setProperties] = useState<Property[]>([]);

  async function getPropertyTypes() {
    const response = await hotelService.getPropertyTypes();
    setProperties(response);
  }

  useEffect(() => {
    getPropertyTypes();
  }, []);
  return (
    <div className="relative overflow-x-visible">
      <Swiper
        spaceBetween={12}
        slidesPerView={4}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        allowTouchMove={false}
      >
        {properties.map((property) => (
          <SwiperSlide key={property.id}>
            <img
              src={property.image}
              className="object-cover w-full lg:h-56 rounded-lg mb-2"
              alt="hotel"
            />
            <h4 className="font-[600]">{property.name}</h4>
            <div className="text-md font-[300] text-gray-600">
              {property.availables_count} Properties
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden lg:flex -inset-x-5 justify-between items-center z-50 absolute top-24 transform">
        <button
          ref={prevBtnRef}
          className="cursor-pointer bg-white shadow-md rounded-full text-gray-600 p-2 flex justify-center items-center hover:bg-gray-100 transition-colors duration-200"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          ref={nextBtnRef}
          className="cursor-pointer bg-white shadow-md rounded-full text-gray-600 p-2 flex justify-center items-center hover:bg-gray-100 transition-colors duration-200"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default PropertySlider;
