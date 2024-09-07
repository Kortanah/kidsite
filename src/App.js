import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Classes from './components/Classes';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
import Facilities from './components/Facilities';
import CallToAction from './components/CallToAction';
import GalleryPage from './components/Gallery';
import NotFound from './components/404';
import Testimonials from './components/Testimonials';
import Teams from './components/Teams';

function App() {
  return (
    <>

    <Router>
    <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={ <About/>} />
        <Route path='/classes' element={<Classes/>} />
        <Route path='/appointment' element={<Appointment/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/facilities' element={<Facilities/>} />
        <Route path='/call-to-action' element={<CallToAction/>} />
        <Route path='/gallery' element={<GalleryPage/>} />
        <Route path='/testimonials' element={<Testimonials/>} />
        <Route path='/teams' element={<Teams/>} />
        
        <Route path='*' element={<NotFound/>} />

     

      </Routes>
    </Router>
    <Footer/>  
    </>
  );
}

export default App;
