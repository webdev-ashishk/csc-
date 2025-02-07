import { useState } from 'react';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  function handleMenuClicked() {
    setOpenMenu(!openMenu);
  }
  const smoothScroll = (cb) => {
    window.scrollTo({
      top: '0',
      behavior: 'smooth',
    });
    cb();
  };
  console.log(openMenu);
  return (
    <>
      <section className="bg-gray-400 flex justify-between items-center top-0 sticky">
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
        <img
          src="https://img.icons8.com/m_rounded/512w/228BE6/hamburger.png"
          alt="mobile item"
          id="hamburgerMenuIcon"
          width="50"
          className="mr-4 cursor-pointer hidden"
          onClick={() => {
            smoothScroll(handleMenuClicked);
          }}
        />
      </section>
      {/* mobile Items */}
      {openMenu && (
        <nav id="mobileMenuItems" className="" onClick={handleMenuClicked}>
          <ul className="flex flex-col lg:gap-5 md:gap-3 justify-center items-center">
            <li>
              <a href="/#home">Home</a>
            </li>
            <hr />
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
    </>
  );
};
export default Header;
