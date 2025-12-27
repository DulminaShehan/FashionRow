import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';

function NewArrivals() {
  const [newProducts, setNewProducts] = useState([]);
  const { addToCart, addToWishlist, isInWishlist } = useShop();

  // Mock new arrival products
  const mockNewArrivals = [
    { 
      id: 1, 
      name: 'Velvet Royal Blazer', 
      price: 119999, 
      category: 'men', 
      sizes: ['M', 'L', 'XL'],
      image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400',
      tag: 'Just Arrived',
      rating: 5,
      arrivedDate: '2024-12-20'
    },
    { 
      id: 2, 
      name: 'Diamond Studded Evening Dress', 
      price: 189999, 
      category: 'women', 
      sizes: ['XS', 'S', 'M', 'L'],
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
      tag: 'Just Arrived',
      rating: 5,
      arrivedDate: '2024-12-20'
    },
    { 
      id: 3, 
      name: 'Silk Designer Kurta', 
      price: 79999, 
      category: 'men', 
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      image: 'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=400',
      tag: 'Just Arrived',
      rating: 5,
      arrivedDate: '2024-12-19'
    },
    { 
      id: 4, 
      name: 'Crystal Embellished Saree', 
      price: 149999, 
      category: 'women', 
      sizes: ['Free Size'],
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400',
      tag: 'Just Arrived',
      rating: 5,
      arrivedDate: '2024-12-19'
    },
    { 
      id: 5, 
      name: 'Premium Leather Trench Coat', 
      price: 159999, 
      category: 'men', 
      sizes: ['M', 'L', 'XL'],
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400',
      tag: 'Just Arrived',
      rating: 5,
      arrivedDate: '2024-12-18'
    },
    { 
      id: 6, 
      name: 'Gold Thread Lehenga', 
      price: 199999, 
      category: 'women', 
      sizes: ['S', 'M', 'L'],
      image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400',
      tag: 'Just Arrived',
      rating: 5,
      arrivedDate: '2024-12-18'
    }
  ];

  useEffect(() => {
    setNewProducts(mockNewArrivals);
  }, []);

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product.sizes && product.sizes.length > 0) {
      addToCart(product, product.sizes[0]);
      alert(`${product.name} added to cart!`);
    }
  };

  const handleWishlistToggle = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    addToWishlist(product);
    alert(`${product.name} added to wishlist!`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div style={{ 
      background: '#0a0a0a',
      minHeight: '100vh',
      fontFamily: "'Montserrat', sans-serif"
    }}>
      {/* Hero Banner */}
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
          top: '-50px',
          right: '-50px',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-80px',
          left: '-80px',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }}></div>

        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          background: 'linear-gradient(90deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)',
          padding: '10px 25px',
          borderRadius: '25px',
          marginBottom: '20px',
          fontSize: '13px',
          fontWeight: '700',
          letterSpacing: '1.5px',
          color: '#0a0a0a',
          position: 'relative',
          zIndex: 1
        }}>
          <Sparkles size={18} />
          LATEST ADDITIONS
        </div>

        <h1 style={{
          fontSize: '58px',
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
          NEW ARRIVALS
        </h1>
        <p style={{ 
          color: '#b0b0b0', 
          fontSize: '20px',
          letterSpacing: '1px',
          position: 'relative',
          zIndex: 1
        }}>
          Fresh From The Runway
        </p>
      </div>

      {/* Features Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #2d1b3d 0%, #4a2c5e 50%, #2d1b3d 100%)',
        padding: '30px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '30px',
          textAlign: 'center'
        }}>
          <div style={{ color: '#d4af37' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>✨</div>
            <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>Fresh This Week</div>
            <div style={{ fontSize: '14px', color: '#c0c0c0' }}>6 New Items</div>
          </div>
          <div style={{ color: '#d4af37' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>🎯</div>
            <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>Limited Stock</div>
            <div style={{ fontSize: '14px', color: '#c0c0c0' }}>Exclusive Pieces</div>
          </div>
          <div style={{ color: '#d4af37' }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>💎</div>
            <div style={{ fontSize: '18px', fontWeight: '700', marginBottom: '5px' }}>Premium Quality</div>
            <div style={{ fontSize: '14px', color: '#c0c0c0' }}>Designer Collections</div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '35px'
        }}>
          {newProducts.map(product => (
            <Link 
              key={product.id}
              to={`/product/${product.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={{
                background: '#1a1a1a',
                borderRadius: '25px',
                overflow: 'hidden',
                border: '1px solid rgba(212,175,55,0.3)',
                transition: 'all 0.4s',
                cursor: 'pointer',
                position: 'relative',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}>
                {/* New Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
                  color: '#0a0a0a',
                  padding: '8px 20px',
                  borderRadius: '25px',
                  fontSize: '12px',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  zIndex: 10,
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 5px 15px rgba(212,175,55,0.4)'
                }}>
                  <Sparkles size={14} />
                  {product.tag}
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={(e) => handleWishlistToggle(product, e)}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(0,0,0,0.7)',
                    border: 'none',
                    color: '#d4af37',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    transition: 'all 0.3s',
                    fontSize: '20px'
                  }}
                >
                  {isInWishlist(product.id) ? '❤️' : '🤍'}
                </button>

                {/* Image */}
                <div style={{
                  width: '100%',
                  height: '400px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)'
                  }}></div>
                </div>

                {/* Content */}
                <div style={{ padding: '30px' }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px'
                  }}>
                    <div style={{
                      color: '#888',
                      fontSize: '13px',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                      fontWeight: '600'
                    }}>
                      {product.category}
                    </div>
                    <div style={{ color: '#d4af37', fontSize: '16px' }}>
                      {'⭐'.repeat(product.rating)}
                    </div>
                  </div>

                  <h3 style={{
                    color: '#f5f5f5',
                    fontSize: '22px',
                    fontWeight: '700',
                    marginBottom: '15px',
                    letterSpacing: '0.5px',
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    {product.name}
                  </h3>

                  {/* Available Sizes */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ 
                      color: '#888', 
                      fontSize: '11px', 
                      marginBottom: '10px',
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      Available Sizes:
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {product.sizes.map(size => (
                        <span key={size} style={{
                          padding: '6px 14px',
                          background: '#2d2d2d',
                          border: '1px solid rgba(212,175,55,0.3)',
                          borderRadius: '8px',
                          fontSize: '12px',
                          color: '#c0c0c0',
                          fontWeight: '600'
                        }}>
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    color: '#d4af37',
                    marginBottom: '25px',
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    {formatPrice(product.price)}
                  </div>

                  <button 
                    onClick={(e) => handleAddToCart(product, e)}
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
                      color: '#0a0a0a',
                      padding: '16px',
                      borderRadius: '30px',
                      border: 'none',
                      fontWeight: '700',
                      cursor: 'pointer',
                      fontSize: '14px',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      transition: 'all 0.3s',
                      boxShadow: '0 8px 20px rgba(212,175,55,0.4)'
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div style={{
          marginTop: '80px',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
          padding: '60px 40px',
          borderRadius: '25px',
          border: '1px solid rgba(212,175,55,0.2)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '50px', marginBottom: '20px' }}>🔔</div>
          <h2 style={{
            color: '#d4af37',
            fontSize: '32px',
            fontWeight: '700',
            marginBottom: '15px',
            letterSpacing: '2px',
            fontFamily: "'Playfair Display', serif"
          }}>
            Never Miss A Drop
          </h2>
          <p style={{
            color: '#b0b0b0',
            fontSize: '18px',
            marginBottom: '30px',
            lineHeight: '1.7'
          }}>
            Subscribe to get notified when new luxury items arrive
          </p>
          <div style={{
            display: 'flex',
            gap: '15px',
            maxWidth: '500px',
            margin: '0 auto',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                flex: 1,
                minWidth: '250px',
                padding: '16px 25px',
                borderRadius: '30px',
                border: '2px solid #d4af37',
                background: '#2d2d2d',
                color: '#f5f5f5',
                fontSize: '15px',
                outline: 'none'
              }}
            />
            <button style={{
              background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
              color: '#0a0a0a',
              padding: '16px 35px',
              borderRadius: '30px',
              border: 'none',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '14px',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;