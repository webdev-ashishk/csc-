import { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  function handleMenuClicked() {
    setOpenMenu(!openMenu);
  }

  console.log(openMenu);
  return (
    <div className="w-full bg-gray-400 top-0 sticky">
      <section className="bg-gray-400 flex justify-between items-center  lg:w-11/12 w-full mx-auto">
        <article>
          <a href="/#home">
            <h1 className="text-purple-900 text-4xl font-extrabold p-2 px-4 inline-block rounded-full m-2">
              QuickLinks
            </h1>
          </a>
        </article>
        <nav className="text-[1.2rem]" id="desktopItems">
          <ul className="flex lg:gap-5 md:gap-3 gap-2 justify-center items-center mr-10">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#photoServices">PhotoService </a>
            </li>
            <li>
              <a href="#downloadServices">DownloadSerivce</a>
            </li>
            <li>
              <a href="#contactUs">ContactUs</a>
            </li>
          </ul>
        </nav>
        {/* <img
          src="https://img.icons8.com/m_rounded/512w/228BE6/hamburger.png"
          alt="mobile item"
         
          width="50"
          className="mr-4 cursor-pointer hidden"
          onClick={() => {
            smoothScroll(handleMenuClicked);
          }}
        /> */}
        <div
          className="hidden mr-2 text-3xl font-extrabold text-white cursor-pointer"
          id="hamburgerMenuIcon"
          onClick={() => {
            handleMenuClicked();
          }}
        >
          {openMenu ? <IoMdClose /> : <CiMenuFries />}
        </div>
      </section>
      {/* mobile Items */}
      {openMenu && (
        <nav
          id="mobileMenuItems"
          className="block "
          onClick={handleMenuClicked}
        >
          <ul className="absolute z-40 flex flex-col lg:gap-5 md:gap-3 justify-center items-center w-full text-white text-[1rem] bg-gray-500">
            <li>
              <a href="/#home">Home</a>
            </li>
            <hr className="" />
            <li>
              <a href="#photoServices">PhotoService </a>
            </li>
            <hr />
            <li>
              <a href="#downloadServices">DownloadSerivce</a>
            </li>
            <hr />
            <li>
              <a href="#contactUs">ContactUs</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
export default Header;
