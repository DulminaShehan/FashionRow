# 👑 FashionRow - Luxury Fashion E-Commerce Platform

![FashionRow Banner](https://img.shields.io/badge/FashionRow-Luxury%20Fashion-gold?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2-6DB33F?style=for-the-badge&logo=springboot)
![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql)

A premium e-commerce platform for luxury fashion retail, built with modern web technologies. Features a stunning UI/UX with gold & black theme, complete shopping experience, and powerful admin management system.

## ✨ Features

### 🛒 Customer Features
- **Product Browsing** - Explore luxury collections with advanced filters
- **Product Details** - Detailed view with size selection and ratings
- **Shopping Cart** - Add/remove items with quantity controls
- **Wishlist** - Save favorite items for later
- **Checkout System** - Complete order placement with multiple payment options
- **User Authentication** - Secure login/register with social media integration
- **VIP Membership** - Three-tier membership system (Silver, Gold, Platinum)
- **New Arrivals** - Latest luxury products showcase
- **Category Filters** - Filter by Men, Women, Kids
- **Size Filters** - XS to XXL and kids sizes (2Y-12Y)
- **Price Filters** - Range-based filtering in Indian Rupees (₹)
- **Real-time Cart Badge** - Live cart item count
- **Responsive Design** - Mobile-friendly interface

### 🎨 Design Features
- **Luxury Theme** - Premium gold (#d4af37) & black (#0a0a0a) color scheme
- **Modern Typography** - Playfair Display (serif) + Montserrat (sans-serif)
- **Smooth Animations** - Hover effects and transitions
- **Interactive Elements** - Dynamic buttons and cards
- **Grid/List View Toggle** - Flexible product display
- **Active Page Indicators** - Navigation with gold underline

### 👨‍💼 Admin Features
- **Product Management** - Add, edit, delete products
- **Multi-size Support** - Add multiple sizes per product
- **Category Management** - Organize products by category
- **Tag System** - Label products (New, Bestseller, Limited, etc.)
- **Price Management** - Set prices in Indian Rupees
- **Image Upload** - Add product images via URL
- **Special Offers** - Mark products as special offers
- **Order Management** - View and manage customer orders
- **Inventory Tracking** - Stock management system

### 💾 Technical Features
- **State Management** - React Context API for cart & wishlist
- **Local Storage** - Persistent cart and product data
- **Routing** - React Router v6 for navigation
- **Form Validation** - Comprehensive input validation
- **API Ready** - Prepared for Spring Boot backend integration
- **CORS Configuration** - Cross-origin resource sharing enabled
- **JWT Authentication** - Secure token-based auth (backend)
- **MySQL Database** - Relational database for data persistence

## 🛠️ Tech Stack

### Frontend
- **React.js** 18.x - UI library
- **React Router DOM** - Navigation
- **Lucide React** - Icon library
- **Axios** - HTTP client
- **Context API** - State management

### Backend
- **Spring Boot** 3.2.0 - Java framework
- **Spring Security** - Authentication & authorization
- **Spring Data JPA** - Database ORM
- **MySQL** 8.0 - Database
- **JWT** - Token-based authentication
- **Lombok** - Code generation
- **Maven** - Build tool

### Styling
- **Inline CSS** - Component-level styling
- **Custom Design** - No CSS frameworks
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure
```
fashionrow/
├── fashionrow-frontend/          # React.js Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── admin/
│   │   │   └── common/
│   │   │       └── Navbar.jsx
│   │   ├── context/
│   │   │   └── ShopContext.jsx
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── AdminPanel.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Checkout.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── NewArrivals.jsx
│   │   │   ├── ProductDetail.jsx
│   │   │   ├── Shop.jsx
│   │   │   ├── VIP.jsx
│   │   │   └── Wishlist.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── fashionrow-backend/           # Spring Boot Backend
    ├── src/
    │   └── main/
    │       ├── java/
    │       │   └── com/fashionrow/
    │       │       ├── config/
    │       │       ├── controller/
    │       │       ├── model/
    │       │       ├── repository/
    │       │       ├── service/
    │       │       └── dto/
    │       └── resources/
    │           └── application.properties
    └── pom.xml
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- Java 17
- MySQL 8.0
- Maven

### Frontend Setup
```bash
# Clone the repository
git clone https://github.com/yourusername/fashionrow.git

# Navigate to frontend directory
cd fashionrow-frontend

# Install dependencies
npm install

# Start development server
npm start
# or for Vite
npm run dev
```

The frontend will run at `http://localhost:3000` (CRA) or `http://localhost:5173` (Vite)

### Backend Setup
```bash
# Navigate to backend directory
cd fashionrow-backend

# Configure MySQL database
# Edit src/main/resources/application.properties
# Update database credentials

# Run the application
mvn spring-boot:run
```

The backend will run at `http://localhost:8080`

### Database Setup
```sql
-- Create database
CREATE DATABASE fashionrow_db;

-- Use database
USE fashionrow_db;

-- Tables will be auto-created by Hibernate
```

## 🔐 Environment Variables

### Frontend (.env)
```
REACT_APP_API_BASE_URL=http://localhost:8080/api
```

### Backend (application.properties)
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/fashionrow_db
spring.datasource.username=your_username
spring.datasource.password=your_password
jwt.secret=your_jwt_secret_key
```

## 📊 Database Schema

### Users Table
```sql
- id (PK)
- email (UNIQUE)
- password (ENCRYPTED)
- name
- role (CUSTOMER/ADMIN)
- created_at
```

### Products Table
```sql
- id (PK)
- name
- description
- price
- category (MEN/WOMEN/KIDS)
- sizes (ARRAY)
- stock
- image_url
- tag
- is_special_offer
- discount_percentage
- rating
- created_at
```

### Orders Table
```sql
- id (PK)
- user_id (FK)
- order_date
- total_amount
- status (PENDING/CONFIRMED/SHIPPED/DELIVERED)
- shipping_address
- payment_method
```

### Order Items Table
```sql
- id (PK)
- order_id (FK)
- product_id (FK)
- quantity
- size
- price
```

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register    - Register new user
POST   /api/auth/login       - Login user
```

### Products
```
GET    /api/products              - Get all products
GET    /api/products/{id}         - Get product by ID
GET    /api/products/category/{cat} - Get products by category
GET    /api/products/special-offers - Get special offers
POST   /api/admin/products        - Add new product (Admin)
PUT    /api/admin/products/{id}   - Update product (Admin)
DELETE /api/admin/products/{id}   - Delete product (Admin)
```

### Orders
```
GET    /api/orders/user/{userId}  - Get user orders
POST   /api/orders                - Create new order
GET    /api/admin/orders          - Get all orders (Admin)
PUT    /api/admin/orders/{id}     - Update order status (Admin)
```

## 🎨 Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Gold | `#d4af37` | Primary accent, buttons, highlights |
| Light Gold | `#f4e5c3` | Gradient ends, hover states |
| Dark Black | `#0a0a0a` | Background, primary dark |
| Medium Black | `#1a1a1a` | Cards, containers |
| Light Gray | `#c0c0c0` | Text, borders |
| Dark Gray | `#888` | Secondary text |

## 📱 Screenshots

### Home Page
![Home Page](screenshots/home.png)

### Shop/Collections
![Shop Page](screenshots/shop.png)

### Product Detail
![Product Detail](screenshots/product-detail.png)

### Shopping Cart
![Cart](screenshots/cart.png)

### Admin Panel
![Admin Panel](screenshots/admin.png)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Design inspiration from luxury fashion brands
- Icons from Lucide React
- Images from Unsplash
- Font families: Playfair Display & Montserrat

## 📧 Contact

For any queries or support, please reach out:
- Email: support@fashionrow.com
- Website: https://fashionrow.com

---

**⭐ If you found this project helpful, please give it a star!**

Made with ❤️ and ☕ by [Your Name]
```

---

## 📋 **Additional Files to Include:**

### **LICENSE (MIT License)**
```
MIT License

Copyright (c) 2024 FashionRow

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

### **.gitignore**
```
# Frontend
node_modules/
build/
dist/
.env
.DS_Store

# Backend
target/
*.class
*.jar
*.war
.mvn/
mvnw
mvnw.cmd

# IDE
.idea/
.vscode/
*.iml

# Logs
*.log
CONTRIBUTING.md
markdown# Contributing to FashionRow

We love your input! We want to make contributing as easy as possible.

## Development Process
1. Fork the repo
2. Create your branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## Code Style
- Follow React best practices
- Use meaningful variable names
- Comment complex logic
- Keep functions small and focused
