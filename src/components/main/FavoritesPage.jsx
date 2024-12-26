import { useContext } from "react"
import { FAVORIT } from "../context/FavoritContext"
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import ButtonSections from "./ButtonSections";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import Advertising from "./Advertising";
import { IoMdClose } from "react-icons/io";

function FavoritesPage() {
    const { favorites, addToFavorit, removeFromFavorit } = useContext(FAVORIT)
  return (
    <div>
          <ButtonSections />
          <div className='bg-[#f0f0f0] py-[25px] mb-[20px]'>
              <div className='md:mx-[8%] mx-[2%] m-[5px] mr-[5px] flex justify-start items-center '>
                <p>
                  <Link to="/">
                     <GoHome className="inline text-[26px] mr-[8px] cursor-pointer" />
                  </Link>
                 | </p>
                 <Link to="/favorit">
                   <p className="inline text-[18px] ml-[10px] hover:text-[#b3b93d]">Seçilmişlər </p>
                 </Link>
               
              </div>
          </div>

          <div className="md:mx-[8%] flex flex-col lg:flex-row justify-between">



                <div className="w-full lg:w-[23%] ">
                <Advertising />
              </div>





             
          <div  className=" w-full lg:w-[75%] flex gap-[10px]">
          {favorites && favorites.length > 0 ? favorites.map((item, index) => {
                return (
                  <div key={item.id} className="group relative border-[1px] border-[#e5e5e5 rounded-[10px] w-[210px] h-[500px] m-[5px] mb-[20px]">
                    <img className="rounded-[5px] p-[5px]" src={item.img} alt={item.name} />
                    <div className="absolute top-0 right-0 z-20 icon ">
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
                        <p className="font-bold text-[14px]">{item.price}</p>
                      )}
                    </div>
        
                    {item.quantity > 0 ? (
                      <div className="block  mt-[100px] m-[10px]">
                        <p className="text-[14px] text-left mb-[8px]">Miqdar</p>
                        <div className="mb-[20px] flex justify-center items-center border-[1px] border-[#e8e8e8] w-[100px] h-[40px]">
                          <button onClick={() => updateCount(index, item.quantity > 1 ? item.quantity - 1 : 1)} className="cursor-pointer p-[13px]">-</button>
                          <p className="mx-[10px]">{item.quantity}</p>
                          <button onClick={() => updateCount(index, item.quantity + 1)} className="cursor-pointer p-[13px]">+</button>
                        </div>
                        <div className="flex justify-start">
                          <button
                            className="flex justify-center items-center bg-[#e8e8e8] font-bold text-[14px] rounded-[6px] py-[8px] px-[30px] group-hover:text-white group-hover:bg-[#b3b93d]"
                          >
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
    

    </div>
  )
}

export default FavoritesPage