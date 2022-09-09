import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar1 from './components/Navbar/Navbar1';
import NavbarDynamic from './components/Navbar/NavbarDynamic';
import ScrollToTop from './components/Utils/ScrollToTopButton/ScrollToTop';
import PageRoutes from './config/PageRoutes';

function App() {
  return (
    <BrowserRouter>
      <NavbarDynamic />
      <ScrollToTop />

      <PageRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
