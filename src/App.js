import './App.css';
import NavBar from './Component/NavBar';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
