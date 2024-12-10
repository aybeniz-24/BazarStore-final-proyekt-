import { useRef, useState } from "react";
import "../../App.css";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";


function OnlineOrderExclusive() {

    const OnlineOrderExclusive = [
        { id: 1,  img: "https://bazarstore.az/cdn/shop/files/26de67a1a2b6c741850e6282debb607e_1000x1000.jpg?v=1729575786", name: "İslami Kəsim Təzə File Açıq kq", price: "9.19", discountedPrice: "7.49 ₼", quantity: "false"},
        { id: 2,  img: "https://bazarstore.az/cdn/shop/files/82ee7e3afe91f18ecbe42a80ad53b873_1000x1000.jpg?v=1730284552", name: "İslami Kəsim Təzə Toyuq Paket kq", price: "6.49 ₼", discountedPrice: "4.99 ₼", quantity: "false" },
        { id: 3,  img: "https://bazarstore.az/cdn/shop/products/30107836_e5afc63b-eaa8-45d7-9118-70579300257c_1000x1000.png?v=1693900588", name: "Mərcan Təzə Toyuq Paket kq", price: "6.70 ₼", discountedPrice: "5.65 ₼", quantity: "false" },
        { id: 4,  img: "https://bazarstore.az/cdn/shop/files/34c15e2d364e61c729622814a1a140ec_1000x1000.jpg?v=1732189771", name: "Indı Layt Hindi brend Bud kq", price: "14.95 ₼", discountedPrice: "11.09 ₼", quantity: "true" },
        { id: 5,  img: "https://bazarstore.az/cdn/shop/files/975061f3a0d160443a132e2849299d97_1000x1000.jpg?v=1730889995", name: "Indı Layt Hindi Bud kq", price: "10.65 ₼", discountedPrice: "7.89 ₼", quantity: "true" },
        { id: 6,  img: "https://bazarstore.az/cdn/shop/files/84fc6af7eb1bbe3f592dd8259f34929c_1000x1000.jpg?v=1730890187", name: "Indı Layt Hindi File kq", price: "19.55 ₼", discountedPrice: "14.49 ₼", quantity: "true" },
        { id: 7,  img: "https://bazarstore.az/cdn/shop/files/c198bc652b26404a488d854f59974e5b_1000x1000.jpg?v=1730890269", name: "Indı Layt Hindi Qanad Dirsəyi kq", price: "10.25 ₼", discountedPrice: "7.59 ₼", quantity: "true" },
        { id: 8,  img: "https://bazarstore.az/cdn/shop/products/30158607_1000x1000.jpg?v=1693635975", name: "Çariçino Servalat 100 q Premium H.V", price: "4.99 ₼", discountedPrice: "4.49 ₼", quantity: "true" },
        { id: 9,  img: "https://bazarstore.az/cdn/shop/files/b9fbdaf40aa60f89c6ce256dbcf27540_1000x1000.jpg?v=1698738620", name: "Cənnət Servalat kq", price: "17.80 ₼", discountedPrice: "13.99 ₼", quantity: "false" },
        { id: 10, img: "https://bazarstore.az/cdn/shop/products/30150654_d686a9a7-82f3-4736-a937-213f23bede7a_1000x1000.jpg?v=1693346815", name: "Çerkiz Servelat 400 q Stolicnie Klassik", price: "10.99 ₼", discountedPrice: "8.99 ₼", quantity: "true"},
        { id: 11, img: "https://bazarstore.az/cdn/shop/files/4efda6c524f1f6368c39c4b7abf87e20_1000x1000.jpg?v=1701850642", name: "Çerkiz Sosiska Appetit Qaze kq", price: "10.99 ₼", discountedPrice: "8.99 ₼", quantity: "false" },
        { id: 12, img: "https://bazarstore.az/cdn/shop/products/30049395_1000x1000.png?v=1693807606", name: "Hacı Turqay Kolbasa Qaymaqlı Bişmiş kq", price: "14.99 ₼", discountedPrice: "11.99 ₼", quantity: "false" },

      ];
    
      const [counts, setCounts] = useState(OnlineOrderExclusive.map(() => 1)); // Bütün miqdarlar üçün vəziyyət
    
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
              <h2 className="text-[24px] font-bold mb-[20px] py-[20px]">Onlayn Sifarişə Özəl✨</h2>
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
            {OnlineOrderExclusive.map((item, index) => (
              <SwiperSlide
                key={item.id}
                className="w-[230px] h-[550px] border-[#e8e8e8] border-[1px] my-[8px] p-[15px] rounded-[10px] group perspective-1000"
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
                </div>

                {item.quantity === "true" ? (
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
                    <div className=" flex justify-start">
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
        </div>
      );
}

export default OnlineOrderExclusive