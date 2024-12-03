import { useState } from "react"
import { RiDoubleQuotesL } from "react-icons/ri"
import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowBack } from "react-icons/io"

function Feedback() {
    const feedback = [
        { id: 1, text: "İkinci ildiki, online sifariş xidmətinizdən istifadə edirəm, çox razıyam, ailəmdə həmçinin sizin xidmətinizdən istifadə edir", name: "Aytən T.", category: 'Onlayn Müştəri' },
        { id: 2, text: "Kuryerləriniz dəqiq işləyir, tam vaxtında evə kimi çatdırılma edilir. Xidmət üçün təşəkkür edirəm.", name: "Elshad R.", category: 'Onlayn Müştəri' },
        { id: 3, text: "Xidmətinizdən məmnunam, məhsul olmayanda kuryer zəng edib, məlumat verir.", name: "Akife M.", category: 'Onlayn Müştəri' },
        { id: 4, text: "Həm məhsulların keyfiyyətindən, həmdə məhsulların çatdırılmasından razıyam.", name: "Fatma A.", category: 'Onlayn Müştəri' },
        { id: 5, text: "Razıyam, əladı xidmətiniz, həmişə sifariş edirəm.", name: "Zuleyxa M.", category: 'Onlayn Müştəri' },
    ];

      const [currentIndex, setCurrentIndex] = useState(0);
    

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedback.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + feedback.length) % feedback.length);
  };
  return (
    <div className="rounded-[5px] flex flex-col  mb-[50px] border  border-[#eee] ">
        <div className="bg-[#f0f0f0] rounded-t-lg">
            <p className="font-bold text-[20px]  p-[20px]">Müştərimiz Deyir</p>
        </div>
       
       
        <div className="m-[30px]">
            <RiDoubleQuotesL className="text-[#b3b93d] text-[50px]" />
            <div className="my-[10px] h-[150px]">
                <p className="text-[20px] tracking-wide leading-loose">{feedback[currentIndex].text}</p>
            </div>

            <div className="my-[15px] mt-[30px]">
               <p className="my-[10px] font-bold text-[1.6em]"> {feedback[currentIndex].name}</p>
                <p className="text-[1.1em] tracking-wider ">{feedback[currentIndex].category}</p>
            </div>

            <div>
                <button onClick={handlePrev}> <IoIosArrowBack  className="text-[2.1em] bg-[#eee] hover:bg-[#b3b93d] hover:text-white rounded-full m-[10px] p-[5px]"/></button>
                <button onClick={handleNext}> <IoIosArrowForward className="text-[2.1em] bg-[#eee] hover:bg-[#b3b93d] hover:text-white rounded-full m-[10px] p-[5px]" /></button>
            </div>
        </div>
    </div>
  )
}

export default Feedback