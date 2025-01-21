import Advertising from "./Advertising";
import AllCategorButton from "./AllCategorButton";
import Popup from "./Popup";
import CombinedComponent from "./CombinedComponent";
// import ProductTypes from "./ProductTypes";


import { NewYear, PineTree, OnlineOrder, ProductMeats } from "../../services/api";
import ProductCarousel from "./ProductCarousel";
import MainSlider from "./MainSlider";



function Main() {
  return (
    <main className="border-t-[1px] border-[#eee]">
      <div>
        <AllCategorButton />
        
      </div>



      <div className="md:mx-[8%] flex flex-col lg:flex-row justify-between">
        



        

        <div className="w-full lg:w-[75%]">
          <Popup />

           
          
         
          {/* <ProductTypes /> */}
        </div>  
      </div>
    </main>
  );
}

export default Main;
