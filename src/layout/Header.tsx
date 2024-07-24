import { IoLocationOutline, IoSearchSharp, IoMenu } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaCaretDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { navLinks } from "../constant/nav";
import { FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    {
      name: "All",
      path: "#",
    },
    {
      name: "Today's Deals",
      path: "#",
    },
    {
      name: "Customer Service",
      path: "#",
    },
    {
      name: "Registry",
      path: "#",
    },
    {
      name: "Gift Cards",
      path: "#",
    },
    {
      name: "Sell",
      path: "#",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="w-full text-white">
      <div className="flex items-center justify-between gap-8 bg-darkSecondary px-4 py-2 lg:justify-center">
        <Link to="/">
          <div className="w-24 border border-transparent p-2 hover:border-white">
            <img src="/logo2.png" alt="Logo" className="w-full object-cover" />
          </div>
        </Link>

        <div className="hidden cursor-pointer items-center border border-transparent hover:border-white lg:flex">
          <IoLocationOutline size={20} />
          <p className="text-sm">
            Deliver to <br />
            <strong>Philippines</strong>
          </p>
        </div>

        <div className="relative hidden w-full lg:flex">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn rounded-none rounded-l"
            >
              <p className="inline-flex items-center gap-2">
                All
                <span>
                  {" "}
                  <FaCaretDown />
                </span>
              </p>
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
          <input
            type="text"
            className="w-full rounded-r border-none p-2 text-black outline-none"
          />
          <div className="absolute right-0 top-0 h-full cursor-pointer rounded-r bg-primary p-2 text-center text-gray-600">
            <IoSearchSharp size={30} />
          </div>
        </div>
        <div className="dropdown dropdown-hover hidden border border-transparent hover:border-white lg:block">
          <div
            tabIndex={0}
            role="button"
            className="btn border-none bg-transparent text-white hover:bg-transparent"
          >
            <div className="flex items-center gap-2">
              <img src="/en.png" alt="EN" className="h-8 w-16 object-cover" />
              <p>EN</p>
              <span>
                {" "}
                <FaCaretDown />
              </span>
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
        <div className="dropdown dropdown-hover hidden border border-transparent hover:border-white lg:block">
          <div
            tabIndex={0}
            role="button"
            className="btn border-none bg-transparent text-white hover:bg-transparent"
          >
            <span className="text-center text-xs">Hello, sign in</span>

            <p className="inline-flex items-center gap-2">
              Account & Lists
              <span>
                {" "}
                <FaCaretDown />
              </span>
            </p>
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

        <div className="hidden cursor-pointer whitespace-nowrap border border-transparent hover:border-white lg:block">
          <p className="text-xs">
            Returns <br />
          </p>
          <p>& Orders</p>
        </div>

        <Link to="/cart">
          <div className="flex cursor-pointer border border-transparent hover:border-white">
            <div className="relative">
              <FiShoppingCart size={35} />
              <span className="absolute right-[10px] top-[-3px] bg-darkSecondary font-bold text-orange-500">
                0
              </span>
            </div>
            <strong className="inline-flex items-end">Cart</strong>
          </div>
        </Link>
      </div>

      <div className="flex h-12 items-center justify-between bg-darkPrimary px-4 py-4">
        <ul className="hidden items-center font-semibold lg:flex">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex cursor-pointer items-center border border-transparent p-2 hover:border-white"
            >
              {item.name === "All" ? (
                <a onClick={toggleMenu} className="inline-flex items-center">
                  <IoMenu size={20} />
                  All
                </a>
              ) : (
                <div>{item.name}</div>
              )}
            </li>
          ))}
        </ul>
        <a
          onClick={toggleMenu}
          className="flex cursor-pointer items-center border border-transparent p-2 font-semibold hover:border-white lg:hidden"
        >
          <IoMenu size={20} />
          All
        </a>
        <a
          href="#"
          className="lg:text-md border border-transparent p-2 text-sm font-semibold hover:border-white"
        >
          Get free shipping to Philippines
        </a>
      </div>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-70 to-white"
          onClick={toggleMenu}
        ></div>
      )}
      {/* Mobile Menu */}
      <ul
        className={`fixed left-0 top-0 z-50 h-full w-[80%] transform overflow-y-auto bg-white text-black transition-transform duration-500 ease-in-out md:w-[30%] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="inline-flex w-full items-center justify-between gap-2 bg-darkPrimary p-4 px-8 font-semibold text-white">
          {" "}
          <h1 className="inline-flex items-center gap-2 bg-darkPrimary font-semibold text-white">
            {" "}
            <span className="rounded-full bg-white p-2 text-darkPrimary">
              <FaUser size={20} />
            </span>
            Hello Sign In
          </h1>
          <span className="cursor-pointer" onClick={toggleMenu}>
            <IoMdClose size={30} />
          </span>
        </div>
        {navLinks.map((link, index) => (
          <li key={index} className="border-b border-gray-300 py-8">
            <span className="px-8 text-lg font-bold">{link.label}</span>
            <ul className="overflow-y-auto">
              {link.links.map((sublink, subIndex) => (
                <li
                  key={subIndex}
                  className="cursor-pointer px-8 py-4 font-sans text-sm font-semibold text-gray-500 hover:bg-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <span>{sublink.name}</span>
                    <MdNavigateNext size={20} />
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}

        <li className="border-b border-gray-300 py-8">
          <span className="px-8 text-lg font-bold">Help & Settings</span>
          <ul>
            <li className="cursor-pointer px-8 py-4 font-sans text-sm font-semibold text-gray-500 hover:bg-gray-100">
              Your Account
            </li>
            <li className="flex cursor-pointer items-center gap-2 px-8 py-4 font-sans text-sm font-semibold text-gray-500 hover:bg-gray-100">
              <CiGlobe size={20} /> English
            </li>
            <li className="flex cursor-pointer items-center gap-2 px-8 py-4 font-sans text-sm font-semibold text-gray-500 hover:bg-gray-100">
              <img src="/en.png" alt="En" className="w-5" /> United States
            </li>
            <li className="cursor-pointer px-8 py-4 font-sans text-sm font-semibold text-gray-500 hover:bg-gray-100">
              Customer Service
            </li>
            <li className="cursor-pointer px-8 py-4 font-sans text-sm font-semibold text-gray-500 hover:bg-gray-100">
              Sign In
            </li>
          </ul>
        </li>
      </ul>
    </header>
  );
};

export default Header;
