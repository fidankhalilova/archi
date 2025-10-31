const Promotion = () => {
  return (
    <div className="conatiner mx-auto px-10 py-20 bg-[#f9fafb]">
      <div className="flex justify-center items-center gap-6">
        <div className="relative">
          <img
            src="https://cdn.prod.website-files.com/68519fc02007af8091e4b3e4/6851a096b22c4776772803a8_mens-category.webp"
            alt=""
            className="w-[592px] h-[426px] object-cover relative rounded-4xl"
          />
          <div className="absolute top-6 left-7 w-50 flex flex-col gap-3">
            <h1 className="text-white font-medium text-[34px]">
              Men's Collection
            </h1>
            <button className="bg-transparent text-black p-3 rounded-full w-full font-medium text-[18px] duration-200 hover:bg-[#c0f377] border hover:border-[#c0f377]">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://cdn.prod.website-files.com/68519fc02007af8091e4b3e4/6851a096b22c4776772803af_women-category.webp"
            alt=""
            className="w-[592px] h-[426px] object-cover rounded-4xl"
          />
          <div className="absolute top-6 left-7 w-50 flex flex-col gap-3">
            <h1 className="text-black font-medium text-[34px]">
              Women's Collection
            </h1>
            <button className="bg-transparent text-black p-3 rounded-full w-full font-medium text-[18px] duration-200 hover:bg-[#c0f377] border hover:border-[#c0f377]">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
