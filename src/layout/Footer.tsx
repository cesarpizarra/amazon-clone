import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { footerConditions, footerData, footerLinks } from "../constant/footer";
import { CiGlobe } from "react-icons/ci";
const Footer = () => {
  const scrollUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="w-full">
      <div
        onClick={scrollUp}
        className="cursor-pointer bg-[#37475a] p-2 text-center text-white hover:bg-[#445871]"
      >
        <button>Back to top</button>
      </div>
      <div className="bg-footerBg">
        <footer className="footer mx-auto w-full max-w-5xl p-10 text-white">
          {footerLinks.map((link, index) => (
            <nav key={index}>
              <h6 className="text-md font-bold">{link.label}</h6>
              {link.links.map((item, index) => (
                <a key={index} className="link-hover link text-sm">
                  {item.label}
                </a>
              ))}
            </nav>
          ))}
        </footer>
      </div>
      <footer className="footer items-center justify-center border-t border-gray-600 bg-footerBg px-10 pb-12 pt-4 text-white lg:flex">
        <div className="mx-auto lg:mx-0">
          <img src="/amazon-clone/logo2.png" alt="logo2" className="w-20" />
        </div>
        <div className="ml-0 items-center lg:ml-8 lg:flex">
          <div className="dropdown dropdown-top dropdown-hover hidden lg:block">
            <div
              tabIndex={0}
              role="button"
              className="rounded border-2 border-gray-500 bg-transparent px-4 py-2 text-white hover:bg-transparent"
            >
              <div className="flex items-center gap-2">
                <span>
                  {" "}
                  <CiGlobe size={20} />
                </span>
                <p>EN</p>
                <div>
                  <span>
                    {" "}
                    <FaCaretUp />
                  </span>
                  <span>
                    {" "}
                    <FaCaretDown />
                  </span>
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content z-10 w-52 bg-base-100 p-2 text-black shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <button className="btn border-2 border-gray-500 bg-transparent px-4 py-px text-white hover:border-gray-500 hover:bg-transparent">
            $ USD - US. Dollar
          </button>
          <button className="btn border-2 border-gray-500 bg-transparent px-4 py-px text-white hover:border-gray-500 hover:bg-transparent">
            <img src="/amazon-clone/en.png" alt="" className="w-5" /> United
            States
          </button>
        </div>
      </footer>

      <div className="bg-darkSecondary">
        <footer className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-5 p-10 text-white md:grid-cols-4 lg:grid-cols-7">
          {footerData.map((link, index) => (
            <a key={index} className="link-hover cursor-pointer">
              <p className="text-xs text-lightWhite">{link.title}</p>
              <span className="text-xs text-gray-400">{link.subtitle}</span>
            </a>
          ))}
        </footer>

        <footer className="mx-auto w-full max-w-5xl p-10 text-white">
          <div className="flex flex-wrap items-center justify-center gap-3 py-2 text-xs text-lightWhite">
            {footerConditions.map((link, index) => (
              <a href="#" key={index} className="link-hover">
                {link}
              </a>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400">
            © 2024 Amazon Clone. No rights reserved - this is a demo!
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
