import './App.css';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Myportfolio from './Components/Myportfolio';
import Navbar from './Components/Navbar';
import Resume from './Components/Resume';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Header/>
       <AboutMe/>
       <Myportfolio/>
       <Resume/>
       <Contact/>
    </div>
  );
}

export default App;
