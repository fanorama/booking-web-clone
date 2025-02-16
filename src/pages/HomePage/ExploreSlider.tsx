import apiClient from "@services/apiClient";
import { Destination } from "types/hotelTypes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const ExploreSlider = () => {
  const swiperRef = useRef<SwiperClass>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const [destinations, setDestinations] = useState<Destination[]>([]);

  async function getDestinations() {
    const response = await apiClient.get("/destinations");
    if (response.status == 200) {
      setDestinations(response.data);
    }
  }

  function handleOnSlideChange(swiper: SwiperClass) {
    console.log(swiper.activeIndex);
  }

  useEffect(() => {
    getDestinations();
  }, []);

  return (
    <div className="relative overflow-x-visible">
      <Swiper
        spaceBetween={12}
        slidesPerView={6}
        onSlideChange={handleOnSlideChange}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        allowTouchMove={false}
      >
        {destinations.map((destination) => (
          <SwiperSlide key={destination.id}>
            <img
              src={destination.image}
              className="object-cover w-full lg:h-36 rounded-lg mb-2"
              alt="hotel"
            />
            <h4 className="font-[600]">{destination.name}</h4>
            <div className="text-md font-[300] text-gray-600">
              {destination.properties_count} Properties
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden lg:flex -inset-x-5 justify-between items-center z-50 absolute top-14 transform">
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

export default ExploreSlider;
