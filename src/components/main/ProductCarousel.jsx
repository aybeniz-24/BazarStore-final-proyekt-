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

function ProductCarousel({ title, apiFunction, categoryIcon }) {
  const [products, setProducts] = useState([]);
  const [counts, setCounts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const { addToBasket } = useContext(BASKET)
  const { addToFavorit } = useContext(FAVORIT)

  
  const swiperRef = useRef(null);


  const navigate = useNavigate(); // useNavigate hook-u çağırılır

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




  const [loadingStates, setLoadingStates] = useState({}); // Yüklənmə vəziyyətini saxlayır

  const handleClick = (e, item, id) => {
    e.preventDefault();
    setLoadingStates((prev) => ({ ...prev, [id]: true })); // Yüklənmə animasiyasını aktivləşdirir

    // 1 saniyəlik gecikmə ilə səbətə əlavə edir
    setTimeout(() => {
      if (item) {
        addToBasket(
          item.id,
          item.img,
          item.price,
          item.name,
          item.discountedPrice,
          item.quantity,
          item.marka,
          item.sku,
          counts[id]
        );
      }
      setLoadingStates((prev) => ({ ...prev, [id]: false })); // Yüklənməni dayandırır
    }, 500);
  };
  



















  // 'Seçim Edin' düyməsinin click hadisəsi
  const handleClick1 = (e, item, id) => {
    e.preventDefault();
    setLoadingStates((prev) => ({ ...prev, [item.id]: true })); // Yüklənmə animasiyasını aktivləşdirir

    // 1 saniyəlik gecikmə ilə yönləndirməni başlat
    setTimeout(() => {
      if (id === 'selectOption') {
        // `item.id`-yə əsasən düzgün səhifəyə yönləndirmə
        navigate(`/choice?productId=${item.id}`);
      }
      setLoadingStates((prev) => ({ ...prev, [item.id]: false })); // Yüklənməni dayandırır
    }, 500); // 1 saniyə sonra yönləndirir
  };

  
  return (
    <div className="mx-8 my-4">
      <div className="relative flex sm:flex-col  justify-between">
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
        ref={swiperRef}
        slidesPerView={4}
        spaceBetween={20}
        freeMode={true}
        navigation={false}
        autoplay={{
            delay: 10000, // Slaydlar arasında 3 saniyə gözləmə
            disableOnInteraction: false, // İstifadəçi ilə qarşılıqlı təsirdən sonra autoplay davam etsin
          }}
          modules={[FreeMode, Navigation, Autoplay]}
        className="mySwiper"
      >
        {products.map((item, index) => (
          <SwiperSlide key={item.id} className="w-56 border border-gray-300 my-2 p-3 rounded-lgh-[450px]">
            <div className="w-[100%] group relative">
            <div className="relative group mb-4">
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
                <CiHeart 
                onClick={(e) => {
                  e.preventDefault();
                  addToFavorit(item.id, item.img, item.price, item.name, item.discountedPrice, item.quantity, item.marka, item.sku, item.count);
                }}
                className="bg-gray-200 hover:bg-[#b3b93d] hover:text-white rounded-full w-[30px] h-[30px] p-[5px] m-[3px] cursor-pointer" 
                />
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
            <div className="h-28  text-left">
              <p className="text-sm uppercase">{item.name}</p>
              <p className="text-sm uppercase">{item.price}</p>
              <p className="font-bold text-sm">{item.discountedPrice || item.price}</p>
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
        key={item.id}
        onClick={(e) => handleClick(e, item, item.id)} // Funksiyaya `item` və `id` göndərilir
        className={`bg-gray-200 font-bold text-sm rounded-md py-2 px-6 flex items-center ${
          loadingStates[item.id] ? "cursor-not-allowed opacity-75" : "hover:text-white hover:bg-[#b3b93d]"
        }`}
        disabled={loadingStates[item.id]} // Yüklənmə zamanı düymə deaktiv edilir
      >
        {loadingStates[item.id] ? (
          <svg
            className="animate-spin h-5 w-5 mr-2 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        ) : (
          <SlBasket className="mr-2" />
        )}
        {loadingStates[item.id] ? "Yüklənir..." : "Səbətə At"}
      </button>
                    </div>
                </>
                ) : (
               



                    <Link to={`/choice?productId=${item.id}`}>
                <button
      onClick={(e) => handleClick1(e, item, 'selectOption')} // `id` olaraq "selectOption" verilir
      className={`bg-gray-200 font-bold text-sm rounded-md mt-[84px] py-2 px-6 flex items-center ${
        loadingStates[item.id] ? "cursor-not-allowed opacity-75" : "hover:text-white hover:bg-[#b3b93d]"
      }`}
      disabled={loadingStates[item.id]} // Yüklənmə zamanı düymə deaktiv edilir
    >
      {loadingStates[item.id] ? (
        <svg
          className="animate-spin h-5 w-5 mr-2 text-gray-800"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      ) : null}
      {loadingStates[item.id] ? "Yüklənir..." : "Seçim Edin"}
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
