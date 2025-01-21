import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";

function SelectedCategoryHeader({ selectedCategory, selectedSubCategory }) {
  return (
    <div className="bg-[#f0f0f0] py-6 mb-5">
      <div className="container mx-auto flex items-center">
        {/* Ana səhifəyə keçid */}
        <Link to="/" className="flex items-center text-[18px] text-gray-600 hover:text-[#b3b93d]">
          <GoHome className="text-[26px] mr-2" />
          Ana Səhifə
        </Link>

        {/* Seçilmiş kateqoriya */}
        {selectedCategory && (
          <>
            <span className="mx-3 text-gray-500">/</span>
            <Link
              to={`/category/${selectedCategory}`}
              className="text-[18px] text-gray-600 hover:text-[#b3b93d]"
            >
              {selectedCategory}
            </Link>
          </>
        )}

        {/* Seçilmiş alt-kateqoriya */}
        {selectedSubCategory && (
          <>
            <span className="mx-3 text-gray-500">/</span>
            <Link
              to={`/category/${selectedCategory}/${selectedSubCategory}`}
              className="text-[18px] text-gray-600 hover:text-[#b3b93d]"
            >
              {selectedSubCategory}
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default SelectedCategoryHeader;
