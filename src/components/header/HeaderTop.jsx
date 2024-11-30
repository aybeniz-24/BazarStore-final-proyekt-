// import '../../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import headerTopBg from '../../assets/HeaderImage/headerTop-bg.jpg'
import { FaPhoneAlt } from "react-icons/fa"



function HeaderTop() {
   return (
    <>
    <section>
      <div style={{ backgroundImage: `url(${headerTopBg})`}}>
        <p className='text-white text-center py-[12px] px-[10px] text-[16px]'>Pulsuz çatdırılma üçün səbətə <b className='text-red-600'>'burda js isleyecek'</b> dəyərində məhsul əlavə edin. 🧐</p>
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
            <a className='inline-block px-[5px] sm:px-[8px] md:px-[10px] lg:px-[12px] border-r-[1px] border-[#aed6ae] hover:text-[var(--primary-color)] text-[14px]' href="">Karyera</a>
            <a className='inline-block px-[5px] sm:px-[8px] md:px-[10px] lg:px-[12px] border-r-[1px] border-[#aed6ae] hover:text-[var(--primary-color)] text-[14px]' href="">Qeyd | Giriş</a>
            {/* url lleri duzelt  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}



            {/* <Form.Select id='bir'
              className="w-[60px] bg-transparent ml-[5px] border-none outline-none"
              aria-label="Default select example"
              
            >
              <option>Az</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select> */}

          </div>
        </div>
    </section>
    </>
  )
}

export default HeaderTop
