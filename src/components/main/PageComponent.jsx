import React, { useContext, useEffect, useRef, useState } from 'react';
import { BASKET } from '../context/BasketContext';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaRegTrashCan } from 'react-icons/fa6';
import { FAVORIT } from "../context/FavoritContext"
import { SlBasket } from "react-icons/sl";
import ButtonSections from "./ButtonSections";
import { GoHome } from "react-icons/go";
import Advertising from "./Advertising";
import { IoIosInformationCircleOutline, IoMdClose } from "react-icons/io";
import data from '../../data/data.json'
import productData from '../../data/productCategoriesData.json';
import { CiDeliveryTruck } from 'react-icons/ci';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { IoReturnDownBack } from 'react-icons/io5';
import { MdOutlineZoomIn } from 'react-icons/md';


function PageComponent() {
  const { basket, updateCount, addToBasket, removeFromBasket } = useContext(BASKET);
  const { favorites, addToFavorit, removeFromFavorit } = useContext(FAVORIT)

  const navigate = useNavigate();
  const location = useLocation();


  const meat = [
    { id: 1, name: "SİYƏZƏN D.T TƏZƏ FİLE AÇIQ KQ", price: "7.19 ₼", img: "https://bazarstore.az/cdn/shop/files/98b514e78a7eb3d82323968ccc908758_100x.jpg?v=1736156000" },
    { id: 2, name: "MƏRCAN TƏZƏ TOYUQ PAKET KQ", price: "7.50 ₼", img: "https://bazarstore.az/cdn/shop/files/b4a747abc2a48762beff344302619a79_100x.webp?v=1736146988" },
    { id: 3, name: "MƏRCAN TƏZƏ TOYUQ FİLE KQ", price: "2.39 ₼", img: "https://bazarstore.az/cdn/shop/files/ad3e3dd6af6f217f66f4b596bdb5dbb4_100x.webp?v=1736146273" },
    { id: 4, name: "SİYƏZƏN D.T TƏZƏ YAŞIL PAKET KQ", price: "4.99 ₼", img: "https://bazarstore.az/cdn/shop/files/07586faac76777e91d272f3296018b9e_100x.webp?v=1736147009" },
  ]


  const titles = {
    "/favorit": "Seçilmişlər",
    "/basket": "Səbət",
    "/login": "Login",
  };

  const getPageTitle = () => {
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get("productId");

    if (location.pathname === "/choice") {
      let productName = "";

      for (const category in data) {
        const product = data[category].find((item) => item.id === Number(productId));
        if (product) {
          productName = ` | ${product.name}`;
          break;
        }
      }

      return `Seçim Edin${productName}`;
    }

    return titles[location.pathname] || "";
  };


  const getProductData = () => {
    const queryParams = new URLSearchParams(location.search);
    const productId = queryParams.get("productId");

    if (productId) {
      for (const category in data) {
        const product = data[category].find((item) => item.id === Number(productId));
        if (product) {
          return product;
        }
      }
    }

    return null;
  };

  const product = getProductData();

  const totalPrice = basket.reduce((acc, item) => {
    const price = !isNaN(parseFloat(item.name)) ? parseFloat(item.name) :
      (!isNaN(parseFloat(item.price)) ? parseFloat(item.price) : 0);
    const quantity = !isNaN(parseInt(item.quantity)) ? parseInt(item.quantity) : 1;

    return acc + price * quantity;
  }, 0);

  const discountedPrice = basket.reduce((acc, item) => {
    const price = item.discountedPrice && !isNaN(parseFloat(item.discountedPrice)) ? parseFloat(item.discountedPrice) : 0;
    const quantity = !isNaN(parseInt(item.quantity)) ? parseInt(item.quantity) : 1;

    return acc + price * quantity;
  }, 0);


  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (discountedPrice >= 35 && discountedPrice <= 40) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [discountedPrice]);




  const [selected, setSelected] = useState("250g");
  const [count, setCount] = useState(1);

  const addToBasket1 = (id, img, price, name, discountedPrice, quantity, marka, sku, count) => {
    const basket = JSON.parse(localStorage.getItem("basket")) || [];

    const newItem = { id, img, price, name, discountedPrice, quantity, marka, sku, count };

    const existingItemIndex = basket.findIndex(item => item.id === id);
    if (existingItemIndex !== -1) {
      basket[existingItemIndex].count += count;
    } else {
      basket.push(newItem);
    }

    localStorage.setItem("basket", JSON.stringify(basket));
  };

  const [deliveryOpen, setDeliveryOpen] = useState(false);
  const [returnPolicyOpen, setReturnPolicyOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);


  const [zoom, setZoom] = useState({ x: 0, y: 0 });
  const [isZoomActive, setIsZoomActive] = useState(false);

  const handleMouseMove = (e) => {
    if (!isZoomActive) return;
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoom({ x, y });
  };

  const toggleZoom = () => {
    setIsZoomActive((prev) => !prev);
  };


  return (
    <>
      <ButtonSections />

      <div className='bg-[#f0f0f0] py-[25px] mb-[20px]'>
        <div className='md:mx-[8%] mx-[2%] m-[5px] mr-[5px] flex justify-start items-center '>
          <p>
            <Link to="/">
              <GoHome className="inline text-[26px] mr-[8px] cursor-pointer" />
            </Link>
            | </p>
          <Link to="/favorit">
            <p className="inline text-[18px] ml-[10px] hover:text-[#b3b93d]">{getPageTitle()}</p>
          </Link>
        </div>
      </div>

      <div>

        {/* choice page  */}
        {location.pathname === "/choice" && product && (
          <>
            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xlg:flex-row md:mx-[8%] mx-[2%] lg:h-[600px] xlg:h-[600px] ">
              <div
                className="w-[100%] sm:h-[400px] md:h-[500px] lg:h-[500px] xlg:h-[500px] p-[20px] border border-[#f0f0f0] flex justify-center items-center overflow-hidden"
                onMouseMove={handleMouseMove}
              >

                <div className="relative w-full sm:h-[400px] md:h-[500px] lg:h-[500px] xlg:h-[500px] p-[20px] border border-[#f0f0f0] flex justify-center items-center overflow-hidden">
                  <div
                    className={`absolute w-full h-full transition-all ${isZoomActive ? "z-20" : "z-10"
                      }`}
                    style={{
                      backgroundImage: `url(${product.img})`,
                      backgroundPosition: `${zoom.x}% ${zoom.y}%`,
                      backgroundSize: isZoomActive ? "200%" : "100%",
                      backgroundRepeat: "no-repeat",
                      visibility: isZoomActive ? "visible" : "hidden",
                      transition: "background-position 0.2s ease-out",
                    }}
                    onMouseMove={handleMouseMove}
                  />
                  <img
                    src={product.img}
                    alt={product.name}
                    className={`xlg:w-[480px] xlg:h-[450px] object-cover transition-all ${isZoomActive ? "opacity-0" : "opacity-100" 
                      }`}
                  />
                  <div
                    onClick={toggleZoom}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg cursor-pointer z-30"
                  >
                    <MdOutlineZoomIn size={30} color="#333" />
                  </div>
                  {isZoomActive && (
                    <div className="absolute bottom-4 left-4 p-2 bg-black text-white text-sm rounded">
                      Zoom Aktivdir
                    </div>
                  )}
                </div>
              </div>


              <div className="pl-[20px] my-[20px]">
                <p className="uppercase text-[16px] lg:text-[22px] xlg:text-[22px]">{product.name}</p>

                <div className="flex gap-[20px]">
                  {product.discountedPrice ? (
                    <>
                      <p className="text-[#439e4a] text-[18px] my-[10px] font-bold">{product.discountedPrice}</p>
                      <p className="text-[#838383] text-[18px] my-[10px] font-bold line-through">{product.price}</p>
                    </>
                  ) : (
                    <p className="text-[#439e4a] text-[18px] my-[10px] font-bold">{product.price}</p>
                  )}
                </div>

                <p className="pb-[20px] border-b-[2px] border-b-[#f0f0f0] sm:text:[14px] md:text-[16px] lg:[18px] xlg:[20px] text-[12px]">
                  <span className="uppercase">{product.marka}</span> brendinin <span className="uppercase">{product.name}</span> məhsulunu indi əldə etmək üçün alış-verişə başlaya bilərsiniz.
                </p>


                <div className="flex gap-[30px] my-[20px]">
                  <div>
                    <p className="font-bold sm:text:[14px] md:text-[16px] lg:[18px] xlg:[18px] text-[12px] my-[5px]">Marka</p>
                    <p className="font-bold sm:text:[14px] md:text-[16px] lg:[18px] xlg:[18px] text-[12px] my-[5px]">Sku</p>
                    <p className="font-bold sm:text:[14px] md:text-[16px] lg:[18px] xlg:[18px] text-[12px] my-[5px]">Mövcudluq</p>
                  </div>
                  <div>
                    <p className="sm:text:[14px] md:text-[16px] lg:[18px] xlg:[18px] text-[12px] my-[5px]">: {product.marka}</p>
                    <p className="sm:text:[14px] md:text-[16px] lg:[18px] xlg:[18px] text-[12px] my-[5px]">: {product.sku}</p>
                    <p className="sm:text:[14px] md:text-[16px] lg:[18px] xlg:[18px] text-[12px] my-[5px]">: Mövcuddur</p>
                  </div>
                </div>

                <div className="border-b border-[#e1e1e1] rounded w-full mt-[20px] py-[10px]">
                  <p
                    onClick={() => setDeliveryOpen(!deliveryOpen)}
                    className="flex items-center justify-between cursor-pointer text-lg"
                  >
                    <span className="flex items-center sm:text:[16px] md:text-[20px] lg:[25px] xlg:[25px] text-[12px]">
                      <CiDeliveryTruck className="mr-4 text-[25px]" /> Çatdırılma və Ödəniş
                    </span>
                    <RiArrowDropDownLine
                      className={`transition-transform text-[25px] ${deliveryOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </p>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out w-full ${deliveryOpen ? "max-h-[500px]" : "max-h-0"}`}
                  >
                    <p className="mt-2 text-gray-600">
                      Çatdırılma, sifarişi rəsmiləşdirkən qrafikdə seçdiyiniz saata uyğun olaraq yerinə yetirilir. Qrafikdə qeyd edilən çatdırılma saatlarına sifariş qəbulu 1 saat öncədən bağlanır. Ödənişi nağd və bank kartları (pos-terminal) ilə sifariş çatdırılan zaman edə bilərsiniz.
                    </p>
                  </div>
                </div>

                <div className="border-b border-[#e1e1e1] rounded w-full py-[10px] my-[20px]">
                  <p
                    onClick={() => setReturnPolicyOpen(!returnPolicyOpen)}
                    className="flex items-center justify-between cursor-pointer text-lg"
                  >
                    <span className="flex items-center sm:text:[16px] md:text-[20px] lg:[25px] xlg:[25px] text-[10px]">
                      <IoReturnDownBack className="mr-4 text-[25px]" /> Geri Qaytarma Şərtləri
                    </span>
                    <RiArrowDropDownLine
                      className={`transition-transform text-[25px] ${returnPolicyOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </p>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out w-full ${returnPolicyOpen ? "max-h-[500px]" : "max-h-0"}`}
                  >
                    <p className="mt-2 text-gray-600">
                      Sifariş olunan məhsulları alış-veriş etdiyiniz gündən 14 gün ərzində qəbzdə göstərilən Bazarstore MMC şöbəsində dəyişə və ya qaytara bilərsiniz. Mağazaya gələrkən məhsul və qəbz ilə yaxınlaşmağınızı xahiş edirik. Qəbz olmadan məhsul geri qaytarılmır.
                    </p>
                    <p className="mt-2 text-gray-600">
                      Əgər məhsul müştəriyə çatdırılan anda son istifadə tarixi keçməmişdirsə, qablaşdırmasında ciddi qüsur yoxdursa, o zaman məhsulun çatdırılma anında kuryerə geri qaytarılması mümkün deyil.
                    </p>
                  </div>
                </div>

                <div className="border-b border-[#e1e1e1] rounded w-full py-[10px] my-[20px]">
                  <p
                    onClick={() => setInfoOpen(!infoOpen)}
                    className="flex items-center justify-between cursor-pointer text-lg"
                  >
                    <span className="flex items-center sm:text:[16px] md:text-[20px] lg:[25px] xlg:[25px] text-[12px]">
                      <IoIosInformationCircleOutline className="mr-4 text-[25px]" /> Məlumat Və Qaydalar
                    </span>
                    <RiArrowDropDownLine
                      className={`transition-transform text-[25px] ${infoOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </p>
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ease-in-out w-full ${infoOpen ? "max-h-[500px]" : "max-h-0"}`}
                  >
                    <p className="mt-2 text-gray-600">
                      Malların sifarişi, satışı və çatdırılması qaydası haqqında razılaşma, məlumat və qaydaları bu linkdən öyrənə bilərsiniz.
                    </p>
                  </div>
                </div>
              </div>

            </div>
            <div className='md:mx-[8%] mx-[2%] mb-[40px]'>
              <div className='bg-[#b3b93d] w-[100px] text-[20px] text-center text-white py-[10px] rounded-top'>Təsvir</div>
              <div className=' border-[2px] border-[#f0f0f0] p-[15px] rounded-[8px]'>
                <p className="p-[20px] ">
                  <span className="uppercase">{product.marka}</span> brendinin <span className="uppercase">{product.name}</span> məhsulunu indi əldə etmək üçün alış-verişinizi başlaya bilərsiniz.
                </p>
                <p className="px-[20px] ">
                  {product.marka}-də <span className="uppercase">{product.name}</span> ilə yanaşı, diger məhsullarını da araşdıra bilərsiniz!
                </p>
              </div>
            </div>

          </>
        )}


        {/* basket page  */}
        {location.pathname === "/basket" && (
          <>
            <div className="md:mx-[8%] mx-[2%]  ">
              {basket && basket.length > 0 ? (
                <table className="w-full text-center border-collapse my-5 mt-12">
                  <thead>
                    <tr className="border-b">
                      <th className="w-1/2 py-4 sm:w-1/2 md:w-1/2 lg:w-2/5">Məhsul</th>
                      <th className="w-1/2 py-4 sm:w-1/2 md:w-1/2 lg:w-1/6">Qiymət</th>
                      <th className="hidden lg:table-cell lg:w-3/10 py-4">Miqdar</th>
                      <th className="hidden lg:table-cell lg:w-1/6 py-4">Ümumi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {basket.map((item, index) => (
                      <tr key={item.id} className="bg-white hover:bg-gray-100 border-b">
                        <td className="py-4">
                          <div className="flex flex-col md:flex-row justify-start items-center md:items-start">
                            <img className="w-[80px] rounded-[5px] mb-2 md:mb-0" src={item.img} alt={item.name} />
                            <div className="md:ml-4 text-center md:text-left">
                              <p className="text-[15px] uppercase">{item.name}</p>
                              <p className="text-[15px]">{item.price}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          {item.discountedPrice ? (
                            <div className="flex flex-col text-center md:text-left">
                              <p className="text-[14px] text-[#9b9b9b] line-through">{item.name}</p>
                              <p className="text-[14px] text-[#439e4a]">{item.discountedPrice}</p>
                            </div>
                          ) : (
                            <p className="font-bold text-[14px] text-center md:text-left">{item.name}</p>
                          )}
                        </td>
                        <td className="py-4">
                          <div className="flex flex-col md:flex-row justify-center items-center">
                            <div className="flex justify-center items-center border-[1px] border-[#e8e8e8] w-[100px] h-[40px] mb-2 md:mb-0">
                              <button
                                onClick={() => {
                                  const newQuantity = item.quantity > 1 ? item.quantity - 1 : 0;
                                  updateCount(index, newQuantity);
                                }}
                                className="cursor-pointer p-[13px]"
                              >
                                -
                              </button>
                              <p className="mx-[10px]">{item.quantity}</p>
                              <button
                                onClick={() => updateCount(index, item.quantity + 1)}
                                className="cursor-pointer p-[13px]"
                              >
                                +
                              </button>
                            </div>
                            <button className="p-2 bg-[#b3b93d] hover:bg-[#1e1e1e] rounded">
                              <FaRegTrashCan
                                onClick={() => removeFromBasket(item.id)}
                                className="text-white text-[20px] m-[2px]"
                              />
                            </button>
                          </div>
                        </td>
                        <td className="py-4 hidden lg:table-cell">
                          {item.discountedPrice ? (
                            <div className="flex flex-col">
                              <p className="font-bold text-[14px] text-[#9b9b9b] line-through">
                                {((parseFloat(item.name) || 0) * (parseInt(item.quantity) || 1)).toFixed(2)} ₼
                              </p>
                              <p className="font-bold text-[14px] text-[#439e4a]">
                                {((parseFloat(item.discountedPrice) || 0) * (parseInt(item.quantity) || 1)).toFixed(2)} ₼
                              </p>
                            </div>
                          ) : (
                            <p className="font-bold text-[14px]">
                              {((parseFloat(item.name) || 0) * (parseInt(item.quantity) || 1)).toFixed(2)} ₼
                            </p>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </table>
              ) : (
                <div className="my-[140px] w-full mx-auto text-center">
                  <div className="w-[100px] h-[100px] mx-auto">
                    <svg class="icon icon-empty-cart" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320.000000 258.000000" preserveAspectRatio="xMidYMid meet">
                      <g transform="translate(0.000000,258.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                        <path d="M58 2568 c-25 -21 -28 -46 -9 -69 16 -20 39 -25 207 -46 103 -12 191
                  -26 195 -30 4 -5 57 -298 119 -653 62 -355 134 -773 162 -930 27 -156 54 -290
                  60 -297 7 -9 56 -13 161 -15 127 -3 152 -5 155 -18 2 -10 -10 -20 -31 -28 -63
                  -23 -113 -68 -142 -126 -24 -48 -27 -65 -23 -125 5 -88 42 -152 112 -196 42
                  -25 61 -30 125 -33 67 -2 82 1 126 25 98 55 148 164 125 269 -19 84 -82 158
                  -158 185 -21 7 -32 18 -32 30 0 18 18 19 670 19 596 0 670 -2 670 -15 0 -9
                  -19 -24 -43 -34 -125 -54 -184 -180 -146 -315 15 -53 100 -138 155 -154 218
                  -64 405 150 304 348 -24 47 -88 104 -134 121 -23 8 -36 19 -36 31 0 16 12 18
                  133 18 117 0 136 2 150 18 21 23 22 46 1 66 -14 14 -122 16 -1039 16 l-1023 0
                  -11 68 c-7 37 -14 75 -17 85 -5 16 50 17 1060 17 954 0 1066 2 1080 16 9 8 16
                  17 16 20 0 2 43 295 95 650 52 355 95 656 95 669 0 13 -6 27 -12 32 -7 4 -591
                  10 -1297 13 l-1284 5 -28 149 c-15 82 -32 153 -38 159 -8 8 -362 60 -452 67
                  -3 0 -12 -6 -21 -12z m3027 -490 c-2 -13 -41 -270 -85 -573 -44 -302 -83 -562
                  -86 -577 l-6 -28 -1044 0 -1044 0 -5 23 c-2 12 -48 270 -100 572 -52 303 -98
                  562 -101 578 l-6 27 1241 0 1241 0 -5 -22z m-1857 -1704 c43 -25 65 -63 70
                  -118 3 -41 -1 -58 -20 -86 -61 -90 -185 -91 -245 -1 -43 64 -23 158 42 201 37
                  24 116 27 153 4z m1449 -4 c47 -28 66 -72 61 -137 -9 -106 -113 -164 -207
                  -115 -47 23 -72 61 -78 114 -6 53 12 93 57 132 40 33 118 36 167 6z"></path>
                        <path d="M1550 1730 c-30 -30 -27 -83 6 -109 43 -34 86 -24 112 26 18 32 15
                  51 -13 78 -30 31 -77 33 -105 5z"></path>
                        <path d="M2050 1730 c-33 -33 -30 -75 6 -107 34 -31 60 -29 96 7 24 25 29 36
                  24 58 -14 58 -86 82 -126 42z"></path>
                        <path d="M1735 1450 c-125 -50 -232 -204 -165 -240 27 -14 44 -3 79 52 103
                  162 326 155 411 -13 11 -20 27 -39 36 -43 21 -8 64 19 64 40 0 48 -90 153
                  -165 192 -69 35 -188 41 -260 12z"></path>
                      </g>
                    </svg>
                  </div>
                  <p className="text-center  text-[22px] my-[25px]" >Səbətiniz boşdur</p>
                  <Link to="/" >
                    <button className=" cursor-pointer text-white font-bold bg-[#b3b93d] hover:bg-[#1e1e1e] text-[18px] px-[50px] py-[15px] rounded-[5px]"> Alış-verişə Davam Edin </button>
                  </Link>
                </div>
              )}
            </div>
            <div className="md:mx-[8%] mx-[2%] flex  xlg:justify-between lg:justify-between text-[#1e1e1e] md:flex-col  sm:flex-col flex-col lg:flex-row xlg:flex-row">


              <div>
                <p className='my-[20px] '> 📑 Sifariş üçün xüsusi təlimatlar varmı?</p>
                <div className='my-[5px] '>
                  <textarea
                    className='border-[#7e7e7e] border xlg:w-[80%] lg:w-[80%] md:w-[100%] sm:w-[100%] w-[100%] h-[100px] p-2 resize-none outline-none'
                    placeholder='Your note here'
                  ></textarea>
                </div>
                <div className='border-[#7e7e7e] border my-[10px] p-[10px] xlg:w-[80%] lg:w-[80%] md:w-[100%] sm:w-[100%] w-[100%]'>
                  <p className='p-[5px] mb-[25px] px-[10px] font-bold'>Almaq istədiyiniz məhsullardan hər hansı biri bitmişsə nə etməliyik? Zəhmət olmasa seçin.</p>
                  <div className="my-[5px]">
                    <p className="mb-[10px] px-[10px]">
                      <label className="cursor-pointer">
                        <input type="radio" name="option" /> Mənə zəng edin.
                      </label>
                    </p>
                    <p className="mb-[10px] px-[10px]">
                      <label className="cursor-pointer">
                        <input type="radio" name="option" /> Əvəzedici məhsul qoyun.
                      </label>
                    </p>
                    <p className="mb-[10px] px-[10px]">
                      <label className="cursor-pointer">
                        <input type="radio" name="option" /> Olmayan məhsulu ləğv edin.
                      </label>
                    </p>
                  </div>
                </div>
                <div className='border-[#7e7e7e] border mb-[50px] p-[10px]  xlg:w-[80%] lg:w-[80%] md:w-[100%] sm:w-[100%] w-[100%] '>
                  <p className='px-[10px]'>
                    Bonuslarınızdan istifadə etmək istəyirsinizsə, aşağıdakı qutunu işarələyərək bonuslarınızı bu qaydada istifadə edə bilərsiniz.
                    <p className=' my-[15px] '>Bonuslarınız üçün
                      <Link to="/login" className='underline font-bold underline-offset-4 hover:decoration-[#b3b93d]   hover:text-[#b3b93d] '> daxil olun.</Link>
                    </p>
                  </p>
                </div>
              </div>

              <div className='xlg:w-[90%] lg:w-[90%] md:w-[100%] sm:w-[100%] w-[100%] mb-[40px]'>
                <div className='w-[100%] flex flex-col items-center sm:items-center md:items-center lg:items-end xlg:items-end'>
                  <div className='flex  gap-[30px] my-[20px]'>
                    <p className='text-[20px]'> Ara cəmi </p>
                    <p className='font-bold text-[20px] text-gray-500 line-through'>{totalPrice.toFixed(2)} ₼</p>
                    <p className='font-bold text-[20px] text-green-500'>{discountedPrice.toFixed(2)} ₼</p>
                  </div>
                  <p className='text-right my-[20px] mb-[30px] '> Vergi daxildir. Çatdırılma xərci ödəniş səhifəsində hesablanır.</p>

                  <button
                    onClick={() => {
                      if (discountedPrice >= 30 && discountedPrice <= 40) {
                        setShowPopup(true);
                      } else if (discountedPrice > 40) {
                        navigate("/login");
                      }
                    }}
                    className="w-[100%] sm:w-[100%] md:[100%] lg:w-[400px] xlg:w-[400px] bg-[#b3b93d] hover:bg-[#1e1e1e] text-white py-[15px] px-[50px] font-bold rounded-[5px] mb-[20px]"
                  >
                    {discountedPrice > 40 ? "Ödəniş" : "Redaktə Gözlənilir"}
                  </button>

                  {showPopup && (
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                      <div className="bg-white p-5 rounded shadow-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%]">
                        <p className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-center">
                          ⚠️ Zəhmət olmasa qeyd edilən dəyişiklikləri səbətinizə tətbiq edin:
                        </p>
                        <p className="p-[20px] sm:p-[25px] md:p-[30px] text-[14px] sm:text-[16px] md:text-[18px] text-center">
                          • Səbətinizin məbləği ən azı 40 ₼ olmalıdır.
                        </p>
                        <div className="flex items-end justify-end">
                          <button
                            onClick={() => setShowPopup(false)}
                            className="mt-3 text-white py-2 px-4 rounded bg-[#b3b93d] hover:bg-[#9aa832] transition-all"
                          >
                            OK
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  <Link to="/" >
                    <p className=" text-center cursor-pointer underline underline-offset-4 hover:decoration-[#b3b93d]  hover:text-[#b3b93d]  text-[18px]"> Alış-verişə Davam Edin </p>
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}


        {/* favori page  */}
        {location.pathname === "/favorit" && (
          <>
            <div className="md:mx-[8%] flex flex-col lg:flex-row justify-between">
              <div className="w-full lg:w-[25%] hidden sm:hidden md:hidden lg:block xlg:block">
                <div className="rounded-[5px] flex flex-col mb-[50px] border border-[#eee]">
                  <div className="bg-[#f0f0f0] rounded-t-lg">
                    <p className="font-bold text-[20px] p-[20px]">Həftənin endirimləri🎯</p>
                  </div>
                  <div>
                    {meat.map((item) => (
                      <div key={item.id} className="flex p-[15px]">
                        <div className="w-[80px] h-[60px] mx-[10px]">
                          <img className="object-cover w-full h-full rounded-md" src={item.img} alt={item.name} />
                        </div>
                        <div className='ml-[15px]'>
                          <p className="">{item.name}</p>
                          <p className="my-[10px] text-[#439e4a] font-bold">{item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='mx-[10px] mb-[5px]'>
                    <p className="px-[20px] py-[10px] underline hover:text-[#b3b93d] hover:unde cursor-pointer">
                      Hamısına Bax
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[73%] flex flex-wrap gap-[10px] justify-center items-center ">
                {favorites && favorites.length > 0 ? favorites.map((item, index) => {
                  return (
                    <div key={item.id} className="group relative border-[1px] border-[#e5e5e5] rounded-[10px] w-[210px] h-[500px] m-[5px] mb-[20px]">
                      <img className="rounded-[5px] p-[5px]" src={item.img} alt={item.name} />
                      <div className="absolute top-0 right-0 z-20 icon">
                        <IoMdClose
                          onClick={() => removeFromFavorit(item.id)}
                          className="text-black hover:text-[#b3b93d] rounded-full w-[35px] h-[35px] p-[5px] m-[3px] cursor-pointer"
                        />
                      </div>
                      {item.discountedPrice && (
                        <p className="bg-[#fed504] m-[10px] px-[10px] py-[5px] text-[12px] rounded-[5px] absolute top-0">Endirim</p>
                      )}
                      <div className="h-[20px] m-[13px] my-[30px] text-left">
                        <div className="h-[70px]">
                          <p className="text-[15px] my-[5px]">{item.marka}</p>
                          <p className="text-[15px] uppercase my-[5px[">{item.price}</p>
                        </div>
                        {item.discountedPrice ? (
                          <div className="flex gap-3 my-[8px]">
                            <p className="font-bold text-[14px] text-[#439e4a]">{item.discountedPrice}</p>
                            <p className="font-bold text-[14px] text-[#9b9b9b] line-through">{item.name}</p>
                          </div>
                        ) : (
                          <p className="font-bold text-[14px] mt-[10px]">{item.name}</p>
                        )}
                      </div>

                      {item.quantity > 0 ? (
                        <div className="block mt-[100px] m-[10px]">
                          <p className="text-[14px] text-left mb-[8px]">Miqdar</p>
                          <div className="mb-[20px] flex justify-center items-center border-[1px] border-[#e8e8e8] w-[100px] h-[40px]">
                            <button onClick={() => updateCount(index, item.quantity > 1 ? item.quantity - 1 : 1)} className="cursor-pointer p-[13px]">-</button>
                            <p className="mx-[10px]">{item.quantity}</p>
                            <button onClick={() => updateCount(index, item.quantity + 1)} className="cursor-pointer p-[13px]">+</button>
                          </div>
                          <div className="flex justify-start">
                            <button className="flex justify-center items-center bg-[#e8e8e8] font-bold text-[14px] rounded-[6px] py-[8px] px-[30px] group-hover:text-white group-hover:bg-[#b3b93d]">
                              <SlBasket className="inline-block" /> <p className="inline-block ml-[10px]">Səbətə At</p>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="block">
                          <div className="mt-[100px] mb-[40px] m-[5px] flex justify-start">
                            <button className="bg-[#e8e8e8] mt-[90px] font-bold text-[14px] rounded-[6px] py-[8px] px-[20px] group-hover:text-white group-hover:bg-[#b3b93d]">
                              Seçim Et
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }) :
                  <div className="mt-[150px] w-full mx-auto">
                    <p className="text-center font-bold text-[26px] mb-[20px]" >Sevimli məhsul tapılmadı 💔</p>
                    <Link to="/" >
                      <p className=" text-center cursor-pointer underline underline-offset-4 hover:decoration-[#b3b93d] text-[18px]"> Alış-verişə Davam Edin </p>
                    </Link>
                  </div>
                }
              </div>
            </div>



          </>
        )}


        {/* login page */}
        {location.pathname === "/login" && (
          <div className="flex flex-col justify-center items-center w-[90%] sm:w-[500px] mx-auto my-[50px] sm:my-[100px] border border-[#e5e5e5] rounded-[5px]">
            <p className="text-[20px] sm:text-[24px] my-[15px] sm:my-[20px]">🔐 Daxil Olun</p>
            <input className="w-[80%] sm:w-[70%] p-[6px] my-[8px] border border-[#5e5e5e] rounded-[5px] outline-none" type="email" placeholder="E-poçt" />
            <input className="w-[80%] sm:w-[70%] p-[6px] my-[8px] border border-[#5e5e5e] rounded-[5px] outline-none" type="password" placeholder="Parol" />
            <div className="flex flex-col sm:flex-row justify-between gap-[20px] sm:gap-[30px] my-[20px] sm:my-[30px]">
              <button className="bg-[#b3b93d] hover:bg-[#1e1e1e] text-white font-bold rounded-[5px] px-[10px] p-[8px]">Daxil Olun</button>
              <button className="bg-[#e7e7e7] text-black rounded-[5px] px-[10px] p-[8px]">Hesab Yarat</button>
            </div>
          </div>
        )}

      </div>
    </>
  );
}

export default PageComponent;
