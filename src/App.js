import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'boxicons'
import Home from './pages/Home';
import About from './pages/About';

import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />

          <Route path='/projects' element={<Projects />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </div>
  );
}

export default App;
