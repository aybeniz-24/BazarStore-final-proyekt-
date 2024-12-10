import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { useRef } from 'react';

function News() {
  const newsData = [
    { id: 1, img: "https://bazarstore.az/cdn/shop/articles/christmas_tradition_950x672.jpg?v=1733725994", date: "09 Dec, 2024", title: "Dünyada Maraqlı Yeni İl Adət-Ənənələri" },
    { id: 2, img: "https://bazarstore.az/cdn/shop/articles/WhatsApp_Image_2024-11-27_at_17.37.27_950x672.jpg?v=1732790114", date: "28 Nov, 2024", title: "Onlayn sifariş et, hədiyyə qazan. 🎉" },
    { id: 3, img: "https://bazarstore.az/cdn/shop/articles/WhatsApp_Image_2024-11-18_at_09.22.52_950x672.jpg?v=1731997896", date: "19 Nov, 2024", title: "Parlayanların gecəsinə qoşul! ✨" },
    { id: 4, img: "https://bazarstore.az/cdn/shop/articles/sidebar-son_950x672.jpg?v=1729678340", date: "23 Oct, 2024", title: "Online sifarişə özəl endirimlər🎯" },
    { id: 5, img: "https://bazarstore.az/cdn/shop/articles/saytimiz-yenil_ndi-dizayn_950x672.jpg?v=1727938897", date: "03 Oct, 2024", title: "Bazarstore.az | Onlayn market alış-verişi 💚" },
    { id: 6, img: "https://bazarstore.az/cdn/shop/articles/Untitled-1_b981b27f-55e8-4ea7-9889-811ea2999a16_950x672.jpg?v=1722584409", date: "02 Aug, 2024", title: "Bazarstore.az - Onlayn Supermarket" },
  ]

  const swiperRef = useRef(null);

  return (
    <div className="relative xlg:block lg:block md:block sm:hidden hidden my-[20px] mb-[80px]">
      {/* Başlıq */}
      <h2 className="text-[24px] font-bold mb-[20px] absolute left-[30px] top-0 z-10">Xəbərlər</h2>

      {/* Navigation düymeleri için konteyner */}
      <div className="absolute top-0 right-[70px] flex items-center gap-2 z-10">
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


      <Swiper
        ref={swiperRef}
        slidesPerView={3} // Varsayılan olaraq 3
        spaceBetween={5}
        freeMode={true}
        navigation={false} // Default navigation düymələri deaktiv edilir
        modules={[FreeMode, Navigation]}
        className="mySwiper h-[340px]"
        breakpoints={{
          1280: { slidesPerView: 3 },
          1024: { slidesPerView: 2 },
          768: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
        }}
      >
        {newsData.map((item) => (
          <SwiperSlide key={item.id} className="mt-[20px] ">
            <div className="p-4 flex flex-col items-center w-full h-full">
              <div className="rounded-lg w-full h-[330px] flex justify-center items-center bg-[#e0e0e0] mb-2 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-lg transform transition-transform duration-1.1 hover:scale-[1.2]" />
              </div>
              <p className="text-[14px] ">{item.date}</p>
              <p className="mt-[10px] text-[16px] font-bold text-center">{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default News;
