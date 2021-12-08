import { Route, Routes } from 'react-router';
import './App.scss';
import About from './components/About/About';
import Introduce from './components/Introduce/Introduce';
import Navbar from './components/Navbar/Navbar';
import Work from './components/Work/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Introduce />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/works" element={<Work />}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
