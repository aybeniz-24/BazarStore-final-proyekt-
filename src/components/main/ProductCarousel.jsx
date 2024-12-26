import { useState, useEffect, useRef, useContext } from "react";
import { FreeMode, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import Popup from "./Popup";
import { BASKET } from "../context/BasketContext";
import { FAVORIT } from "../context/FavoritContext";

function ProductCarousel({ title, apiFunction, categoryIcon }) {
  const [products, setProducts] = useState([]);
  const [counts, setCounts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const { addToBasket } = useContext(BASKET)
  const { addToFavorit } = useContext(FAVORIT)

  
  const swiperRef = useRef(null);

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

  return (
    <div className="mx-8 my-4">
      <div className="relative flex sm:flex-col">
        <h2 className="text-2xl font-bold mb-5">
          {categoryIcon} {title}
        </h2>
      </div>

      <Swiper
        ref={swiperRef}
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        navigation={false}
        autoplay={{
            delay: 2000, // Slaydlar arasında 3 saniyə gözləmə
            disableOnInteraction: false, // İstifadəçi ilə qarşılıqlı təsirdən sonra autoplay davam etsin
          }}
          modules={[FreeMode, Navigation, Autoplay]}
        className="mySwiper"
      >
        {products.map((item, index) => (
          <SwiperSlide key={item.id} className="w-56 border border-gray-300 my-2 p-4 rounded-lg">
            <div className="w-[100%] group relative">
            <div className="relative group">
                <img
                    className="rounded-[5px]"
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
                <CiHeart className="bg-gray-200 hover:bg-green-500 hover:text-white rounded-full w-[30px] h-[30px] p-[5px] m-[3px] cursor-pointer" />
                <FaRegEye
                  className="bg-gray-200 hover:bg-green-500 hover:text-white rounded-full w-[30px] h-[30px] p-[5px] m-[3px] cursor-pointer"
                  onClick={() => handleIconClick(item)}
                />
              </div>
              {item.discountedPrice && (
                <p className="bg-yellow-400 px-3 py-1 text-sm rounded-md absolute top-0">
                  Endirim
                </p>
              )}
            </div>
            <div className="h-28 my-8 text-left">
              <p className="text-sm uppercase">{item.name}</p>
              <p className="font-bold text-sm">{item.discountedPrice || item.price}</p>
            </div>
            <div className="mb-5 flex justify-center items-center border border-gray-300 w-28 h-10">
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
              <button className="bg-gray-200 font-bold text-sm rounded-md py-2 px-6 flex items-center">
                <SlBasket className="mr-2" /> Səbətə At
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Popup isVisible={isPopupVisible} onClose={closePopup} product={selectedProduct} />
    </div>
  );
}

export default ProductCarousel;
