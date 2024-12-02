import menuData from '../../data/headerMenuData.json'
import productData from '../../data/productCategoriesData.json'
import '../../App.css'
import { FaBars } from "react-icons/fa"
import { FaLongArrowAltRight } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"
import MainSlider from '../main/MainSlider'
import { useEffect, useState } from 'react'

function HeaderMenu() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
    
    useEffect(() => {
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        setIsCategoriesOpen(screenWidth >= 1270);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize); 
      return () => window.removeEventListener('resize', handleResize)
    }, [])

  
  
  const toggleMenu = () => {
    setIsCategoriesOpen((prevState) => !prevState);
  };

  return (
    <section className="border-t-[1px] border-[#eee]">
      <div className="md:mx-[8%] mx-[2%] xlg:flex xlg:justify-between">
        {/* Sol tərəf - Kateqoriyalar */}
        <div className="relative w-[100%] md:w-[100%] lg:w-[100%] xlg:w-[25%]">
          <button
            onClick={toggleMenu}
            className="xlg:flex xlg:w-[100%] bg-[#b3b93d] text-white w-full sm:w-[50%] md:w-[40%] lg:w-[30%] text-left px-[20px]
            py-[15px] font-bold xlg:text-[16px] md:text-[18px] lg:text-[18px]"
          >
            <FaBars className="inline mb-[5px] xlg:mx-[10px] xlg:m-[4px]" />
            Bütün Kategoriyalar
          </button>

          {isCategoriesOpen && (
            <div className="bg-white border border-[#5e5e5e] mt-[5px] w-full sm:w-[50%] md:w-[40%] lg:w-[30%] xlg:w-[100%]">
              <ul className="text-black">
                {productData.map((data1, index1) => (
                  <li
                    key={index1}
                    className={`relative group cursor-pointer ${
                      index1 === productData.length - 1 ? "border-b-0" : "border-b-[1px]"
                    }`}
                  >
                    <a href="#" className="block hover:text-[#b3b93d] pt-[8px] py-[8px]">
                      <div className="font-bold pb-[10px] px-[15px] flex justify-between items-center">
                        <FaLongArrowAltRight className="inline mt-[5px] text-[#5e5e5e]" />
                        <div className="mr-auto pl-[15px]">{data1.name}</div>
                        <IoIosArrowForward className="inline mt-[5px] text-[#5e5e5e]" />
                      </div>
                    </a>

                    {/* 2-ci Səviyyə menu*/}
                    <ul className="absolute hidden group-hover:block bg-white text-black border-[#5e5e5e] border left-[100%] w-[100%] top-[-1px] py-[1px] z-10">
                      {data1.product.map((data2, index2) => (
                        <li
                          key={index2}
                          className={`menu2 cursor-pointer p-[10px] ${
                            index2 === data1.product.length - 1 ? "border-b-0" : "border-b-[1px]"
                          }`}
                        >
                          <a href="#" className="block hover:text-[#b3b93d]">
                            <div className="pb-[10px] px-[15px] flex justify-between items-center">
                              <div className="mr-auto">{data2.name}</div>
                              <IoIosArrowForward className="inline mt-[5px] text-[#5e5e5e]" />
                            </div>
                          </a>

                          {/* 3-cü Səviyyə menu */}
                          <ul className="menuHover text-black bg-white border-[#5e5e5e] border ml-[103%] px-[10px] z-20 w-[100%] my-[-46px]">
                            {data2.subcategories.map((data3, index3) => (
                              <li
                                key={index3}
                                className={`relative cursor-pointer ${
                                  index3 === data2.subcategories.length - 1 ? "border-b-0" : "border-b-[1px]"
                                }`}
                              >
                                <a href="#" className="block hover:text-[#b3b93d] pt-[8px] py-[8px]">
                                  <div className="pb-[10px] px-[15px] flex justify-between items-center">
                                    <div className="mr-auto">{data3.name}</div>
                                  </div>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sağ tərəf - Menyu və Slayder */}
        <div className="flex-col justify-between h-full lg:block xlg:w-[75%] xlg:ml-[20px]">
          <ul className="m-[12px] hidden justify-between lg:flex xlg:flex">
            {menuData.map((menu, menuIndex) => (
              <li key={menuIndex} className="relative group text-[16px] my-[5px] hover:text-[var(--primary-color)]">
                <a href="#">{menu.label}</a>
              </li>
            ))}
          </ul>

          <div className="m-[10px] mt-[20px]">
            <MainSlider />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderMenu;
