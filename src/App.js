import './App.css';
import Navbar from "./components/Navbar"
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar/> 
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      {/* <Skills/> */}
      <Contact/>
    </div>
  );
}

export default App;
