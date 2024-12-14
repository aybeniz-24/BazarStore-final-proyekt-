import React, { useEffect, useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Popup = ({ isVisible, onClose, product }) => {
  const [counts, setCounts] = useState([1]);

  useEffect(() => {
    if (product && product.data) {
      setCounts(product.data.map(() => 1));
    } else {
      setCounts([1]);
    }
  }, [product]);

  const updateCount = (index, newCount) => {
    setCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? newCount : count))
    );
  };

  if (!isVisible || !product) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[1000px] h-[600px] flex flex-row items-center gap-20 p-5 pt-0 rounded-[8px]">
        {/* Product Images */}
       
<div className="flex flex-col items-center justify-center">
  <img
    className="w-[300px] h-[300px] p-[10px] mb-4 border-gray-300 border-[1px] rounded-[5px]"
    src={product.img}
    alt={product.name}
  />
  <div className="flex flex-row gap-[10px]">
    <img
      className="w-[100px] h-[100px] p-[10px] border-gray-300 border-[1px] rounded-[5px]"
      src={product.img}
      alt={product.name}
    />
    {product.hoverImg && (
      <img
        className="w-[100px] h-[100px] p-[10px] border-gray-300 border-[1px] rounded-[5px]"
        src={product.hoverImg}
        alt={`${product.name} hover`}
      />
    )}
  </div>
</div>


        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <p className="text-[24px] uppercase">{product.name} </p>
          <p className="text-[22px] font-bold">{product.price} 
          { product.discountedPrice && <span className="ml-[50px] text-[#666] font-normal line-through">{product.discountedPrice}</span>  }
          </p>
          <p>
            <span className="font-bold mr-[80px]">Marka</span>:{" "}
            {product.marka || "Məlumat yoxdur"}
          </p>
          <p>
            <span className="font-bold mr-[100px]">Sku</span>:{" "}
            {product.sku || "Məlumat yoxdur"}
          </p>
          <p>
            <span className="font-bold mr-[95px]">Title</span>{" "}
            <select className="border border-gray-300 rounded-lg px-4 py-2">
              {product.name && product.name.toLowerCase().includes("kq") ? (
                <>
                  <option value="1kq">1kq</option>
                  <option value="250q">250q</option>
                </>
              ) : (
                <>
                  <option value="1">1 Ədəd </option>
                  <option value="2">2 Ədəd</option>
                  <option value="3">3 Ədəd</option>
                </>
              )}
            </select>
          </p>

          {/* Quantity Controls */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-row">
                <p className="text-[14px] text-left font-bold"><span className="font-bold mr-[80px]">Miqdar</span></p>
                <div className="flex items-center border border-gray-300 w-[120px] h-[40px]">
                <button
                    onClick={() =>
                    updateCount(0, counts[0] > 1 ? counts[0] - 1 : 1)
                    }
                    className="p-2"
                >
                    -
                </button>
                <p className="mx-4 ">{counts[0]}</p>
                <button
                    onClick={() => updateCount(0, counts[0] + 1)}
                    className="p-2"
                >
                    +
                </button>
                </div>
            </div>
            <button className="rounded-lg py-[8px] w-[100px] px-[10px] mt-[20px] font-bold text-white bg-[#b3b93d] hover:bg-[#1e1e1e]">
              Səbətə At
            </button>
          </div>
          <p>
            <a href="#" className="text-[#1e1e1e] underline">
              Məhsul Məlumatlarını Görüntülə
            </a>
          </p>
        </div>
      </div>

      <button
        onClick={onClose}
        className="text-white bg-black rounded-full transition absolute top-[70px] right-[330px]"
      >
        <IoMdCloseCircleOutline className="text-[32px]" />
      </button>
    </div>
  );
};

export default Popup;
