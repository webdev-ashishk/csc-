import './App.css';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Services from './components/Services';

function App() {
  return (
    <section className="text-2xl lg:w-11/12 md:w-11/12 w-full m-auto" id="home">
      <Header />
      <Services />
      <ContactUs />
      <Footer />
    </section>
  );
}

export default App;
