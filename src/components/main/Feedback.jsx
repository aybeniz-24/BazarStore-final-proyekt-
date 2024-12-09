import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";

function Feedback() {
  const feedback = [
    { id: 1, text: "İkinci ildiki, online sifariş xidmətinizdən istifadə edirəm, çox razıyam, ailəmdə həmçinin sizin xidmətinizdən istifadə edir", name: "Aytən T." },
    { id: 2, text: "Kuryerləriniz dəqiq işləyir, tam vaxtında evə kimi çatdırılma edilir. Xidmət üçün təşəkkür edirəm.", name: "Elshad R." },
    { id: 3, text: "Xidmətinizdən məmnunam, məhsul olmayanda kuryer zəng edib, məlumat verir.", name: "Akife M." },
    { id: 4, text: "Həm məhsulların keyfiyyətindən, həmdə məhsulların çatdırılmasından razıyam.", name: "Fatma A." },
    { id: 5, text: "Razıyam, əladı xidmətiniz, həmişə sifariş edirəm.", name: "Zuleyxa M." },
  ];
  const swiperRef = useRef(null);

  return (
    <>
      <div className="mb-[30px]">
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
    </>
  );
}

export default Feedback;
