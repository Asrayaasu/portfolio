import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" exact Component={Home}/> */}
        <Route path="/portfolio" exact Component={Home}/>
        <Route path="/about" exact Component={About}/>
        <Route path="/skills" exact Component={Skills}/>
        <Route path="/project" exact Component={Project}/>
        <Route path="/contact" exact Component={Contact}/>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
