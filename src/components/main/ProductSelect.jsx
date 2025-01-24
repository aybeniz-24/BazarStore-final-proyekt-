import '../../App.css'
import { faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductsBySubId } from "../../services/api";
import { FaRegEye, FaSearch } from "react-icons/fa";
import { BASKET } from "../context/BasketContext";
import { Pagination } from "antd";
import ButtonSections from "./ButtonSections";
import { SlBasket } from "react-icons/sl";
import { GoHome } from "react-icons/go";
import { HiBars2, HiBars3, HiBars4 } from "react-icons/hi2";


function ProductSelect() {

  const [productData, setProductData] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const { catname, subname, subId, categoryName } = useParams();

  const { addToBasket } = useContext(BASKET);
  const [totalPages, setTotalPages] = useState(1);

  const [columns, setColumns] = useState(4);
  const [activeColumn, setActiveColumn] = useState(4);

  const handleColumnChange = (newColumns) => {
    if (newColumns >= 1 && newColumns <= 4) {
      setColumns(newColumns);
      setActiveColumn(newColumns);
    }
  };

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width <= 600) {
        setColumns(1);
        setActiveColumn(1);
      } else if (width <= 900) {
        setColumns(2);
        setActiveColumn(2);
      } else if (width <= 1200) {
        setColumns(3);
        setActiveColumn(3);
      } else {
        setColumns(4);
        setActiveColumn(4);
      }
    };

    updateColumns();
    window.addEventListener('resize', updateColumns);

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

  const [sortOption, setSortOption] = useState("asc");

  useEffect(() => {
    getProductsBySubId(subId, page, limit).then((res) => {
      const sortedProducts = res.products.map((item) => ({
        ...item,
        count: 1,
      }));

      if (sortOption === "asc") {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortOption === "desc") {
        sortedProducts.sort((a, b) => b.price - a.price);
      } else if (sortOption === "a-z") {
        sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOption === "z-a") {
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

  const updateCount = (id, increment) => {
    setProductData((prevProducts) =>
      prevProducts.map((item) =>
        item.id === id
          ? { ...item, count: Math.max(1, item.count + increment) }
          : item
      )
    );
  };

  const addToBasketHandler = (item) => {
    addToBasket(
      item.id,
      item.img,
      item.price,
      item.name,
      item.discountedPrice,
      item.count,
      item.marka,
      item.sku
    );
  };

  function getImageUrl(img) {
    const replaceImage =
      "https://neptun.az/image/cache/logo-270x270.png?v=9";
    const fallbackImage =
      "https://lezzetaa.az/uploads/posts/2020-01/1580131325_1580130962_1569417010_bazarstore.png";

    return img?.includes(replaceImage) ? fallbackImage : img;
  }


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
                              src={getImageUrl(item.img)}
                              alt=""
                            />
                          </div>
                          <h3 className="text-[14px] mb-4 mt-[15px] px-[25px] text-left ">
                            {item.name}
                          </h3>
                          <h2 className="text-[20px] text-[#439e4a] font-bold px-[25px] text-left">
                            {item.price.toFixed(2)} ₼
                          </h2>
                          <div className="flex justify-start">

                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                addToBasketHandler(item);
                              }}
                              className="bg-gray-200 font-bold text-sm rounded-md mx-[25px] my-[20px] py-2 px-6 flex items-center hover:text-white hover:bg-[#b3b93d]"
                            >
                              <SlBasket className="mr-2" /> Səbətə At
                            </button>
                          </div>
                        </Link>
                      )
                    })
                    : new Array(8).fill("").map((item, i) =>
                      <div className="flex flex-col m-6 rounded-lg shadow-lg w-48 animate-pulse h-64 bg-[#e3e89c]" key={i}>
                        <div className="h-28 rounded-t-lg bg-[#c9cf75]"></div>
                        <div className="flex-1 px-4 py-6 space-y-3 bg-[#f5f7d6]">
                          <div className="w-full h-5 rounded-md bg-[#d9df87]"></div>
                          <div className="w-5/6 h-5 rounded-md bg-[#d9df87]"></div>
                          <div className="w-2/3 h-5 rounded-md bg-[#d9df87]"></div>
                        </div>
                      </div>
                    )}
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

      <div className="w-full  block sm:block md:block lg:hidden xlg:hidden">
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
    </div>
  );
}

export default ProductSelect;
