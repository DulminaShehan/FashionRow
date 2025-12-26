import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

function About() {
  return (
    <div style={{ 
      background: '#0a0a0a',
      minHeight: '100vh',
      fontFamily: "'Montserrat', sans-serif"
    }}>
      
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
        padding: '80px 20px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(212,175,55,0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>
        
        <h1 style={{
          fontSize: '56px',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '20px',
          letterSpacing: '3px',
          fontFamily: "'Playfair Display', serif",
          position: 'relative',
          zIndex: 1
        }}>
          ABOUT FASHIONROW
        </h1>

        <p style={{ 
          color: '#b0b0b0', 
          fontSize: '20px',
          letterSpacing: '1px',
          position: 'relative',
          zIndex: 1
        }}>
          Crafting Luxury Fashion Since 2023
        </p>
      </div>

      {/* Main Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 20px' }}>
        
        {/* Our Story */}
        <div style={{
          background: '#1a1a1a',
          padding: '60px 50px',
          borderRadius: '25px',
          border: '1px solid rgba(212,175,55,0.2)',
          marginBottom: '50px'
        }}>
          <h2 style={{
            color: '#d4af37',
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '30px',
            letterSpacing: '2px',
            fontFamily: "'Playfair Display', serif"
          }}>
            Our Story
          </h2>

          <p style={{
            color: '#c0c0c0',
            fontSize: '18px',
            lineHeight: '1.8',
            marginBottom: '20px'
          }}>
            Founded in <strong style={{ color: '#d4af37' }}>2023</strong>, FashionRow has been at the forefront of luxury fashion for <strong style={{ color: '#d4af37' }}>2 years</strong>. We believe fashion is not just clothing—it's identity and timeless elegance.
          </p>

          <p style={{
            color: '#c0c0c0',
            fontSize: '18px',
            lineHeight: '1.8',
            marginBottom: '20px'
          }}>
            Our curated collections blend craftsmanship with contemporary design, offering unique luxury pieces.
          </p>

          <p style={{
            color: '#c0c0c0',
            fontSize: '18px',
            lineHeight: '1.8'
          }}>
            Every piece tells a story of excellence, sophistication, and quality.
          </p>
        </div>

        {/* Values Section */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '50px'
        }}>
          
          <div style={{
            background: '#1a1a1a',
            padding: '40px',
            borderRadius: '20px',
            border: '1px solid rgba(212,175,55,0.2)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '50px', marginBottom: '20px' }}>👑</div>
            <h3 style={{
              color: '#d4af37',
              fontSize: '22px',
              fontWeight: '700',
              marginBottom: '15px',
              letterSpacing: '1px'
            }}>
              Premium Quality
            </h3>
            <p style={{ color: '#b0b0b0', lineHeight: '1.7' }}>
              Finest materials crafted to perfection.
            </p>
          </div>

          <div style={{
            background: '#1a1a1a',
            padding: '40px',
            borderRadius: '20px',
            border: '1px solid rgba(212,175,55,0.2)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '50px', marginBottom: '20px' }}>💎</div>
            <h3 style={{
              color: '#d4af37',
              fontSize: '22px',
              fontWeight: '700',
              marginBottom: '15px',
              letterSpacing: '1px'
            }}>
              Exclusive Designs
            </h3>
            <p style={{ color: '#b0b0b0', lineHeight: '1.7' }}>
              Unique limited-edition luxury wear.
            </p>
          </div>

          <div style={{
            background: '#1a1a1a',
            padding: '40px',
            borderRadius: '20px',
            border: '1px solid rgba(212,175,55,0.2)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '50px', marginBottom: '20px' }}>✨</div>
            <h3 style={{
              color: '#d4af37',
              fontSize: '22px',
              fontWeight: '700',
              marginBottom: '15px',
              letterSpacing: '1px'
            }}>
              Personalized Service
            </h3>
            <p style={{ color: '#b0b0b0', lineHeight: '1.7' }}>
              VIP styling & elite support.
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div style={{
          background: 'linear-gradient(135deg, #2d1b3d 0%, #4a2c5e 50%, #2d1b3d 100%)',
          padding: '60px 40px',
          borderRadius: '25px',
          marginBottom: '50px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px'
          }}>
            <div>
              <div style={{ fontSize: '48px', fontWeight: '700', color: '#d4af37' }}>2 Years</div>
              <div style={{ color: '#c0c0c0' }}>Of Excellence</div>
            </div>

            <div>
              <div style={{ fontSize: '48px', fontWeight: '700', color: '#d4af37' }}>5000+</div>
              <div style={{ color: '#c0c0c0' }}>Happy Customers</div>
            </div>

            <div>
              <div style={{ fontSize: '48px', fontWeight: '700', color: '#d4af37' }}>100%</div>
              <div style={{ color: '#c0c0c0' }}>Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Connect Section */}
        <div style={{
          background: '#1a1a1a',
          padding: '60px 50px',
          borderRadius: '25px',
          border: '1px solid rgba(212,175,55,0.2)',
          textAlign: 'center'
        }}>
          <h2 style={{
            color: '#d4af37',
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '20px',
            letterSpacing: '2px',
            fontFamily: "'Playfair Display', serif"
          }}>
            Connect With Us
          </h2>

          <p style={{ color: '#b0b0b0', fontSize: '18px', marginBottom: '40px' }}>
            Follow our luxury fashion journey
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap'
          }}>
            
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              style={{
                width: '70px',
                height: '70px',
                background: 'linear-gradient(135deg, #1877f2, #0d5dbf)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                boxShadow: '0 8px 20px rgba(24,119,242,0.4)',
                transition: '0.3s'
              }}
            >
              <FaFacebookF color="#fff" />
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              style={{
                width: '70px',
                height: '70px',
                background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                boxShadow: '0 8px 20px rgba(225,48,108,0.4)',
                transition: '0.3s'
              }}
            >
              <FaInstagram color="#fff" />
            </a>

            {/* TikTok */}
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"
              style={{
                width: '70px',
                height: '70px',
                background: 'linear-gradient(135deg,#000,#ff0050)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                boxShadow: '0 8px 20px rgba(255,0,80,0.4)',
                transition: '0.3s'
              }}
            >
              <FaTiktok color="#fff" />
            </a>
          </div>

          <div style={{
            marginTop: '40px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(212,175,55,0.2)'
          }}>
            <p style={{ color: '#888', fontSize: '14px' }}>Ready for luxury?</p>

            <Link 
              to="/shop"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg,#d4af37,#f4e5c3)',
                color: '#000',
                padding: '16px 40px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: '700',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                boxShadow: '0 8px 20px rgba(212,175,55,0.3)'
              }}
            >
              Explore Collections
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;
