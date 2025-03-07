
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f0f0f0] text-center p-4">
      <h1 className="text-9xl sm:text-7xl md:text-8xl font-bold text-[#b3b93d]">
        <img src="https://cdn.shopify.com/s/files/1/0748/2395/8833/files/404.png" alt="404" />
      </h1>
      
      <p className="text-2xl sm:text-xl text-gray-700 mt-4 max-w-lg">
        Oops! 
      </p>
      
      <a 
        href="/"
        className="mt-6 px-6 py-3 bg-[#b3b93d] text-[#f0f0f0] font-medium text-lg rounded-lg transition-colors duration-300 max-w-[200px] sm:max-w-[250px]"
      >
       Ana Sehifə
      </a>
    </div>
  );
};

export default NotFound;
