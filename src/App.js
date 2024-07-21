
import './App.css';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs'
import Faqs from './Pages/Faqs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reviews from './Pages/Reviews';
import PandD from './Pages/PandD';
import Gallery from './Pages/Gallery';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/p&d' element={<PandD />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
