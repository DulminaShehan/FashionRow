import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};

    // Name validation only for Register
    if (!isLogin && !formData.name.trim()) {
      tempErrors.name = "Full Name is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } 
    else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = "Enter a valid email";
      }
    }

    // Password validation
    if (!formData.password.trim()) {
      tempErrors.password = "Password is required";
    } 
    else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    console.log('Form submitted:', formData);

    alert(isLogin ? 'Login Successful!' : 'Registration Successful!');
    navigate('/');
  };

  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Montserrat', sans-serif",
        padding: '40px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >

      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)',
          borderRadius: '50%'
        }}
      ></div>

      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
          borderRadius: '50%'
        }}
      ></div>

      <div
        style={{
          maxWidth: '500px',
          width: '100%',
          background: '#1a1a1a',
          borderRadius: '30px',
          padding: '50px 40px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
          border: '1px solid rgba(212,175,55,0.2)',
          position: 'relative',
          zIndex: 1
        }}
      >

        <div style={{ textAlign: 'center', marginBottom: '35px' }}>
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px',
              fontSize: '40px',
              boxShadow: '0 10px 30px rgba(212,175,55,0.3)'
            }}
          >
            👑
          </div>

          <h2
            style={{
              color: '#d4af37',
              fontSize: '32px',
              fontWeight: '700',
              marginBottom: '10px',
              letterSpacing: '2px',
              fontFamily: "'Playfair Display', serif"
            }}
          >
            {isLogin ? 'Welcome Back' : 'Join FashionRow'}
          </h2>

          <p style={{ color: '#888', fontSize: '15px', letterSpacing: '1px' }}>
            {isLogin ? 'Enter your credentials to continue' : 'Create your luxury account'}
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <div style={{ marginBottom: '25px' }}>
              <label
                style={{
                  display: 'block',
                  color: '#c0c0c0',
                  fontSize: '13px',
                  fontWeight: '600',
                  marginBottom: '10px',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}
              >
                Full Name
              </label>

              <div style={{ position: 'relative' }}>
                <User
                  size={20}
                  style={{
                    position: 'absolute',
                    left: '18px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#888'
                  }}
                />

                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  style={{
                    width: '100%',
                    padding: '16px 20px 16px 50px',
                    background: '#2d2d2d',
                    border: `2px solid ${errors.name ? 'red' : 'rgba(212,175,55,0.2)'}`,
                    borderRadius: '15px',
                    color: '#f5f5f5',
                    fontSize: '15px',
                    outline: 'none'
                  }}
                />
              </div>

              {errors.name && (
                <small style={{ color: 'red' }}>{errors.name}</small>
              )}
            </div>
          )}

          <div style={{ marginBottom: '25px' }}>
            <label
              style={{
                display: 'block',
                color: '#c0c0c0',
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '10px',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              Email Address
            </label>

            <div style={{ position: 'relative' }}>
              <Mail
                size={20}
                style={{
                  position: 'absolute',
                  left: '18px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#888'
                }}
              />

              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email"
                style={{
                  width: '80%',
                  padding: '16px 20px 16px 50px',
                  background: '#2d2d2d',
                  border: `2px solid ${errors.email ? 'red' : 'rgba(212,175,55,0.2)'}`,
                  borderRadius: '15px',
                  color: '#f5f5f5',
                  fontSize: '15px',
                  outline: 'none'
                }}
              />
            </div>

            {errors.email && (
              <small style={{ color: 'red' }}>{errors.email}</small>
            )}
          </div>

          <div style={{ marginBottom: '30px' }}>
            <label
              style={{
                display: 'block',
                color: '#c0c0c0',
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '10px',
                letterSpacing: '1px',
                textTransform: 'uppercase'
              }}
            >
              Password
            </label>

            <div style={{ position: 'relative' }}>
              <Lock
                size={20}
                style={{
                  position: 'absolute',
                  left: '18px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#888'
                }}
              />

              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                placeholder="Enter your password"
                style={{
                  width: '75%',
                  padding: '16px 50px 16px 50px',
                  background: '#2d2d2d',
                  border: `2px solid ${errors.password ? 'red' : 'rgba(212,175,55,0.2)'}`,
                  borderRadius: '15px',
                  color: '#f5f5f5',
                  fontSize: '15px',
                  outline: 'none'
                }}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '18px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#888',
                  cursor: 'pointer'
                }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {errors.password && (
              <small style={{ color: 'red' }}>{errors.password}</small>
            )}
          </div>

          {isLogin && (
            <div style={{ textAlign: 'right', marginBottom: '25px' }}>
              <a
                href="#"
                style={{
                  color: '#d4af37',
                  fontSize: '14px',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}
              >
                Forgot Password?
              </a>
            </div>
          )}

          <button
            type="submit"
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #d4af37 0%, #f4e5c3 100%)',
              color: '#0a0a0a',
              padding: '18px',
              borderRadius: '15px',
              border: 'none',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '16px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              boxShadow: '0 10px 25px rgba(212,175,55,0.3)',
              marginBottom: '25px'
            }}
          >
            {isLogin ? 'Login' : 'Create Account'}
          </button>

          <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
            <p style={{ color: '#888', fontSize: '15px' }}>
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                type="button"
                onClick={() => {
                  setErrors({});
                  setIsLogin(!isLogin);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#d4af37',
                  fontWeight: '700',
                  cursor: 'pointer',
                  fontSize: '15px',
                  textDecoration: 'underline'
                }}
              >
                {isLogin ? 'Register' : 'Login'}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
