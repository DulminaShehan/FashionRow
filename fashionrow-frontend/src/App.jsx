import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import NewArrivals from './pages/NewArrivals';
import VIP from './pages/VIP';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import './App.css';  // ← Add this line

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/new-arrivals" element={<NewArrivals />} />
          <Route path="/vip" element={<VIP />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;