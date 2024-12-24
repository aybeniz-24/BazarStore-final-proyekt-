import React, { useContext } from 'react';
import { BASKET } from '../context/BasketContext';
import { CiHeart } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa';
import { SlBasket } from 'react-icons/sl';
import ButtonSections from './ButtonSections';
import { Link } from 'react-router-dom';
import { FaRegTrashCan } from 'react-icons/fa6';

function BasketPage() {
  const { basket, updateCount, addToBasket, removeFromBasket } = useContext(BASKET);

  return (
    <>
      <ButtonSections />

      <div className="md:mx-[8%] mx-[2%] ">
        {basket && basket.length > 0 ? (
          <table className="w-full text-center border-collapse my-[20px] mt-[50px] ">
            <thead>
              <tr className='border-b '>
                <th className="w-[40%] py-4">Məhsul</th>
                <th className="w-[15%] py-4">Qiymət</th>
                <th className="w-[30%] py-4">Miqdar</th>
                <th className="w-[15%] py-4">Ümumi</th>
              </tr>
            </thead>

            <tbody>
              {basket.map((item, index) => (
                <tr key={item.id} className="bg-white  hover:bg-gray-100 border-b">
                  <td className="py-4">
                    <div className="flex justify-start items-center">
                      <img className="w-[80px] inline rounded-[5px]" src={item.img} alt={item.name} />
                      <p className="inline text-[15px] uppercase">{item.price}</p>
                    </div>
                  </td>

                  <td className="py-4">
                    {item.discountedPrice ? (
                      <div className="flex flex-col">
                        <p className="font-bold text-[14px] text-[#9b9b9b] line-through">{item.name}</p>
                        <p className="font-bold text-[14px] text-[#439e4a]">{item.discountedPrice}</p>
                      </div>
                    ) : (
                      <p className="font-bold text-[14px]">{item.name}</p>
                    )}
                  </td>

                  <td className="py-4">
                    <div className="flex justify-center items-center">
                      <div className="mb-[20px] flex justify-center items-center border-[1px] border-[#e8e8e8] w-[100px] h-[40px]">
                        <button
                          onClick={() => updateCount(index, item.quantity > 1 ? item.quantity - 1 : 1)}
                          className="cursor-pointer p-[13px]"
                        >
                          -
                        </button>
                        <p className="mx-[10px]">{item.quantity}</p>
                        <button onClick={() => updateCount(index, item.quantity + 1)} className="cursor-pointer p-[13px]">
                          +
                        </button>
                      </div>
                      <div className="p-2">
                        <button className="p-2 bg-[#b3b93d] hover:bg-[#1e1e1e] rounded mb-[20px]">
                          <FaRegTrashCan
                            onClick={() => removeFromBasket(item.id)}
                            className="text-white text-[20px] m-[2px]" />
                        </button>
                      </div>
                    </div>
                  </td>

                  <td className="py-4">
                    {item.discountedPrice ? (
                      <div className="flex flex-col">
                        <p className="font-bold text-[14px] text-[#9b9b9b] line-through">{item.name}</p>
                        <p className="font-bold text-[14px] text-[#439e4a]">{item.discountedPrice}</p>
                      </div>
                    ) : (
                      <p className="font-bold text-[14px]">{item.name}</p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="my-[140px] w-full mx-auto text-center">
            <div className="w-[100px] h-[100px] mx-auto">
                <svg class="icon icon-empty-cart" version="1.0" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 320.000000 258.000000" preserveAspectRatio="xMidYMid meet">
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


      <div className="md:mx-[8%] mx-[2%] flex justify-between text-[#1e1e1e]">


        <div>
          <p className='my-[20px]'> 📑 Sifariş üçün xüsusi təlimatlar varmı?</p>
          <div className='my-[5px]'>
            <textarea
              className='border-[#7e7e7e] border w-[80%]  h-[100px] p-2 resize-none outline-none'
              placeholder='Your note here'
            ></textarea>
          </div>
          <div className='border-[#7e7e7e] border my-[10px] p-[10px] w-[80%]'>
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
          <div className='border-[#7e7e7e] border mb-[50px] p-[10px]  w-[80%]'>
            <p className='px-[10px]'>
            Bonuslarınızdan istifadə etmək istəyirsinizsə, aşağıdakı qutunu işarələyərək bonuslarınızı bu qaydada istifadə edə bilərsiniz.
            <p className=' my-[15px] '>Bonuslarınız üçün  
              <Link to="/admin" className='underline font-bold underline-offset-4 hover:decoration-[#b3b93d]   hover:text-[#b3b93d] '> daxil olun.</Link>
            </p>
            </p>
          </div>
          
        </div>




        <div className='w-[90%]'>
          <div className='w-[100%] flex flex-col items-end'>
           <div className='flex  gap-[30px] my-[20px]'>
              <p> Ara cəmi</p>
              <p> total </p>
              <p> endirimli </p>
           </div>
            <p className='text-right my-[20px] mb-[30px] '> Vergi daxildir. Çatdırılma xərci ödəniş səhifəsində hesablanır.</p>


            <button className="w-[400px] bg-[#b3b93d] hover:bg-[#1e1e1e] text-white py-[15px] px-[50px] font-bold rounded-[5px] mb-[20px]">Redaktə Gözlənilir</button>
            <button className="w-[400px] bg-[#b3b93d] hover:bg-[#1e1e1e] text-white py-[15px] px-[50px] font-bold rounded-[5px] mb-[20px]">Ödəniş</button>
            <Link to="/" >
                   <p className=" text-center cursor-pointer underline underline-offset-4 hover:decoration-[#b3b93d]  hover:text-[#b3b93d]  text-[18px]"> Alış-verişə Davam Edin </p>
            </Link>


      
          </div>
             
        </div>



      </div>
    </>
  );
}

export default BasketPage;
