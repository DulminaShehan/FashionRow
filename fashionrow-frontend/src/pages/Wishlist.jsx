import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart, Heart } from 'lucide-react';

function Wishlist() {
  const { wishlistItems, removeFromWishlist, addToCart } = useShop();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = (product) => {
    if (product.sizes && product.sizes.length > 0) {
      addToCart(product, product.sizes[0]);
      alert(`${product.name} added to cart!`);
    }
  };

  if (wishlistItems.length === 0) {
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
          <div style={{ fontSize: '80px', marginBottom: '20px' }}>💛</div>
          <h2 style={{
            color: '#d4af37',
            fontSize: '32px',
            fontWeight: '700',
            marginBottom: '15px',
            letterSpacing: '2px',
            fontFamily: "'Playfair Display', serif"
          }}>
            Your Wishlist is Empty
          </h2>
          <p style={{ color: '#b0b0b0', fontSize: '18px', marginBottom: '30px' }}>
            Save your favorite items for later
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
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: '700',
            background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '10px',
            letterSpacing: '2px',
            fontFamily: "'Playfair Display', serif",
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <Heart size={45} style={{ color: '#d4af37' }} />
            My Wishlist
          </h1>
          <p style={{ color: '#b0b0b0', fontSize: '16px' }}>
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>
      </div>

      {/* Wishlist Items */}
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '60px 20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {wishlistItems.map(item => (
            <div key={item.id} style={{
              background: '#1a1a1a',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(212,175,55,0.2)',
              position: 'relative'
            }}>
              {/* Remove Button */}
              <button
                onClick={() => removeFromWishlist(item.id)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
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
                  transition: 'all 0.3s'
                }}
              >
                <Trash2 size={18} />
              </button>

              {/* Image */}
              <Link to={`/product/${item.id}`}>
                <div style={{
                  width: '100%',
                  height: '350px',
                  overflow: 'hidden'
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
              </Link>

              {/* Content */}
              <div style={{ padding: '25px' }}>
                <Link 
                  to={`/product/${item.id}`}
                  style={{ textDecoration: 'none' }}
                >
                  <h3 style={{
                    color: '#f5f5f5',
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '8px',
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    {item.name}
                  </h3>
                </Link>

                <div style={{
                  color: '#888',
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  marginBottom: '15px',
                  letterSpacing: '1px'
                }}>
                  {item.category}
                </div>

                <div style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: '#d4af37',
                  marginBottom: '20px',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {formatPrice(item.price)}
                </div>

                <button
                  onClick={() => handleAddToCart(item)}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
                    color: '#0a0a0a',
                    padding: '14px',
                    borderRadius: '25px',
                    border: 'none',
                    fontWeight: '700',
                    cursor: 'pointer',
                    fontSize: '13px',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    boxShadow: '0 5px 15px rgba(212,175,55,0.3)'
                  }}
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;