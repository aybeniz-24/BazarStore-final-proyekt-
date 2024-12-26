import Advertising from "./Advertising";
import AllCategorButton from "./AllCategorButton";
import Popup from "./Popup";
import CombinedComponent from "./CombinedComponent";
// import ProductTypes from "./ProductTypes";


import { NewYear, PineTree, OnlineOrder, ProductMeats } from "../../services/api";
import ProductCarousel from "./ProductCarousel";



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

            {/* <OnlineOrderExclusive /> */}

          <div>
            <ProductCarousel 
            title="Onlayn Sifarişə Özəl"
            apiFunction={OnlineOrder}
            categoryIcon="✨"
            />
            <ProductCarousel
              title="Yeni İl Hədiyyələri"
              apiFunction={NewYear}
              categoryIcon="🎇"
            />
            <ProductCarousel
              title="Şam Ağacları"
              apiFunction={PineTree}
              categoryIcon="🌲"
            />
             <ProductCarousel
              title="Bol Ət, ağzınıza layiq ləzzət!"
              apiFunction={ProductMeats}
            />
          </div>
          
          <CombinedComponent />
          {/* <ProductTypes /> */}
        </div>  
      </div>
    </main>
  );
}

export default Main;
