import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import HtmlDefinition from './components/HtmlDefinition.jsx';
import CssDefinition from './components/CssDefinition.jsx';
import JsDefinition from './components/JsDefinition.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/html' element={<HtmlDefinition />} />
        <Route path='/css' element={<CssDefinition />} />
        <Route path='/javascript' element={<JsDefinition />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App