import { useState } from "react";
import ArrowButton from "./ArrowButton"

function News() {
  // Məlumatlar
  const newsData = [
    { id: 1, img: '/src/assets/news/news_slider1.webp', date: "28 Nov, 2024", title: "Onlayn sifariş et, hədiyyə qazan. 🎉" },
    { id: 2, img: '/src/assets/news/news_slider2.webp', date: "19 Nov, 2024", title: "Parlayanların gecəsinə qoşul! ✨" },
    { id: 3, img: '/src/assets/news/news_slider3.webp', date: "23 Oct, 2024", title: "Online sifarişə özəl endirimlər🎯" },
    { id: 4, img: '/src/assets/news/news_slider4.webp', date: "03 Oct, 2024", title: "Bazarstore.az | Onlayn market alış-verişi 💚" },
    { id: 5, img: '/src/assets/news/news_slider5.webp', date: "02 Aug, 2024", title: "Bazarstore.az - Onlayn Supermarket" },
    { id: 6, img: '/src/assets/news/news_slider6.webp', date: "04 Jul, 2024", title: "Bazarstore 'Bazarfest – gözəllik festivalı' ilə ilkə imza atdı" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < newsData.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Yenidən ilk kartlara qayıt
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(newsData.length - 3); // Sonuncu 3 kartı göstərmək üçün
    }
  };

  return (
    <div className="rounded-[5px] sm:hidden md:flex lg:flex xlg:flex flex-col mb-[50px]  hidden ">
      <div className="flex justify-between px-[10px]">
        <div className="p-[15px]">
          <p className="font-bold text-[20px] mt-[15px]">Xəbərlər</p>
        </div>
        <div className="flex justify-end p-[15px] ">
          <ArrowButton direction="prev" onClick={handlePrev} />
          <ArrowButton direction="next" onClick={handleNext} />
        </div>
      </div>

      <div className="mx-[20px] flex justify-between space-x-[20px] flex-wrap h-[330px]">
        {newsData.slice(currentIndex, currentIndex + 3).map((item) => (
          <div key={item.id} className=" flex-col items-center hidden sm:hidden md:w-[48%] md:flex lg:w-[30%] lg:flex xlg:flex">
            <img
            src={item.img}
            alt={item.title}
            className="rounded-lg w-full h-[200px] object-cover mb-[15px] transition-transform duration-300 ease-in-out hover:scale-[1.05]"
            />
            <div>
              <p className="text-[17px]">{item.date}</p>
              <p className="my-[10px] font-bold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
