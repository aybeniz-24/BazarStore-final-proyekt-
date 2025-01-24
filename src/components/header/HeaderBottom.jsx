import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
import menuData from '../../data/headerMenuData.json'
import { useContext, useState, useEffect } from 'react'
import headerLogo from "../../assets/HeaderImage/header-logo.png"
import { IoChatboxEllipsesOutline, IoSearch } from "react-icons/io5"
import { FaBars, FaFacebookF, FaInstagram, FaRegUser, FaTiktok } from "react-icons/fa6"
import { IoIosArrowDropup, IoMdArrowDropdown, IoMdArrowDropup, IoMdClose } from "react-icons/io"
import { FaRegHeart } from "react-icons/fa"
import { Offcanvas } from 'react-bootstrap'
import { FiYoutube } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { CiCircleInfo, CiSearch } from 'react-icons/ci'
import { Badge, Button } from '@material-tailwind/react'
import { BASKET } from '../context/BasketContext'
import { FAVORIT } from '../context/FavoritContext'
import { PiShoppingCartSimpleBold } from 'react-icons/pi'
import { RiArrowDropUpLine } from 'react-icons/ri'


function HeaderBottom() {

  const { basket } = useContext(BASKET)
  const { favorites } = useContext(FAVORIT)

  const [isScrolled, setIsScrolled] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      setIsHeaderVisible(window.scrollY < 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowNotification(true)
      } else {
        setShowNotification(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const basketBadge = basket.reduce((total, item) => total + (item.quantity || 0), 0)



  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [headerPopup, setHeaderPopup] = useState(false)
  const togglePopup = () => {
    setHeaderPopup(!headerPopup)
  }

  const rayonData = [
    { rayon: "Nərimanov", qesebeler: ["Qara Qarayev", "Azadlıq prospekti", "Şəfəq"] },
    { rayon: "Nəsimi", qesebeler: ["İçərişəhər", "Bakıxanov", "Bakı"] },
    { rayon: "Xətai", qesebeler: ["Xətai", "Əhmədli", "Sənaye"] },
    { rayon: "Binəqədi", qesebeler: ["Gəncə", "Binəqədi", "Vüqar"] },
    { rayon: "Sabunçu", qesebeler: ["Maştağa", "Bakı", "Beynəlxalq"] },
    { rayon: "Səbail", qesebeler: ["Səbail", "Həsən Əliyev", "Sahil"] },
    { rayon: "Yasamal", qesebeler: ["Yasamal", "İmam Hüseyn", "Bakı"] },
    { rayon: "Suraxanı", qesebeler: ["Suraxanı", "Bələdiyyə", "Bakı"] },
    { rayon: "Nizami", qesebeler: ["Nizami", "Rəşid Behbudov", "Nərimanov"] },
    { rayon: "Xəzər", qesebeler: ["Mərdəkan", "Binəqədi", "Xəzər"] },
  ]

  const [selectedRayon, setSelectedRayon] = useState("")
  const [selectedQesebe, setSelectedQesebe] = useState("")
  const [buttonText, setButtonText] = useState("Çatdırılma Ünvanı Seçin")
  const [errorMessage, setErrorMessage] = useState("")


  const handleRayonChange = (event) => {
    setSelectedRayon(event.target.value)
    setSelectedQesebe("")
  }

  const currentRayon = rayonData.find(rayon => rayon.rayon === selectedRayon)

  const handleConfirm = () => {
    if (selectedRayon && selectedQesebe) {
      setButtonText(`${selectedRayon} - ${selectedQesebe}`)
      setErrorMessage("")
    } else {
      setErrorMessage("Sizə Ən Yaxın Bazarstore-dan gətirək! Zəhmət olmasa sizə ən yaxın ünvanı seçin.")
    }
  }

  function handleButtonClick() {
    handleConfirm()
    togglePopup()
  }

  const navigate = useNavigate()

  const handleFavoritClick = () => {
    navigate('/favorit')
  }

  const handleBasketClick = () => {
    navigate('/basket')
  }

  const handleLoginClick = () => {
    navigate('/login')
  }

  return (
    <>
      <section>
        <div className={`flex justify-between items-center md:py-[2px] xlg:py-[20px] px-[15px] md:mx-[8%] md:my-0 lg:my-0  ${isHeaderVisible ? '' : 'hidden'}`}>

          <div className="flex items-center w-full lg:w-[25%] my-[10px]">
            <FaBars
              onClick={handleShow}
              className="inline text-[30px]   pr-2 md:hidden lg:hidden hover:text-[var(--primary-color)] cursor-pointer"
            />
            <Link to="/">
              <img
                className="hidden sm:hidden md:block lg:block xl:block sm:w-[50%] md:w-[60%] lg:w-[80%] xl:w-[70%]"
                src={headerLogo}
                alt="logo"
              />
            </Link>
          </div>

          <div className="hidden lg:flex lg:justify-around lg:w-[50%] w-full">
            <div className="flex justify-center rounded-full p-[5px]">
              <button
                onClick={togglePopup}
                className="outline-none w-[200px] border-[1px] p-[6px] px-[10px] border-r-[0] rounded-l-full text-[#757575]">
                {buttonText}
              </button>
              {errorMessage && (
                <div className="bg-[#b3b93d] border border-[#d2d2d2] absolute top-[180px] text-white p-[10px] w-[180px] z-30">
                  {errorMessage}
                  <button
                    onClick={togglePopup}
                    className="text-[28px] absolute top-2 right-2 text-[#444444]">
                    <IoMdCloseCircleOutlie />
                  </button>
                </div>
              )}
              <button className="border-[1px] p-[10px] rounded-r-full border-l-[0] bg-white">
                <IoMdArrowDropdown className="text-[20px]" />
              </button>
            </div>

            <div className="flex justify-center rounded-full p-[5px]">
              <input
                className="outline-none w-[200px] border-[1px] p-[6px] px-[10px] border-r-[0] rounded-l-full"
                type="search"
                placeholder="Məhsul Axtar"
              />
              <button className="border-[1px] p-[10px] rounded-r-full bg-white">
                <IoSearch className="text-[18px]" />
              </button>
            </div>
          </div>


          {headerPopup && (
            <>
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={togglePopup}
              ></div>
              <div
                className=" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[500px]  shadow-lg p-6 rounded-lg z-50"
              >
                <h2 className="text-[24px] font-semibold mb-2 text-center">Çatdırılma Ünvanı Seçin</h2>
                <p className="text-gray-600 mb-4 text-center"><CiCircleInfo className='inline mx-[5px] text-[20px]' />Ünvanınıza ən yaxın olanı seçin </p>
                <div className='border-t-[2px] border-b-[2px] my-[30px] border-[#d2d2d2] '>
                  <p className='text-[22px] my-[15px]'>Rayon:</p>
                  <select
                    className='w-full border p-[10px] rounded-[5px] my-[5px] outline-none'
                    onChange={handleRayonChange}
                    value={selectedRayon}
                  >
                    <option value="">Rayon Seçin</option>
                    {rayonData.map((item, index) => (
                      <option key={index} value={item.rayon}>{item.rayon}</option>
                    ))}
                  </select>
                  <p className='text-[22px] my-[15px]'>Qəsəbə/Küçə:</p>
                  <select
                    className='w-full border p-[10px] rounded-[5px] my-[5px] mb-[50px] outline-none'
                    disabled={!selectedRayon}
                    value={selectedQesebe}
                    onChange={(e) => setSelectedQesebe(e.target.value)}
                  >
                    <option value="">Qəsəbə Seçin</option>
                    {selectedRayon && currentRayon?.qesebeler.map((qesebe, index) => (
                      <option key={index} value={qesebe}>{qesebe}</option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={togglePopup}
                  className="text-[28px] absolute top-5 right-5"
                >
                  <IoMdClose />
                </button>

                <button
                  onClick={handleButtonClick}
                  className="text-white px-4 py-2 bg-[#45a049] w-full hover:bg-[#45a060] border border-gray-300 rounded-lg"
                >
                  Təsdiq edin
                </button>
              </div>
            </>
          )}

          <div className="flex flex-row gap-[18px] justify-end w-full lg:w-[15%]">
            <IoSearch className="inline text-[24px] lg:hidden" />
            <Link to="/login" onClick={handleLoginClick}>
              <FaRegUser className="inline text-[24px] cursor-pointer" />
            </Link>

            <Badge className="hidden lg:inline px-[9px] text-[10px] right-[-12px] top-[-8px] bg-[#3e3b3a]" content={favorites.length || 0}>
              <Link to="/favorit" className="p-0 m-0 block" onClick={handleFavoritClick}>
                <FaRegHeart className="hidden lg:inline p-0 m-0 text-black text-[26px]" />
              </Link>
            </Badge>

            <Badge className="px-[9px] text-[10px] right-[-12px] top-[-8px] bg-[#3e3b3a]" content={basketBadge}>
              <Link to="/basket" className="p-0 m-0 block" onClick={handleBasketClick}>
                <PiShoppingCartSimpleBold className="block p-0 m-0 text-black text-[28px]" />
              </Link>
            </Badge>
          </div>

        </div>

        <div className='block md:hidden lg:hidden mx-[10px]'>
          <div className='flex justify-center p-[5px]'>
            <button className='outline-none border-[1px] p-[6px] px-[10px] border-r-[0] w-[100%] h-[60px] text-start text-[#757575]'>Çatdırılma Ünvanı Seçin</button>
            <button className='border-[1px] p-[10px] border-l-[0] bg-white'>  <IoMdArrowDropdown className='text-[20px]' /> </button>
          </div>
        </div>
      </section>

      {isScrolled && (
        <div className="fixed bottom-[60px] right-10 bg-[#b3b93d] p-[25px] rounded-full shadow-lg z-50 transition-opacity duration-2000 ease-in-out opacity-100">
          <Badge className="px-[8px] right-[-10px] top-[-15px] text-[10px] bg-[#3e3b3a]" content={basketBadge}>
            <Link to="/basket" className="p-0 m-0 block">
              <PiShoppingCartSimpleBold className="text-white text-[28px]" />
            </Link>
          </Badge>
        </div>
      )}

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="fixed bottom-4 right-[50px] p-[5px] px-[10px] bg-[#b3b93d] text-white rounded-full shadow-lg z-50">
          <p><IoChatboxEllipsesOutline className='inline text-[24px] pr-[5px]' />Buyurun...</p>
        </button>
        <div
          className={`fixed right-[50px] bottom-[60px] shadow-lg transition-all duration-300 z-20 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>

          <div className='p-[20px] bg-gradient-to-r from-[#b2b83d] via-[#808526] to-[#525410] rounded-[15px]'>
            <p className='text-white text-[24px]'>🤍 Buyurun...</p>
            <p className='text-[#ebebeb] p-[10px]'>
              Sifarişinizin statusunu izləyin və ya ən çox <br /> verilən suallara baxın, dəstək üçün bizimlə <br /> əlaqə saxlayın.
            </p>
            <div className='my-[20px]'>
              <a className='text-[16px] mr-[15px] bg-[#ccc] p-[10px] pt-[5px] rounded-full ' href="https://facebook.com/bazarstore"><FaFacebookF className='inline' /></a>
              <a className='text-[16px] mr-[15px] bg-[#ccc] p-[10px] pt-[5px] rounded-full ' href="https://instagram.com/bazarstore"><FaInstagram className='inline' /></a>
              <a className='text-[16px] mr-[15px] bg-[#ccc] p-[10px] pt-[5px] rounded-full ' href="https://tiktok.com/@bazarstore"><FaTiktok className='inline' /></a>
              <a className='text-[16px] mr-[15px] bg-[#ccc] p-[10px] pt-[5px] rounded-full ' href="https://youtube.com/bazarstore"><FiYoutube className='inline' /></a>
            </div>
          </div>

        </div>
        {showNotification && (
          <span
            className="fixed bottom-4 right-[-5px] transform -translate-x-1/2 bg-[#b3b93d] text-white rounded-[100%] shadow-lg cursor-pointer z-50 transition-opacity duration-2000 ease-in-out opacity-100"
            onClick={scrollToTop}
          >
            <RiArrowDropUpLine className="text-[35px]" />
          </span>
        )}
      </div>


      <Offcanvas show={show} onHide={handleClose} id="custom-offcanvas" >
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='flex flex-col justify-between h-full'>
            <ul className='mx-[5px]'>
              {menuData.map(data => (
                <li key={data.id} className='text-[16px] my-[5px] hover:text-[var(--primary-color)]'>
                  <a href="/notFound">{data.label}</a>
                </li>
              ))}
            </ul>
            <div className='my-[20px]'>
              <a href="https://facebook.com/bazarstore" className='text-[16px] mr-[15px] bg-[#ccc] p-[10px] pt-[5px] rounded-full hover:bg-[var(--primary-color)] hover:text-white'><FaFacebookF className='inline' /></a>
              <a href="https://www.instagram.com/bazarstore_supermarket/" className='text-[16px] mr-[15px] bg-[#ccc] p-[10px] pt-[5px] rounded-full hover:bg-[var(--primary-color)] hover:text-white'><FaInstagram className='inline' /></a>
              <a href="https://tiktok.com/@bazarstore" className='text-[16px] mr-[15px] bg-[#ccc] p-[10px] pt-[5px] rounded-full hover:bg-[var(--primary-color)] hover:text-white'><FaTiktok className='inline' /></a>
              <a href="https://youtube.com/bazarstore" className='text-[16px] mr-[15px] bg-[#ccc] p-[10px] pt-[5px] rounded-full hover:bg-[var(--primary-color)] hover:text-white'><FiYoutube className='inline' /></a>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}

export default HeaderBottom
