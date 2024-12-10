import { useRef } from "react"
import '../../App.css'
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiHeart } from "react-icons/ci"
import { FaRegEye } from "react-icons/fa"

function Meat() {
  
  const ProductMeat = [
    { id: 1, img: "https://bazarstore.az/cdn/shop/files/14f2f0cca8eddc84b4898bbfa84c171e_1000x1000.jpg?v=1723544470", hoverImg: "https://bazarstore.az/cdn/shop/files/e70e07aabb253842b7616203fc66d8ec_1000x1000.jpg?v=1723544467", name: "Bol Ət Dana qiymə kq", price: "14.48 ₼" },
    { id: 2, img: "https://bazarstore.az/cdn/shop/files/db626a50d7a5da4ff967bc30de4efd9c_1000x1000.jpg?v=1723545521", hoverImg: "https://bazarstore.az/cdn/shop/files/e84745fe34ffb0be58227ae93a92549a_1000x1000.jpg?v=1723545518", name: "Bol Ət Dana Quşbaşı kq", price: "18.48 ₼" },
    { id: 3, img: "https://bazarstore.az/cdn/shop/files/bcb022afc7a646bf3210839099cf8726_1000x1000.jpg?v=1723546415", hoverImg: "https://bazarstore.az/cdn/shop/files/6287f9a38a8fe7359df9eb0e9d90e67c_1000x1000.webp?v=1723546412", name: "Bol Ət Dana Tranc kq", price: "18.98 ₼" },
    { id: 4, img: "https://bazarstore.az/cdn/shop/files/fb4f48ec32efa06d5f09b4a21e218ee0_1000x1000.jpg?v=1723547250", hoverImg: "https://bazarstore.az/cdn/shop/files/8cfae374f456e6ba40bfd3834cb671ce_1000x1000.jpg?v=1723547247", name: "Bol Ət Dana Əti Qol Sümüksüz kq", price: "18.48 ₼" },
    { id: 5, img: "https://bazarstore.az/cdn/shop/files/3e1f63aca691451162f46571d0d9074f_1000x1000.jpg?v=1723548005", hoverImg: "https://bazarstore.az/cdn/shop/files/dbf2b0a0801a6949ef65874c6107c008_1000x1000.jpg?v=1723548003", name: "Bol Ət Dana Əti Canəti Bonfilə kq", price: "32.98 ₼" },
    { id: 6, img: "https://bazarstore.az/cdn/shop/files/e3ee38302f96c3712595ec2732d687f9_1000x1000.jpg?v=1723548631", hoverImg: "https://bazarstore.az/cdn/shop/files/3f978ca9004efa163089dc3877b93233_1000x1000.jpg?v=1723548628", name: "Bol Ət Dana Əti Sümüklü kq", price: "13.98 ₼" },
    { id: 7, img: "https://bazarstore.az/cdn/shop/products/30038963_8306a922-eeab-452b-bc03-4a7e8177924a_1000x1000.jpg?v=1693556855", hoverImg: "https://bazarstore.az/cdn/shop/products/30038963_8306a922-eeab-452b-bc03-4a7e8177924a_1000x1000.jpg?v=1693556855" , name: "Bol Ət Dana Sote kq", price: "18.98 ₼" },
    { id: 8, img: "https://bazarstore.az/cdn/shop/products/30015491_deae8043-d8c5-4e3b-adb8-372489080109_1000x1000.jpg?v=1693738923", hoverImg: "https://bazarstore.az/cdn/shop/products/30015491_deae8043-d8c5-4e3b-adb8-372489080109_1000x1000.jpg?v=1693738923" , name: "Bol Ət Dana Rosto kq", price: "18.98 ₼" },
    { id: 9, img: "https://bazarstore.az/cdn/shop/products/30038500_1000x1000.jpg?v=1693738775", hoverImg: "https://bazarstore.az/cdn/shop/products/30038500_1000x1000.jpg?v=1693738775" , name: "Bol Ət Dana Əti Antrikot Sümüksüz kq", price: "26.98 ₼" },
    { id: 10, img: "https://bazarstore.az/cdn/shop/products/30038498_1aed5ac8-506a-4f18-959a-f0fabbab5b68_1000x1000.jpg?v=1693896600", hoverImg: "https://bazarstore.az/cdn/shop/products/30038498_1aed5ac8-506a-4f18-959a-f0fabbab5b68_1000x1000.jpg?v=1693896600" , name: "Bol Ət Dana Nuar kq", price: "18.98 ₼" },
    { id: 11, img: "https://bazarstore.az/cdn/shop/products/30038250_1000x1000.jpg?v=1693556854", hoverImg: "https://bazarstore.az/cdn/shop/products/30038250_1000x1000.jpg?v=1693556854" , name: "Bol Ət Dana Əti Bel (Biftek) kq", price: "22.98 ₼" },
    { id: 12, img: "https://bazarstore.az/cdn/shop/products/30153388_1000x1000.jpg?v=1693348248", hoverImg: "https://bazarstore.az/cdn/shop/products/30153388_1000x1000.jpg?v=1693348248" , name: "Bol Ət Gardan kq", price: "18.48 ₼" },
  ]


  const swiperRef = useRef(null)


  return (
    <div className="mx-[30px] my-[10px] ">
      <div className="relative flex sm:flex-col">
      
      <div>
        <h2 className="text-[24px] font-bold mb-[20px] py-[20px]">Bol Ət, ağzınıza layiq ləzzət!</h2>
      </div>

      <div className="absolute top-[40px] right-[70px] flex items-center gap-2 z-10 ">
        <button
          className="swiper-button-prev bg-gray-200 p-2 rounded-full transform rotate-180 scale-[.8]" /* yönü tersine çevirir */
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
        </button>
        <button
          className="swiper-button-next bg-gray-200 p-2 rounded-full transform rotate-180 scale-[.8]" /* yönü tersine çevirir */
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
