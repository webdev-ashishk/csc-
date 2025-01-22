import './App.css';
import Services from './components/Services';

function App() {
  return (
    <section className="text-2xl lg:w-11/12 md:w-11/12 w-10/12 m-auto">
      <h1 className="text-green-300 text-4xl font-extrabold p-2 px-4 inline-block bg-yellow-800 rounded-full m-2">
        QuickLinks
      </h1>
      <Services />
    </section>
  );
}

export default App;
