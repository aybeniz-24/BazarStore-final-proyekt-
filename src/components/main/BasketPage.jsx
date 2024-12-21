import React, { useContext } from 'react';
import { BASKET } from '../context/BasketContext';
import { CiHeart } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
import ButtonSections from '../main/ButtonSections'

function BasketPage() {
  const { basket, updateCount, addToBasket } = useContext(BASKET); // updateCount və addToBasket funksiyalarının konteksdən alınması

  const handleIconClick = (item) => {
    // İkon klikləməsi zamanı hər hansı bir əməliyyat həyata keçirə bilərsiniz.
    console.log(item);
  };

  return (
    <>
    <ButtonSections />
      {basket && basket.map((item, index) => {
        return (
          <div key={item.id} className="w-[100%] group relative">
            <img className="rounded-[5px]" src={item.img} alt={item.name} />
            <div className="absolute top-0 right-0 z-20 icon">
              <CiHeart className="bg-[#e8e8e8] hover:bg-[#b3b93d] hover:text-white rounded-full w-[30px] h-[30px] p-[5px] m-[3px] cursor-pointer" />
              <FaRegEye 
                className="bg-[#e8e8e8] hover:bg-[#b3b93d] hover:text-white rounded-full w-[30px] h-[30px] p-[5px] m-[3px] cursor-pointer"
                onClick={() => handleIconClick(item)} 
              />
            </div>
            {item.discountedPrice && (
              <p className="bg-[#fed504] px-[10px] py-[5px] text-[12px] rounded-[5px] absolute top-0">Endirim</p>
            )}

            <div className="h-[120px] my-[30px] text-left">
              <div className="h-[70px]">
                <p className="text-[15px] uppercase">{item.name}</p>
              </div>
              {item.discountedPrice ? (
                <div className="flex gap-3">
                  <p className="font-bold text-[14px] text-[#439e4a]">{item.discountedPrice}</p>
                  <p className="font-bold text-[14px] text-[#9b9b9b] line-through">{item.price}</p>
                </div>
              ) : (
                <p className="font-bold text-[14px]">{item.price}</p>
              )}
            </div>

            {item.quantity > 0 ? ( // quantity > 0 olaraq düzəldildi
              <div className="block">
                <p className="text-[14px] text-left mb-[8px]">Miqdar</p>
                <div className="mb-[20px] flex justify-center items-center border-[1px] border-[#e8e8e8] w-[100px] h-[40px]">
                  <button 
                    onClick={() => updateCount(index, item.quantity > 1 ? item.quantity - 1 : 1)} 
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
                <div className="flex justify-start">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      addToBasket(item.id, item.img, item.price, item.name, item.discountedPrice, item.quantity, item.marka, item.sku);
                    }}
                    className="flex justify-center items-center bg-[#e8e8e8] font-bold text-[14px] rounded-[6px] py-[8px] px-[30px] group-hover:text-white group-hover:bg-[#b3b93d]"
                  >
                    <SlBasket className="inline-block" /> <p className="inline-block ml-[10px]">Səbətə At</p>
                  </button>
                </div>
              </div>
            ) : (
              <div className="block">
                <div className="mb-[20px] flex justify-start">
                  <button className="bg-[#e8e8e8] mt-[90px] font-bold text-[14px] rounded-[6px] py-[8px] px-[20px] group-hover:text-white group-hover:bg-[#b3b93d]">
                    Seçim Et
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}

export default BasketPage;
