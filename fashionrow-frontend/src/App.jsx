import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel';
import About from './pages/About';
import NewArrivals from './pages/NewArrivals';
import VIP from './pages/VIP';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <ShopProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/new-arrivals" element={<NewArrivals />} />
            <Route path="/vip" element={<VIP />} />
            <Route path="/about" element={<About />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </div>
      </ShopProvider>
    </Router>
  );
}

export default App;