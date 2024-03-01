
import './App.css';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Faqs from './Pages/Faqs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Reviews from './Pages/Reviews';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path='/faqs' element={<Faqs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
