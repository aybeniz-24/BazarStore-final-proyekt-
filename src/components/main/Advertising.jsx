import advertisingImage from '../../assets/advertising/advertising1.webp';



function Advertising() {
  return (
    <div className="h-[600px] w-[300px] sm:w-[30%] md:w-[40%] lg:w-[100%] mb-[50px]">
        {/* linke duzelis et */}
        <a href="#">
             <img className='w-[100%] h-[600px] rounded-[5px]'  src={advertisingImage} alt="advertisementImage" />
        </a>
    </div>
  )
}

export default Advertising