import { MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
export default function GotoTop() {
  const handleTop = () => {
    window.scrollTo({
      top: '0',
      behavior: 'smooth',
    });
  };
  return (
    <section
      className="fixed bottom-16 right-3 bg-[#581c87] p-2 cursor-pointer text-white rounded-xl text-2xl"
      onClick={handleTop}
      id="top"
    >
      <MdOutlineKeyboardDoubleArrowUp />
    </section>
  );
}
