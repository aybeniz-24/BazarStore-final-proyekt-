import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import advertisingImage1 from '../../assets/advertising/advertising1.webp';
import advertisingImage2 from '../../assets/advertising/advertising2.webp';
import MainSlider from './MainSlider';
import '../../App.css';
import menuData from '../../data/headerMenuData.json'
import productData from '../../data/productCategoriesData.json'

function Advertising() {
  // Advertising komponentindən state və məlumatlar
  const feedback = [
    { id: 1, text: "İkinci ildiki, online sifariş xidmətinizdən istifadə edirəm, çox razıyam, ailəmdə həmçinin sizin xidmətinizdən istifadə edir", name: "Aytən T." },
    { id: 2, text: "Kuryerləriniz dəqiq işləyir, tam vaxtında evə kimi çatdırılma edilir. Xidmət üçün təşəkkür edirəm.", name: "Elshad R." },
    { id: 3, text: "Xidmətinizdən məmnunam, məhsul olmayanda kuryer zəng edib, məlumat verir.", name: "Akife M." },
    { id: 4, text: "Həm məhsulların keyfiyyətindən, həmdə məhsulların çatdırılmasından razıyam.", name: "Fatma A." },
    { id: 5, text: "Razıyam, əladı xidmətiniz, həmişə sifariş edirəm.", name: "Zuleyxa M." },
  ];
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
  const swiperRef = useRef(null);

  // AllCategorButton komponentindən state və funksiyalar
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsCategoriesOpen(screenWidth >= 1270);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const toggleMenu = () => {
    setIsCategoriesOpen((prevState) => !prevState);
  };

  return (
    <div>
      {/* Advertising hissəsi */}
      <div className="flex flex-col gap-[20px]">
        <div className="h-[450px] w-[300px] sm:w-[30%] md:w-[40%] lg:w-[100%] mb-[50px]">
          <a href={advertisements[0].link}>
            <img className="w-[100%] h-[450px] rounded-[5px]" src={advertisements[0].imageSrc} alt="advertisementImage1" />
          </a>
        </div>

        <div className="rounded-[5px] flex flex-col mb-[50px] border border-[#eee]">
          <div className="bg-[#f0f0f0] rounded-t-lg">
            <p className="font-bold text-[20px] p-[20px]">Endirimli Məhsullar</p>
          </div>
          <div>Burda mehsullar olacaq !!!!!!!!!!!!</div>
        </div>

        <div className="h-[450px] w-[300px] sm:w-[30%] md:w-[40%] lg:w-[100%] mb-[50px]">
          <a href={advertisements[1].link}>
            <img className="w-[100%] h-[450px] rounded-[5px]" src={advertisements[1].imageSrc} alt="advertisementImage2" />
          </a>
        </div>



        <div className="h-[450px] w-[300px] sm:w-[30%] md:w-[40%] lg:w-[100%] mb-[50px]">
          <div className="bg-[#f0f0f0] rounded-t-lg">
            <p className="font-bold text-[20px] p-[20px]">Müştərimiz Deyir</p>
          </div>
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            freeMode={true}
            navigation={true}
            modules={[FreeMode, Navigation]}
            className="xlg:h-[350px] lg:h-[400px] border border-[#f0f0f0]"
          >
            {feedback.map((item) => (
              <SwiperSlide key={item.id} className="block">
                <div className="p-4 flex flex-col w-full h-full">
                  <RiDoubleQuotesL className='text-[2.2em] mx-10px] mb-[10px] text-[#b3b93d]' />
                  <div className='xlg:h-[150px] lg:h-[200px]'><p className="text-[18px]">{item.text}</p></div>
                  <p className="mt-[10px] text-[16px] font-bold">{item.name}</p>
                  <p className="mt-[10px] text-[16px]">Onlayn Müştəri</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>





      {/* AllCategorButton hissəsi */}
        <section className="border-t-[1px] border-[#eee]">
      <div className="md:mx-[8%] mx-[2%] xlg:flex xlg:justify-between">
        {/* Sol tərəf - Kateqoriyalar */}
        <div className="relative w-[100%] md:w-[100%] lg:w-[100%] xlg:w-[25%]">
          <button
            onClick={toggleMenu}
            className="xlg:flex xlg:w-[100%] bg-[#b3b93d] text-white w-full sm:w-[50%] md:w-[40%] lg:w-[30%] text-left px-[20px]
            py-[15px] font-bold xlg:text-[16px] md:text-[18px] lg:text-[18px]"
          >
            <FaBars className="inline mb-[5px] xlg:mx-[10px] xlg:m-[4px]" />
            Bütün Kategoriyalar
          </button>

          {isCategoriesOpen && (
            <div className="bg-white border border-[#5e5e5e] mt-[5px] w-full sm:w-[50%] md:w-[40%] lg:w-[30%] xlg:w-[100%]">
              <ul className="text-black">
                {productData.map((data1, index1) => (
                  <li
                    key={index1}
                    className={`relative group cursor-pointer ${
                      index1 === productData.length - 1 ? "border-b-0" : "border-b-[1px]"
                    }`}
                  >
                    <a href="#" className="block hover:text-[#b3b93d] pt-[8px] py-[8px]">
                      <div className="font-bold pb-[10px] px-[15px] flex justify-between items-center">
                        <FaLongArrowAltRight className="inline mt-[5px] text-[#5e5e5e]" />
                        <div className="mr-auto pl-[15px]">{data1.name}</div>
                        <IoIosArrowForward className="inline mt-[5px] text-[#5e5e5e]" />
                      </div>
                    </a>

                    {/* 2-ci Səviyyə menu*/}
                    <ul className="absolute hidden group-hover:block bg-white text-black border-[#5e5e5e] border left-[100%] w-[100%] top-[-1px] py-[1px] z-10">
                      {data1.product.map((data2, index2) => (
                        <li
                          key={index2}
                          className={`menu2 cursor-pointer p-[10px] ${
                            index2 === data1.product.length - 1 ? "border-b-0" : "border-b-[1px]"
                          }`}
                        >
                          <a href="#" className="block hover:text-[#b3b93d]">
                            <div className="pb-[10px] px-[15px] flex justify-between items-center">
                              <div className="mr-auto">{data2.name}</div>
                              <IoIosArrowForward className="inline mt-[5px] text-[#5e5e5e]" />
                            </div>
                          </a>

                          {/* 3-cü Səviyyə menu */}
                          <ul className="menuHover text-black bg-white border-[#5e5e5e] border ml-[103%] px-[10px] z-20 w-[100%] my-[-46px]">
                            {data2.subcategories.map((data3, index3) => (
                              <li
                                key={index3}
                                className={`relative cursor-pointer ${
                                  index3 === data2.subcategories.length - 1 ? "border-b-0" : "border-b-[1px]"
                                }`}
                              >
                                <a href="#" className="block hover:text-[#b3b93d] pt-[8px] py-[8px]">
                                  <div className="pb-[10px] px-[15px] flex justify-between items-center">
                                    <div className="mr-auto">{data3.name}</div>
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sağ tərəf - Menyu və Slayder */}
        <div className="flex-col justify-between h-full lg:block xlg:w-[75%] xlg:ml-[20px]">
          <ul className="m-[12px] hidden justify-between lg:flex xlg:flex">
            {menuData.map((menu, menuIndex) => (
              <li key={menuIndex} className="relative group text-[16px] my-[5px] hover:text-[var(--primary-color)]">
                <a href="#">{menu.label}</a>
              </li>
            ))}
          </ul>

          <div className="m-[10px] mt-[20px]">
            <MainSlider />
          </div>
        </div>
      </div>
      </section>


    </div>
  );
}

export default Advertising;
