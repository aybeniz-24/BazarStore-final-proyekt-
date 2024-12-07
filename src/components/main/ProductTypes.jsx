import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode,  Navigation } from 'swiper/modules';
import { useRef } from 'react';

function ProductTypes() {
  const newsData = [
    { id: 1, img: '/src/assets/product_types/indirim-anasayfa-link.avif', title: "Endirimli Məhsullar", productCount: "(2123 Çeşidlər)" },
    { id: 2, img: '/src/assets/product_types/cok-satan-anasayfa.avif', title: "Çox Satanlar", productCount: "(91 Çeşidlər)" },
    { id: 3, img: '/src/assets/product_types/anne-bebek-anasayfa.webp', title: "Uşaq Dünyası", productCount: "(355 Çeşidler)" },
    { id: 4, img: '/src/assets/product_types/meyve-terevez-esas.webp', title: "Meyvə, Tərəvəz", productCount: "(148 Çeşidler)" },
    { id: 5, img: '/src/assets/product_types/baliq-et.webp', title: "Ət, Toyuq, Balıq", productCount: "(1281 Çeşidler)" },
    { id: 6, img: '/src/assets/product_types/sud-seher-yemeyi.webp', title: "Süd, Səhər yeməyi", productCount: "(943 Çeşidler)" },
    { id: 7, img: '/src/assets/product_types/mahsuller.webp', title: "Təməl Qida", productCount: "(1830 Çeşidler)" },
    { id: 8, img: '/src/assets/product_types/konserv.webp', title: "Hazır Yeməklər, Donuq", productCount: "(55 Çeşidler)" },
    { id: 9, img: '/src/assets/product_types/tort-bulka.webp', title: "Firin, Pastane", productCount: "(362 Çeşidler)" },
    { id: 10, img: '/src/assets/product_types/dondurma.webp', title: "Dondurma", productCount: "(201 Çeşidler)" },
    { id: 11, img: '/src/assets/product_types/atishdirmalik.webp', title: "Atışdırmalıq", productCount: "(1830 Çeşidler)" },
    { id: 12, img: '/src/assets/product_types/gulum-su.webp', title: "İçkilər", productCount: "(1115 Çeşidler)" },
    { id: 13, img: '/src/assets/product_types/tutun.webp', title: "Tütün Məhsulları", productCount: "(116 Çeşidler)" },
    { id: 14, img: '/src/assets/product_types/temizlik-deterjan.webp', title: "Deterjan, Təmizlik", productCount: "(977 Çeşidler)" },
    { id: 15, img: '/src/assets/product_types/temizlik-kosmetik.avif', title: "Kişisəl Baxım, Kosmetik", productCount: "(1562 Çeşidler)" },
    { id: 16, img: '/src/assets/product_types/piknik-ev.webp', title: "Ev və Bağ üçün məhsullar", productCount: "(595 Çeşidler)" },
    { id: 17, img: '/src/assets/product_types/kitab-defter.avif', title: "Dəftərxana Ləvazimatları", productCount: "(5 Çeşidler)" },
    { id: 18, img: '/src/assets/product_types/petshop.webp', title: "Petshop", productCount: "(45 Çeşidler)" },
    { id: 19, img: '/src/assets/product_types/elektornik.webp', title: "Elektronika", productCount: "(100 Çeşidler)" },
  ]

  const swiperRef = useRef(null);

  return (
    <>
      <Swiper
  ref={swiperRef}
  slidesPerView={5} // Varsayılan olaraq 5
  spaceBetween={30}
  freeMode={true}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  modules={[FreeMode, Navigation]}
  className="mySwiper h-[300px] sm:h-[300px]"
  breakpoints={{
    // Ekran ölçüsünə görə tənzimləmə
    1280: { slidesPerView: 5 }, // xl ekran üçün 5 kart
    1024: { slidesPerView: 4 }, // lg ekran üçün 4 kart
    768: { slidesPerView: 4 },  // md ekran üçün 3 kart
    640: { slidesPerView: 3 },  // sm ekran üçün 2 kart
    300: { slidesPerView: 2 },  // sm ekran üçün 2 kart
    250: { slidesPerView: 1 },    // ən kiçik ekran üçün 1 kart
    0: { slidesPerView: 1 },    // ən kiçik ekran üçün 1 kart
  }}
>
  {newsData.map((item) => (
    <SwiperSlide key={item.id} className="mt-[20px]">
      <div className={`p-4 flex flex-col items-center w-full h-full`}>
        <div className="rounded-full w-[140px] h-[140px] flex justify-center items-center bg-[#f5f5f5] mb-2">
          <img src={item.img} alt={item.title} className="p-[30px] rounded-full" />
        </div>
        <p className="mt-[10px] text-[15px] font-bold text-center">{item.title}</p>
        <p className="text-center text-[14px]">{item.productCount}</p>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </>
  );
}

export default ProductTypes;
