import ContactUs from './ContactUs';
import GotoTop from './GotoTop';
import CastesList from './ListOfAllCasteCategory';
import Services from './Services';

export default function Home() {
  return (
    <div>
      <div className="lg:w-11/12 md:w-11/12 w-full m-auto">
        <GotoTop />
        <Services />
        <CastesList />
        <ContactUs />
      </div>
    </div>
  );
}
