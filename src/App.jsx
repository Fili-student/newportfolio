import './App.css'
import "./style/skill.css"
import "./style/main.style.css"
import "./style/contact.css"
import Hero from './components/Hero.jsx'
import Mainsection from './components/Mainsection.jsx'
import Footer from './components/Footer.jsx'
import "./style/footer.css";
import Skill from "./components/Skill.jsx"
import Contact from './components/Contact.jsx'

import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Hero />
    <Mainsection />
    <Skill />
    <Contact />
    <Footer />
    </>
  )
}

export default App
