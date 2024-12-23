import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
import menuData from '../../data/headerMenuData.json'
import  { useState } from 'react'
import headerLogo from "../../assets/HeaderImage/header-logo.png"
import { IoSearch } from "react-icons/io5"
import { RiAccountCircleLine } from "react-icons/ri"
import { SlBasket } from "react-icons/sl"
import { FaBars, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6"
import { IoMdArrowDropdown } from "react-icons/io"
import { FaRegHeart } from "react-icons/fa"
import { Offcanvas } from 'react-bootstrap'
import { FiYoutube } from 'react-icons/fi'
import { Link } from 'react-router-dom'


function HeaderBottom() {

    const [ show, setShow ] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)  


  return (
    <>
      <section>
      <div className='flex justify-between items-center  py-[20px] px-[15px] md:mx-[8%] my-[10px]'>

          <div className='flex items-center lg:w-[25%]'>
            <FaBars onClick={handleShow} className='inline text-[28px] md:text-[32px] pr-[10px] sm:mt-[6px] md:mt-[5px] lg:mt-[8px] lg:hidden  hover:text-[var(--primary-color)] cursor-pointer' />
           <Link to="/">
              <img className='w-[35%]  sm:w-[35%]  md:w-[35%] lg:w-[80%] ' src={headerLogo} alt="logo" />
           </Link>
          </div>


          <div className='hidden lg:flex lg:justify-around lg:w-[60%] '>
            <div className='flex justify-center rounded-full p-[5px]'>
              {/* <input className='outline-none w-[200px] border-[1px] p-[6px] px-[10px] border-r-[0] rounded-l-full' type="text" placeholder='Erazi' /> */}
              <button className='outline-none w-[200px] border-[1px] p-[6px] px-[10px] border-r-[0] rounded-l-full text-[#757575]'>Çatdırılma Ünvanı Seçin</button>
              <button className='border-[1px] p-[10px] rounded-r-full border-l-[0] bg-white'>  <IoMdArrowDropdown className='text-[20px]' /> </button>
            </div>

            <div className='flex justify-center rounded-full p-[5px]'>
              <input className='outline-none w-[200px] border-[1px] p-[6px] px-[10px] border-r-[0] rounded-l-full' type="search" placeholder='Məhsul Axtar' />
              <button className='border-[1px] p-[10px] rounded-r-full bg-white'> <IoSearch className='text-[18px]' /> </button>
            </div>
          </div>


          <div className='flex flex-row gap-[10px] justify-end lg:w-[15%]'>
                  <IoSearch className='inline text-[24px] lg:hidden ' /> 
                  <RiAccountCircleLine className='inline text-[24px] ' /> 
                  <Link to="/favorit">
                    <FaRegHeart className='hidden lg:inline text-[24px]' />
                  </Link>
                  <Link to="/basket"> 
                    <SlBasket className='inline text-[26px]' /> 
                  </Link>
          </div>

      </div>

          <div className='block md:hidden lg:hidden mx-[10px]'>
            <div className='flex justify-center p-[5px]'>
              <button className='outline-none border-[1px] p-[6px] px-[10px] border-r-[0] w-[100%] h-[60px] text-start text-[#757575]'>Çatdırılma Ünvanı Seçin</button>
              <button className='border-[1px] p-[10px] border-l-[0] bg-white'>  <IoMdArrowDropdown className='text-[20px]' /> </button>
           </div>
          </div>
      </section>

      




      <Offcanvas show={show} onHide={handleClose} id="custom-offcanvas" >
          <Offcanvas.Header closeButton>
            
          </Offcanvas.Header>
          <Offcanvas.Body>
           <div className='flex flex-col justify-between h-full'>
            <ul className='mx-[5px]'>
                {menuData.map(data => (
                  <li key={data.id} className='text-[16px] my-[5px] hover:text-[var(--primary-color)]'>
                    <a href="#">{data.label}</a>  
                  </li>
                ))}
              </ul>

              {/* url lleri duzelt  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}



              <div className='my-[20px]'>
                <a className='text-[16px] mr-[15px] bg-[#ccc] p-[10px] pt-[5px] rounded-full hover:bg-[var(--primary-color)] hover:text-white' href="https://facebook.com/bazarstore"><FaFacebookF className='inline' /></a>
                <a className='text-[16px] mr-[15px] bg-[#ccc] p-[10px] pt-[5px] rounded-full hover:bg-[var(--primary-color)] hover:text-white' href="https://instagram.com/bazarstore"><FaInstagram className='inline' /></a>
                <a className='text-[16px] mr-[15px] bg-[#ccc] p-[10px] pt-[5px] rounded-full hover:bg-[var(--primary-color)] hover:text-white' href="https://tiktok.com/@bazarstore"><FaTiktok className='inline' /></a>
                <a className='text-[16px] mr-[15px] bg-[#ccc] p-[10px] pt-[5px] rounded-full hover:bg-[var(--primary-color)] hover:text-white' href="https://youtube.com/bazarstore"><FiYoutube className='inline' /></a>
            </div>
           </div>
          </Offcanvas.Body>
        </Offcanvas>


      
    </>
  )
}

export default HeaderBottom
