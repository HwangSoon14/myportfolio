import { Route, Routes } from 'react-router';
import './App.scss';
import About from './components/About/About';
import Introduce from './components/Introduce/Introduce';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Introduce />}></Route>
        <Route exact path="/about" element={<About />}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
