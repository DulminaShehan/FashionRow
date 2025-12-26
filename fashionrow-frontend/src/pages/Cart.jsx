import { useShop } from '../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useShop();
  const navigate = useNavigate();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ 
        background: '#0a0a0a',
        minHeight: '100vh',
        fontFamily: "'Montserrat', sans-serif",
        padding: '80px 20px'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center',
          background: '#1a1a1a',
          padding: '80px 40px',
          borderRadius: '25px',
          border: '1px solid rgba(212,175,55,0.2)'
        }}>
          <div style={{ fontSize: '80px', marginBottom: '20px' }}>🛍️</div>
          <h2 style={{
            color: '#d4af37',
            fontSize: '32px',
            fontWeight: '700',
            marginBottom: '15px',
            letterSpacing: '2px',
            fontFamily: "'Playfair Display', serif"
          }}>
            Your Cart is Empty
          </h2>
          <p style={{ color: '#b0b0b0', fontSize: '18px', marginBottom: '30px' }}>
            Start shopping to add items to your cart
          </p>
          <Link to="/shop" style={{
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
            boxShadow: '0 8px 20px rgba(212,175,55,0.3)'
          }}>
            Explore Collections
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      background: '#0a0a0a',
      minHeight: '100vh',
      fontFamily: "'Montserrat', sans-serif"
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
        padding: '60px 20px',
        borderBottom: '1px solid rgba(212,175,55,0.2)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              background: 'transparent',
              border: '1px solid #d4af37',
              color: '#d4af37',
              padding: '10px 20px',
              borderRadius: '20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '20px',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '1px'
            }}
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </button>
          
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
            Shopping Cart
          </h1>
          <p style={{ color: '#b0b0b0', fontSize: '16px' }}>
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
      </div>

      {/* Cart Content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px' }}>
          
          {/* Cart Items */}
          <div>
            {cartItems.map((item, index) => (
              <div key={`${item.id}-${item.selectedSize}-${index}`} style={{
                background: '#1a1a1a',
                borderRadius: '20px',
                padding: '25px',
                marginBottom: '20px',
                border: '1px solid rgba(212,175,55,0.2)',
                display: 'flex',
                gap: '25px',
                flexWrap: 'wrap'
              }}>
                {/* Product Image */}
                <div style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  flexShrink: 0
                }}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                {/* Product Details */}
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <h3 style={{
                    color: '#f5f5f5',
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    {item.name}
                  </h3>
                  
                  <div style={{
                    color: '#888',
                    fontSize: '13px',
                    textTransform: 'uppercase',
                    marginBottom: '10px',
                    letterSpacing: '1px'
                  }}>
                    {item.category}
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    marginBottom: '15px'
                  }}>
                    <div style={{
                      padding: '6px 14px',
                      background: '#2d2d2d',
                      border: '1px solid #d4af37',
                      borderRadius: '8px',
                      fontSize: '13px',
                      color: '#d4af37',
                      fontWeight: '600'
                    }}>
                      Size: {item.selectedSize}
                    </div>
                  </div>

                  <div style={{
                    fontSize: '24px',
                    fontWeight: '700',
                    color: '#d4af37',
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    {formatPrice(item.price)}
                  </div>
                </div>

                {/* Quantity & Actions */}
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  minWidth: '150px'
                }}>
                  {/* Quantity Controls */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: '#2d2d2d',
                    padding: '8px 12px',
                    borderRadius: '30px',
                    border: '1px solid rgba(212,175,55,0.2)'
                  }}>
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#d4af37',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Minus size={16} />
                    </button>
                    
                    <span style={{
                      color: '#f5f5f5',
                      fontSize: '16px',
                      fontWeight: '600',
                      minWidth: '30px',
                      textAlign: 'center'
                    }}>
                      {item.quantity}
                    </span>
                    
                    <button
                      onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#d4af37',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div style={{
                    fontSize: '22px',
                    fontWeight: '700',
                    color: '#d4af37',
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    {formatPrice(item.price * item.quantity)}
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                    style={{
                      background: 'transparent',
                      border: '1px solid #888',
                      color: '#888',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '13px',
                      fontWeight: '600',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = '#d4af37';
                      e.target.style.color = '#d4af37';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = '#888';
                      e.target.style.color = '#888';
                    }}
                  >
                    <Trash2 size={14} />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Order Summary */}
        <div style={{
          marginTop: '40px',
          background: 'linear-gradient(135deg, #2d1b3d 0%, #4a2c5e 100%)',
          padding: '40px',
          borderRadius: '25px',
          border: '1px solid rgba(212,175,55,0.3)'
        }}>
          <h3 style={{
            color: '#d4af37',
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '25px',
            letterSpacing: '1.5px',
            fontFamily: "'Playfair Display', serif"
          }}>
            Order Summary
          </h3>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '15px',
            color: '#c0c0c0',
            fontSize: '16px'
          }}>
            <span>Subtotal:</span>
            <span style={{ fontWeight: '600' }}>{formatPrice(getCartTotal())}</span>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '15px',
            color: '#c0c0c0',
            fontSize: '16px'
          }}>
            <span>Shipping:</span>
            <span style={{ fontWeight: '600', color: '#50C878' }}>FREE</span>
          </div>

          <div style={{
            borderTop: '1px solid rgba(212,175,55,0.2)',
            marginTop: '20px',
            paddingTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <span style={{
              color: '#f5f5f5',
              fontSize: '20px',
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
              {formatPrice(getCartTotal())}
            </span>
          </div>

          <Link
            to="/checkout"
            style={{
              display: 'block',
              width: '100%',
              marginTop: '30px',
              background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
              color: '#0a0a0a',
              padding: '18px',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '16px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              textAlign: 'center',
              boxShadow: '0 8px 20px rgba(212,175,55,0.4)'
            }}
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;