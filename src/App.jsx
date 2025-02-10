import './App.css';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import GotoTop from './components/GotoTop';
import Header from './components/Header';
import Services from './components/Services';

function App() {
  return (
    <section className="text-2xl mx-auto bg-[#f1f5f8]" id="home">
      <Header />
      <div className="lg:w-11/12 md:w-11/12 w-full m-auto">
        <GotoTop />
        <Services />
        <ContactUs />
      </div>
      <Footer />
    </section>
  );
}

export default App;
