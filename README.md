# StyleHub - HTML/CSS/JavaScript Clothing Website

A complete, responsive clothing e-commerce website built with pure HTML, CSS, and JavaScript. This is the HTML version of the React-based StyleHub website, providing the same functionality and design without any framework dependencies.

## 🚀 Features

### ✅ Complete E-commerce Functionality
- **Landing Page**: Hero section, featured products, categories, and newsletter signup
- **Product Listing**: Advanced filtering, search, sorting, and grid/list view options
- **Product Details**: Image gallery, size/color selection, add to cart functionality
- **Shopping Cart**: Add items, track quantities, and manage cart state
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### ✅ Interactive Features
- **Navigation**: Smooth page transitions and mobile-friendly menu
- **Product Filtering**: Filter by category, price range, and search terms
- **Product Sorting**: Sort by name, price, and rating
- **Image Gallery**: Thumbnail navigation and main image display
- **Size & Color Selection**: Interactive product customization
- **Quantity Controls**: Increment/decrement product quantities
- **Wishlist**: Add/remove products from wishlist
- **Newsletter**: Email subscription functionality

### ✅ Modern UI/UX
- **Professional Design**: Clean, modern interface with smooth animations
- **Responsive Layout**: Mobile-first design that works on all devices
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Accessibility**: Keyboard navigation and semantic HTML structure
- **Performance**: Optimized images and efficient JavaScript

## 📁 File Structure

```
clothing-website-html/
├── index.html          # Main HTML file with all pages
├── styles.css          # Complete CSS styling and responsive design
├── script.js           # JavaScript functionality and interactions
└── README.md           # This documentation file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and modern HTML features
- **CSS3**: Flexbox, Grid, animations, and responsive design
- **JavaScript (ES6+)**: Modern JavaScript with DOM manipulation
- **Font Awesome**: Icons for UI elements
- **Unsplash Images**: High-quality product and hero images

## 🚀 Getting Started

### Option 1: Direct File Opening
1. Download all files to a local directory
2. Open `index.html` in any modern web browser
3. The website will work immediately without any server setup

### Option 2: Local Server (Recommended)
1. Download all files to a local directory
2. Start a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. Open `http://localhost:8000` in your browser

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

The website automatically adapts to different screen sizes with:
- Collapsible navigation menu for mobile
- Responsive product grids
- Touch-friendly interactions
- Optimized layouts for each device type

## 🎨 Customization

### Colors
The website uses a modern color scheme that can be easily customized in `styles.css`:
- **Primary**: Black (#000000)
- **Secondary**: Gray (#666666)
- **Accent**: Yellow (#fbbf24)
- **Background**: White (#ffffff)

### Products
Product data is stored in the `products` array in `script.js`. You can:
- Add new products
- Modify existing product information
- Update product images
- Change categories and pricing

### Styling
All styles are contained in `styles.css` with clear organization:
- Reset and base styles
- Component-specific styles
- Responsive media queries
- Utility classes

## 🔧 Key Functions

### Navigation
- `showPage(pageId)`: Switch between different pages
- `updateNavigation()`: Update active navigation states
- `toggleMobileMenu()`: Handle mobile menu interactions

### Product Management
- `loadFeaturedProducts()`: Display featured products on homepage
- `filterProducts()`: Apply category, price, and search filters
- `displayProducts()`: Render products in grid or list view
- `showProductDetail(productId)`: Display individual product details

### Shopping Cart
- `addToCart()`: Add products to shopping cart
- `updateCartCount()`: Update cart item counter
- `toggleWishlist()`: Manage wishlist functionality

### User Interactions
- `selectColor(colorName)`: Handle color selection
- `selectSize(size)`: Handle size selection
- `changeQuantity(delta)`: Modify product quantities

## 🌟 Features Showcase

### Homepage
- **Hero Section**: Eye-catching banner with call-to-action
- **Features Grid**: Highlighting key benefits (shipping, security, support)
- **Category Cards**: Visual navigation to product categories
- **Featured Products**: Showcase of popular items
- **Newsletter**: Email subscription form

### Product Listing
- **Search Bar**: Real-time product search
- **Category Filters**: Filter by Men, Women, Accessories
- **Price Range**: Adjustable price filtering
- **Sort Options**: Multiple sorting criteria
- **View Toggle**: Grid and list view modes
- **Product Cards**: Rich product information display

### Product Detail
- **Image Gallery**: Multiple product images with thumbnails
- **Product Info**: Detailed descriptions and specifications
- **Interactive Selection**: Color and size options
- **Quantity Controls**: Easy quantity adjustment
- **Add to Cart**: Functional shopping cart integration
- **Related Products**: Suggestions for additional items

## 📊 Performance

- **Fast Loading**: Optimized images and minimal dependencies
- **Smooth Animations**: CSS transitions and transforms
- **Efficient JavaScript**: Event delegation and optimized DOM manipulation
- **Mobile Optimized**: Touch-friendly interactions and responsive design

## 🔒 Browser Compatibility

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Browsers**: iOS Safari 12+, Chrome Mobile 60+

## 🚀 Deployment

### Static Hosting
The website can be deployed to any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect to Git repository
- **GitHub Pages**: Upload to GitHub repository
- **AWS S3**: Upload as static website
- **Any Web Server**: Upload files to public directory

### CDN Integration
For better performance, consider:
- Using a CDN for images
- Minifying CSS and JavaScript
- Enabling gzip compression
- Adding cache headers

## 🔧 Development

### Adding New Products
1. Open `script.js`
2. Add new product object to the `products` array
3. Include all required fields: id, name, price, images, etc.
4. Save and refresh the browser

### Modifying Styles
1. Open `styles.css`
2. Locate the relevant section
3. Modify colors, spacing, or layout
4. Save and refresh to see changes

### Adding Features
1. Add HTML structure in `index.html`
2. Style the new elements in `styles.css`
3. Add JavaScript functionality in `script.js`
4. Test across different devices

## 📞 Support

This is a complete, standalone website that requires no external dependencies or build processes. All functionality is implemented using standard web technologies that work in any modern browser.

For customization or additional features, modify the HTML, CSS, and JavaScript files according to your needs. The code is well-commented and organized for easy maintenance and extension.

## 📄 License

This project is provided as-is for educational and commercial use. Feel free to modify and adapt it for your specific needs.

---

**StyleHub** - Premium Clothing Store
## 🌐 Live Demo
- **Netlify:** [View Website](https://charming-longma-2be103.netlify.app/)

