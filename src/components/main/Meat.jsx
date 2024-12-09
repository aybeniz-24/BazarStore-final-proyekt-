import { useRef } from "react"
import '../../App.css'
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiHeart } from "react-icons/ci"
import { FaRegEye } from "react-icons/fa"

function Meat() {
  
  const ProductMeat = [
    { id: 1, img: "src/assets/meat/meat_card1.webp", hoverImg: "src/assets/meat/meat_card1-opacity.jpg", name: "Bol Ət Dana qiymə kq", price: "14.48 ₼" },
    { id: 2, img: "src/assets/meat/meat_card2.webp", hoverImg: "src/assets/meat/meat_card2-opacity.jpg", name: "Bol Ət Dana Quşbaşı kq", price: "18.48 ₼" },
    { id: 3, img: "src/assets/meat/meat_card3.webp", hoverImg: "src/assets/meat/meat_card3_opacity.webp", name: "Bol Ət Dana Tranc kq", price: "18.98 ₼" },
    { id: 4, img: "src/assets/meat/meat_card4.webp", hoverImg: "src/assets/meat/meat_card4-opacity.jpg", name: "Bol Ət Dana Əti Qol Sümüksüz kq", price: "18.48 ₼" },
    { id: 5, img: "src/assets/meat/meat_card5.jpg", hoverImg: "src/assets/meat/meat_card5-opacity.jpg", name: "Bol Ət Dana Əti Canəti Bonfilə kq", price: "32.98 ₼" },
    { id: 6, img: "src/assets/meat/meat_card6.webp", hoverImg: "src/assets/meat/meat_card6-opacity.jpg", name: "Bol Ət Dana Əti Sümüklü kq", price: "13.98 ₼" },
    { id: 7, img: "src/assets/meat/meat_card7.jpg", hoverImg: "src/assets/meat/meat_card7.jpg" , name: "Bol Ət Dana Sote kq", price: "18.98 ₼" },
    { id: 8, img: "src/assets/meat/meat_card8.webp", hoverImg: "src/assets/meat/meat_card8.webp" , name: "Bol Ət Dana Rosto kq", price: "18.98 ₼" },
    { id: 9, img: "src/assets/meat/meat_card9.jpg", hoverImg: "src/assets/meat/meat_card9.jpg" , name: "Bol Ət Dana Əti Antrikot Sümüksüz kq", price: "26.98 ₼" },
    { id: 10, img: "src/assets/meat/meat_card10.jpg", hoverImg: "src/assets/meat/meat_card10.jpg" , name: "Bol Ət Dana Nuar kq", price: "18.98 ₼" },
    { id: 11, img: "src/assets/meat/meat_card11.jpg", hoverImg: "src/assets/meat/meat_card11.jpg" , name: "Bol Ət Dana Əti Bel (Biftek) kq", price: "22.98 ₼" },
    { id: 12, img: "src/assets/meat/meat_card12.jpg", hoverImg: "src/assets/meat/meat_card12.jpg" , name: "Bol Ət Gardan kq", price: "18.48 ₼" },
  ]


  const swiperRef = useRef(null)


  return (
    <div className="mx-[30px] my-[10px] ">
      <div className="relative flex sm:flex-col">
      
      <div>
        <h2 className="text-[24px] font-bold mb-[20px] py-[20px]">Bol Ət, ağzınıza layiq ləzzət!</h2>
      </div>

      <div className="absolute top-[40px] right-[70px] flex items-center gap-2 z-10">
        <button
          className="swiper-button-prev bg-gray-200 p-2 rounded-full transform rotate-180" /* yönü tersine çevirir */
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
        </button>
        <button
          className="swiper-button-next bg-gray-200 p-2 rounded-full transform rotate-180" /* yönü tersine çevirir */
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
        </button>
      </div>
      </div>




      <Swiper
        ref={swiperRef}
        slidesPerView={4} // Varsayılan olaraq 3
        spaceBetween={20}
        freeMode={true}
        navigation={false} // Default navigation düymələri deaktiv edilir
        modules={[FreeMode, Navigation]}
        className="mySwiper flex flex-w "
        breakpoints={{
          1280: { slidesPerView: 4 },
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          640: { slidesPerView: 2 },
          250: { slidesPerView: 2 },
          0: { slidesPerView: 2 },
        }}
      >
        {ProductMeat.map((item) => (
          <SwiperSlide key={item.id} className="w-[230px] border-[#e8e8e8] border-[1px] my-[8px] p-[15px] rounded-[10px] group perspective-1000">
            <div className="w-[100%] group relative">
              <img className="hoverImg rounded-[5px] absolute top-0" src={item.hoverImg} alt={item.name} />
              <img className="img rounded-[5px] " src={item.img} alt={item.name} />
              <div className="absolute top-0 right-0 z-20 icon">
                <CiHeart className="bg-[#e8e8e8] rounded-full w-[30px] h-[30px] p-[5px] m-[3px] cursor-pointer" />
                <FaRegEye className="bg-[#e8e8e8] rounded-full w-[30px] h-[30px] p-[5px] m-[3px] cursor-pointer"/>
              </div>
            </div>
            <div className="h-[150px] my-[30px] text-left">
              <p className="text-[17px] uppercase ">{item.name}</p>
              <p className="text-[#cace77] text-[18px] uppercase mt-[20px] ">TEZE Et</p>
              <p className="font-bold text-[14px]">{item.price}</p>
            </div>
            <div className=" flex justify-start">
            <button className="bg-[#e8e8e8] font-bold text-[14px] rounded-[6px] py-[8px] px-[20px] group-hover:text-white group-hover:bg-[#b3b93d]">Seçim Edin</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Meat;
