import { Link } from 'react-router-dom';

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
            Founded in <strong style={{ color: '#d4af37' }}>2023</strong>, FashionRow has been at the forefront of luxury fashion for <strong style={{ color: '#d4af37' }}>2 years</strong>. We believe that fashion is not just about clothing—it's about expressing your unique identity and embracing timeless elegance.
          </p>
          <p style={{
            color: '#c0c0c0',
            fontSize: '18px',
            lineHeight: '1.8',
            marginBottom: '20px'
          }}>
            Our carefully curated collections blend traditional craftsmanship with contemporary design, offering our distinguished clientele pieces that transcend trends and seasons.
          </p>
          <p style={{
            color: '#c0c0c0',
            fontSize: '18px',
            lineHeight: '1.8'
          }}>
            From the finest fabrics to meticulous attention to detail, every piece in our collection tells a story of excellence, sophistication, and unparalleled quality.
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
              We source only the finest materials and work with master craftsmen to ensure every piece meets our exacting standards.
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
              Our collections feature unique, limited-edition pieces that you won't find anywhere else.
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
              Our VIP concierge team provides bespoke styling advice and white-glove customer service.
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
              <div style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#d4af37',
                marginBottom: '10px',
                fontFamily: "'Playfair Display', serif"
              }}>
                2 Years
              </div>
              <div style={{ color: '#c0c0c0', fontSize: '16px', letterSpacing: '1px' }}>
                Of Excellence
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#d4af37',
                marginBottom: '10px',
                fontFamily: "'Playfair Display', serif"
              }}>
                5000+
              </div>
              <div style={{ color: '#c0c0c0', fontSize: '16px', letterSpacing: '1px' }}>
                Happy Customers
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#d4af37',
                marginBottom: '10px',
                fontFamily: "'Playfair Display', serif"
              }}>
                100%
              </div>
              <div style={{ color: '#c0c0c0', fontSize: '16px', letterSpacing: '1px' }}>
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>

        {/* Connect With Us */}
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
          <p style={{
            color: '#b0b0b0',
            fontSize: '18px',
            marginBottom: '40px',
            lineHeight: '1.7'
          }}>
            Follow us on social media to stay updated with our latest collections, exclusive offers, and fashion inspiration.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap'
          }}>
            {/* Facebook */}
            <a 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '70px',
                height: '70px',
                background: 'linear-gradient(135deg, #1877f2 0%, #0d5dbf 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                textDecoration: 'none',
                transition: 'transform 0.3s',
                boxShadow: '0 8px 20px rgba(24,119,242,0.4)'
              }}
            >
              📘
            </a>

            {/* Instagram */}
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '70px',
                height: '70px',
                background: 'linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                textDecoration: 'none',
                transition: 'transform 0.3s',
                boxShadow: '0 8px 20px rgba(225,48,108,0.4)'
              }}
            >
              📷
            </a>

            {/* TikTok */}
            <a 
              href="https://tiktok.com" 
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '70px',
                height: '70px',
                background: 'linear-gradient(135deg, #000000 0%, #ff0050 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                textDecoration: 'none',
                transition: 'transform 0.3s',
                boxShadow: '0 8px 20px rgba(255,0,80,0.4)'
              }}
            >
              🎵
            </a>
          </div>

          <div style={{
            marginTop: '40px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(212,175,55,0.2)'
          }}>
            <p style={{ color: '#888', fontSize: '14px', marginBottom: '15px' }}>
              Ready to elevate your wardrobe?
            </p>
            <Link 
              to="/shop"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
                color: '#0a0a0a',
                padding: '16px 40px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '15px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                boxShadow: '0 8px 20px rgba(212,175,55,0.3)',
                transition: 'transform 0.3s'
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