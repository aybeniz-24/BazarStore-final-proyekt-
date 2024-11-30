import React, { useState } from 'react'
import '../../App.css'
import data from '../../data/footerLinksData.json'
import { BsEnvelope } from "react-icons/bs"
import { TextField } from '@mui/material'
import { RiArrowDropDownLine } from "react-icons/ri"
import { FaMapMarkedAlt } from "react-icons/fa"
import { SlEarphonesAlt } from "react-icons/sl"
import { HiOutlineMailOpen } from "react-icons/hi"
import { FaFacebookF, FaInstagram, FaLongArrowAltRight } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa6"
import { FiYoutube } from "react-icons/fi"

function Footer() {
  const [ dropdowns, setDropdowns ] = useState({
    contact: false,
    about: false,
    bazarStore: false,
    popularCategories: false,
    blog: false
  })

  const toggleDropdown = (key) => {
    setDropdowns((evvelki) => ({
      ...evvelki,
      [key]: !evvelki[key]
    }))
  }


  return (
    <footer>

      <section className='p-[10px] py-[20px] lg:py-[0] lg:px-[30px] bg-[#3e3b3a] lg:flex lg:justify-between '>
        <div className='flex justify-center items-center gap-[20px] p-[10px]'>
          <div>
            <BsEnvelope className='hidden sm:block text-[40px] md:text-[40px] lg:text-[60px] text-[#91ba80] rotate-[320deg]' />
          </div>

          <div>
            <p className='text-[18px] sm:text-[22px] md:text-[26px] lg:text-[28px] text-white font-[700]'>Xüsusi endirimlərimizi İzləyin</p>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-center items-center py-[20px] px-[5px]'>
          <TextField className='bg-white rounded-[4px] sm:rounded-tr-none sm:rounded-br-none h-[48px] w-[100%] sm:w-[70%] md:w-[40%] lg:w-[400px]'
            type="email"
            id="filled-basic"
            label="E-poçtunuz"
            variant="filled"
            sx={{
              '& .MuiFilledInput-root': {
                '&:before, &:after': {
                  borderBottom: 'none',
                },
                '&.Mui-focused': {
                  color: 'black',
                },
              },
              '& .MuiInputLabel-root.Mui-focused': {
                color: 'black',
              },
            }} />

          <button className='bg-[var(--primary-color)] hover:bg-[#1e1e1e] p-[10px] h-[48px] font-[700] text-white rounded-[4px] sm:rounded-tl-none sm:rounded-bl-none w-[140px] text-[14px] my-[20px]'>Abune Ol</button>
        </div>
      </section>

      <section className='p-[10px] py-[20px] lg:flex lg:justify-between lg:mx-[40px] lg:gap-[25px]'>

        <div>
        <div onClick={() => toggleDropdown('contact')} className='flex justify-between cursor-pointer my-[5px] lg:cursor-default'>
          <p className='font-[600] text-[16px]'>Əlaqə</p>
          <div><RiArrowDropDownLine className={`lg:hidden text-[30px] transition-transform ${dropdowns.contact ? 'rotate-180' : ''}`} /></div>
        </div>
          <div className={`p-[5px] text-[#666] ${dropdowns.contact ? 'block' : 'hidden'} lg:block`}>
            {data.contact.map((item, index) => (
               <p key={index} className='text-[14px] mb-[5px]'>
                {index === 0 &&  <FaMapMarkedAlt className="text-[#82af27]  text-[16px] mr-2 lg:inline md:hidden sm:hidden" /> }
                {index === 1 &&  <SlEarphonesAlt className="text-[#82af27] text-[16px] lg:inline md:hidden sm:hidden mr-2" /> }
                {index === 2 &&  <HiOutlineMailOpen className="text-[#82af27]  text-[16px] lg:inline md:hidden sm:hidden mr-2" /> }
                <a href={item.url} className='text-[#666] hover:text-[var(--primary-color)]' target='_blank'>{item.value}</a>
              </p>
            ))}
            <div className='lg:block md:hidden sm:hidden my-[20px]'>
              <a className='text-[16px] mr-[15px] bg-[#ccc] p-[10px] pt-[5px] rounded-full hover:bg-[var(--primary-color)] hover:text-white' href="https://facebook.com/bazarstore"><FaFacebookF className='inline' /></a>
              <a className='text-[16px] mr-[15px] bg-[#ccc] p-[10px] pt-[5px] rounded-full hover:bg-[var(--primary-color)] hover:text-white' href="https://instagram.com/bazarstore"><FaInstagram className='inline' /></a>
              <a className='text-[16px] mr-[15px] bg-[#ccc] p-[10px] pt-[5px] rounded-full hover:bg-[var(--primary-color)] hover:text-white' href="https://tiktok.com/@bazarstore"><FaTiktok className='inline' /></a>
              <a className='text-[16px] mr-[15px] bg-[#ccc] p-[10px] pt-[5px] rounded-full hover:bg-[var(--primary-color)] hover:text-white' href="https://youtube.com/bazarstore"><FiYoutube className='inline' /></a>
            </div>
          </div>
        </div>
        
       <div>
       <div onClick={() => toggleDropdown('about')} className='flex justify-between cursor-pointer my-[5px] lg:cursor-default'>
          <p className='font-[600] text-[16px]'>Məlumat</p>
        <div><RiArrowDropDownLine className={`lg:hidden text-[30px] transition-transform ${dropdowns.about ? 'rotate-180' : ''}`} /></div>
        </div>
          <div className={`p-[5px] text-[#666] ${dropdowns.about ? 'block' : 'hidden'} lg:block`}>
              {data.information.map((item, index) => (
                <div key={index} className='flex hover:text-[var(--primary-color)] cursor-pointer'>
                  <FaLongArrowAltRight className='my-[5px] mr-[10px]' />
                  <a href={item.url} className='text-[14px] mb-[5px]'>{item.name}</a>
                </div>
              ))}
          </div>
       </div>

        <div>
        <div onClick={() => toggleDropdown('bazarStore')} className='flex justify-between cursor-pointer my-[5px] lg:cursor-default'>
          <p className='font-[600] text-[16px]'>BazarStore</p>
          <div><RiArrowDropDownLine className={`lg:hidden text-[30px] transition-transform ${dropdowns.bazarStore ? 'rotate-180' : ''}`} /></div>
        </div>
            <div className={`p-[5px] text-[#666] ${dropdowns.bazarStore ? 'block' : 'hidden'} lg:block`}>
                {data.bazarStore.map((item, index) => (
                  <div key={index} className='flex hover:text-[var(--primary-color)] cursor-pointer'>
                    <FaLongArrowAltRight className='my-[5px] mr-[10px]' />
                    <a href={item.url} className='text-[14px] mb-[5px]'>{item.name}</a>
                  </div>
                ))}
            </div>
        </div>
        
        <div>
        <div onClick={() => toggleDropdown('popularCategories')} className='flex justify-between cursor-pointer my-[5px] lg:cursor-default'>
          <p className='font-[600] text-[16px]'>Populyar Kateqoriyalar</p>
          <div><RiArrowDropDownLine className={`lg:hidden text-[30px] transition-transform ${dropdowns.popularCategories ? 'rotate-180' : ''}`} /></div>
        </div>
            <div className={`p-[5px] text-[#666] ${dropdowns.popularCategories ? 'block' : 'hidden'} lg:block`}>
                {data.popularCategories.map((item, index) => (
                  <div key={index} className='flex hover:text-[var(--primary-color)] cursor-pointer'>
                    <FaLongArrowAltRight className='my-[5px] mr-[10px]' />
                    <a href={item.url} className='text-[14px] mb-[5px]'>{item.name}</a>
                  </div>
                ))}
            </div>
        </div>
        
        <div>
        <div onClick={() => toggleDropdown('blog')} className='flex justify-between cursor-pointer my-[5px] lg:cursor-default'>
          <p className='font-[600] text-[16px]'>Blog</p>
          <div><RiArrowDropDownLine className={`lg:hidden text-[30px] transition-transform ${dropdowns.blog ? 'rotate-180' : ''}`} /></div>
        </div>
            <div className={`p-[5px] text-[#666] ${dropdowns.blog ? 'block' : 'hidden'} lg:block`}>
                {data.blog.map((item, index) => (
                  <div key={index} className='flex hover:text-[var(--primary-color)] cursor-pointer'>
                    <FaLongArrowAltRight className='my-[5px] mr-[10px]' />
                    <a href={item.url} className='text-[14px] mb-[5px]'>{item.name}</a>
                  </div>
                ))}
            </div>
        </div>
        
      </section>

      <section className='border-t-[1px]'>
        <div className='mx-[35px] px-[15px] flex justify-center items-center'>
          <p className='my-[10px] text-[#666] text-[14px]'> &copy; {new Date().getFullYear()} <a className='no-underline hover:text-[var(--primary-color)]' href="#">BazarStore</a> <a href='https://github.com/aybeniz-24' target='target' className='no-underline hover:text-[var(--primary-color)]'>by aybeniz </a> </p>
        </div>
      </section>

    </footer>
  )
}

export default Footer
