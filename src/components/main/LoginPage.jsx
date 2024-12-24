import ButtonSections from "./ButtonSections"

function LoginPage() {
  return (
    <div>
        <ButtonSections />

        <div className=" flex flex-col justify-center items-center w-[500px] mx-auto my-[100px] border border-[#e5e5e5] rounded-[5px]">
            <p className="text-[24px] my-[20px]">🔐 Daxil Olun</p>
            <input className="w-[70%] p-[6px] my-[8px] border border-[#5e5e5e] rounded-[5px] outline-none" type="email" placeholder="E-poçt" />
            <input className="w-[70%] p-[6px] my-[8px] border border-[#5e5e5e] rounded-[5px] outline-none" type="parol" placeholder="Parol" />
            <div className="flex justify-between gap-[30px] my-[30px]">
                <button className=" bg-[#b3b93d] hover:bg-[#1e1e1e] text-white font-bold rounded-[5px] px-[10px] p-[8px] ">Daxil Olun</button>
                <button className=" bg-[#e7e7e7]  text-black  rounded-[5px] px-[10px] p-[8px] ">Hesab Yarat</button>
            </div>
        </div>
    </div>
  )
}

export default LoginPage