import Advertising from "./Advertising"
import DiscountedProducts from "./DiscountedProducts"

function Main() {
  return (
    <main className="border-t-[1px] border-[#eee]">
      <div className="md:mx-[8%] w-[20%] ">
        <Advertising />
        <DiscountedProducts />
      </div>
    </main>
  )
}

export default Main
