import { useState, useEffect, useRef, useContext } from "react";
import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import Popup from "./Popup";
import { BASKET } from "../context/BasketContext";
import { FAVORIT } from "../context/FavoritContext";
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";

function ProductCarousel({ title, apiFunction, categoryIcon }) {
  const [products, setProducts] = useState([]);
  const [counts, setCounts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const { addToBasket } = useContext(BASKET);
  const { addToFavorit, removeFromFavorit } = useContext(FAVORIT);

  const swiperRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    apiFunction().then((data) => {
      setProducts(data);
      setCounts(data.map(() => 1));
    });
  }, [apiFunction]);

  const updateCount = (index, newCount) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? newCount : count))
    );
  };

  const handleIconClick = (product) => {
    setSelectedProduct(product);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const [isLiked, setIsLiked] = useState(false);

  const toggleHeart = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="mx-8 my-4">
      <div className="relative flex sm:flex-col justify-between">
        <h2 className="text-2xl font-bold mb-2">
          {categoryIcon} {title}
        </h2>
        <div className="absolute top-[15px] right-[70px] flex items-center gap-2 z-10">
          <button
            className="swiper-button-prev bg-gray-200 p-2 rounded-full transform rotate-180 scale-[.8]"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
          </button>
          <button
            className="swiper-button-next bg-gray-200 p-2 rounded-full transform rotate-180 scale-[.8]"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
          </button>
        </div>
      </div>

      <Swiper
        onResize={() => swiperRef.current?.swiper.update()}
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={5}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Navigation, Autoplay]}
        className="mySwiper"
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}

      >
        {products.map((item, index) => (
          <SwiperSlide key={item.id} className="w-full sm:w-56 md:w-64 lg:w-72 xl:w-80 border border-gray-300 my-2 p-3 rounded-lgh-[450px]">
            <div className="w-[100%] group relative">
              <div className="relative group mb-4">
                <img
                  className="rounded-[5px] w-full h-auto"
                  src={item.img}
                  alt={item.name}
                />
                {item.hoverImg && (
                  <img
                    className="hoverImg rounded-[5px] absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    src={item.hoverImg}
                    alt={item.name}
                  />
                )}
              </div>
              <div className="absolute top-0 right-0 z-20 icon">
                <div onClick={toggleHeart} className="cursor-pointer">
                  {isLiked ?
                    <FaHeart onClick={(e) => {
                      e.preventDefault();
                      removeFromFavorit(item.id)
                    }}
                      className="bg-gray-200 hover:bg-[#b3b93d] hover:text-white rounded-full w-[30px] h-[30px] p-[5px] m-[3px] cursor-pointer"
                    /> :
                    <CiHeart
                      onClick={(e) => {
                        e.preventDefault();
                        addToFavorit(item.id, item.img, item.price, item.name, item.discountedPrice, item.quantity, item.marka, item.sku, item.count);
                      }}
                      className="bg-gray-200 hover:bg-[#b3b93d] hover:text-white rounded-full w-[30px] h-[30px] p-[5px] m-[3px] cursor-pointer"
                    />}
                </div>

                <FaRegEye
                  className="bg-gray-200 hover:bg-[#b3b93d] hover:text-white rounded-full w-[30px] h-[30px] p-[5px] m-[3px] cursor-pointer"
                  onClick={() => handleIconClick(item)}
                />
              </div>
              {item.discountedPrice && (
                <p className="bg-yellow-400 px-3 py-1 text-sm rounded-md absolute top-0">
                  Endirim
                </p>
              )}
            </div>
            <div className="mt-[30px] h-28 text-left">
              <div className="h-[40px]">
                <p className="text-[14px] uppercase">{item.name}</p>
              </div>
              <div className="flex flex-row gap-[10px] mt-[10px]">
                {item.discountedPrice ? (
                  <>
                    <p className="font-bold text-sm text-[#439e4a]">{item.discountedPrice}</p>
                    <p className="text-sm uppercase font-bold line-through text-[#838383]">{item.price}</p>
                  </>
                ) : (
                  <p className="font-bold text-sm text-[#439e4a]">{item.price}</p>
                )}
              </div>
            </div>
            {item.choose === true ? (
              <>
                <p className="text-left text-[14px] my-[8px] mx-[5px]">Miqdar</p>
                <div className="mb-2 flex justify-center items-center border border-gray-300 w-28 h-10">
                  <button
                    onClick={() => updateCount(index, counts[index] > 1 ? counts[index] - 1 : 1)}
                    className="cursor-pointer px-3"
                  >
                    -
                  </button>
                  <p className="mx-2">{counts[index]}</p>
                  <button
                    onClick={() => updateCount(index, counts[index] + 1)}
                    className="cursor-pointer px-3"
                  >
                    +
                  </button>
                </div>
                <div className="flex justify-start">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToBasket(
                        item.id,
                        item.img,
                        item.price,
                        item.name,
                        item.discountedPrice,
                        item.quantity,
                        item.marka,
                        item.sku,
                        counts[index]
                      );
                    }}
                    className="bg-gray-200 font-bold text-sm rounded-md py-2 px-6 flex items-center hover:text-white hover:bg-[#b3b93d]"
                  >
                    <SlBasket className="mr-2" /> Səbətə At
                  </button>
                </div>
              </>
            ) : (
              <Link to={`/choice?productId=${item.id}`}>
                <button className="bg-gray-200 font-bold text-sm rounded-md mt-[84px] py-2 px-6 flex items-center hover:text-white hover:bg-[#b3b93d]">
                  Seçim Edin
                </button>
              </Link>
            )}
          </SwiperSlide>
        ))}

      </Swiper>
      <Popup isVisible={isPopupVisible} onClose={closePopup} product={selectedProduct} />
    </div>
  );
}

export default ProductCarousel;
