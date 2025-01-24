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
  <div className="bg-white w-full max-w-[1000px] h-full max-h-[600px] flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20 p-5 pt-0 rounded-[8px] overflow-hidden">

    <div className="flex flex-col items-center justify-center w-full md:w-[300px]">
      <img
        className="w-full h-[300px] p-[10px] mb-4 border-gray-300 border-[1px] rounded-[5px] object-cover"
        src={product.img}
        alt={product.name}
      />
      <div className="flex flex-row gap-[10px]">
        <img
          className="w-[100px] h-[100px] p-[10px] border-gray-300 border-[1px] rounded-[5px] object-cover"
          src={product.img}
          alt={product.name}
        />
        {product.hoverImg && (
          <img
            className="w-[100px] h-[100px] p-[10px] border-gray-300 border-[1px] rounded-[5px] object-cover"
            src={product.hoverImg}
            alt={`${product.name} hover`}
          />
        )}
      </div>
    </div>

    <div className="flex flex-col gap-4 w-full md:w-auto">
      <p className="text-[24px] uppercase text-center md:text-left">{product.name}</p>
      <p className="text-[22px] font-bold text-center md:text-left">{product.price}
        {product.discountedPrice && <span className="ml-[60px] text-[#666] font-normal line-through">{product.discountedPrice}</span>}
      </p>
      <p className="text-center md:text-left">
        <span className="font-bold">Marka</span>:{" "}
        {product.marka || "Məlumat yoxdur"}
      </p>
      <p className="text-center md:text-left">
        <span className="font-bold">Sku</span>:{" "}
        {product.sku || "Məlumat yoxdur"}
      </p>

      <div className="flex justify-center gap-4 mt-4 md:justify-start">
      </div>

      <p className="text-center md:text-left">
        <a href="#" className="text-[#1e1e1e] underline">
          Məhsul Məlumatlarını Görüntülə
        </a>
      </p>
    </div>
  </div>

  <button
    onClick={onClose}
    className="text-white bg-black rounded-full transition absolute top-[20px] right-[20px] md:top-[40px] md:right-[250px]"
  >
    <IoMdCloseCircleOutline className="text-[28px] md:text-[32px]" />
  </button>
</div>

  );
};

export default Popup;
