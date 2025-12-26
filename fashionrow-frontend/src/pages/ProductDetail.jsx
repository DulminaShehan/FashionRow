import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { ArrowLeft, ShoppingCart, Heart, Star, Check } from 'lucide-react';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, isInWishlist } = useShop();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Load all products
    const adminProducts = localStorage.getItem('adminProducts');
    const mockProducts = [
      { 
        id: 1, 
        name: 'Royal Silk Blazer', 
        price: 89999, 
        category: 'men', 
        sizes: ['S', 'M', 'L', 'XL'],
        image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400',
        tag: 'Bestseller',
        rating: 5,
        description: 'Exquisite silk blazer crafted with premium materials. Perfect for formal occasions and business meetings. Features Italian silk lining and hand-stitched details.'
      },
      { 
        id: 2, 
        name: 'Elegant Evening Gown', 
        price: 159999, 
        category: 'women', 
        sizes: ['XS', 'S', 'M', 'L'],
        image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400',
        tag: 'New',
        rating: 5,
        description: 'Stunning evening gown with intricate beadwork and flowing silhouette. Made from premium French fabric with delicate embroidery.'
      }
    ];

    let allProducts = [...mockProducts];
    if (adminProducts) {
      allProducts = [...allProducts, ...JSON.parse(adminProducts)];
    }

    const foundProduct = allProducts.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes[0]); // Set first size as default
    }
  }, [id]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    for (let i = 0; i < quantity; i++) {
      addToCart(product, selectedSize);
    }
    alert(`${product.name} added to cart!`);
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    alert('Added to wishlist!');
  };

  if (!product) {
    return (
      <div style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#c0c0c0',
        fontFamily: "'Montserrat', sans-serif"
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '60px', marginBottom: '20px' }}>🔍</div>
          <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Product Not Found</h2>
          <Link to="/shop" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
            color: '#0a0a0a',
            padding: '14px 30px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: '700',
            fontSize: '14px',
            letterSpacing: '1px',
            textTransform: 'uppercase'
          }}>
            Back to Shop
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
      {/* Back Button */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '30px 20px 0'
      }}>
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
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '1px'
          }}
        >
          <ArrowLeft size={18} />
          Back
        </button>
      </div>

      {/* Product Details */}
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '40px 20px 80px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start'
        }} className="product-detail-grid">
          
          {/* Product Image */}
          <div style={{
            background: '#1a1a1a',
            borderRadius: '25px',
            overflow: 'hidden',
            border: '1px solid rgba(212,175,55,0.2)',
            position: 'relative'
          }}>
            {/* Tag */}
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
              textTransform: 'uppercase'
            }}>
              {product.tag}
            </div>

            <img 
              src={product.image} 
              alt={product.name}
              style={{
                width: '100%',
                height: '600px',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Product Info */}
          <div>
            <div style={{
              color: '#888',
              fontSize: '13px',
              textTransform: 'uppercase',
              marginBottom: '12px',
              letterSpacing: '2px',
              fontWeight: '600'
            }}>
              {product.category}
            </div>

            <h1 style={{
              color: '#f5f5f5',
              fontSize: '42px',
              fontWeight: '700',
              marginBottom: '15px',
              letterSpacing: '1px',
              fontFamily: "'Playfair Display', serif"
            }}>
              {product.name}
            </h1>

            {/* Rating */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '25px'
            }}>
              <div style={{ color: '#d4af37', fontSize: '18px' }}>
                {'⭐'.repeat(product.rating)}
              </div>
              <span style={{ color: '#888', fontSize: '14px' }}>
                (248 reviews)
              </span>
            </div>

            {/* Price */}
            <div style={{
              fontSize: '48px',
              fontWeight: '700',
              color: '#d4af37',
              marginBottom: '30px',
              fontFamily: "'Playfair Display', serif"
            }}>
              {formatPrice(product.price)}
            </div>

            {/* Description */}
            <p style={{
              color: '#c0c0c0',
              fontSize: '16px',
              lineHeight: '1.8',
              marginBottom: '35px'
            }}>
              {product.description || 'Premium luxury item crafted with the finest materials and attention to detail. Perfect for those who appreciate timeless elegance and superior quality.'}
            </p>

            {/* Size Selection */}
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{
                color: '#d4af37',
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '15px',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                Select Size
              </h3>
              <div style={{
                display: 'flex',
                gap: '12px',
                flexWrap: 'wrap'
              }}>
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      padding: '12px 24px',
                      borderRadius: '12px',
                      border: selectedSize === size ? '2px solid #d4af37' : '1px solid #444',
                      background: selectedSize === size ? 'rgba(212,175,55,0.2)' : '#2d2d2d',
                      color: selectedSize === size ? '#d4af37' : '#c0c0c0',
                      cursor: 'pointer',
                      fontSize: '15px',
                      fontWeight: '600',
                      transition: 'all 0.3s',
                      position: 'relative'
                    }}
                  >
                    {size}
                    {selectedSize === size && (
                      <Check size={16} style={{
                        position: 'absolute',
                        top: '4px',
                        right: '4px'
                      }} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div style={{ marginBottom: '35px' }}>
              <h3 style={{
                color: '#d4af37',
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '15px',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                Quantity
              </h3>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                background: '#2d2d2d',
                padding: '10px 15px',
                borderRadius: '30px',
                border: '1px solid rgba(212,175,55,0.2)',
                width: 'fit-content'
              }}>
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#d4af37',
                    cursor: 'pointer',
                    fontSize: '20px',
                    fontWeight: '700',
                    padding: '5px 10px'
                  }}
                >
                  −
                </button>
                <span style={{
                  color: '#f5f5f5',
                  fontSize: '18px',
                  fontWeight: '600',
                  minWidth: '40px',
                  textAlign: 'center'
                }}>
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#d4af37',
                    cursor: 'pointer',
                    fontSize: '20px',
                    fontWeight: '700',
                    padding: '5px 10px'
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '15px',
              marginBottom: '40px'
            }}>
              <button
                onClick={handleAddToCart}
                style={{
                  flex: 1,
                  background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
                  color: '#0a0a0a',
                  padding: '18px',
                  borderRadius: '30px',
                  border: 'none',
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontSize: '16px',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  boxShadow: '0 8px 20px rgba(212,175,55,0.4)'
                }}
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>

              <button
                onClick={handleAddToWishlist}
                style={{
                  background: 'transparent',
                  border: '2px solid #d4af37',
                  color: isInWishlist(product.id) ? '#d4af37' : '#d4af37',
                  padding: '18px 25px',
                  borderRadius: '30px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Heart size={22} fill={isInWishlist(product.id) ? '#d4af37' : 'none'} />
              </button>
            </div>

            {/* Features */}
            <div style={{
              background: '#1a1a1a',
              padding: '25px',
              borderRadius: '15px',
              border: '1px solid rgba(212,175,55,0.2)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '24px' }}>✓</span>
                  <span style={{ color: '#c0c0c0', fontSize: '14px' }}>Free Shipping</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '24px' }}>✓</span>
                  <span style={{ color: '#c0c0c0', fontSize: '14px' }}>Easy Returns</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '24px' }}>✓</span>
                  <span style={{ color: '#c0c0c0', fontSize: '14px' }}>Authentic Product</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '24px' }}>✓</span>
                  <span style={{ color: '#c0c0c0', fontSize: '14px' }}>Gift Packaging</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .product-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default ProductDetail;