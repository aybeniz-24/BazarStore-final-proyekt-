import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f0f0f0] text-center">
      {/* 404 Başlıq */}
      <h1 className="text-9xl font-bold text-[#b3b93d]"><img src="https://cdn.shopify.com/s/files/1/0748/2395/8833/files/404.png" alt="404" /></h1>
      
      {/* Açıqlama Mətn */}
      <p className="text-2xl text-gray-700 mt-4">
        Oops! The page you're looking for doesn't exist.
      </p>
      
      {/* Geri Dönüş Düyməsi */}
      <a 
        href="/"
        className="mt-6 px-6 py-3 bg-[#b3b93d] text-[#f0f0f0] font-medium text-lg rounded-lg  transition-colors duration-300"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
