import { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { useNavigate, Link } from 'react-router-dom';
import { CreditCard, MapPin, User, Phone, Mail, Lock } from 'lucide-react';

function Checkout() {
  const { cartItems, getCartTotal, clearCart } = useShop();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'card'
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate order processing
    alert('Order placed successfully! Order ID: #FR' + Date.now());
    clearCart();
    navigate('/');
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div style={{
      background: '#0a0a0a',
      minHeight: '100vh',
      fontFamily: "'Montserrat', sans-serif",
      paddingBottom: '80px'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
        padding: '60px 20px',
        borderBottom: '1px solid rgba(212,175,55,0.2)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '10px',
            letterSpacing: '2px',
            fontFamily: "'Playfair Display', serif"
          }}>
            Checkout
          </h1>
          <p style={{ color: '#b0b0b0', fontSize: '16px' }}>
            Complete your luxury purchase
          </p>
        </div>
      </div>

      <div style={{
        maxWidth: '1200px',
        margin: '60px auto 0',
        padding: '0 20px',
        display: 'grid',
        gridTemplateColumns: '1fr 450px',
        gap: '40px'
      }} className="checkout-grid">
        
        {/* Checkout Form */}
        <div>
          <form onSubmit={handleSubmit}>
            {/* Contact Information */}
            <div style={{
              background: '#1a1a1a',
              padding: '35px',
              borderRadius: '20px',
              border: '1px solid rgba(212,175,55,0.2)',
              marginBottom: '30px'
            }}>
              <h2 style={{
                color: '#d4af37',
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '25px',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <User size={24} />
                Contact Information
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    color: '#c0c0c0',
                    fontSize: '13px',
                    fontWeight: '600',
                    marginBottom: '10px',
                    letterSpacing: '1px'
                  }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      background: '#2d2d2d',
                      border: '1px solid rgba(212,175,55,0.2)',
                      borderRadius: '12px',
                      color: '#f5f5f5',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    color: '#c0c0c0',
                    fontSize: '13px',
                    fontWeight: '600',
                    marginBottom: '10px',
                    letterSpacing: '1px'
                  }}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      background: '#2d2d2d',
                      border: '1px solid rgba(212,175,55,0.2)',
                      borderRadius: '12px',
                      color: '#f5f5f5',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ marginTop: '20px' }}>
                <label style={{
                  display: 'block',
                  color: '#c0c0c0',
                  fontSize: '13px',
                  fontWeight: '600',
                  marginBottom: '10px',
                  letterSpacing: '1px'
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    background: '#2d2d2d',
                    border: '1px solid rgba(212,175,55,0.2)',
                    borderRadius: '12px',
                    color: '#f5f5f5',
                    fontSize: '15px',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginTop: '20px' }}>
                <label style={{
                  display: 'block',
                  color: '#c0c0c0',
                  fontSize: '13px',
                  fontWeight: '600',
                  marginBottom: '10px',
                  letterSpacing: '1px'
                }}>
                  Phone *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="+91"
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    background: '#2d2d2d',
                    border: '1px solid rgba(212,175,55,0.2)',
                    borderRadius: '12px',
                    color: '#f5f5f5',
                    fontSize: '15px',
                    outline: 'none'
                  }}
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div style={{
              background: '#1a1a1a',
              padding: '35px',
              borderRadius: '20px',
              border: '1px solid rgba(212,175,55,0.2)',
              marginBottom: '30px'
            }}>
              <h2 style={{
                color: '#d4af37',
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '25px',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <MapPin size={24} />
                Shipping Address
              </h2>

              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  color: '#c0c0c0',
                  fontSize: '13px',
                  fontWeight: '600',
                  marginBottom: '10px',
                  letterSpacing: '1px'
                }}>
                  Address *
                </label>
                <textarea
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  rows="3"
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    background: '#2d2d2d',
                    border: '1px solid rgba(212,175,55,0.2)',
                    borderRadius: '12px',
                    color: '#f5f5f5',
                    fontSize: '15px',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '20px'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    color: '#c0c0c0',
                    fontSize: '13px',
                    fontWeight: '600',
                    marginBottom: '10px',
                    letterSpacing: '1px'
                  }}>
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      background: '#2d2d2d',
                      border: '1px solid rgba(212,175,55,0.2)',
                      borderRadius: '12px',
                      color: '#f5f5f5',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    color: '#c0c0c0',
                    fontSize: '13px',
                    fontWeight: '600',
                    marginBottom: '10px',
                    letterSpacing: '1px'
                  }}>
                    State *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({...formData, state: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      background: '#2d2d2d',
                      border: '1px solid rgba(212,175,55,0.2)',
                      borderRadius: '12px',
                      color: '#f5f5f5',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    color: '#c0c0c0',
                    fontSize: '13px',
                    fontWeight: '600',
                    marginBottom: '10px',
                    letterSpacing: '1px'
                  }}>
                    Pincode *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.pincode}
                    onChange={(e) => setFormData({...formData, pincode: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      background: '#2d2d2d',
                      border: '1px solid rgba(212,175,55,0.2)',
                      borderRadius: '12px',
                      color: '#f5f5f5',
                      fontSize: '15px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div style={{
              background: '#1a1a1a',
              padding: '35px',
              borderRadius: '20px',
              border: '1px solid rgba(212,175,55,0.2)',
              marginBottom: '30px'
            }}>
              <h2 style={{
                color: '#d4af37',
                fontSize: '22px',
                fontWeight: '700',
                marginBottom: '25px',
                letterSpacing: '1px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <CreditCard size={24} />
                Payment Method
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '18px',
                  background: formData.paymentMethod === 'card' ? 'rgba(212,175,55,0.1)' : '#2d2d2d',
                  border: formData.paymentMethod === 'card' ? '2px solid #d4af37' : '1px solid rgba(212,175,55,0.2)',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                    style={{ marginRight: '12px', accentColor: '#d4af37' }}
                  />
                  <span style={{ color: '#f5f5f5', fontSize: '15px', fontWeight: '600' }}>
                    💳 Credit/Debit Card
                  </span>
                </label>

                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '18px',
                  background: formData.paymentMethod === 'upi' ? 'rgba(212,175,55,0.1)' : '#2d2d2d',
                  border: formData.paymentMethod === 'upi' ? '2px solid #d4af37' : '1px solid rgba(212,175,55,0.2)',
borderRadius: '12px',
cursor: 'pointer',
transition: 'all 0.3s'
}}>
<input
type="radio"
name="payment"
value="upi"
checked={formData.paymentMethod === 'upi'}
onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
style={{ marginRight: '12px', accentColor: '#d4af37' }}
/>
<span style={{ color: '#f5f5f5', fontSize: '15px', fontWeight: '600' }}>
📱 UPI
</span>
</label>
<label style={{
              display: 'flex',
              alignItems: 'center',
              padding: '18px',
              background: formData.paymentMethod === 'cod' ? 'rgba(212,175,55,0.1)' : '#2d2d2d',
              border: formData.paymentMethod === 'cod' ? '2px solid #d4af37' : '1px solid rgba(212,175,55,0.2)',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}>
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={formData.paymentMethod === 'cod'}
                onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                style={{ marginRight: '12px', accentColor: '#d4af37' }}
              />
              <span style={{ color: '#f5f5f5', fontSize: '15px', fontWeight: '600' }}>
                💵 Cash on Delivery
              </span>
            </label>
          </div>
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
            color: '#0a0a0a',
            padding: '20px',
            borderRadius: '30px',
            border: 'none',
            fontWeight: '700',
            cursor: 'pointer',
            fontSize: '18px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            boxShadow: '0 8px 20px rgba(212,175,55,0.4)'
          }}
        >
          Place Order
        </button>
      </form>
    </div>

    {/* Order Summary */}
    <div>
      <div style={{
        background: 'linear-gradient(135deg, #2d1b3d 0%, #4a2c5e 100%)',
        padding: '35px',
        borderRadius: '20px',
        border: '1px solid rgba(212,175,55,0.3)',
        position: 'sticky',
        top: '120px'
      }}>
        <h2 style={{
          color: '#d4af37',
          fontSize: '22px',
          fontWeight: '700',
          marginBottom: '25px',
          letterSpacing: '1px'
        }}>
          Order Summary
        </h2>

        {/* Cart Items */}
        <div style={{ marginBottom: '25px', maxHeight: '300px', overflowY: 'auto' }}>
          {cartItems.map((item, index) => (
            <div key={`${item.id}-${item.selectedSize}-${index}`} style={{
              display: 'flex',
              gap: '15px',
              marginBottom: '20px',
              paddingBottom: '20px',
              borderBottom: '1px solid rgba(212,175,55,0.2)'
            }}>
              <img 
                src={item.image} 
                alt={item.name}
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '10px',
                  objectFit: 'cover'
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{
                  color: '#f5f5f5',
                  fontSize: '15px',
                  fontWeight: '600',
                  marginBottom: '5px'
                }}>
                  {item.name}
                </div>
                <div style={{ color: '#888', fontSize: '13px', marginBottom: '5px' }}>
                  Size: {item.selectedSize} | Qty: {item.quantity}
                </div>
                <div style={{ color: '#d4af37', fontSize: '14px', fontWeight: '700' }}>
                  {formatPrice(item.price * item.quantity)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '15px',
          color: '#c0c0c0',
          fontSize: '15px'
        }}>
          <span>Subtotal:</span>
          <span style={{ fontWeight: '600' }}>{formatPrice(getCartTotal())}</span>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '15px',
          color: '#c0c0c0',
          fontSize: '15px'
        }}>
          <span>Shipping:</span>
          <span style={{ fontWeight: '600', color: '#50C878' }}>FREE</span>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
          color: '#c0c0c0',
          fontSize: '15px'
        }}>
          <span>Tax (18%):</span>
          <span style={{ fontWeight: '600' }}>{formatPrice(getCartTotal() * 0.18)}</span>
        </div>

        <div style={{
          borderTop: '1px solid rgba(212,175,55,0.3)',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{
            color: '#f5f5f5',
            fontSize: '18px',
            fontWeight: '700',
            letterSpacing: '1px'
          }}>
            Total:
          </span>
          <span style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#d4af37',
            fontFamily: "'Playfair Display', serif"
          }}>
            {formatPrice(getCartTotal() * 1.18)}
          </span>
        </div>

        {/* Security Badge */}
        <div style={{
          marginTop: '25px',
          padding: '15px',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          color: '#b0b0b0',
          fontSize: '13px'
        }}>
          <Lock size={18} />
          <span>Secure checkout powered by SSL encryption</span>
        </div>
      </div>
    </div>
  </div>

  <style>{`
    @media (max-width: 1024px) {
      .checkout-grid {
        grid-template-columns: 1fr !important;
      }
    }
  `}</style>
</div>
);
}
export default Checkout;