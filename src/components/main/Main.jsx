import AllCategorButton from "./AllCategorButton";
import Popup from "./Popup";

function Main() {
  return (
    <main className="border-t-[1px] border-[#eee]">
      <div>
        <AllCategorButton />
      </div>
      <div className="md:mx-[8%] flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-[75%]">
          <Popup />
        </div>
      </div>
    </main>
  );
}

export default Main;
