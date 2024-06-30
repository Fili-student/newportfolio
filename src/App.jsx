import './App.css'
import "./style/main.style.css"
import "./style/skill.css"
import "./style/contact.css"
import "./style/footer.css";

import Hero from './components/Hero.jsx'
import Mainsection from './components/Mainsection.jsx'
import Skill from "./components/Skill.jsx"
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

import { Helmet } from "react-helmet"
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Helmet>
        <title>Portfolio</title>
        <link rel="icon" href="/eye.png"/>
      </Helmet>
    <Hero />
    <Mainsection />
    <Skill />
    <Contact />
    <Footer />
    </>
  )
}

export default App
