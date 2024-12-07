import Advertising from "./Advertising";
import Advertising_2 from "./Advertising_2";
import AllCategorButton from "./AllCategorButton";
import Blog from "./Blog";
import DiscountedProducts from "./DiscountedProducts";
import Feedback from "./Feedback";
import News from "./News";
import ProductTypes from "./ProductTypes";

function Main() {
  return (
    <main className="border-t-[1px] border-[#eee]">
      <div>
        <AllCategorButton />
      </div>



      <div className="md:mx-[8%] flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-[23%] ">
          <Advertising />
          <DiscountedProducts />
          <Advertising_2 />
          <Feedback />
        </div>

        <div className="w-full lg:w-[75%]">
          <ProductTypes />
          <Blog />
          <News />
        </div>  
      </div>
    </main>
  );
}

export default Main;
