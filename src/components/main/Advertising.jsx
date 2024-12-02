import advertisementImage from '../../assets/advertisement/pantene-sidebar_advertisemen.webp';



function Advertising() {
  return (
    <div className="h-[400px] w-[300px] sm:w-[30%] md:w-[40%] lg:w-[100%] mb-[50px]">
        {/* linke duzelis et */}
        <a href="#">
             <img className='w-[100%] h-[400px] rounded-[5px]'  src={advertisementImage} alt="advertisementImage" />
        </a>
    </div>
  )
}

export default Advertising