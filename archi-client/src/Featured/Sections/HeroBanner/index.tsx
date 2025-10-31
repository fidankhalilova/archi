const HeroBanner = () => {
  return (
    <div className="bg-[#f9fafb]">
      <div className="container mx-auto px-10 pt-50">
        <div className="w-full flex justify-between">
          <div className="w-150 h-full flex flex-col gap-3 ml-20">
            <p className="bg-[#c0f377] p-2 rounded-2xl text-sm w-37 flex justify-center items-center">
              New Trend 2025
            </p>
            <h1 className="text-[80px] leading-25 font-medium">
              Waves Puffer Coat Black
            </h1>
            <button className="bg-transparent text-black p-5 rounded-full w-75 font-medium text-[20px] duration-200 hover:bg-[#c0f377] border hover:border-[#c0f377]">
              Shop Now
            </button>
          </div>

          <div className="mr-10">
            <img
              src="https://cdn.prod.website-files.com/68519fc02007af8091e4b3e4/6851a088716aed66e8280f34_hero-image.webp"
              alt=""
              className="w-170 h-150 object-cover"
            />
          </div>
          <div className="absolute w-100 top-30 right-[-200px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 347 326"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.467776 80.9043C0.467776 58.853 19.654 38.7439 51.0147 24.1201C82.3372 9.51421 125.642 0.467805 173.5 0.467805C221.358 0.467805 264.663 9.51421 295.985 24.1201C327.346 38.7439 346.532 58.853 346.532 80.9043C346.532 102.956 327.346 123.065 295.985 137.689C264.663 152.294 221.358 161.341 173.5 161.341C125.642 161.341 82.3372 152.294 51.0146 137.689C19.654 123.065 0.467784 102.956 0.467776 80.9043Z"
                stroke="black"
                stroke-width="0.93531"
              ></path>
              <path
                d="M0.467775 162.713C0.467776 140.662 19.654 120.552 51.0147 105.929C82.3372 91.3228 125.642 82.2764 173.5 82.2764C221.358 82.2764 264.663 91.3228 295.985 105.929C327.346 120.552 346.532 140.662 346.532 162.713C346.532 184.764 327.346 204.873 295.985 219.497C264.663 234.103 221.358 243.149 173.5 243.149C125.642 243.149 82.3372 234.103 51.0146 219.497C19.654 204.873 0.467784 184.764 0.467775 162.713Z"
                stroke="black"
                stroke-width="0.93531"
              ></path>
              <path
                d="M0.467774 244.522C0.467775 222.47 19.654 202.361 51.0147 187.737C82.3372 173.131 125.642 164.085 173.5 164.085C221.358 164.085 264.663 173.131 295.985 187.737C327.346 202.361 346.532 222.47 346.532 244.522C346.532 266.573 327.346 286.682 295.985 301.306C264.663 315.912 221.358 324.958 173.5 324.958C125.642 324.958 82.3372 315.912 51.0146 301.306C19.654 286.682 0.467783 266.573 0.467774 244.522Z"
                stroke="black"
                stroke-width="0.93531"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
