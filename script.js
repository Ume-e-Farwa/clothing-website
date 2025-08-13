// Mock product data
const products = [
    {
        id: 1,
        name: "Premium Cotton T-Shirt",
        price: 29.99,
        originalPrice: 39.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop",
            "https://unsplash.com/photos/black-crew-neck-t-shirt-Wr0TpKqf26s",
            "https://images.unsplash.com/photo-1622445275576-721325763afe?w=600&h=800&fit=crop"
        ],
        rating: 4.8,
        reviewCount: 124,
        category: "men",
        description: "Experience ultimate comfort with our premium cotton t-shirt. Made from 100% organic cotton, this shirt offers exceptional softness and breathability. Perfect for casual wear or layering, it features a classic fit that flatters all body types.",
        features: [
            "100% Organic Cotton",
            "Pre-shrunk fabric",
            "Reinforced seams",
            "Machine washable",
            "Eco-friendly dyes"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: [
            { name: "White", value: "#FFFFFF" },
            { name: "Black", value: "#000000" },
            { name: "Gray", value: "#808080" },
            { name: "Navy", value: "#000080" }
        ],
        inStock: true,
        stockCount: 15
    },
    {
        id: 2,
        name: "Elegant Summer Dress",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop",
            // "https://images.unsplash.com/photo-1566479179817-c0c4b4b8e8c8?w=600&h=800&fit=crop",
        ],
        rating: 4.9,
        reviewCount: 89,
        category: "women",
        description: "Step into elegance with our stunning summer dress. Crafted from lightweight, breathable fabric, this dress is perfect for warm weather occasions. The flattering silhouette and beautiful print make it a versatile piece for both casual and semi-formal events.",
        features: [
            "Lightweight fabric",
            "Breathable material",
            "Flattering fit",
            "Easy care",
            "Versatile styling"
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: [
            { name: "Blue", value: "#0066CC" },
            { name: "Red", value: "#CC0000" },
            { name: "Green", value: "#00CC66" },
            { name: "Pink", value: "#FF69B4" }
        ],
        inStock: true,
        stockCount: 8
    },
    {
        id: 3,
        name: "Classic Denim Jacket",
        price: 89.99,
        originalPrice: 119.99,
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&h=800&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=600&h=800&fit=crop"
        ],
        rating: 4.7,
        reviewCount: 156,
        category: "men",
        description: "A timeless classic that never goes out of style. This premium denim jacket is crafted from high-quality denim with attention to detail. Perfect for layering and adding a casual edge to any outfit.",
        features: [
            "Premium denim fabric",
            "Classic fit",
            "Durable construction",
            "Versatile styling",
            "Timeless design"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: [
            { name: "Blue", value: "#4169E1" },
            { name: "Black", value: "#000000" }
        ],
        inStock: true,
        stockCount: 12
    },
    {
        id: 4,
        name: "Designer Handbag",
        price: 149.99,
        originalPrice: 199.99,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop"
        ],
        rating: 4.6,
        reviewCount: 73,
        category: "accessories",
        description: "Elevate your style with this sophisticated designer handbag. Crafted from premium materials with meticulous attention to detail, this bag combines functionality with fashion.",
        features: [
            "Premium leather",
            "Multiple compartments",
            "Adjustable strap",
            "Designer hardware",
            "Dust bag included"
        ],
        sizes: ["One Size"],
        colors: [
            { name: "Brown", value: "#8B4513" },
            { name: "Black", value: "#000000" },
            { name: "Tan", value: "#D2B48C" }
        ],
        inStock: true,
        stockCount: 5
    },
    {
        id: 5,
        name: "Casual Sneakers",
        price: 79.99,
        originalPrice: 99.99,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&h=800&fit=crop"
        ],
        rating: 4.5,
        reviewCount: 201,
        category: "accessories",
        description: "Step out in comfort and style with these versatile casual sneakers. Perfect for everyday wear, these shoes combine modern design with superior comfort.",
        features: [
            "Comfortable cushioning",
            "Breathable material",
            "Durable sole",
            "Versatile design",
            "Easy to clean"
        ],
        sizes: ["7", "8", "9", "10", "11"],
        colors: [
            { name: "White", value: "#FFFFFF" },
            { name: "Black", value: "#000000" },
            { name: "Gray", value: "#808080" }
        ],
        inStock: true,
        stockCount: 20
    },
    {
        id: 6,
        name: "Floral Blouse",
        price: 45.99,
        originalPrice: 59.99,
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&h=800&fit=crop"
        ],
        rating: 4.4,
        reviewCount: 92,
        category: "women",
        description: "Add a touch of femininity to your wardrobe with this beautiful floral blouse. The delicate print and flowing fabric make it perfect for both work and casual occasions.",
        features: [
            "Floral print",
            "Flowing fabric",
            "Comfortable fit",
            "Versatile styling",
            "Easy care"
        ],
        sizes: ["XS", "S", "M", "L", "XL"],
        colors: [
            { name: "Pink", value: "#FF69B4" },
            { name: "White", value: "#FFFFFF" },
            { name: "Yellow", value: "#FFD700" }
        ],
        inStock: true,
        stockCount: 18
    },
    {
        id: 7,
        name: "Leather Wallet",
        price: 39.99,
        originalPrice: 49.99,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=800&fit=crop"
        ],
        rating: 4.7,
        reviewCount: 134,
        category: "accessories",
        description: "A classic leather wallet that combines style and functionality. Crafted from genuine leather with multiple card slots and compartments for organized storage.",
        features: [
            "Genuine leather",
            "Multiple card slots",
            "Bill compartment",
            "Compact design",
            "RFID protection"
        ],
        sizes: ["One Size"],
        colors: [
            { name: "Brown", value: "#8B4513" },
            { name: "Black", value: "#000000" }
        ],
        inStock: true,
        stockCount: 25
    },
    {
        id: 8,
        name: "Formal Shirt",
        price: 59.99,
        originalPrice: 79.99,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&h=800&fit=crop"
        ],
        rating: 4.6,
        reviewCount: 87,
        category: "men",
        description: "Look sharp and professional with this classic formal shirt. Made from high-quality cotton with a tailored fit that's perfect for business or formal occasions.",
        features: [
            "Premium cotton",
            "Tailored fit",
            "Wrinkle resistant",
            "Professional look",
            "Easy care"
        ],
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: [
            { name: "White", value: "#FFFFFF" },
            { name: "Blue", value: "#4169E1" },
            { name: "Light Blue", value: "#87CEEB" }
        ],
        inStock: true,
        stockCount: 14
    }
];

// Global state
let currentPage = 'home';
let currentCategory = 'all';
let currentProduct = null;
let filteredProducts = [...products];
let selectedSize = '';
let selectedColor = '';
let quantity = 1;
let cartItems = [];
let isWishlisted = false;

// DOM elements
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileNav = document.querySelector('.nav-mobile');
const searchInput = document.getElementById('search-input');
const sortSelect = document.getElementById('sort-select');
const categoryFilters = document.querySelectorAll('input[name="category"]');
const priceMinInput = document.getElementById('price-min');
const priceMaxInput = document.getElementById('price-max');
const priceRange = document.getElementById('price-range');
const viewBtns = document.querySelectorAll('.view-btn');
const filterToggle = document.querySelector('.filter-toggle');
const filtersSidebar = document.querySelector('.filters-sidebar');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadFeaturedProducts();
    loadAllProducts();
});

function initializeApp() {
    // Set initial page
    showPage('home');
    
    // Update cart count
    updateCartCount();
}

function setupEventListeners() {
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                const pageId = href.substring(1);
                showPage(pageId);
            }
        });
    });
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Sort functionality
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSort);
    }
    
    // Category filters
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', handleCategoryFilter);
    });
    
    // Price filters
    if (priceMinInput) priceMinInput.addEventListener('input', handlePriceFilter);
    if (priceMaxInput) priceMaxInput.addEventListener('input', handlePriceFilter);
    if (priceRange) priceRange.addEventListener('input', handlePriceRangeFilter);
    
    // View toggle
    viewBtns.forEach(btn => {
        btn.addEventListener('click', handleViewToggle);
    });
    
    // Filter toggle for mobile
    if (filterToggle) {
        filterToggle.addEventListener('click', toggleFilters);
    }
    
    // Product detail interactions
    setupProductDetailListeners();
}

function toggleMobileMenu() {
    mobileNav.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileNav.classList.contains('active')) {
        icon.className = 'fas fa-times';
    } else {
        icon.className = 'fas fa-bars';
    }
}

function showPage(pageId, category = null) {
    // Hide all pages
    pages.forEach(page => page.classList.remove('active'));
    
    // Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = pageId;
        
        // Update navigation
        updateNavigation(pageId);
        
        // Handle category filtering for products page
        if (pageId === 'products' && category) {
            currentCategory = category;
            const categoryFilter = document.querySelector(`input[name="category"][value="${category}"]`);
            if (categoryFilter) {
                categoryFilter.checked = true;
            }
            filterProducts();
        }
        
        // Close mobile menu
        mobileNav.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'fas fa-bars';
    }
}

function updateNavigation(activePageId) {
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${activePageId}`) {
            link.classList.add('active');
        }
    });
}

function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featured-products-grid');
    if (!featuredGrid) return;
    
    const featuredProducts = products.slice(0, 4);
    featuredGrid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

function loadAllProducts() {
    filterProducts();
}

function createProductCard(product) {
    const discount = product.originalPrice - product.price;
    const stars = createStarsHTML(product.rating);
    
    return `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-details">
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">${stars}</div>
                    <span class="rating-text">${product.rating}</span>
                </div>
                <div class="product-price-container">
                    <div>
                        <span class="product-price">$${product.price}</span>
                        <span class="product-original-price">$${product.originalPrice}</span>
                    </div>
                </div>
                <div class="product-meta">
                    ${product.colors.length} colors • ${product.sizes.length} sizes
                </div>
            </div>
        </div>
    `;
}

function createStarsHTML(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            starsHTML += '<i class="fas fa-star star"></i>';
        } else {
            starsHTML += '<i class="fas fa-star star empty"></i>';
        }
    }
    return starsHTML;
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    applyFiltersAndSort();
}

function handleSort() {
    const sortValue = sortSelect.value;
    
    filteredProducts.sort((a, b) => {
        switch (sortValue) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'name':
            default:
                return a.name.localeCompare(b.name);
        }
    });
    
    displayProducts();
}

function handleCategoryFilter() {
    const selectedCategory = document.querySelector('input[name="category"]:checked').value;
    currentCategory = selectedCategory;
    filterProducts();
}

function handlePriceFilter() {
    const minPrice = parseInt(priceMinInput.value) || 0;
    const maxPrice = parseInt(priceMaxInput.value) || 500;
    
    // Update range slider
    priceRange.value = maxPrice;
    
    filterProducts();
}

function handlePriceRangeFilter() {
    const maxPrice = parseInt(priceRange.value);
    priceMaxInput.value = maxPrice;
    filterProducts();
}

function filterProducts() {
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    const minPrice = parseInt(priceMinInput?.value) || 0;
    const maxPrice = parseInt(priceMaxInput?.value) || 500;
    
    filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
    
    applyFiltersAndSort();
}

function applyFiltersAndSort() {
    if (sortSelect) {
        handleSort();
    } else {
        displayProducts();
    }
}

function displayProducts() {
    const productsGrid = document.getElementById('products-grid');
    const productsCount = document.getElementById('products-count');
    
    if (!productsGrid) return;
    
    if (productsCount) {
        productsCount.textContent = filteredProducts.length;
    }
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms.</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
}

function handleViewToggle(e) {
    const viewType = e.target.closest('.view-btn').dataset.view;
    const productsGrid = document.getElementById('products-grid');
    
    // Update button states
    viewBtns.forEach(btn => btn.classList.remove('active'));
    e.target.closest('.view-btn').classList.add('active');
    
    // Update grid class
    if (productsGrid) {
        if (viewType === 'list') {
            productsGrid.classList.add('list-view');
        } else {
            productsGrid.classList.remove('list-view');
        }
    }
}

function toggleFilters() {
    filtersSidebar.classList.toggle('active');
}

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    currentProduct = product;
    selectedSize = product.sizes[0];
    selectedColor = product.colors[0].name;
    quantity = 1;
    
    // Update product detail page
    updateProductDetailPage(product);
    
    // Show product detail page
    showPage('product-detail');
}

function updateProductDetailPage(product) {
    // Update breadcrumb
    document.getElementById('product-breadcrumb').textContent = product.name;
    
    // Update main image
    document.getElementById('main-product-image').src = product.images[0];
    document.getElementById('main-product-image').alt = product.name;
    
    // Update thumbnail images
    const thumbnailContainer = document.getElementById('thumbnail-images');
    thumbnailContainer.innerHTML = product.images.map((image, index) => `
        <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="selectImage(${index})">
            <img src="${image}" alt="${product.name} ${index + 1}">
        </div>
    `).join('');
    
    // Update product info
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-stars').innerHTML = createStarsHTML(product.rating);
    document.getElementById('product-rating-text').textContent = `${product.rating} (${product.reviewCount} reviews)`;
    document.getElementById('product-price').textContent = `$${product.price}`;
    document.getElementById('product-original-price').textContent = `$${product.originalPrice}`;
    
    const discount = product.originalPrice - product.price;
    document.getElementById('product-discount').textContent = `Save $${discount.toFixed(2)}`;
    
    document.getElementById('product-description').textContent = product.description;
    
    // Update features
    const featuresList = document.getElementById('product-features-list');
    featuresList.innerHTML = product.features.map(feature => `<li>${feature}</li>`).join('');
    
    // Update color options
    const colorOptions = document.getElementById('color-options');
    colorOptions.innerHTML = product.colors.map(color => `
        <div class="color-option ${color.name === selectedColor ? 'active' : ''}" 
             style="background-color: ${color.value}" 
             onclick="selectColor('${color.name}')"
             title="${color.name}">
        </div>
    `).join('');
    
    // Update size options
    const sizeOptions = document.getElementById('size-options');
    sizeOptions.innerHTML = product.sizes.map(size => `
        <div class="size-option ${size === selectedSize ? 'active' : ''}" 
             onclick="selectSize('${size}')">
            ${size}
        </div>
    `).join('');
    
    // Update selected color and size display
    document.getElementById('selected-color').textContent = selectedColor;
    document.getElementById('selected-size').textContent = selectedSize;
    
    // Update stock status
    const stockStatus = document.getElementById('stock-status');
    if (product.inStock) {
        stockStatus.innerHTML = `
            <div class="stock-indicator"></div>
            <span>In Stock (${product.stockCount} left)</span>
        `;
        stockStatus.classList.remove('out-of-stock');
    } else {
        stockStatus.innerHTML = `
            <div class="stock-indicator"></div>
            <span>Out of Stock</span>
        `;
        stockStatus.classList.add('out-of-stock');
    }
    
    // Update add to cart button
    updateAddToCartButton();
    
    // Load related products
    loadRelatedProducts(product);
}

function selectImage(index) {
    if (!currentProduct) return;
    
    // Update main image
    document.getElementById('main-product-image').src = currentProduct.images[index];
    
    // Update thumbnail active state
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function selectColor(colorName) {
    selectedColor = colorName;
    document.getElementById('selected-color').textContent = colorName;
    
    // Update color option active state
    document.querySelectorAll('.color-option').forEach(option => {
        option.classList.toggle('active', option.title === colorName);
    });
    
    updateAddToCartButton();
}

function selectSize(size) {
    selectedSize = size;
    document.getElementById('selected-size').textContent = size;
    
    // Update size option active state
    document.querySelectorAll('.size-option').forEach(option => {
        option.classList.toggle('active', option.textContent.trim() === size);
    });
    
    updateAddToCartButton();
}

function changeQuantity(delta) {
    quantity = Math.max(1, quantity + delta);
    document.getElementById('quantity').textContent = quantity;
    updateAddToCartButton();
}

function updateAddToCartButton() {
    if (!currentProduct) return;
    
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const totalPrice = (currentProduct.price * quantity).toFixed(2);
    addToCartBtn.innerHTML = `
        <i class="fas fa-shopping-bag"></i>
        Add to Cart - $${totalPrice}
    `;
}

function setupProductDetailListeners() {
    // Add to cart button
    document.addEventListener('click', (e) => {
        if (e.target.closest('#add-to-cart-btn')) {
            addToCart();
        }
        
        if (e.target.closest('#wishlist-btn')) {
            toggleWishlist();
        }
    });
}

function addToCart() {
    if (!currentProduct || !selectedSize || !selectedColor) {
        alert('Please select size and color');
        return;
    }
    
    const cartItem = {
        id: currentProduct.id,
        name: currentProduct.name,
        price: currentProduct.price,
        image: currentProduct.image,
        size: selectedSize,
        color: selectedColor,
        quantity: quantity
    };
    
    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(item => 
        item.id === cartItem.id && 
        item.size === cartItem.size && 
        item.color === cartItem.color
    );
    
    if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += quantity;
    } else {
        cartItems.push(cartItem);
    }
    
    updateCartCount();
    
    // Show success message
    alert(`Added ${quantity} ${currentProduct.name} (${selectedSize}, ${selectedColor}) to cart!`);
}

function toggleWishlist() {
    isWishlisted = !isWishlisted;
    const wishlistBtn = document.getElementById('wishlist-btn');
    const icon = wishlistBtn.querySelector('i');
    
    if (isWishlisted) {
        icon.className = 'fas fa-heart';
        icon.style.color = '#ef4444';
        wishlistBtn.innerHTML = '<i class="fas fa-heart" style="color: #ef4444;"></i> Wishlisted';
    } else {
        icon.className = 'fas fa-heart';
        icon.style.color = '';
        wishlistBtn.innerHTML = '<i class="fas fa-heart"></i> Add to Wishlist';
    }
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function loadRelatedProducts(currentProduct) {
    const relatedGrid = document.getElementById('related-products-grid');
    if (!relatedGrid) return;
    
    // Get products from same category, excluding current product
    const relatedProducts = products
        .filter(p => p.category === currentProduct.category && p.id !== currentProduct.id)
        .slice(0, 3);
    
    relatedGrid.innerHTML = relatedProducts.map(product => createProductCard(product)).join('');
}

// Newsletter subscription
document.addEventListener('click', (e) => {
    if (e.target.closest('.newsletter-form .btn')) {
        const emailInput = document.querySelector('.newsletter-input');
        const email = emailInput.value.trim();
        
        if (email && isValidEmail(email)) {
            alert('Thank you for subscribing to our newsletter!');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (link) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', (e) => {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showPage(hash);
    } else {
        showPage('home');
    }
});

// Update URL when navigating
function updateURL(pageId) {
    history.pushState(null, null, `#${pageId}`);
}

// Add fade-in animation to product cards
function animateProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
}

// Call animation after products are loaded
const originalDisplayProducts = displayProducts;
displayProducts = function() {
    originalDisplayProducts();
    setTimeout(animateProductCards, 100);
};

// Initialize page based on URL hash
window.addEventListener('load', () => {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showPage(hash);
    }
});

// Handle window resize for responsive behavior
window.addEventListener('resize', () => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        mobileNav.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'fas fa-bars';
        
        // Close mobile filters
        filtersSidebar.classList.remove('active');
    }
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu and filters
    if (e.key === 'Escape') {
        mobileNav.classList.remove('active');
        filtersSidebar.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'fas fa-bars';
    }
});

// Touch support for mobile devices
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    // Swipe right to open mobile menu
    if (swipeDistance > swipeThreshold && touchStartX < 50) {
        if (window.innerWidth <= 768) {
            mobileNav.classList.add('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'fas fa-times';
        }
    }
    
    // Swipe left to close mobile menu
    if (swipeDistance < -swipeThreshold && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = 'fas fa-bars';
    }
}

