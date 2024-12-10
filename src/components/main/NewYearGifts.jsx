import { useRef, useState } from "react";
import "../../App.css";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

function NewYearGifts() {
    const NewYearGifts = [
        { id: 1, img: "https://bazarstore.az/cdn/shop/files/445f91730903bc13ecfc4b5b5923959f_1000x1000.jpg?v=1733296246", name: "Yeni Il Hədiyyəsi Troleybus", price: "6.49 ₼" },
        { id: 2, img: "https://bazarstore.az/cdn/shop/files/b673de7db39fe16c5dddf7312d2843db_1000x1000.jpg?v=1733295890", name: "Yeni İl Hədiyyəsi Sandıq", price: "7.99 ₼", discountedPrice: "6.99 ₼" },
        { id: 3, img: "https://bazarstore.az/cdn/shop/files/014abb8214c89f110c3b4ea4b1b8f71e_1000x1000.jpg?v=1733400792", name: "Yeni İl Hədiyyəsi İlan Şəkilli", price: "2.99 ₼" },
        { id: 4, img: "https://bazarstore.az/cdn/shop/files/f240cd4ed1303d5f48369de9c32a90ad_1000x1000.jpg?v=1733297479", name: "Yeni İl Hədiyyəsi SEN", price: "3.99 ₼", discountedPrice: "3.49 ₼" },
        { id: 5, img: "https://bazarstore.az/cdn/shop/files/4bc807017c3dea23d39c0ca5ae6c07f3_1000x1000.jpg?v=1733296843", name: "Yeni İl Hədiyyəsi Qatar", price: "6.49 ₼" },
        { id: 6, img: "https://bazarstore.az/cdn/shop/products/30182125_9d7f2b2b-1706-487c-b87a-00e1d6eb0f0a_1000x1000.jpg?v=1693640490", name: "Yeni İl Hədiyyəsi 348 Q ŞaxtaBaba", price: "2.55 ₼" },
        { id: 7, img: "https://bazarstore.az/cdn/shop/products/30182124_1000x1000.jpg?v=1693640486", name: "Yeni İl Hədiyyəsi 330 Q Domik", price: "4.70 ₼" },
        { id: 8, img: "https://bazarstore.az/cdn/shop/files/170584dc4536774d1192550c1279e41c_1000x1000.jpg?v=1733297930", name: "Yeni İl Hədiyyəsi 330 Q Uşaq Evi", price: "2.99 ₼" },
        { id: 9, img: "https://bazarstore.az/cdn/shop/files/2b370e378eae1c5a9d11caf3a426e027_1000x1000.jpg?v=1733297482", name: "Yeni İl Hədiyyəsi Premium Qutu", price: "6.99 ₼" },
        { id: 10, img: "https://bazarstore.az/cdn/shop/files/69cf950b50546455ff421c64c91ad4aa_1000x1000.jpg?v=1733296968", name: "Yeni İl Hədiyyəsi Məktub", price: "1.99 ₼" },
        { id: 11, img: "https://bazarstore.az/cdn/shop/files/4081c8d1c84df899b42ac6f0b56a790b_1000x1000.jpg?v=1733299003", name: "Yeni İl Hədiyyəsi Kremlin", price: "5.99 ₼" },
        { id: 12, img: "https://bazarstore.az/cdn/shop/files/ad6d77172f325e87f23d6a4ae58835a4_1000x1000.jpg?v=1733295787", name: "Yeni İl Hədiyyəs Dj Klaus Böyük", price: "7.99 ₼" },
      ];
    
      const [counts, setCounts] = useState(NewYearGifts.map(() => 1)); // Bütün miqdarlar üçün vəziyyət
    
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
              <h2 className="text-[24px] font-bold mb-[20px] py-[20px]">Yeni İl Hədiyyələri 🎇</h2>
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
                className="w-[230px] border-[#e8e8e8] border-[1px] my-[8px] p-[15px] rounded-[10px] group perspective-1000"
              >
                <div className="w-[100%] group relative">
                  <img className=" rounded-[5px] " src={item.img} alt={item.name} />
                  <div className="absolute top-0 right-0 z-20 icon">
                    <CiHeart className="bg-[#e8e8e8]  hover:bg-[#b3b93d] hover:text-white rounded-full w-[30px] h-[30px] p-[5px] m-[3px] cursor-pointer" />
                    <FaRegEye className="bg-[#e8e8e8]  hover:bg-[#b3b93d] hover:text-white rounded-full w-[30px] h-[30px] p-[5px] m-[3px] cursor-pointer" />
                  </div>
                  {item.discountedPrice && (
                     <p className="bg-[#fed504] px-[10px] py-[5px] text-[12px] rounded-[5px] absolute top-0">Endirim</p>
                  )}
                </div>
                <div className="h-[120px] my-[30px] text-left">
                  <div className="h-[70px]">
                    <p className="text-[15px] uppercase ">{item.name}</p>
                  </div>
                  {item.discountedPrice ? (
                    <div className="flex gap-3">
                        <p className="font-bold text-[14px] text-[#439e4a]">{item.discountedPrice}</p>
                        <p className="font-bold text-[14px] text-[#9b9b9b] line-through ">{item.price}</p>
                    </div>
                  ) : 
                  <p className="font-bold text-[14px] ">{item.price}</p>
                }
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

export default NewYearGifts