import Advertising from "./Advertising"
import Advertising_2 from "./Advertising_2"
import DiscountedProducts from "./DiscountedProducts"
import Feedback from "./Feedback"

function Main() {
  return (
    <main className="border-t-[1px] border-[#eee]">
      <div className="md:mx-[8%] w-[20%] ">
        <Advertising />
        <DiscountedProducts />
        <Advertising_2 />
        <Feedback />
      </div>
    </main>
  )
}

export default Main
