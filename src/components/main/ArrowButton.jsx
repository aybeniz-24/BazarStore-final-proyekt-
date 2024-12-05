import PropTypes from "prop-types"; // PropTypes idxal edilir
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ArrowButton({ direction, onClick }) {
  const Icon = direction === "next" ? IoIosArrowForward : IoIosArrowBack;

  return (
    <button
      onClick={onClick}
      className="text-[1.4em] bg-[#eee] hover:bg-[#b3b93d] hover:text-white rounded-full m-[10px] p-[5px]"
    >
      <Icon />
    </button>
  );
}

// PropTypes təyin edirik
ArrowButton.propTypes = {
  direction: PropTypes.oneOf(["next", "prev"]), // "next" və ya "prev" dəyərlərindən biri olmalıdır
  onClick: PropTypes.func.isRequired, // "onClick" mütləq bir funksiya olmalıdır
};

// Default dəyərləri təyin edirik
ArrowButton.defaultProps = {
  direction: "next", // Default istiqamət "next"
};

export default ArrowButton;
