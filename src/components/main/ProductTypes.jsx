import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode,  Navigation } from 'swiper/modules';
import { useRef } from 'react';

function ProductTypes() {
  const newsData = [
    { id: 1, img: 'https://bazarstore.az/cdn/shop/files/indirim-anasayfa-link_100x92.jpg?v=1692349846', title: "Endirimli Məhsullar", productCount: "(2123 Çeşidlər)" },
    { id: 2, img: 'https://bazarstore.az/cdn/shop/files/cok-satan-anasayfa_100x92.jpg?v=1692363270', title: "Çox Satanlar", productCount: "(91 Çeşidlər)" },
    { id: 3, img: 'https://bazarstore.az/cdn/shop/files/anne-bebek-anasayfa-2_100x92.jpg?v=1692352671', title: "Uşaq Dünyası", productCount: "(355 Çeşidler)" },
    { id: 4, img: 'https://bazarstore.az/cdn/shop/files/meyve-terevez-esas_100x92.png?v=1682521490', title: "Meyvə, Tərəvəz", productCount: "(148 Çeşidler)" },
    { id: 5, img: 'https://bazarstore.az/cdn/shop/files/baliq-et_100x92.png?v=1682521490', title: "Ət, Toyuq, Balıq", productCount: "(1281 Çeşidler)" },
    { id: 6, img: 'https://bazarstore.az/cdn/shop/files/sud-seher-yemeyi_100x92.png?v=1682521490', title: "Süd, Səhər yeməyi", productCount: "(943 Çeşidler)" },
    { id: 7, img: 'https://bazarstore.az/cdn/shop/files/mahsuller_100x92.png?v=1682580165', title: "Təməl Qida", productCount: "(1830 Çeşidler)" },
    { id: 8, img: 'https://bazarstore.az/cdn/shop/files/konserv_100x92.png?v=1682521490', title: "Hazır Yeməklər, Donuq", productCount: "(55 Çeşidler)" },
    { id: 9, img: 'https://bazarstore.az/cdn/shop/files/tort-bulka_100x92.png?v=1682521490', title: "Firin, Pastane", productCount: "(362 Çeşidler)" },
    { id: 10, img: 'https://bazarstore.az/cdn/shop/files/dondurma_100x92.png?v=1682521490', title: "Dondurma", productCount: "(201 Çeşidler)" },
    { id: 11, img: 'https://bazarstore.az/cdn/shop/files/atishdirmalik_100x92.png?v=1682521490', title: "Atışdırmalıq", productCount: "(1830 Çeşidler)" },
    { id: 12, img: 'https://bazarstore.az/cdn/shop/files/gulum-su_100x92.png?v=1682521490', title: "İçkilər", productCount: "(1115 Çeşidler)" },
    { id: 13, img: 'https://bazarstore.az/cdn/shop/files/tutun_100x92.png?v=1682521490', title: "Tütün Məhsulları", productCount: "(116 Çeşidler)" },
    { id: 14, img: 'https://bazarstore.az/cdn/shop/files/temizlik-deterjan_100x92.png?v=1682521490', title: "Deterjan, Təmizlik", productCount: "(977 Çeşidler)" },
    { id: 15, img: 'https://bazarstore.az/cdn/shop/files/temizlik-kosmetik_100x92.png?v=1682521490', title: "Kişisəl Baxım, Kosmetik", productCount: "(1562 Çeşidler)" },
    { id: 16, img: 'https://bazarstore.az/cdn/shop/files/piknik-ev_100x92.png?v=1682521490', title: "Ev və Bağ üçün məhsullar", productCount: "(595 Çeşidler)" },
    { id: 17, img: 'https://bazarstore.az/cdn/shop/files/kitab-defter_100x92.png?v=1682521490', title: "Dəftərxana Ləvazimatları", productCount: "(5 Çeşidler)" },
    { id: 18, img: 'https://bazarstore.az/cdn/shop/files/petshop_100x92.png?v=1682521490', title: "Petshop", productCount: "(45 Çeşidler)" },
    { id: 19, img: 'https://bazarstore.az/cdn/shop/files/elektornik_100x92.png?v=1682521490', title: "Elektronika", productCount: "(100 Çeşidler)" },
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
        <div className="rounded-full w-[150px] h-[150px] flex justify-center items-center bg-[#f5f5f5] mb-2">
          <img src={item.img} alt={item.title} className="p-[25px] rounded-full" />
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
