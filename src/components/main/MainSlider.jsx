import { Swiper, SwiperSlide } from 'swiper/react'
import '../../App.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import slider1New from '../../assets/sliderImg/WhatsApp_Image_slidee1_new.webp'
import slider1 from '../../assets/sliderImg/pantene-banner.webp'
import slider2 from '../../assets/sliderImg/image.png'
import slider3 from '../../assets/sliderImg/onlayna-ozel-banner.webp'
import slider4 from '../../assets/sliderImg/Designs.webp'
import slider5 from '../../assets/sliderImg/endirimler.webp'


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
                        delay: 1500, 
                        disableOnInteraction: false,
                      }}
                      navigation 
                      loop={true}               
                    >
                       <SwiperSlide>
                        <img src="https://bazarstore.az/cdn/shop/files/yeni-il-banner_900x452.jpg?v=1734592875;" alt="slider1new" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src="https://bazarstore.az/cdn/shop/files/onlayna-ozel-banner-gif_900x452.jpg?v=1733982805;" alt="slider1new" />
                      </SwiperSlide>
                      
                      <div className="custom-pagination"></div>
                    </Swiper>


                    <div className='sliderBtn my-[15px] py-[20px] flex justify-between '>
                        <div className='border-r-[1px] pr-[100px] m-auto flex flex-col  xlg:flex-row justify-center items-center gap-[5px]'>
                          <div className="spriteTurnk  sprite"></div>
                          <div>
                            <h4>Çatdırılma</h4>
                            <p>40 ₼+ Pulsuz 🚚</p>
                          </div>
                        </div>

                        <div className='border-r-[1px] pr-[100px] m-auto flex flex-col  xlg:flex-row justify-center items-center gap-[5px]'>
                          <div className='spriteEarphone sprite'></div>
                          <div>
                            <h4>Dəstək</h4>
                            <p>Onlayn Chat 💬</p>
                          </div>
                        </div>
                        
                        <div className=' m-auto flex flex-col  xlg:flex-row justify-center items-center gap-[5px]'>
                          <div className='spriteSertificate sprite'></div>
                          <div>
                            <h4>Sarı Etiket</h4>
                            <p>Endirimler 🏷️</p>
                          </div>
                        </div>
                    </div>
        </div>
      )
}

export default MainSlider