import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import { useEffect, useRef, useState } from 'react';
import { ProductType, blogData, newsData } from '../../services/api'; // Həm ProductType, həm də blogData, newsData import edirik

function CombinedComponent() {
  const [productTypes, setProductTypes] = useState([]);
  const [blog, setBlog] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    ProductType().then(data => setProductTypes(data));
    blogData().then(data => setBlog(data));
    newsData().then(data => setNews(data));
  }, []);

  const swiperRef = useRef(null);

  return (
    <div>
      {/* Məhsul növləri bölməsi */}
      <div className="relative my-[30px] mb-[60px]">
        {/* <h2 className="text-[24px] font-bold mb-[20px] absolute left-[30px] top-0 z-10">Məhsul Növləri</h2> */}

        <Swiper
          ref={swiperRef}
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          modules={[FreeMode, Navigation]}
          className="mySwiper h-[300px] sm:h-[300px]"
          breakpoints={{
            1280: { slidesPerView: 5 },
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 4 },
            640: { slidesPerView: 3 },
            300: { slidesPerView: 2 },
            250: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
        >
          {productTypes.map((item) => (
            <SwiperSlide key={item.id} className="mt-[20px]">
              <div className="p-4 flex flex-col items-center w-full h-full">
                <div className="rounded-full w-[150px] h-[150px] flex justify-center items-center bg-[#f5f5f5] mb-2">
                  <img src={item.img} alt={item.title} className="p-[25px] rounded-full" />
                </div>
                <p className="mt-[10px] text-[15px] font-bold text-center">{item.title}</p>
                <p className="text-center text-[14px]">{item.productCount}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Blog bölməsi */}
      <div className="relative my-[30px] mb-[60px]">
        <h2 className="text-[24px] font-bold mb-[20px] absolute left-[30px] top-0 z-10">Bazarcuisine Blog</h2>

        <div className="absolute top-0 right-[70px] flex items-center gap-2 z-10">
          <button
            className="swiper-button-prev bg-gray-200 p-2 rounded-full transform rotate-180 scale-[.8]"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
          </button>
          <button
            className="swiper-button-next bg-gray-200 p-2 rounded-full transform rotate-180 scale-[.8]"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
          </button>
        </div>

        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          spaceBetween={5}
          freeMode={true}
          navigation={false}
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
          {blog.map((item) => (
            <SwiperSlide key={item.id} className="mt-[20px]">
              <div className="p-4 flex flex-col items-center w-full h-full">
                <div className="rounded-lg w-full h-[320px] flex justify-center items-center bg-[#e0e0e0] mb-2 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-lg transform transition-transform duration-1.1 hover:scale-[1.2]" />
                </div>
                <p className="text-[14px]">{item.date}</p>
                <p className="mt-[10px] text-[16px] font-bold text-center">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Xəbərlər bölməsi */}
      <div className="relative xlg:block lg:block md:block sm:hidden hidden my-[20px] mb-[80px]">
        <h2 className="text-[24px] font-bold mb-[20px] absolute left-[30px] top-0 z-10">Xəbərlər</h2>

        <div className="absolute top-0 right-[70px] flex items-center gap-2 z-10">
          <button
            className="swiper-button-prev bg-gray-200 p-2 rounded-full transform rotate-180 scale-[.8]"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
          </button>
          <button
            className="swiper-button-next bg-gray-200 p-2 rounded-full transform rotate-180 scale-[.8]"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
          </button>
        </div>

        <Swiper
          ref={swiperRef}
          slidesPerView={3}
          spaceBetween={5}
          freeMode={true}
          navigation={false}
          modules={[FreeMode, Navigation]}
          className="mySwiper h-[340px]"
          breakpoints={{
            1280: { slidesPerView: 3 },
            1024: { slidesPerView: 2 },
            768: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
          }}
        >
          {news.map((item) => (
            <SwiperSlide key={item.id} className="mt-[20px]">
              <div className="p-4 flex flex-col items-center w-full h-full">
                <div className="rounded-lg w-full h-[330px] flex justify-center items-center bg-[#e0e0e0] mb-2 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-lg transform transition-transform duration-1.1 hover:scale-[1.2]" />
                </div>
                <p className="text-[14px]">{item.date}</p>
                <p className="mt-[10px] text-[16px] font-bold text-center">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CombinedComponent
