import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.scss';
import './scss/main.scss'
import Home from './components/Pages/Home/Home'
import 'react-toastify/dist/ReactToastify.css';
import Testing from './helpers/Testing/Testing';
import { NavBar, Footer } from './components/Globals';
import Aboutus from './components/Pages/Aboutus/Aboutus';
import Contact from './components/Pages/Contact/Contact';
import Services from './components/Pages/Services-old/Services-old'
import Projects from './components/Pages/Projects/Projects'
import ThemeProvider from './components/Config/ThemeContext';
import NavBarProvider, { NavBarContext } from './components/Config/NavBarContext';
import LanguageProvider from './components/Config/LanguageContext';
import WebServices from './components/Pages/WebServices/WebServices';

function App() {

  const location = useLocation()

  return (
    <ThemeProvider>
      <LanguageProvider>
        <NavBarProvider>
          <NavBar />
          <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.key}>
              <Route path='/' element={<Home />} />
              <Route path='/services' element={<Services />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/about' element={<Aboutus />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/*' element={<Navigate to='/' />} />
              <Route path='/webservices' element={<WebServices />} />
              <Route path='/test' element={<Testing />} />
            </Routes>
          </AnimatePresence>
          {/* <Footer /> */}
        </NavBarProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;