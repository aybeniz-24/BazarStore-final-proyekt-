import Advertising from "./Advertising";
import AllCategorButton from "./AllCategorButton";
import Blog from "./Blog";
import Meat from "./Meat";
import News from "./News";
import NewYearGifts from "./NewYearGifts";
import OnlineOrderExclusive from "./OnlineOrderExclusive";
import PineTrees from "./PineTrees";
import Popup from "./Popup";
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
        </div>

        <div className="w-full lg:w-[75%]">
          <Popup />
          
          <OnlineOrderExclusive />
          <NewYearGifts />
          <PineTrees />
          <Meat />
          <ProductTypes />
          <Blog />
          <News />
        </div>  
      </div>
    </main>
  );
}

export default Main;
