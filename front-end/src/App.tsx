import './App.css';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import { Routes,Route} from "react-router-dom"
import Room from './Component/Room';
import Lobby from './Component/Lobby';

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/lobby" element={<Lobby/>} />
          <Route path="/room/:room" element={<Room/>} />
      </Routes>
    </div>
  );
}

export default App;
