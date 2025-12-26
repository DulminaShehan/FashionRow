import { Crown, Gift, Sparkles, Star, Zap, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

function VIP() {
  const benefits = [
    {
      icon: '🎁',
      title: 'Exclusive Access',
      description: 'First access to new collections before public release'
    },
    {
      icon: '💎',
      title: 'Special Discounts',
      description: 'Up to 40% off on all luxury items year-round'
    },
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Free express shipping on all orders, no minimum'
    },
    {
      icon: '👔',
      title: 'Personal Stylist',
      description: 'One-on-one styling consultation with fashion experts'
    },
    {
      icon: '🎂',
      title: 'Birthday Rewards',
      description: 'Special birthday gifts and exclusive offers'
    },
    {
      icon: '⚡',
      title: 'Priority Support',
      description: '24/7 dedicated VIP customer service hotline'
    }
  ];

  const tiers = [
    {
      name: 'SILVER VIP',
      price: '₹9,999',
      period: '/year',
      icon: '🥈',
      color: '#C0C0C0',
      benefits: [
        '20% off all items',
        'Free shipping on orders over ₹10,000',
        'Early access to sales',
        'Birthday gift voucher'
      ]
    },
    {
      name: 'GOLD VIP',
      price: '₹19,999',
      period: '/year',
      icon: '🥇',
      color: '#d4af37',
      popular: true,
      benefits: [
        '30% off all items',
        'Free shipping on all orders',
        'Personal stylist consultation',
        'Exclusive VIP events access',
        'Priority customer support',
        'Special birthday surprise'
      ]
    },
    {
      name: 'PLATINUM VIP',
      price: '₹39,999',
      period: '/year',
      icon: '💎',
      color: '#E5E4E2',
      benefits: [
        '40% off all items',
        'Free express shipping worldwide',
        'Dedicated personal stylist',
        'VIP lounge access',
        'Exclusive fashion shows',
        'Luxury gift hamper',
        '24/7 concierge service'
      ]
    }
  ];

  return (
    <div style={{ 
      background: '#0a0a0a',
      minHeight: '100vh',
      fontFamily: "'Montserrat', sans-serif"
    }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, #2d1b3d 0%, #4a2c5e 50%, #2d1b3d 100%)',
        padding: '100px 20px',
        textAlign: 'center',
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
          background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'linear-gradient(90deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)',
          padding: '10px 25px',
          borderRadius: '25px',
          marginBottom: '25px',
          fontSize: '13px',
          fontWeight: '700',
          letterSpacing: '1.5px',
          color: '#0a0a0a',
          position: 'relative',
          zIndex: 1
        }}>
          <Crown size={18} />
          EXCLUSIVE MEMBERSHIP
        </div>

        <h1 style={{
          fontSize: '64px',
          fontWeight: '700',
          color: '#d4af37',
          marginBottom: '20px',
          letterSpacing: '4px',
          fontFamily: "'Playfair Display', serif",
          position: 'relative',
          zIndex: 1
        }}>
          VIP CLUB
        </h1>
        <p style={{ 
          color: '#c0c0c0', 
          fontSize: '22px',
          letterSpacing: '1px',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.6',
          position: 'relative',
          zIndex: 1
        }}>
          Join our exclusive circle and experience luxury like never before
        </p>
      </div>

      {/* Benefits Section */}
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '80px 20px' 
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '15px',
            letterSpacing: '2px',
            fontFamily: "'Playfair Display', serif"
          }}>
            VIP BENEFITS
          </h2>
          <p style={{ color: '#b0b0b0', fontSize: '18px' }}>
            Unlock exclusive privileges reserved for our most valued members
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          marginBottom: '80px'
        }}>
          {benefits.map((benefit, index) => (
            <div key={index} style={{
              background: '#1a1a1a',
              padding: '40px',
              borderRadius: '20px',
              border: '1px solid rgba(212,175,55,0.2)',
              textAlign: 'center',
              transition: 'all 0.3s'
            }}>
              <div style={{ fontSize: '60px', marginBottom: '20px' }}>
                {benefit.icon}
              </div>
              <h3 style={{
                color: '#d4af37',
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '15px',
                letterSpacing: '1px'
              }}>
                {benefit.title}
              </h3>
              <p style={{
                color: '#b0b0b0',
                fontSize: '16px',
                lineHeight: '1.7'
              }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Membership Tiers */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '15px',
            letterSpacing: '2px',
            fontFamily: "'Playfair Display', serif"
          }}>
            CHOOSE YOUR TIER
          </h2>
          <p style={{ color: '#b0b0b0', fontSize: '18px' }}>
            Select the membership that suits your lifestyle
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
          marginBottom: '60px'
        }}>
          {tiers.map((tier, index) => (
            <div key={index} style={{
              background: tier.popular ? 'linear-gradient(135deg, #2d1b3d 0%, #4a2c5e 100%)' : '#1a1a1a',
              padding: '40px',
              borderRadius: '25px',
              border: tier.popular ? '2px solid #d4af37' : '1px solid rgba(212,175,55,0.2)',
              position: 'relative',
              textAlign: 'center',
              boxShadow: tier.popular ? '0 15px 40px rgba(212,175,55,0.3)' : 'none',
              transform: tier.popular ? 'scale(1.05)' : 'scale(1)',
              transition: 'all 0.3s'
            }}>
              {tier.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(90deg, #d4af37 0%, #f4e5c3 100%)',
                  color: '#0a0a0a',
                  padding: '8px 25px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  ⭐ Most Popular
                </div>
              )}

              <div style={{ fontSize: '60px', marginBottom: '20px' }}>
                {tier.icon}
              </div>

              <h3 style={{
                color: tier.color,
                fontSize: '28px',
                fontWeight: '700',
                marginBottom: '10px',
                letterSpacing: '2px',
                fontFamily: "'Playfair Display', serif"
              }}>
                {tier.name}
              </h3>

              <div style={{
                fontSize: '48px',
                fontWeight: '700',
                color: '#d4af37',
                marginBottom: '5px',
                fontFamily: "'Playfair Display', serif"
              }}>
                {tier.price}
              </div>
              <div style={{
                color: '#888',
                fontSize: '16px',
                marginBottom: '30px'
              }}>
                {tier.period}
              </div>

              <div style={{
                textAlign: 'left',
                marginBottom: '30px'
              }}>
                {tier.benefits.map((benefit, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '15px',
                    color: '#c0c0c0',
                    fontSize: '15px'
                  }}>
                    <span style={{ color: '#d4af37', fontSize: '18px' }}>✓</span>
                    {benefit}
                  </div>
                ))}
              </div>

              <button style={{
                width: '100%',
                background: tier.popular 
                  ? 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)' 
                  : 'transparent',
                color: tier.popular ? '#0a0a0a' : '#d4af37',
                border: tier.popular ? 'none' : '2px solid #d4af37',
                padding: '16px',
                borderRadius: '30px',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '14px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                transition: 'all 0.3s',
                boxShadow: tier.popular ? '0 8px 20px rgba(212,175,55,0.4)' : 'none'
              }}>
                Join {tier.name}
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          padding: '60px 40px',
          borderRadius: '25px',
          border: '1px solid rgba(212,175,55,0.2)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '60px', marginBottom: '20px' }}>👑</div>
          <h2 style={{
            color: '#d4af37',
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '15px',
            letterSpacing: '2px',
            fontFamily: "'Playfair Display', serif"
          }}>
            Ready to Join the Elite?
          </h2>
          <p style={{
            color: '#b0b0b0',
            fontSize: '18px',
            marginBottom: '30px',
            lineHeight: '1.7',
            maxWidth: '600px',
            margin: '0 auto 30px'
          }}>
            Experience luxury fashion like never before with exclusive VIP benefits and privileges
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              to="/shop"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
                color: '#0a0a0a',
                padding: '18px 45px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: '700',
                fontSize: '15px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                boxShadow: '0 8px 20px rgba(212,175,55,0.3)'
              }}
            >
              Explore Collections
            </Link>
            <button style={{
              background: 'transparent',
border: '2px solid #d4af37',
color: '#d4af37',
padding: '18px 45px',
borderRadius: '30px',
fontWeight: '700',
cursor: 'pointer',
fontSize: '15px',
letterSpacing: '1.5px',
textTransform: 'uppercase'
}}>
Contact VIP Team
</button>
</div>
</div>
</div>
</div>
);
}
export default VIP;