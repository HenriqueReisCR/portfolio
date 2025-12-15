
import './App.scss';
import {Routes, Route, useLocation} from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import NavBar from './components/navBar';
import ParticleBackground from './particles';


function App() {
  const location = useLocation();
  console.log("Current location:", location.pathname);

  const renderParticleJsHomePage = location.pathname === '/home' || location.pathname === '/';

  return (
    <div className="App">
        {/* particles js */}
        {
          renderParticleJsHomePage && ( <ParticleBackground/> )
        }
        {/* nav bar */}
        <NavBar />
        {/* main page content */}
        <div className='App_main-page-content'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path='/skills' element={<Skills/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
