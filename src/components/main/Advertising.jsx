import advertisingImage1 from '../../assets/advertising/advertising1.webp';
import advertisingImage2 from '../../assets/advertising/advertising2.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";


function Advertising() {

    const feedback = [
      { id: 1, text: "İkinci ildiki, online sifariş xidmətinizdən istifadə edirəm, çox razıyam, ailəmdə həmçinin sizin xidmətinizdən istifadə edir", name: "Aytən T." },
      { id: 2, text: "Kuryerləriniz dəqiq işləyir, tam vaxtında evə kimi çatdırılma edilir. Xidmət üçün təşəkkür edirəm.", name: "Elshad R." },
      { id: 3, text: "Xidmətinizdən məmnunam, məhsul olmayanda kuryer zəng edib, məlumat verir.", name: "Akife M." },
      { id: 4, text: "Həm məhsulların keyfiyyətindən, həmdə məhsulların çatdırılmasından razıyam.", name: "Fatma A." },
      { id: 5, text: "Razıyam, əladı xidmətiniz, həmişə sifariş edirəm.", name: "Zuleyxa M." },
    ];
    const swiperRef = useRef(null);



  const advertisements = [
    {
      imageSrc: advertisingImage1,
      link: 'https://example.com/ad1',
    },
    {
      imageSrc: advertisingImage2,
      link: 'https://example.com/ad2',
    },
  ];

  return (
    <div className="flex flex-col gap-[20px]">
      {/* İlk Reklam */}
      <div className="h-[450px] w-[300px] sm:w-[30%] md:w-[40%] lg:w-[100%] mb-[50px]">
        <a href={advertisements[0].link}>
          <img
            className="w-[100%] h-[450px] rounded-[5px]"
            src={advertisements[0].imageSrc}
            alt="advertisementImage1"
          />
        </a>
      </div>

      {/* Endirimli Məhsullar */}
      <div className="rounded-[5px] flex flex-col mb-[50px] border border-[#eee]">
        <div className="bg-[#f0f0f0] rounded-t-lg">
          <p className="font-bold text-[20px] p-[20px]">Endirimli Məhsullar</p>
        </div>
        <div>Burda mehsullar olacaq !!!!!!!!!!!!</div>
      </div>

      {/* İkinci Reklam */}
      <div className="h-[450px] w-[300px] sm:w-[30%] md:w-[40%] lg:w-[100%] mb-[50px]">
        <a href={advertisements[1].link}>
          <img
            className="w-[100%] h-[450px] rounded-[5px]"
            src={advertisements[1].imageSrc}
            alt="advertisementImage2"
          />
        </a>
      </div>




       {/* rey */}
       <div className="h-[450px] w-[300px] sm:w-[30%] md:w-[40%] lg:w-[100%] mb-[50px]">
       <div className="bg-[#f0f0f0] rounded-t-lg">
          <p className="font-bold text-[20px] p-[20px]">Müştərimiz Deyir</p>
        </div>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          freeMode={true}
          navigation={true} // yönlendirme butonlarını etkinleştir
          modules={[FreeMode, Navigation]}
          className="xlg:h-[350px] lg:h-[400px] border border-[#f0f0f0]"
         
        >
          {feedback.map((item) => (
            <SwiperSlide key={item.id} className=" block">
              <div className="p-4 flex flex-col w-full h-full">
                <RiDoubleQuotesL className='text-[2.2em] mx-10px] mb-[10px] text-[#b3b93d] ' />
                <div className='xlg:h-[150px] lg:h-[200px]'><p className="text-[18px]">{item.text}</p></div>
                <p className="mt-[10px] text-[16px] font-bold">{item.name}</p>
                <p className="mt-[10px] text-[16px]">Onlayn Müştəri</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Advertising;
