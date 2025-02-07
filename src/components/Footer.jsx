import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

const Footer = () => {
  const currentYearDate = new Date().getFullYear();
  return (
    <footer className="rounded-xl">
      <p className="text-center m-3 p-4">
        Copyright {currentYearDate} | Developed by
        <span className="text-purple-700 font-bold hover:text-green-500 mx-2 px-2">
          <a href="https://growwithok.com">
            growwithok.com
            <span className="inline-block ml-2 mt-1">
              <FaArrowUpRightFromSquare />
            </span>
          </a>
        </span>
      </p>
    </footer>
  );
};
export default Footer;
