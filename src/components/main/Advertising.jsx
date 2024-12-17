import advertisingImage from '../../assets/advertising/advertising1.webp';



function Advertising() {
  return (
    <div className="h-[450px] w-[300px] sm:w-[30%] md:w-[40%] lg:w-[100%] mb-[50px]">
        {/* linke duzelis et */}
        <a href="#">
             <img className='w-[100%] h-[450px] rounded-[5px]'  src="https://bazarstore.az/cdn/shop/files/yeni-il-sidebar_large.jpg?v=1733982360" alt="advertisementImage" />
        </a>
    </div>
  )
}

export default Advertising