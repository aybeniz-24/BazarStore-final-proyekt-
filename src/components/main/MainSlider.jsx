import { Swiper, SwiperSlide } from 'swiper/react'
import '../../App.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
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
                        <img src={slider1} alt="slider1" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={slider2} alt="slider2" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={slider3} alt="slider3" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={slider4} alt="slider4" />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img src={slider5} alt="slider5" />
                      </SwiperSlide>
                      <div className="custom-pagination"></div>
                    </Swiper>


                    <div className='sliderBtn my-[15px] py-[30px] flex justify-between '>
                        <div className='box m-auto'>
                          <div className="spriteTurnk  sprite"></div>
                          <div>
                            <h4>Çatdırılma</h4>
                            <p>40 ₼+ Pulsuz 🚚</p>
                          </div>
                        </div>

                        <div className='box m-auto'>
                          <div className='spriteEarphone sprite'></div>
                          <div>
                            <h4>Dəstək</h4>
                            <p>Onlayn Chat 💬</p>
                          </div>
                        </div>
                        
                        <div className='box m-auto'>
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