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
                      style={{ minHeight: '300px' }}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Autoplay, Pagination, Navigation]}
                      className="mySwiper rounded-[8px]"
                      autoplay={{
                        delay: 3000, 
                        disableOnInteraction: false,
                      }}
                      
                      navigation 
                      loop={true}               
                    >
                       <SwiperSlide>
                        <img className="w-full h-auto object-cover" src="https://bazarstore.az/cdn/shop/files/yeni-il-banner_900x452.jpg?v=1734592875;" alt="slider1new" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img  className="w-full h-auto object-cover" src="https://bazarstore.az/cdn/shop/files/onlayna-ozel-banner-gif_900x452.jpg?v=1733982805;" alt="slider1new" />
                      </SwiperSlide> <div className="custom-pagination"></div>
                      <SwiperSlide>
                        <img  className="w-full h-auto object-cover" src="https://bazarstore.az/cdn/shop/files/onlayna-ozel-banner-gif_900x452.gif?v=1727676474;" alt="slider1new" />
                      </SwiperSlide> <div className="custom-pagination"></div>
                      <SwiperSlide>
                        <img className="w-full h-auto object-cover" src="https://bazarstore.az/cdn/shop/files/AnaSayfaBanner-Sari_etiket_-_AZE-min_900x452.jpg?v=1689335719;" alt="slider1new" />
                      </SwiperSlide> <div className="custom-pagination"></div>
                    </Swiper>


                    <div className='sliderBtn my-[15px] py-[20px] flex justify-between '>
                        <div className=' cursor-pointer border-r-[1px] pr-[100px] m-auto flex flex-col  xlg:flex-row justify-center items-center gap-[5px]'>
                          <div className="spriteTurnk  sprite"></div>
                          <div>
                            <a href='/notFound'>Çatdırılma</a>
                            <p>40 ₼+ Pulsuz 🚚</p>
                          </div>
                        </div>

                        <div className='border-r-[1px] pr-[100px] m-auto flex flex-col  xlg:flex-row justify-center items-center gap-[5px]'>
                          <div className='spriteEarphone sprite'></div>
                          <div>
                            <a href='/notFound'>Dəstək</a>
                            <p>Onlayn Chat 💬</p>
                          </div>
                        </div>
                        
                        <div className=' m-auto flex flex-col  xlg:flex-row justify-center items-center gap-[5px]'>
                          <div className='spriteSertificate sprite'></div>
                          <div>
                            <a href='/notFound'>Sarı Etiket</a>
                            <p>Endirimler 🏷️</p>
                          </div>
                        </div>
                    </div>
        </div>
      )
}

export default MainSlider