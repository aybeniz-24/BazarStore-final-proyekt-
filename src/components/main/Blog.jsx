import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { useRef } from 'react';

function Blog() {
  const blogData = [
    { id: 1, img: 'https://bazarstore.az/cdn/shop/articles/christmas_table_950x672.jpg?v=1733727042', date: "09 Dec, 2024", name: "Yeni il süfrəsi, ləzzətli reseptlər 🎄🍴" },
    { id: 2, img: 'https://bazarstore.az/cdn/shop/articles/yeni_il_salads_950x672.jpg?v=1733725036', date: "09 Dec, 2024", name: "Yeni ildə hazırlaya biləcəyiniz salatlar.🥗" },
    { id: 3, img: 'https://bazarstore.az/cdn/shop/articles/yogurt_950x672.jpg?v=1732536709', date: "25 Nov, 2024", name: "Sobada Qatıq Hazırlama Resepti 🥛 💚" },
    { id: 4, img: 'https://bazarstore.az/cdn/shop/articles/tangerine_peels_950x672.jpg?v=1730807214', date: "05 Nov, 2024", name: "Mandarin qabıqlarından istifadə 🍊" },
    { id: 5, img: 'https://bazarstore.az/cdn/shop/articles/cay_novl_ri_950x672.jpg?v=1730449163', date: "01 Nov, 2024", name: "Ən məşhur çay növləri" },
    { id: 6, img: 'https://bazarstore.az/cdn/shop/articles/q_hv_novl_ri_950x672.jpg?v=1730448845', date: "01 Nov, 2024", name: "Qəhvə növləri ☕" },
  ];

  const swiperRef = useRef(null)

  return (
    <div className="relative my-[30px] mb-[60px]">
      {/* Başlıq */}
      <h2 className="text-[24px] font-bold mb-[20px] absolute left-[30px] top-0 z-10">Bazarcuisine Blog</h2>

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
        className="mySwiper h-[350px]"
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
              <div className="rounded-lg w-full h-[320px] flex justify-center items-center bg-[#e0e0e0] mb-2 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-lg transform transition-transform duration-1.1 hover:scale-[1.2]" />
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
