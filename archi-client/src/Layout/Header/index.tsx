import { Search, ShoppingBag, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import OffCanvas from "../../Featured/Components/Offset";
import { MuiAccordion } from "../../Featured/Components/MuiAccordion";
import { navbarItems } from "../../constants/navbarItems";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`mx-auto py-8 fixed top-0 left-0 right-0 bg-white w-full z-10 ${
        scrolled ? "shadow-[0px_2px_0px_0px_rgba(0,0,0,0.1)]" : "shadow-none"
      }`}
    >
      <div
        id="desktop-nav"
        className={`md:flex items-center justify-center gap-8 hidden px-10`}
      >
        <div id="logo" className="w-30">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 135.466 38.189"
          >
            <title>Archi</title>
            <path
              d="M31.6,25.834V63.59H26.776V41.014H17.523L1.436,63.59H0L26.776,25.834ZM26.761,28.2l-8.376,11.54h8.376Zm19.768-2.365q9.528.647,9.528,7.57T46.529,41.02L62.45,63.59H61.017L45.428,41.977V63.59h-4.8V25.834Zm-.962,1.1V39.772q5.241,0,5.241-6.42T45.567,26.933Zm39.077-1.122a23.226,23.226,0,0,1,11.672,3.082v1.789a16.29,16.29,0,0,0-10.794-4.135c-9.435,0-17.083,8.232-17.083,18.386S76.087,63.32,85.522,63.32a16.29,16.29,0,0,0,10.794-4.135v1.732A23.226,23.226,0,0,1,84.644,64c-11.829,0-21.418-8.549-21.418-19.095S72.815,25.811,84.644,25.811Zm17.961,0h5.1V39.74h9.172V25.811h4.858V63.32h-4.858V40.961H107.7V63.32h-5.1Zm27.962,0h4.9V63.32h-4.9Z"
              transform="translate(0 -25.811)"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="h-8 w-px bg-gray-300"></div>
        <div
          id="search-bar"
          className="bg-[#f9fafb] rounded-xl py-3 px-5 flex items-center gap-1"
        >
          <Search />
          <input
            type="text"
            placeholder="Search..."
            className="rounded-md px-4 w-230 bg-transparent focus:outline-none cursor-text"
          />
        </div>

        <div id="cart-btn" className=" relative">
          <ShoppingBag className="relative w-10" />
          <div className="absolute bottom-2 right-0 bg-green-500 p-2 rounded-full text-xs text-white w-5 h-5 flex items-center justify-center">
            0
          </div>
        </div>
        <div>
          <button
            onClick={() => setIsOpen(true)}
            className="your-custom-button-styles"
          >
            <Menu />
          </button>

          <OffCanvas isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Menu</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                {navbarItems &&
                  navbarItems.map((item) => (
                    <MuiAccordion
                      key={item.id}
                      header={
                        <div>
                          {" "}
                          <a href={item.path}>{item.name}</a>
                        </div>
                      }
                    >
                      <div>
                        <ul>
                          {item.subItems &&
                            item.subItems.map((subItem) => (
                              <li key={subItem.id}>
                                <a
                                  href={subItem.path}
                                  className="hover:bg-gray-100 block px-4 py-2 text-black"
                                >
                                  {subItem.name}
                                </a>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </MuiAccordion>
                  ))}
              </div>
            </div>
          </OffCanvas>
        </div>
      </div>
    </div>
  );
}
