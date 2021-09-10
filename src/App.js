import About from './components/About/About' 
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Skills from './components/Skills/Skills'
import './App.css';

const App = () => {
  return(
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  
    
  );
}

export default App;
