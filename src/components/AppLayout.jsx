import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const AppLayout = () => {
  return (
    <section>
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
};
export default AppLayout;
