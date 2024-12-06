import { useState } from "react";
import ArrowButton from "./ArrowButton";

function Blog() {
  const blogData = [
    { id: 1, img: '/src/assets/blog/Dasarasi-kabab.webp', date: "27 Nov, 2023", name: "Daşarası Kabab" },
    { id: 2, img: '/src/assets/blog/Cigirtma-plov.webp', date: "27 Nov, 2023", name: "Çığırtma Plov" },
    { id: 3, img: '/src/assets/blog/Cutcu.webp', date: "27 Nov, 2023", name: "Cütctü" },
    { id: 4, img: '/src/assets/blog/Buglama.webp', date: "27 Nov, 2023", name: "Ət Buğlaması" },
    { id: 5, img: '/src/assets/blog/Bamiy.webp', date: "27 Nov, 2023", name: "Bamiyə" },
    { id: 6, img: '/src/assets/blog/Balva-sorbasi.webp', date: "27 Nov, 2023", name: "Balva" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < blogData.length - 3) {
      setCurrentIndex(currentIndex + 1); // 1 kart irəliləyir
    } else {
      setCurrentIndex(0); // Yenidən ilk kartlara qayıt
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1); // 1 kart geriyə gedir
    } else {
      setCurrentIndex(blogData.length - 3); // Sonuncu 3 kartı göstərmək üçün
    }
  };

  return (
    <div className="rounded-[5px] flex flex-col mb-[50px] ">
      <div className="flex justify-between px-[10px]">
        <div className="p-[15px]">
          <p className="font-bold text-[20px] mt-[15px]">Blog</p>
        </div>
        <div className="flex justify-end p-[15px]">
          <ArrowButton direction="prev" onClick={handlePrev} />
          <ArrowButton direction="next" onClick={handleNext} />
        </div>
      </div>

      <div className="mx-[20px] flex justify-between space-x-[20px] flex-wrap h-[330px]">
        {blogData.slice(currentIndex, currentIndex + 3).map((item) => (
          <div key={item.id} className="flex flex-col items-center sm:w-full md:w-[48%] lg:w-[30%] xlg:w-[30%]">
            <img
              src={item.img}
              alt={item.name}
              className="rounded-lg w-full h-[200px] object-cover mb-[15px] transition-transform duration-300 ease-in-out hover:scale-[1.05]"
            />
            <div className="ml-[-150px]">
              <p className="text-[17px]">{item.date}</p>
              <p className="my-[10px] font-bold">{item.name}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Blog;
