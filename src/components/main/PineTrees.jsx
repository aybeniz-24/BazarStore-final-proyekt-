import { useRef, useState } from "react";
import "../../App.css";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

function PineTrees() {
  const PineTrees = [
    { id: 1, img: "src/assets/pine_trees/card1.webp", name: "Leva Şam Ağacı 180 sm", price: "49.99 ₼" },
    { id: 2, img: "src/assets/pine_trees/card2.webp", name: "Leva Şam Ağacı 150 sm", price: "24.99 ₼" },
    { id: 3, img: "src/assets/pine_trees/card3.webp", name: "Şam Ağacı Qarlı İyne Yarpaq 440 uc 240 sm", price: "6.99 ₼" },
    { id: 4, img: "src/assets/pine_trees/card4.webp", name: "Şam Ağacı 90 sm", price: "6.99 ₼" },
    { id: 5, img: "src/assets/pine_trees/card5.webp", name: "Şam Ağacı 90 sm A114-04", price: "6.99 ₼" },
  ];

  const [counts, setCounts] = useState(PineTrees.map(() => 1)); // Bütün miqdarlar üçün vəziyyət

  const swiperRef = useRef(null);

  const updateCount = (index, newCount) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? newCount : count))
    )
  }

  return (
    <div className="mx-[30px] my-[10px] ">
      <div className="relative flex sm:flex-col">
        <div>
          <h2 className="text-[24px] font-bold mb-[20px] py-[20px]">Şam Ağacları 🌲</h2>
        </div>

        <div className="absolute top-[40px] right-[70px] flex items-center gap-2 z-10">
          <button
            className="swiper-button-prev bg-gray-200 p-2 rounded-full transform rotate-180"
            onClick={() => swiperRef.current.swiper.slideNext()}
          ></button>
          <button
            className="swiper-button-next bg-gray-200 p-2 rounded-full transform rotate-180"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          ></button>
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        navigation={false}
        modules={[FreeMode, Navigation]}
        className="mySwiper flex flex-w"
        breakpoints={{
          1280: { slidesPerView: 4 },
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          250: { slidesPerView: 2 },
          0: { slidesPerView: 2 },
        }}
      >
        {PineTrees.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className="w-[230px] border-[#e8e8e8] border-[1px] my-[8px] p-[15px] rounded-[10px] group perspective-1000"
          >
            <div className="w-[100%] group relative">
              <img className=" rounded-[5px] " src={item.img} alt={item.name} />
              <div className="absolute top-0 right-0 z-20 icon">
                <CiHeart className="bg-[#e8e8e8] rounded-full w-[30px] h-[30px] p-[5px] m-[3px] cursor-pointer" />
                <FaRegEye className="bg-[#e8e8e8] rounded-full w-[30px] h-[30px] p-[5px] m-[3px] cursor-pointer" />
              </div>
            </div>
            <div className="h-[120px] my-[30px] text-left">
              <div className="h-[70px]">
                <p className="text-[15px] uppercase ">{item.name}</p>
              </div>
              <p className="font-bold text-[14px] ">{item.price}</p>
              <p className="text-[14px]">Miqdar</p>
            </div>
            <div className=" mb-[20px] flex justify-center items-center border-[1px] border-[#e8e8e8] w-[100px] h-[40px]">
              <button
                onClick={() =>
                  updateCount(index, counts[index] > 1 ? counts[index] - 1 : 1)
                }
                className="cursor-pointer p-[13px]"
              >
                -
              </button>
              <p className="mx-[10px]">{counts[index]}</p>
              <button
                onClick={() => updateCount(index, counts[index] + 1)}
                className="cursor-pointer p-[13px]"
              >
                +
              </button>
            </div>
            <div className=" flex justify-start">
              <button className="flex justify-center items-center bg-[#e8e8e8] font-bold text-[14px] rounded-[6px] py-[8px] px-[30px] group-hover:text-white group-hover:bg-[#b3b93d]">
                <SlBasket className="inline-block " /> <p className="inline-block ml-[10px]">Səbətə At </p>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PineTrees;
