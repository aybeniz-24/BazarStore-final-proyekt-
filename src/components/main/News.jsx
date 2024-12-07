import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { useRef } from 'react';

function News() {
  const newsData = [
    { id: 1, img: "/src/assets/news/news_slider1.webp", date: "28 Nov, 2024", title: "Onlayn sifariş et, hədiyyə qazan. 🎉" },
    { id: 2, img: "/src/assets/news/news_slider2.webp", date: "19 Nov, 2024", title: "Parlayanların gecəsinə qoşul! ✨" },
    { id: 3, img: "/src/assets/news/news_slider3.webp", date: "23 Oct, 2024", title: "Online sifarişə özəl endirimlər🎯" },
    { id: 4, img: "/src/assets/news/news_slider4.webp", date: "03 Oct, 2024", title: "Bazarstore.az | Onlayn market alış-verişi 💚" },
    { id: 5, img: "/src/assets/news/news_slider5.webp", date: "02 Aug, 2024", title: "Bazarstore.az - Onlayn Supermarket" },
    { id: 6, img: "/src/assets/news/news_slider6.webp", date: "04 Jul, 2024", title: "Bazarstore 'Bazarfest – gözəllik festivalı' ilə ilkə imza atdı" },
  ];

  const swiperRef = useRef(null);

  return (
    <div className="relative xlg:block lg:block md:block sm:hidden hidden my-[10px]">
      {/* Başlıq */}
      <h2 className="text-[24px] font-bold mb-[20px] absolute left-[30px] top-0 z-10">Xəbərlər</h2>

      {/* Navigation düymeleri için konteyner */}
      <div className="absolute top-0 right-[70px] flex items-center gap-2 z-10">
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


      <Swiper
        ref={swiperRef}
        slidesPerView={3} // Varsayılan olaraq 3
        spaceBetween={5}
        freeMode={true}
        navigation={false} // Default navigation düymələri deaktiv edilir
        modules={[FreeMode, Navigation]}
        className="mySwiper h-[310px]"
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
              <div className="rounded-lg w-full h-[160px] flex justify-center items-center bg-[#e0e0e0] mb-2">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-lg" />
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
