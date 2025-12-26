import { useState, useEffect } from 'react';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';

function LuxuryShop() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(true);

  // Mock luxury products with sizes
  const mockProducts = [
    { 
      id: 1, 
      name: 'Royal Silk Blazer', 
      price: 89999, 
      category: 'men', 
      sizes: ['S', 'M', 'L', 'XL'],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400',
      tag: 'Bestseller',
      rating: 5
    },
    { 
      id: 2, 
      name: 'Elegant Evening Gown', 
      price: 159999, 
      category: 'women', 
      sizes: ['XS', 'S', 'M', 'L'],
      image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400',
      tag: 'New',
      rating: 5
    },
    { 
      id: 3, 
      name: 'Premium Leather Jacket', 
      price: 129999, 
      category: 'men', 
      sizes: ['M', 'L', 'XL', 'XXL'],
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',
      tag: 'Limited',
      rating: 5
    },
    { 
      id: 4, 
      name: 'Designer Cocktail Dress', 
      price: 109999, 
      category: 'women', 
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400',
      tag: 'Exclusive',
      rating: 5
    },
    { 
      id: 5, 
      name: 'Luxury Wool Suit', 
      price: 149999, 
      category: 'men', 
      sizes: ['S', 'M', 'L', 'XL'],
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400',
      tag: 'Premium',
      rating: 5
    },
    { 
      id: 6, 
      name: 'Cashmere Sweater Set', 
      price: 59999, 
      category: 'women', 
      sizes: ['S', 'M', 'L'],
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400',
      tag: 'Bestseller',
      rating: 5
    },
    { 
      id: 7, 
      name: 'Royal Junior Tuxedo', 
      price: 39999, 
      category: 'kids', 
      sizes: ['4Y', '6Y', '8Y', '10Y', '12Y'],
      image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=400',
      tag: 'New',
      rating: 5
    },
    { 
      id: 8, 
      name: 'Princess Party Dress', 
      price: 34999, 
      category: 'kids', 
      sizes: ['2Y', '4Y', '6Y', '8Y'],
      image: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400',
      tag: 'Exclusive',
      rating: 5
    }
  ];

  useEffect(() => {
    // Load products from localStorage (admin added items) or use mock data
    const adminProducts = localStorage.getItem('adminProducts');
    if (adminProducts) {
      const parsedProducts = JSON.parse(adminProducts);
      setProducts([...parsedProducts, ...mockProducts]);
    } else {
      setProducts(mockProducts);
    }
  }, []);

  const handleSizeToggle = (size) => {
    if (selectedSizes.includes(size)) {
      setSelectedSizes(selectedSizes.filter(s => s !== size));
    } else {
      setSelectedSizes([...selectedSizes, size]);
    }
  };

  const filteredProducts = products.filter(product => {
    // Category filter
    if (category !== 'all' && product.category !== category) return false;
    
    // Price filter (in Rupees)
    if (priceRange === 'under25000' && product.price >= 25000) return false;
    if (priceRange === '25000-50000' && (product.price < 25000 || product.price > 50000)) return false;
    if (priceRange === '50000-100000' && (product.price < 50000 || product.price > 100000)) return false;
    if (priceRange === 'over100000' && product.price <= 100000) return false;
    
    // Size filter
    if (selectedSizes.length > 0) {
      const hasMatchingSize = product.sizes.some(size => selectedSizes.includes(size));
      if (!hasMatchingSize) return false;
    }
    
    return true;
  });

  // Format price in Indian Rupees
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const allSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '2Y', '4Y', '6Y', '8Y', '10Y', '12Y'];

  return (
    <div style={{ 
      background: '#0a0a0a',
      minHeight: '100vh',
      fontFamily: "'Montserrat', sans-serif"
    }}>
      {/* Hero Banner */}
      <div style={{
        background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
        padding: '60px 20px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(212,175,55,0.2)'
      }}>
        <h1 style={{
          fontSize: '52px',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 50%, #d4af37 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '15px',
          letterSpacing: '3px',
          fontFamily: "'Playfair Display', serif"
        }}>
          LUXURY COLLECTIONS
        </h1>
        <p style={{ 
          color: '#b0b0b0', 
          fontSize: '18px',
          letterSpacing: '1px'
        }}>
          Discover Timeless Elegance
        </p>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', gap: '40px', position: 'relative' }}>
          
          {/* Sidebar Filters */}
          <div style={{
            width: showFilters ? '300px' : '0',
            transition: 'width 0.3s',
            overflow: 'hidden'
          }} className="filters-sidebar">
            <div style={{
              background: '#1a1a1a',
              padding: '30px',
              borderRadius: '15px',
              border: '1px solid rgba(212,175,55,0.2)',
              position: 'sticky',
              top: '120px'
            }}>
              <h3 style={{
                color: '#d4af37',
                fontSize: '18px',
                fontWeight: '700',
                marginBottom: '25px',
                letterSpacing: '1.5px',
                textTransform: 'uppercase'
              }}>FILTERS</h3>

              {/* Category Filter */}
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{
                  color: '#c0c0c0',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '15px',
                  letterSpacing: '1px'
                }}>CATEGORY</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['all', 'men', 'women', 'kids'].map(cat => (
                    <label key={cat} style={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      color: category === cat ? '#d4af37' : '#888'
                    }}>
                      <input
                        type="radio"
                        name="category"
                        checked={category === cat}
                        onChange={() => setCategory(cat)}
                        style={{ marginRight: '10px', accentColor: '#d4af37' }}
                      />
                      <span style={{ textTransform: 'capitalize' }}>{cat === 'all' ? 'All Items' : cat}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{
                  color: '#c0c0c0',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '15px',
                  letterSpacing: '1px'
                }}>SIZE</h4>
                <div style={{ 
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '10px'
                }}>
                  {allSizes.map(size => (
                    <button
                      key={size}
                      onClick={() => handleSizeToggle(size)}
                      style={{
                        padding: '10px',
                        borderRadius: '8px',
                        border: selectedSizes.includes(size) ? '2px solid #d4af37' : '1px solid #444',
                        background: selectedSizes.includes(size) ? 'rgba(212,175,55,0.2)' : '#2d2d2d',
                        color: selectedSizes.includes(size) ? '#d4af37' : '#888',
                        cursor: 'pointer',
                        fontSize: '12px',
                        fontWeight: '600',
                        transition: 'all 0.3s'
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{
                  color: '#c0c0c0',
                  fontSize: '14px',
                  fontWeight: '600',
                  marginBottom: '15px',
                  letterSpacing: '1px'
                }}>PRICE RANGE (₹)</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { value: 'all', label: 'All Prices' },
                    { value: 'under25000', label: 'Under ₹25,000' },
                    { value: '25000-50000', label: '₹25,000 - ₹50,000' },
                    { value: '50000-100000', label: '₹50,000 - ₹1,00,000' },
                    { value: 'over100000', label: 'Over ₹1,00,000' }
                  ].map(range => (
                    <label key={range.value} style={{
                      display: 'flex',
                      alignItems: 'center',
                      cursor: 'pointer',
                      color: priceRange === range.value ? '#d4af37' : '#888'
                    }}>
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === range.value}
                        onChange={() => setPriceRange(range.value)}
                        style={{ marginRight: '10px', accentColor: '#d4af37' }}
                      />
                      {range.label}
                    </label>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => {
                  setCategory('all');
                  setPriceRange('all');
                  setSelectedSizes([]);
                }}
                style={{
                  width: '100%',
                  background: 'transparent',
                  color: '#d4af37',
                  padding: '12px',
                  borderRadius: '25px',
                  border: '1px solid #d4af37',
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontSize: '13px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}
              >
                Clear Filters
              </button>

              <button style={{
                width: '100%',
                background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
                color: '#0a0a0a',
                padding: '12px',
                borderRadius: '25px',
                border: 'none',
                fontWeight: '700',
                cursor: 'pointer',
                fontSize: '13px',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}>
                Apply Filters
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div style={{ flex: 1 }}>
            {/* Toolbar */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px',
              padding: '20px',
              background: '#1a1a1a',
              borderRadius: '15px',
              border: '1px solid rgba(212,175,55,0.2)',
              flexWrap: 'wrap',
              gap: '15px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  style={{
                    background: showFilters ? 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)' : 'transparent',
                    color: showFilters ? '#0a0a0a' : '#d4af37',
                    border: showFilters ? 'none' : '1px solid #d4af37',
                    padding: '10px 20px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontWeight: '600',
                    fontSize: '13px',
                    letterSpacing: '1px'
                  }}
                >
                  <Filter size={16} />
                  FILTERS
                </button>
                <span style={{ color: '#888', fontSize: '14px' }}>
                  {filteredProducts.length} Items Found
                </span>
              </div>

              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    background: '#2d2d2d',
                    color: '#c0c0c0',
                    border: '1px solid rgba(212,175,55,0.2)',
                    padding: '10px 15px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>

                {/* View Toggle */}
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => setViewMode('grid')}
                    style={{
                      background: viewMode === 'grid' ? 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)' : 'transparent',
                      color: viewMode === 'grid' ? '#0a0a0a' : '#d4af37',
                      border: '1px solid #d4af37',
                      padding: '10px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Grid size={18} />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    style={{
                      background: viewMode === 'list' ? 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)' : 'transparent',
                      color: viewMode === 'list' ? '#0a0a0a' : '#d4af37',
                      border: '1px solid #d4af37',
                      padding: '10px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <List size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(280px, 1fr))' : '1fr',
              gap: '30px'
            }}>
              {filteredProducts.map(product => (
                <div key={product.id} style={{
                  background: '#1a1a1a',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(212,175,55,0.2)',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  position: 'relative',
                  display: viewMode === 'list' ? 'flex' : 'block'
                }}>
                  {/* Tag */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
                    color: '#0a0a0a',
                    padding: '6px 15px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '1px',
                    zIndex: 10,
                    textTransform: 'uppercase'
                  }}>
                    {product.tag}
                  </div>

                  {/* Image */}
                  <div style={{
                    width: viewMode === 'list' ? '300px' : '100%',
                    height: viewMode === 'list' ? '200px' : '350px',
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
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)'
                    }}></div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: '25px', flex: 1 }}>
                    <h3 style={{
                      color: '#f5f5f5',
                      fontSize: '18px',
                      fontWeight: '600',
                      letterSpacing: '0.5px',
                      fontFamily: "'Playfair Display', serif",
                      marginBottom: '10px'
                    }}>
                      {product.name}
                    </h3>

                    <div style={{ 
                      color: '#888',
                      fontSize: '13px',
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {product.category}
                    </div>

                    {/* Available Sizes */}
                    <div style={{ marginBottom: '15px' }}>
                      <div style={{ 
                        color: '#888', 
                        fontSize: '11px', 
                        marginBottom: '8px',
                        letterSpacing: '1px'
                      }}>
                        AVAILABLE SIZES:
                      </div>
                      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                        {product.sizes.map(size => (
                          <span key={size} style={{
                            padding: '4px 10px',
                            background: '#2d2d2d',
                            border: '1px solid #444',
                            borderRadius: '6px',
                            fontSize: '11px',
                            color: '#c0c0c0'
                          }}>
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '20px'
                    }}>
                      <div style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#d4af37',
                        fontFamily: "'Playfair Display', serif"
                      }}>
                        {formatPrice(product.price)}
                      </div>
                      <div style={{ color: '#d4af37', fontSize: '14px' }}>
                        {'⭐'.repeat(product.rating)}
                      </div>
                    </div>

                    <button style={{
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
                      transition: 'all 0.3s',
                      boxShadow: '0 5px 15px rgba(212,175,55,0.3)'
                    }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div style={{
                textAlign: 'center',
                padding: '80px 20px',
                color: '#888'
              }}>
                <div style={{ fontSize: '60px', marginBottom: '20px' }}>🔍</div>
                <h3 style={{ fontSize: '24px', color: '#c0c0c0', marginBottom: '10px' }}>
                  No Items Found
                </h3>
                <p>Try adjusting your filters or search criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .filters-sidebar {
            width: 100% !important;
            margin-bottom: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default LuxuryShop;