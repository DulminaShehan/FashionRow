import { createContext, useState, useContext, useEffect } from 'react';

const ShopContext = createContext();

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within ShopProvider');
  }
  return context;
};

export function ShopProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('fashionrow_cart');
    const savedWishlist = localStorage.getItem('fashionrow_wishlist');
    
    if (savedCart) setCartItems(JSON.parse(savedCart));
    if (savedWishlist) setWishlistItems(JSON.parse(savedWishlist));
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('fashionrow_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Save to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem('fashionrow_wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToCart = (product, selectedSize) => {
    const existingItem = cartItems.find(
      item => item.id === product.id && item.selectedSize === selectedSize
    );

    if (existingItem) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, selectedSize, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId, selectedSize) => {
    setCartItems(
      cartItems.filter(
        item => !(item.id === productId && item.selectedSize === selectedSize)
      )
    );
  };

  const updateQuantity = (productId, selectedSize, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, selectedSize);
      return;
    }
    
    setCartItems(
      cartItems.map(item =>
        item.id === productId && item.selectedSize === selectedSize
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const addToWishlist = (product) => {
    const exists = wishlistItems.find(item => item.id === product.id);
    if (!exists) {
      setWishlistItems([...wishlistItems, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    wishlistItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    getCartTotal,
    getCartCount,
    clearCart
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}