import menuData from '../../data/headerMenuData.json'
import productData from '../../data/productCategoriesData.json'
import '../../App.css'
import { FaBars } from "react-icons/fa"
import { FaLongArrowAltRight } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"
import { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { DATA } from '../context/DataContext'

function ButtonSections() {
  const { category } = useContext(DATA)
  
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const location = useLocation();
  
  const icon = ["🍉", "🍗", "🥖", "🥣", "🍰", "🥃", "🥛", "👶", "🧺", "💄", "🔪", "✏️", "🐕", "💚", "📻", "🏷️", "👚"]

    useEffect(() => {
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        setIsCategoriesOpen(screenWidth >= 1800);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize); 
      return () => window.removeEventListener('resize', handleResize)
    }, [])
  
  const toggleMenu = () => {
    setIsCategoriesOpen((prevState) => !prevState);
  };
 

  return (
    <section className="border-t-[1px] border-[#eee] ">
      <div className="md:mx-[8%] mx-[2%] xlg:flex xlg:justify-between">

        <div className="relative w-[100%] md:w-[100%] lg:w-[100%] xlg:w-[25%]">
          <button
            onClick={toggleMenu}
            className="xlg:flex xlg:w-[100%] bg-[#b3b93d] text-white w-full sm:w-[50%] md:w-[40%] lg:w-[30%] text-left px-[20px]
            py-[20px] font-bold xlg:text-[16px] md:text-[18px] lg:text-[18px]"
          >
            <FaBars className="inline mb-[5px] xlg:mx-[10px] xlg:m-[4px]" />
            Bütün Kategoriyalar
          </button>

          {isCategoriesOpen && (
            <div className="bg-white border border-[#5e5e5e] mt-[5px] w-full sm:w-[50%] md:w-[40%] lg:w-[30%] xlg:w-[100%] ">
              <ul className="text-black">
                {category.length > 0 &&  category.map((item, index) => (
                  <li
                    key={index}
                    className={`relative group cursor-pointer ${
                      index === category.length - 1 ? "border-b-0" : "border-b-[1px]"
                    }`}
                  >
                    <Link to={`/category/${item.name}`} className="block hover:text-[#b3b93d] pt-[8px] py-[8px]">
                        <div className="font-bold pb-[10px] px-[15px] flex justify-between items-center">
                          <FaLongArrowAltRight className="inline mt-[5px] text-[#5e5e5e]" />
                          <div className="mr-auto pl-[15px] flex fle-row gap-[10px]">
                            {icon[index]} 
                                   
                            {item.categoryName}
                          </div>
                          <IoIosArrowForward className="inline mt-[5px] text-[#5e5e5e]" />
                        </div>
                      </Link>

                    {/* 2-ci Səviyyə menu*/}

                    <ul className="absolute hidden group-hover:block bg-white text-black border-[#5e5e5e] border left-[100%] w-[100%] top-[-1px] py-[1px] z-10">
                      {item.subcategory.map((sub, subIndex) => (
                        <li
                          key={subIndex}
                          className={`menu2 cursor-pointer p-[10px] ${subIndex === item.subcategory.length - 1 ? "border-b-0" : "border-b-[1px]"}`}
                        >
                          <Link to={`/category/${item.categoryName}/${sub.id}`} className="block hover:text-[#b3b93d]">
                            <div className="pb-[10px] px-[15px] flex justify-between items-center">
                              <div className="mr-auto first-letter:uppercase">{sub.categoryName}</div> {/* sub.name - data2.name düzəlişi */}
                              {/* <IoIosArrowForward className="inline mt-[5px] text-[#5e5e5e]" /> */}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>

                 
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex-col justify-between h-full lg:block xlg:w-[75%] xlg:ml-[20px]">
          <ul className="m-[12px] hidden justify-between lg:flex xlg:flex">
            {menuData.map((menu, menuIndex) => (
              <li key={menuIndex} className="relative group text-[16px] my-[5px] hover:text-[var(--primary-color)]">
                <a href="/notFound">{menu.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ButtonSections