import 'bootstrap/dist/css/bootstrap.min.css'
import '../../App.css'
import menuData from '../../data/headerMenuData.json'
import  { useState } from 'react'
import headerLogo from "../../assets/HeaderImage/header-logo.png"
import { IoPersonOutline, IoSearch } from "react-icons/io5"
import { SlBasket } from "react-icons/sl"
import { FaBars, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6"
import { IoMdArrowDropdown, IoMdClose } from "react-icons/io"
import { FaRegHeart } from "react-icons/fa"
import { Offcanvas } from 'react-bootstrap'
import { FiYoutube } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'
import { CiCircleInfo } from 'react-icons/ci'
import { Badge, Button } from '@material-tailwind/react'



function HeaderBottom() {

  const [ show, setShow ] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [headerPopup, setHeaderPopup] = useState(false);
  const togglePopup = () => {
    setHeaderPopup(!headerPopup);
  };

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
  ];

  const [selectedRayon, setSelectedRayon] = useState("");
  const [selectedQesebe, setSelectedQesebe] = useState("");
  const [buttonText, setButtonText] = useState("Çatdırılma Ünvanı Seçin");
  const [errorMessage, setErrorMessage] = useState("");  // Error mesajını saxlamaq üçün state


  const handleRayonChange = (event) => {
      setSelectedRayon(event.target.value);
      setSelectedQesebe(""); // Rayon dəyişəndə qəsəbəni sıfırla
  };

  // Seçilən rayona uyğun qəsəbələri tapmaq
  const currentRayon = rayonData.find(rayon => rayon.rayon === selectedRayon);

  const handleConfirm = () => {
    if (selectedRayon && selectedQesebe) {
        setButtonText(`${selectedRayon} - ${selectedQesebe}`);
        setErrorMessage(""); // Hər şey doğru olduqda, error mesajını təmizləyin
    } else {
        setErrorMessage("Sizə Ən Yaxın Bazarstore-dan gətirək! Zəhmət olmasa sizə ən yaxın ünvanı seçin."); // Error mesajını göstər
    }
}


function handleButtonClick() {
  handleConfirm(); // Təsdiq funksiyası
  togglePopup();   // Bağlama funksiyası
}


const navigate = useNavigate(); // Navigate hook'u

  const handleFavoritClick = () => {
    navigate('/favorit'); // Favorit sayfasına yönlendir
  };

  const handleBasketClick = () => {
    navigate('/basket'); // Basket sayfasına yönlendir
  };



  const handleLoginClick = () => {
    navigate('/login'); // login sayfasına yönlendir
  };

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
              <button
              onClick={togglePopup}
               className='outline-none w-[200px] border-[1px] p-[6px] px-[10px] border-r-[0] rounded-l-full text-[#757575]'>
                {buttonText}</button>
                {errorMessage && (  // errorMessage varsa, aşağıdakı div-i göstər
                <div className='bg-[#b3b93d] border border-[#d2d2d2] absolute top-[180px] text-white p-[10px] w-[180px] z-30 '>
                    {errorMessage}
                    <button
                  onClick={togglePopup}
                  className="text-[28px] absolute top-2 right-2 text-[#444444]"
                >
                  <IoMdCloseCircleOutlie />
                </button>
                </div>
            )}
              <button className='border-[1px] p-[10px] rounded-r-full border-l-[0] bg-white'>  <IoMdArrowDropdown className='text-[20px]' /> </button>
            </div>

            <div className='flex justify-center rounded-full p-[5px]'>
              <input className='outline-none w-[200px] border-[1px] p-[6px] px-[10px] border-r-[0] rounded-l-full' type="search" placeholder='Məhsul Axtar' />
              <button className='border-[1px] p-[10px] rounded-r-full bg-white'> <IoSearch className='text-[18px]' /> </button>
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








          <div className='flex flex-row gap-[10px] justify-end lg:w-[15%]'>
                  <IoSearch className='inline text-[24px] lg:hidden ' /> 
                  <Link to="/login" onClick={handleLoginClick} > 
                    <IoPersonOutline className='inline text-[24px] cursor-pointer ' />
                  </Link>
                  <Link to="/favorit"  onClick={handleFavoritClick}>
                    <FaRegHeart className='hidden lg:inline text-[24px]' />
                  </Link>
                  
                  <Badge  className="p-0 m-0 bg-pink-500" content={2}>
                  <Link to="/basket" className="p-0 m-0 block" onClick={handleBasketClick}>
                    <Button className="p-0 m-0">
                      <SlBasket className="block p-0 m-0 text-black text-[26px]" />
                    </Button>
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
                <a className='text-[16px] mr-[15px] bg-[#ccc] p-[10px] pt-[5px] rounded-full hover:bg-[var(--primary-color)] hover:text-white' href="https://www.instagram.com/bazarstore_supermarket/"><FaInstagram className='inline' /></a>
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
