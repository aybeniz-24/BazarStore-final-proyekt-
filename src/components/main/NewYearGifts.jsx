import { useState, useEffect, useRef } from "react";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { NewYear } from "../../services/api";
import Popup from "./Popup"; // Import the Popup component

function NewYearGifts() {
  const [NewYearGifts, setNewYearGifts] = useState([]);
  const [counts, setCounts] = useState([]); // State for quantities
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
const swiperRef = useRef(null);

  useEffect(() => {
    NewYear().then(data => {
      setNewYearGifts(data);
      setCounts(data.map(() => 1)); // Initial quantities set to 1 for all items
    });
  }, []);

  const updateCount = (index, newCount) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? newCount : count))
    );
  };

  const handleIconClick = (product) => {
    setSelectedProduct(product);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="mx-[30px] my-[10px]">
      <div className="relative flex sm:flex-col">
        <div>
          <h2 className="text-[24px] font-bold mb-[20px] py-[20px]">Yeni İl Hədiyyələri🎁</h2>
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
        {NewYearGifts.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className="w-[230px] h-[550px] border-[#e8e8e8] border-[1px] my-[8px] p-[15px] rounded-[10px] group perspective-1000"
          >
            <div className="w-[100%] group relative">
              <img className=" rounded-[5px] " src={item.img} alt={item.name} />
              <div className="absolute top-0 right-0 z-20 icon">
                <CiHeart className="bg-[#e8e8e8] hover:bg-[#b3b93d] hover:text-white rounded-full w-[30px] h-[30px] p-[5px] m-[3px] cursor-pointer" />
                <FaRegEye className="bg-[#e8e8e8] hover:bg-[#b3b93d] hover:text-white rounded-full w-[30px] h-[30px] p-[5px] m-[3px] cursor-pointer" 
                onClick={() => handleIconClick(item)} />
              </div>
              {item.discountedPrice && (
                <p className="bg-[#fed504] px-[10px] py-[5px] text-[12px] rounded-[5px] absolute top-0">Endirim</p>
              )}
            </div>
            <div className="h-[120px] my-[30px] text-left">
              <div className="h-[70px]">
                <p className="text-[15px] uppercase">{item.name}</p>
              </div>
              {item.discountedPrice ? (
                <div className="flex gap-3">
                  <p className="font-bold text-[14px] text-[#439e4a]">{item.discountedPrice}</p>
                  <p className="font-bold text-[14px] text-[#9b9b9b] line-through">{item.price}</p>
                </div>
              ) : (
                <p className="font-bold text-[14px]">{item.price}</p>
              )}
            </div>

            {item.quantity === true ? (
              <div className="block">
                <p className="text-[14px] text-left mb-[8px]">Miqdar</p>
                <div className="mb-[20px] flex justify-center items-center border-[1px] border-[#e8e8e8] w-[100px] h-[40px]">
                  <button onClick={() => updateCount(index, counts[index] > 1 ? counts[index] - 1 : 1)} className="cursor-pointer p-[13px]">
                    -
                  </button>
                  <p className="mx-[10px]">{counts[index]}</p>
                  <button onClick={() => updateCount(index, counts[index] + 1)} className="cursor-pointer p-[13px]">
                    +
                  </button>
                </div>
                <div className="flex justify-start">
                  <button className="flex justify-center items-center bg-[#e8e8e8] font-bold text-[14px] rounded-[6px] py-[8px] px-[30px] group-hover:text-white group-hover:bg-[#b3b93d]">
                    <SlBasket className="inline-block" /> <p className="inline-block ml-[10px]">Səbətə At</p>
                  </button>
                </div>
              </div>
            ) : (
              <div className="block">
                <div className="mb-[20px] flex justify-start">
                  <button className="bg-[#e8e8e8] mt-[90px] font-bold text-[14px] rounded-[6px] py-[8px] px-[20px] group-hover:text-white group-hover:bg-[#b3b93d]">
                    Seçim Et
                  </button>
                </div>
              </div>
            )}

            
          </SwiperSlide>
        ))}
      </Swiper>

      <Popup isVisible={isPopupVisible} onClose={closePopup} product={selectedProduct} />
   
    </div>
  );
}

export default NewYearGifts;
