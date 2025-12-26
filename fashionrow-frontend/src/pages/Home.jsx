import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ fontFamily: "'Playfair Display', 'Georgia', serif", background: '#0a0a0a' }}>
      {/* Hero Section - Luxury Gold & Black */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
        color: '#f5f5f5',
        padding: '120px 20px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>
        
        <div style={{
          background: 'linear-gradient(90deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)',
          display: 'inline-block',
          padding: '10px 25px',
          borderRadius: '25px',
          marginBottom: '30px',
          fontSize: '13px',
          fontWeight: '600',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#1a1a1a',
          boxShadow: '0 8px 25px rgba(212,175,55,0.3)'
        }}>
          ✨ Haute Couture Collection 2026
        </div>
        
        <h1 style={{
          fontSize: '72px',
          fontWeight: '700',
          marginBottom: '25px',
          margin: '0 0 25px 0',
          background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '3px'
        }}>
          FASHIONROW
        </h1>
        
        <p style={{
          fontSize: '22px',
          marginBottom: '40px',
          color: '#c0c0c0',
          letterSpacing: '1px',
          fontFamily: "'Montserrat', sans-serif"
        }}>
          Where Elegance Meets Excellence
        </p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/shop" style={{
            background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
            color: '#1a1a1a',
            padding: '18px 45px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '15px',
            display: 'inline-block',
            transition: 'all 0.3s',
            boxShadow: '0 10px 30px rgba(212,175,55,0.4)',
            letterSpacing: '1.5px',
            textTransform: 'uppercase'
          }}>
            Explore Collection →
          </Link>
          
          <button style={{
            background: 'transparent',
            border: '2px solid #d4af37',
            color: '#d4af37',
            padding: '18px 45px',
            borderRadius: '50px',
            fontWeight: '700',
            fontSize: '15px',
            cursor: 'pointer',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            transition: 'all 0.3s'
          }}>
            Book Appointment
          </button>
        </div>
      </div>

      {/* Luxury Features - Emerald & Gold Accents */}
      <div style={{ padding: '80px 20px', background: '#0f0f0f' }}>
        <div style={{ 
          maxWidth: '1300px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          <div style={{ 
            textAlign: 'center', 
            padding: '40px',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(212,175,55,0.2)',
            transition: 'transform 0.3s'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #50C878 0%, #3da35d 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 25px',
              fontSize: '35px',
              boxShadow: '0 10px 30px rgba(80,200,120,0.3)'
            }}>💎</div>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              marginBottom: '15px',
              color: '#d4af37',
              letterSpacing: '1px'
            }}>Exquisite Craftsmanship</h3>
            <p style={{ color: '#b0b0b0', lineHeight: '1.8', fontFamily: "'Montserrat', sans-serif" }}>
              Handcrafted with precision and finest materials
            </p>
          </div>

          <div style={{ 
            textAlign: 'center', 
            padding: '40px',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(212,175,55,0.2)',
            transition: 'transform 0.3s'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #8B4789 0%, #6a2c68 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 25px',
              fontSize: '35px',
              boxShadow: '0 10px 30px rgba(139,71,137,0.3)'
            }}>👑</div>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              marginBottom: '15px',
              color: '#d4af37',
              letterSpacing: '1px'
            }}>Royal Collections</h3>
            <p style={{ color: '#b0b0b0', lineHeight: '1.8', fontFamily: "'Montserrat', sans-serif" }}>
              Exclusive designs for distinguished clientele
            </p>
          </div>

          <div style={{ 
            textAlign: 'center', 
            padding: '40px',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            borderRadius: '20px',
            border: '1px solid rgba(212,175,55,0.2)',
            transition: 'transform 0.3s'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #CD7F32 0%, #9d5f26 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 25px',
              fontSize: '35px',
              boxShadow: '0 10px 30px rgba(205,127,50,0.3)'
            }}>🎭</div>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              marginBottom: '15px',
              color: '#d4af37',
              letterSpacing: '1px'
            }}>Bespoke Service</h3>
            <p style={{ color: '#b0b0b0', lineHeight: '1.8', fontFamily: "'Montserrat', sans-serif" }}>
              Personalized styling and concierge support
            </p>
          </div>
        </div>
      </div>

      {/* Luxury Categories - Rich Jewel Tones */}
      <div style={{ padding: '80px 20px', background: '#1a1a1a' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: '52px',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '15px',
              letterSpacing: '2px'
            }}>
              Curated Collections
            </h2>
            <p style={{ color: '#b0b0b0', fontSize: '19px', letterSpacing: '1px', fontFamily: "'Montserrat', sans-serif" }}>
              Timeless elegance for the discerning
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '35px'
          }}>
            {/* Men - Deep Navy & Gold */}
            <div style={{
              background: 'linear-gradient(135deg, #1e3a5f 0%, #2c5f8d 100%)',
              borderRadius: '25px',
              padding: '60px 35px',
              textAlign: 'center',
              color: 'white',
              cursor: 'pointer',
              transition: 'transform 0.4s',
              boxShadow: '0 15px 40px rgba(30,58,95,0.4)',
              border: '1px solid rgba(212,175,55,0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)',
                borderRadius: '50%'
              }}></div>
              
              <div style={{ fontSize: '90px', marginBottom: '25px' }}>🎩</div>
              <h3 style={{ 
                fontSize: '36px', 
                fontWeight: '700', 
                marginBottom: '15px',
                color: '#d4af37',
                letterSpacing: '2px'
              }}>GENTLEMAN</h3>
              <p style={{ marginBottom: '25px', fontSize: '17px', color: '#c0c0c0', fontFamily: "'Montserrat', sans-serif" }}>
                Sophisticated menswear essentials
              </p>
              <Link to="/shop?category=men" style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
                color: '#1a1a1a',
                padding: '14px 35px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: '700',
                display: 'inline-block',
                fontSize: '14px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                boxShadow: '0 8px 20px rgba(212,175,55,0.3)'
              }}>
                Discover
              </Link>
            </div>

            {/* Women - Burgundy & Rose Gold */}
            <div style={{
              background: 'linear-gradient(135deg, #6B1C3D 0%, #8B2F5A 100%)',
              borderRadius: '25px',
              padding: '60px 35px',
              textAlign: 'center',
              color: 'white',
              cursor: 'pointer',
              transition: 'transform 0.4s',
              boxShadow: '0 15px 40px rgba(107,28,61,0.4)',
              border: '1px solid rgba(212,175,55,0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)',
                borderRadius: '50%'
              }}></div>
              
              <div style={{ fontSize: '90px', marginBottom: '25px' }}>🌹</div>
              <h3 style={{ 
                fontSize: '36px', 
                fontWeight: '700', 
                marginBottom: '15px',
                color: '#d4af37',
                letterSpacing: '2px'
              }}>MADAME</h3>
              <p style={{ marginBottom: '25px', fontSize: '17px', color: '#c0c0c0', fontFamily: "'Montserrat', sans-serif" }}>
                Haute couture for refined taste
              </p>
              <Link to="/shop?category=women" style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
                color: '#1a1a1a',
                padding: '14px 35px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: '700',
                display: 'inline-block',
                fontSize: '14px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                boxShadow: '0 8px 20px rgba(212,175,55,0.3)'
              }}>
                Discover
              </Link>
            </div>

            {/* Kids - Teal & Gold */}
            <div style={{
              background: 'linear-gradient(135deg, #1A5653 0%, #2A7A76 100%)',
              borderRadius: '25px',
              padding: '60px 35px',
              textAlign: 'center',
              color: 'white',
              cursor: 'pointer',
              transition: 'transform 0.4s',
              boxShadow: '0 15px 40px rgba(26,86,83,0.4)',
              border: '1px solid rgba(212,175,55,0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)',
                borderRadius: '50%'
              }}></div>
              
              <div style={{ fontSize: '90px', marginBottom: '25px' }}>🦋</div>
              <h3 style={{ 
                fontSize: '36px', 
                fontWeight: '700', 
                marginBottom: '15px',
                color: '#d4af37',
                letterSpacing: '2px'
              }}>JUNIOR</h3>
              <p style={{ marginBottom: '25px', fontSize: '17px', color: '#c0c0c0', fontFamily: "'Montserrat', sans-serif" }}>
                Premium attire for little ones
              </p>
              <Link to="/shop?category=kids" style={{
                background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
                color: '#1a1a1a',
                padding: '14px 35px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: '700',
                display: 'inline-block',
                fontSize: '14px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                boxShadow: '0 8px 20px rgba(212,175,55,0.3)'
              }}>
                Discover
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Exclusive Offer - Deep Purple & Gold */}
      <div style={{
        background: 'linear-gradient(135deg, #2d1b3d 0%, #4a2c5e 50%, #2d1b3d 100%)',
        padding: '80px 20px',
        textAlign: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>
        
        <div style={{
          background: 'linear-gradient(90deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)',
          display: 'inline-block',
          padding: '10px 25px',
          borderRadius: '25px',
          marginBottom: '25px',
          fontSize: '13px',
          fontWeight: '700',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          color: '#1a1a1a',
          position: 'relative',
          zIndex: 1
        }}>
          💫 EXCLUSIVE PRIVILEGE
        </div>
        
        <h2 style={{ fontSize: '56px', fontWeight: '700', marginBottom: '20px', color: '#d4af37', letterSpacing: '2px', position: 'relative', zIndex: 1 }}>
          VIP Members Sale
        </h2>
        <p style={{ fontSize: '26px', marginBottom: '35px', color: '#c0c0c0', position: 'relative', zIndex: 1, fontFamily: "'Montserrat', sans-serif" }}>
          Up to 40% off on signature pieces
        </p>
        
        <button style={{
          background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
          color: '#1a1a1a',
          padding: '18px 50px',
          borderRadius: '50px',
          border: 'none',
          fontWeight: '700',
          fontSize: '16px',
          cursor: 'pointer',
          boxShadow: '0 15px 35px rgba(212,175,55,0.4)',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          position: 'relative',
          zIndex: 1
        }}>
          Become a Member
        </button>
      </div>

      {/* Newsletter - Elegant Black & Gold */}
      <div style={{ padding: '80px 20px', background: '#0f0f0f', textAlign: 'center' }}>
        <h2 style={{ 
          fontSize: '42px', 
          fontWeight: '700', 
          marginBottom: '20px',
          color: '#d4af37',
          letterSpacing: '2px'
        }}>Join Our Circle</h2>
        <p style={{ color: '#b0b0b0', fontSize: '19px', marginBottom: '40px', fontFamily: "'Montserrat', sans-serif" }}>
          Receive exclusive access to new collections
        </p>
        
        <div style={{ 
          maxWidth: '550px', 
          margin: '0 auto',
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <input
            type="email"
            placeholder="Your email address"
            style={{
              flex: 1,
              minWidth: '280px',
              padding: '18px 25px',
              borderRadius: '50px',
              border: '2px solid #d4af37',
              fontSize: '16px',
              outline: 'none',
              background: '#1a1a1a',
              color: '#f5f5f5',
              fontFamily: "'Montserrat', sans-serif"
            }}
          />
          <button style={{
            background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
            color: '#1a1a1a',
            padding: '18px 40px',
            borderRadius: '50px',
            border: 'none',
            fontWeight: '700',
            fontSize: '16px',
            cursor: 'pointer',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            boxShadow: '0 10px 25px rgba(212,175,55,0.3)'
          }}>
            Subscribe
          </button>
        </div>
      </div>

      {/* Premium Footer */}
      <div style={{ background: '#0a0a0a', color: 'white', padding: '60px 20px', borderTop: '1px solid #d4af37' }}>
        <div style={{ 
          maxWidth: '1300px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px'
        }}>
          <div>
            <h3 style={{ 
              fontSize: '28px', 
              fontWeight: '700',
              background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '20px',
              letterSpacing: '2px'
            }}>
              FASHIONROW
            </h3>
            <p style={{ color: '#888', fontFamily: "'Montserrat', sans-serif" }}>Luxury redefined</p>
          </div>
          
          <div>
            <h4 style={{ fontWeight: '700', marginBottom: '20px', color: '#d4af37', letterSpacing: '1px' }}>Collections</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: "'Montserrat', sans-serif" }}>
              <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Gentleman</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Madame</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Junior</a>
            </div>
          </div>
          
          <div>
            <h4 style={{ fontWeight: '700', marginBottom: '20px', color: '#d4af37', letterSpacing: '1px' }}>Concierge</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: "'Montserrat', sans-serif" }}>
              <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Private Styling</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none' }}>VIP Services</a>
              <a href="#" style={{ color: '#999', textDecoration: 'none' }}>Bespoke</a>
            </div>
          </div>
          
          <div>
            <h4 style={{ fontWeight: '700', marginBottom: '20px', color: '#d4af37', letterSpacing: '1px' }}>Connect</h4>
            <div style={{ display: 'flex', gap: '18px', fontSize: '26px' }}>
              <a href="#" style={{ color: '#d4af37' }}>📘</a>
              <a href="#" style={{ color: '#d4af37' }}>📷</a>
              <a href="#" style={{ color: '#d4af37' }}>🐦</a>
            </div>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid #333', 
          marginTop: '50px', 
          paddingTop: '35px',
          textAlign: 'center',
          color: '#666',
          fontFamily: "'Montserrat', sans-serif",
          letterSpacing: '1px'
        }}>
          <p>&copy; 2024 FASHIONROW. Crafted with Excellence.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;