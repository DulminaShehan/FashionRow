import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, User, Heart, Menu, X, Search } from 'lucide-react';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav style={{
      background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 4px 20px rgba(212,175,55,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      borderBottom: '1px solid rgba(212,175,55,0.2)'
    }}>
      {/* Top Bar - Announcement */}
      <div style={{
        background: 'linear-gradient(90deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)',
        textAlign: 'center',
        padding: '8px 20px',
        fontSize: '12px',
        fontWeight: '600',
        letterSpacing: '1.5px',
        color: '#0a0a0a',
        textTransform: 'uppercase',
        fontFamily: "'Montserrat', sans-serif"
      }}>
        ✨ Free Shipping on Orders Over ₹50,000 | VIP Member Exclusive
      </div>

      {/* Main Navbar */}
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '0 30px' 
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '85px'
        }}>
          
          {/* Logo */}
          <Link to="/" style={{
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '45px',
              height: '45px',
              background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              boxShadow: '0 5px 15px rgba(212,175,55,0.3)'
            }}>
              👑
            </div>
            <div>
              <div style={{
                fontSize: '28px',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '2px',
                fontFamily: "'Playfair Display', serif"
              }}>
                FASHIONROW
              </div>
              <div style={{
                fontSize: '9px',
                color: '#888',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginTop: '-3px',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                Luxury Fashion
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div style={{
            display: 'none',
            gap: '45px',
            alignItems: 'center'
          }} className="desktop-nav">
            <Link to="/" style={{
              color: isActive('/') ? '#d4af37' : '#c0c0c0',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              transition: 'all 0.3s',
              position: 'relative',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              Home
              {isActive('/') && (
                <div style={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #d4af37 0%, #f4e5c3 100%)'
                }}></div>
              )}
            </Link>
            
            <Link to="/shop" style={{
              color: isActive('/shop') ? '#d4af37' : '#c0c0c0',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              transition: 'color 0.3s',
              fontFamily: "'Montserrat', sans-serif",
              position: 'relative'
            }}>
              Collections
              {isActive('/shop') && (
                <div style={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #d4af37 0%, #f4e5c3 100%)'
                }}></div>
              )}
            </Link>
            
            <Link to="/new-arrivals" style={{
              color: isActive('/new-arrivals') ? '#d4af37' : '#c0c0c0',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              transition: 'color 0.3s',
              fontFamily: "'Montserrat', sans-serif",
              position: 'relative'
            }}>
              New Arrivals
              {isActive('/new-arrivals') && (
                <div style={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #d4af37 0%, #f4e5c3 100%)'
                }}></div>
              )}
            </Link>
            
            <Link to="/vip" style={{
              color: isActive('/vip') ? '#d4af37' : '#c0c0c0',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              transition: 'color 0.3s',
              fontFamily: "'Montserrat', sans-serif",
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              position: 'relative'
            }}>
              <span>VIP</span>
              <span style={{ fontSize: '16px' }}>💎</span>
              {isActive('/vip') && (
                <div style={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #d4af37 0%, #f4e5c3 100%)'
                }}></div>
              )}
            </Link>
            
            <Link to="/about" style={{
              color: isActive('/about') ? '#d4af37' : '#c0c0c0',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              transition: 'color 0.3s',
              fontFamily: "'Montserrat', sans-serif",
              position: 'relative'
            }}>
              About Us
              {isActive('/about') && (
                <div style={{
                  position: 'absolute',
                  bottom: '-5px',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #d4af37 0%, #f4e5c3 100%)'
                }}></div>
              )}
            </Link>
          </div>

          {/* Right Icons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: '#d4af37',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '50%',
                transition: 'all 0.3s',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Search size={22} />
            </button>

            {/* Wishlist */}
            <Link to="/wishlist" style={{
              color: '#d4af37',
              padding: '8px',
              borderRadius: '50%',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}>
              <Heart size={22} />
            </Link>

            {/* Cart with Badge */}
            <Link to="/cart" style={{
              position: 'relative',
              color: '#d4af37',
              padding: '8px',
              borderRadius: '50%',
              transition: 'all 0.3s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none'
            }}>
              <ShoppingBag size={22} />
              <span style={{
                position: 'absolute',
                top: '2px',
                right: '2px',
                background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
                color: '#0a0a0a',
                fontSize: '11px',
                fontWeight: '700',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 3px 8px rgba(212,175,55,0.4)',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                3
              </span>
            </Link>

            {/* User Account */}
            <Link to="/login" style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
              color: '#0a0a0a',
              padding: '10px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s',
              boxShadow: '0 5px 15px rgba(212,175,55,0.3)',
              textDecoration: 'none'
            }}>
              <User size={20} />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{
                background: 'none',
                border: '1px solid #d4af37',
                color: '#d4af37',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              className="mobile-menu-btn"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar (Expandable) */}
        {isSearchOpen && (
          <div style={{
            padding: '20px 0 25px'
          }}>
            <div style={{
              display: 'flex',
              gap: '10px',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <input
                type="text"
                placeholder="Search for luxury items..."
                style={{
                  flex: 1,
                  padding: '14px 25px',
                  borderRadius: '30px',
                  border: '2px solid #d4af37',
                  background: '#1a1a1a',
                  color: '#f5f5f5',
                  fontSize: '15px',
                  outline: 'none',
                  fontFamily: "'Montserrat', sans-serif"
                }}
              />
              <button style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
                color: '#0a0a0a',
                padding: '14px 30px',
                borderRadius: '30px',
                border: 'none',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '14px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                Search
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div style={{
            paddingBottom: '25px',
            borderTop: '1px solid rgba(212,175,55,0.2)',
            marginTop: '15px',
            paddingTop: '20px'
          }} className="mobile-menu">
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '18px'
            }}>
              <Link to="/" style={{
                color: isActive('/') ? '#d4af37' : '#c0c0c0',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                padding: '12px 0',
                borderBottom: '1px solid rgba(212,175,55,0.1)',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                Home
              </Link>
              <Link to="/shop" style={{
                color: isActive('/shop') ? '#d4af37' : '#c0c0c0',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                padding: '12px 0',
                borderBottom: '1px solid rgba(212,175,55,0.1)',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                Collections
              </Link>
              <Link to="/new-arrivals" style={{
                color: isActive('/new-arrivals') ? '#d4af37' : '#c0c0c0',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                padding: '12px 0',
                borderBottom: '1px solid rgba(212,175,55,0.1)',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                New Arrivals
              </Link>
              <Link to="/vip" style={{
                color: isActive('/vip') ? '#d4af37' : '#c0c0c0',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                padding: '12px 0',
                borderBottom: '1px solid rgba(212,175,55,0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                <span>VIP Club</span>
                <span style={{ fontSize: '18px' }}>💎</span>
              </Link>
              <Link to="/about" style={{
                color: isActive('/about') ? '#d4af37' : '#c0c0c0',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                padding: '12px 0',
                fontFamily: "'Montserrat', sans-serif"
              }}>
                About Us
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;