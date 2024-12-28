// import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import headerTopBg from '../../assets/HeaderImage/headerTop-bg.jpg'
import { FaPhoneAlt } from "react-icons/fa"
import { Form, Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import { BASKET } from '../context/BasketContext';


function HeaderTop( ) {


  const { basket } = useContext(BASKET); // BASKET contextindən basket məlumatını alırıq
  const [discountedPrice, setDiscountedPrice] = useState(0);

  useEffect(() => {
    // Basketin daxilindəki endirimli qiyməti hesablayırıq
    const price = basket.reduce((acc, item) => {
      const itemPrice = item.discountedPrice && !isNaN(parseFloat(item.discountedPrice))
        ? parseFloat(item.discountedPrice)
        : 0;
      const quantity = !isNaN(parseInt(item.quantity)) ? parseInt(item.quantity) : 1;
      return acc + itemPrice * quantity;
    }, 0);

    setDiscountedPrice(price); // qiyməti yeniləyirik
  }, [basket]); // Basket dəyişdikdə qiymət yenilənəcək

  // Pulsuz çatdırılma üçün qalan məbləğ
  const remainingForFreeDelivery = 40 - discountedPrice;


  
   return (
    <>
    <section className='fixed w-full z-20'>
      <div style={{ backgroundImage: `url(${headerTopBg})`}}>
        <p className='text-white text-center py-[12px] px-[10px] text-[16px]'>
        {remainingForFreeDelivery > 0
              ? `Pulsuz çatdırılma üçün səbətə ${remainingForFreeDelivery.toFixed(2)} AZN dəyərində məhsul əlavə edin. 🧐`
              : <span>Təbrik edirik. Pulsuz çatdırılma qazandınız! 😀</span>}
        </p>
      </div>
    </section>

    <section className='bg-[#eff5ef] w-[100%] '>
        <div className=' flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between items-center p-[10px] md:mx-[8%] '>
          <div className='mb-[4px]'>
            <p>
              <FaPhoneAlt className='inline text-[#f8312f]' />
              <a className='text-[14px]' href="tel:*1900">*1900 |</a>
              <a className='text-[14px]' href="https://wa.me/552013535"> 💬 +994 55 201 35 35</a>
            </p>
          </div>
          <hr className='w-[100%] border-[#aed6ae] md:hidden lg:hidden' />
          <div className='mt-[4px] sm:mt-[4px] md:mt-[0] lg:mt-[0] flex justify-between'>
            <a className='inline-block px-[5px] sm:px-[8px] md:px-[10px] lg:px-[12px] border-r-[1px] border-[#aed6ae] hover:text-[var(--primary-color)] text-[14px]' href="">Super Maqazin</a>
            <Link to="/login" className='inline-block px-[5px] sm:px-[8px] md:px-[10px] lg:px-[12px] border-r-[1px] border-[#aed6ae] hover:text-[var(--primary-color)] text-[14px]' href="">Karyera</Link>
            <Link to="/login" className='inline-block px-[5px] sm:px-[8px] md:px-[10px] lg:px-[12px]  border-[#aed6ae] hover:text-[var(--primary-color)] text-[14px]' href="">Qeyd | Giriş</Link>
            
          
          </div>
        </div>
    </section>
    </>
  )
}

export default HeaderTop
