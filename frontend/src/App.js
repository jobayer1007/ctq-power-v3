import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar1 from './components/Navbar/Navbar1';
import ScrollToTop from './components/Utils/ScrollToTopButton/ScrollToTop';
import PageRoutes from './config/PageRoutes';

function App() {
  return (
    <BrowserRouter>
      <Navbar1 />
      <ScrollToTop />

      <PageRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
