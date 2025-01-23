import '../../App.css'
import { faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductsBySubId } from "../../services/api";
import { FaRegEye, FaSearch } from "react-icons/fa";
import { BASKET } from "../context/BasketContext";
import Loading from "./Loading";
import { Pagination } from "antd";
import ButtonSections from "./ButtonSections";
import Advertising from "./Advertising";
import data from '../../data/data.json'
import advertisingImage1 from '../../assets/advertising/advertising1.webp';
import advertisingImage2 from '../../assets/advertising/advertising2.webp';
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { GoHome } from "react-icons/go";
import { DATA } from '../context/DataContext';
import { HiBars2, HiBars3, HiBars4 } from "react-icons/hi2";


function ProductSelect() {

  const [productData, setProductData] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  // const { catname, subId } = useParams();
  const { catname, subname, subId, categoryName } = useParams();

  const { addToBasket } = useContext(BASKET);
  const [totalPages, setTotalPages] = useState(1);



  const [columns, setColumns] = useState(4); // Default olaraq 4 sütun
  const [activeColumn, setActiveColumn] = useState(4); // Varsayılan olaraq 4 sütun aktiv

  const handleColumnChange = (newColumns) => {
    if (newColumns >= 1 && newColumns <= 4) {
      setColumns(newColumns);
      setActiveColumn(newColumns); // Yeni sütun aktiv edirik
    }
  };

  // Ekran ölçüsünə görə avtomatik sütun dəyişməsi
  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        setColumns(1); // Kiçik ekranlarda 1 sütun
        setActiveColumn(1);
      } else if (width <= 900) {
        setColumns(2); // Orta ekranlarda 2 sütun
        setActiveColumn(2);
      } else if (width <= 1200) {
        setColumns(3); // Böyük ekranlarda 3 sütun
        setActiveColumn(3);
      } else {
        setColumns(4); // Ən böyük ekranlarda 4 sütun
        setActiveColumn(4);
      }
    };

    // Səhifə yükləndikdə və pəncərə ölçüsü dəyişdikdə sütunları yeniləyirik
    updateColumns();
    window.addEventListener('resize', updateColumns);

    // Təmizləmə
    return () => {
      window.removeEventListener('resize', updateColumns);
    };
  }, []);




  const meat = [
    { id: 1, name: "SİYƏZƏN D.T TƏZƏ FİLE AÇIQ KQ", price: "7.19 ₼", img: "https://bazarstore.az/cdn/shop/files/98b514e78a7eb3d82323968ccc908758_100x.jpg?v=1736156000" },
    { id: 2, name: "MƏRCAN TƏZƏ TOYUQ PAKET KQ", price: "7.50 ₼", img: "https://bazarstore.az/cdn/shop/files/b4a747abc2a48762beff344302619a79_100x.webp?v=1736146988" },
    { id: 3, name: "MƏRCAN TƏZƏ TOYUQ FİLE KQ", price: "2.39 ₼", img: "https://bazarstore.az/cdn/shop/files/ad3e3dd6af6f217f66f4b596bdb5dbb4_100x.webp?v=1736146273" },
    { id: 4, name: "SİYƏZƏN D.T TƏZƏ YAŞIL PAKET KQ", price: "4.99 ₼", img: "https://bazarstore.az/cdn/shop/files/07586faac76777e91d272f3296018b9e_100x.webp?v=1736147009" },
  ]






  const [sortOption, setSortOption] = useState("asc"); // Default olaraq "Ucuzdan Bahaya"

  useEffect(() => {
    // Məhsulları API-dən alarkən qiymətə və ada görə sıralamaq
    getProductsBySubId(subId, page, limit).then((res) => {
      const sortedProducts = res.products.map((item) => ({
        ...item,
        count: 1,
      }));

      if (sortOption === "asc") {
        // Qiymətə görə artan (ucuzdan bahaya)
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortOption === "desc") {
        // Qiymətə görə azalan (bahadan ucuza)
        sortedProducts.sort((a, b) => b.price - a.price);
      } else if (sortOption === "a-z") {
        // Adlara görə artan (A-dan Z-yə)
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOption === "z-a") {
        // Adlara görə azalan (Z-dən A-ya)
        sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      }

      setProductData(sortedProducts);
      setTotalPages(res.totalPages);
    });
  }, [subId, page, limit, sortOption]);



  useEffect(() => {
    getProductsBySubId(subId, page, limit).then((res) => {
      setProductData(
        res.products.map((item) => ({
          ...item,
          count: 1,
        }))
      );
      setTotalPages(res.totalPages);
    });
  }, [subId, page, limit]);

  useEffect(() => {
    setPage(1);
  }, [catname]);

  // const updateCount = (id, increment) => {
  //   setProductData((prevProducts) =>
  //     prevProducts.map((item) =>
  //       item.id === id
  //         ? { ...item, count: Math.max(1, item.count + increment) }
  //         : item
  //     )
  //   );
  // }




  // Miqdarı artırıb-azaltmaq üçün funksiya
  const updateCount = (id, increment) => {
    setProductData((prevProducts) =>
      prevProducts.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(1, item.count + increment) } // Miqdar 1-dən az olmur
          : item
      )
    );
  };

  // Səbətə əlavə etmək
  const addToBasketHandler = (item) => {
    addToBasket(
      item.id,
      item.img,
      item.price,
      item.name,
      item.discountedPrice,
      item.count, // Miqdar burada istifadə olunur
      item.marka,
      item.sku
    );
  };




  return (
    <div className="bg-[#fff]">
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
              <p className="inline text-[18px] ml-[10px] hover:text-[#b3b93d]"> {subname}  </p>
            </Link>
          </div>
        </div>
      </>




      <div className="md:mx-[8%] flex flex-col lg:flex-row ">


        <div className="w-full lg:w-[30%] hidden sm:hidden md:hidden lg:block xlg:block">
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



        <div className=" md:px-[15px] w-full ">
          <div className=" mdl:flex gap-2 w-full">


            <div className="content">


              <div className="products-category ">




                <div className="product-filter md:flex mdl:justify-end md:gap-3 justify-between  my-[15px] ">


                  <div>

                    <form className="flex items-center mb-[15px]">
                      <label className="hidden md:block  text-[18px] mr-[18px] leading-10" htmlFor="sortPrice">
                        Filtr:
                      </label>
                      <select
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                        className="font-bold h-[40px] text-[14px] px-[35px]  bg-white border border-[#e5e5e5] cursor-pointer text-black w-[90%] outline-none"
                        id="sortPrice"
                      >
                        <option value="asc">Ucuzdan Bahaya</option>
                        <option value="desc">Bahadan Ucuza</option>
                        <option value="a-z">A-dan Z-yə</option>
                        <option value="z-a">Z-dən A-ya</option>
                      </select>
                    </form>
                  </div>


                  <div className='flex flex-wrap justify-center items-center '>
                    <form className="flex items-center mb-[15px]">
                      <label
                        className="font-normal text-[18px] mr-[18px] leading-10"
                        htmlFor="sort"
                      >
                        Məhsul:
                      </label>
                      <select value={limit} onChange={(e) => setLimit(Number(e.target.value))}
                        className="font-bold h-[38px] text-[14px] px-[10px]  bg-white border border-[#e5e5e5] cursor-pointer text-black w-full outline-none "
                        id="sort"
                      >
                        <option value="12">12</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="75">75</option>
                        <option value="100">100</option>
                      </select>
                    </form>







<div className="flex gap-3 ml-[30px]">
      <HiBars4
        className={`rotate-90 cursor-pointer text-[28px] sm:text-[30px] md:text-[30px] lg:text-[35px] xlg:text-[35px] bg-[#f0f0f0] p-[5px] border border-[#e5e5e5] rounded-[4px] ${activeColumn === 4 ? 'bg-gray-300 ' : ''}`}
        onClick={() => handleColumnChange(4)} // 4 sütun
      />
      <HiBars3
        className={`rotate-90 cursor-pointer text-[28px] sm:text-[30px] md:text-[30px] lg:text-[35px] xlg:text-[35px] bg-[#f0f0f0] p-[5px] border border-[#e5e5e5] rounded-[4px] ${activeColumn === 3 ? 'bg-gray-300' : ''}`}
        onClick={() => handleColumnChange(3)} // 3 sütun
      />
      <HiBars2
        className={`rotate-90 cursor-pointer text-[28px] sm:text-[30px] md:text-[30px] lg:text-[35px] xlg:text-[35px] bg-[#f0f0f0] p-[5px] border border-[#e5e5e5] rounded-[4px] ${activeColumn === 2 ? 'bg-gray-300' : ''}`}
        onClick={() => handleColumnChange(2)} // 2 sütun
      />
    </div>



                  </div>





                </div>



                <div className={`grid gap-8 lg:gap-9 xlg:gap-11 grid-cols-${columns} flex-wrap justify-center items-center overflow-hidden`}>


                  {productData && productData.length > 0
                    ? productData.map((item) => {
                      return (
                        <Link key={item.id}
                          to={`${item.id}`}
                          className=" border-[1px] h-full rounded-md flex flex-col  justify-center w-[95%] lgx:w-[200px]"
                        >

                          <div className="w-full min-h-[150px] relative">

                            <img
                              className="object-cover w-full"
                              src={item.img}
                              alt=""
                            />







                          </div>
                          <h3 className="text-[14px] mb-4 mt-[15px] px-[25px] text-left ">
                            {item.name}
                          </h3>
                          <h2 className="text-[20px] text-[#439e4a] font-bold px-[25px] text-left">
                            {item.price.toFixed(2)} ₼
                          </h2>


                          <p className="text-left text-[14px] my-[8px] px-[25px] mx-[5px]">Miqdar</p>
                          {/* <div className="mb-2 flex justify-center mx-[25px] items-center border border-gray-300 w-28 h-10">
                                          <button
                                             onClick={() => updateCount(index, item.quantity > 1 ? item.quantity - 1 : 1)} className="cursor-pointer p-[13px]"
                                           
                                          >
                                            -
                                          </button>
                                          <p className="mx-2">{item.count}</p>
                                          <p className="mx-2">{counts[index]}</p>
                                          <button
                                            onClick={() => updateCount(index, counts[index] + 1)}
                                            className="cursor-pointer px-3"
                                          >
                                            +
                                          </button>
                                        </div> */}


                          <div className="mb-2 flex justify-center mx-[25px] items-center border border-gray-300 w-28 h-10">
                            <button
                              onClick={() => updateCount(item.id, -1)} // Decrement the quantity
                              className="cursor-pointer p-[13px]"
                            >
                              -
                            </button>
                            <p className="mx-2">{item.count}</p>
                            <button
                              onClick={() => updateCount(item.id, 1)} // Increment the quantity
                              className="cursor-pointer px-3"
                            >
                              +
                            </button>
                          </div>


                          {/* 

<div className="mb-2 flex justify-center mx-[25px] items-center border border-gray-300 w-28 h-10">
  <button onClick={() => updateCount(item.id, -1)} className="cursor-pointer p-[13px]">-</button>
  <p className="mx-2">{item.count}</p>
  <button onClick={() => updateCount(item.id, 1)} className="cursor-pointer px-3">+</button>
</div> */}





                          <div className="flex justify-start">
                            {/* <button 
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
                                            className="bg-gray-200 font-bold text-sm rounded-md mx-[25px] my-[20px] py-2 px-6 flex items-center hover:text-white hover:bg-[#b3b93d]"
                                          >
                                            <SlBasket className="mr-2" /> Səbətə At
                                          </button> */}


                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                addToBasketHandler(item); // Basketə əlavə et
                              }}
                              className="bg-gray-200 font-bold text-sm rounded-md mx-[25px] my-[20px] py-2 px-6 flex items-center hover:text-white hover:bg-[#b3b93d]"
                            >
                              <SlBasket className="mr-2" /> Səbətə At
                            </button>




                          </div>





                        </Link>
                      );
                    })
                    : new Array(8).fill("").map((item, i) => <Loading key={i} />)}
                </div>

                <div className="flex gap-3 justify-center py-10 overflow-hidden">
                  <Pagination
                    current={page || 1}
                    total={totalPages * 10}
                    onChange={(page) => setPage(page)}
                    className="custom-pagination"
                  />

                </div>
              </div>
            </div>
          </div>
        </div>




      </div>
    </div>
  );
}

export default ProductSelect;
