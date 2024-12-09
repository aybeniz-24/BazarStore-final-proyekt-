import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { useRef } from 'react';

function Blog() {
  const blogData = [
    { id: 1, img: '/src/assets/blog/Dasarasi-kabab.webp', date: "27 Nov, 2023", name: "Daşarası Kabab" },
    { id: 2, img: '/src/assets/blog/Cigirtma-plov.webp', date: "27 Nov, 2023", name: "Çığırtma Plov" },
    { id: 3, img: '/src/assets/blog/Cutcu.webp', date: "27 Nov, 2023", name: "Cütctü" },
    { id: 4, img: '/src/assets/blog/Buglama.webp', date: "27 Nov, 2023", name: "Ət Buğlaması" },
    { id: 5, img: '/src/assets/blog/Bamiy.webp', date: "27 Nov, 2023", name: "Bamiyə" },
    { id: 6, img: '/src/assets/blog/Balva-sorbasi.webp', date: "27 Nov, 2023", name: "Balva" },
  ];

  const swiperRef = useRef(null)

  return (
    <div className="relative my-[20px] ">
      {/* Başlıq */}
      <h2 className="text-[24px] font-bold mb-[20px] absolute left-[30px] top-0 z-10">Bazarcuisine Blog</h2>

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
          250: { slidesPerView: 1 },
        }}
      >
        {blogData.map((item) => (
          <SwiperSlide key={item.id} className="mt-[20px] ">
            <div className="p-4 flex flex-col items-center w-full h-full">
              <div className="rounded-lg w-full h-[160px] flex justify-center items-center bg-[#e0e0e0] mb-2">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-lg" />
              </div>
              <p className="text-[14px] ">{item.date}</p>
              <p className="mt-[10px] text-[16px] font-bold text-center">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Blog;
