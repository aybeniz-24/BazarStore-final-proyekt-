import { Swiper, SwiperSlide } from 'swiper/react'
import '../../App.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'



function MainSlider() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        style={{ minHeight: '150px' }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-[8px]"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        loop={true}
        breakpoints={{
          250: {
            spaceBetween: 10,
            style: { minHeight: '150px' }, 
          },
        }}
      >
        <SwiperSlide>
          <img className="w-full h-auto object-cover" src="https://bazarstore.az/cdn/shop/files/yeni-il-banner_900x452.jpg?v=1734592875;" alt="slider1new" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-auto object-cover" src="https://bazarstore.az/cdn/shop/files/onlayna-ozel-banner-gif_900x452.jpg?v=1733982805;" alt="slider1new" />
        </SwiperSlide>
        <div className="custom-pagination"></div>
        <SwiperSlide>
          <img className="w-full h-auto object-cover" src="https://bazarstore.az/cdn/shop/files/onlayna-ozel-banner-gif_900x452.gif?v=1727676474;" alt="slider1new" />
        </SwiperSlide>
        <div className="custom-pagination"></div>
        <SwiperSlide>
          <img className="w-full h-auto object-cover" src="https://bazarstore.az/cdn/shop/files/AnaSayfaBanner-Sari_etiket_-_AZE-min_900x452.jpg?v=1689335719;" alt="slider1new" />
        </SwiperSlide>
        <div className="custom-pagination"></div>

        <div className="swiper-button-prev !left-2 sm:!left-4"></div>
        <div className="swiper-button-next !right-2 sm:!right-4"></div>
      </Swiper>

      <div className='sliderBtn my-[10px] py-[10px] flex flex-wrap justify-between gap-2'>
        <div className='cursor-pointer border-r-[1px] pr-[20px] flex flex-col sm:flex-row justify-center items-center gap-2 w-full sm:w-auto'>
          <div className="spriteTurnk sprite"></div>
          <div className='text-center sm:text-left'>
            <a href='/notFound' className='text-sm font-medium'>Çatdırılma</a>
            <p className='text-xs'>40 ₼+ Pulsuz 🚚</p>
          </div>
        </div>

        <div className='border-r-[1px] pr-[20px] flex flex-col sm:flex-row justify-center items-center gap-2 w-full sm:w-auto'>
          <div className='spriteEarphone sprite'></div>
          <div className='text-center sm:text-left'>
            <a href='/notFound' className='text-sm font-medium'>Dəstək</a>
            <p className='text-xs'>Onlayn Chat 💬</p>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-center items-center gap-2 w-full sm:w-auto'>
          <div className='spriteSertificate sprite'></div>
          <div className='text-center sm:text-left'>
            <a href='/notFound' className='text-sm font-medium'>Sarı Etiket</a>
            <p className='text-xs'>Endirimlər 🏷️</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MainSlider