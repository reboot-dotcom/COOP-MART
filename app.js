const DEFAULT_PRODUCTS = [
    // ============ SHAMPOO BRANDS (Toiletries) ============
    { 
        id: 'p1', 
        name: 'Shampoo', 
        price: 10.00, 
        rating: '4.8', 
        favorite: false, 
        fallbackIcon: 'fa-pump-soap', 
        image: 'Img/shampoo.jpg', 
        quantity: 0, 
        category: 'Toiletries',
        brand: 'Pantene Pro-V',
        description: 'Pantene Pro-V Shampoo is a gentle, soap-free cleanser that removes dirt, makeup and impurities without irritating skin. Suitable for sensitive skin.',
        features: [
            '✅ Suitable for sensitive skin',
            '✅ Soap-free, non-irritating',
            '✅ Clinically tested',
            '✅ Hydrates as it cleanses'
        ]
    },
    { 
        id: 'p1b', 
        name: 'Shampoo', 
        price: 12.50, 
        rating: '4.7', 
        favorite: false, 
        fallbackIcon: 'fa-pump-soap', 
        image: 'Img/dove.avif', 
        quantity: 0, 
        category: 'Toiletries',
        brand: 'Dove',
        description: 'Dove Intensive Repair Shampoo helps repair damaged hair with its unique formula. Restores shine and softness with every wash.',
        features: [
            '✅ Repairs damaged hair',
            '✅ Restores natural shine',
            '✅ Gentle on scalp',
            '✅ Paraben-free formula'
        ]
    },
    { 
        id: 'p1c', 
        name: 'Shampoo', 
        price: 8.90, 
        rating: '4.6', 
        favorite: false, 
        fallbackIcon: 'fa-pump-soap', 
        image: 'Img/herbal.webp', 
        quantity: 0, 
        category: 'Toiletries',
        brand: 'Herbal Essences',
        description: 'Herbal Essences Bio:Renew Shampoo with natural ingredients provides a refreshing cleansing experience. Infused with real botanicals.',
        features: [
            '✅ Natural ingredients',
            '✅ Paraben & colorant free',
            '✅ Refreshing scent',
            '✅ Safe for daily use'
        ]
    },
    { 
        id: 'p1d', 
        name: 'Shampoo', 
        price: 15.00, 
        rating: '4.9', 
        favorite: false, 
        fallbackIcon: 'fa-pump-soap', 
        image: 'Img/loreal.webp', 
        quantity: 0, 
        category: 'Toiletries',
        brand: 'L\'Oreal Paris',
        description: 'L\'Oreal Paris Advanced Haircare Shampoo with professional formula for stronger, healthier-looking hair.',
        features: [
            '✅ Professional formula',
            '✅ Strengthens hair',
            '✅ Adds shine',
            '✅ Vitamin-enriched'
        ]
    },
    { 
        id: 'p1e', 
        name: 'Shampoo', 
        price: 11.50, 
        rating: '4.5', 
        favorite: false, 
        fallbackIcon: 'fa-pump-soap', 
        image: 'Img/hns1.webp', 
        quantity: 0, 
        category: 'Toiletries',
        brand: 'Head & Shoulders',
        description: 'Head & Shoulders Shampoo provides effective dandruff protection while leaving your hair feeling clean and fresh.',
        features: [
            '✅ Anti-dandruff formula',
            '✅ Gentle on scalp',
            '✅ Fresh scent',
            '✅ Clinically proven'
        ]
    },
    { 
        id: 'p1f', 
        name: 'Shampoo', 
        price: 9.90, 
        rating: '4.4', 
        favorite: false, 
        fallbackIcon: 'fa-pump-soap', 
        image: 'Img/tresemme.webp', 
        quantity: 0, 
        category: 'Toiletries',
        brand: 'TRESemmé',
        description: 'TRESemmé Shampoo with keratin and argan oil for smooth, manageable hair with a salon-quality finish.',
        features: [
            '✅ Keratin enriched',
            '✅ Argan oil formula',
            '✅ Salon quality',
            '✅ Frizz control'
        ]
    },

    // ============ FOOD PRODUCTS ============
    { 
        id: 'p2', 
        name: 'Instant Noodles', 
        price: 5.00, 
        rating: '4.8', 
        favorite: true, 
        fallbackIcon: 'fa-bowl-food', 
        image: 'Img/maggie.jpg', 
        quantity: 0, 
        category: 'Food',
        brand: 'Maggi Kari',
        description: 'Maggi Kari is a delicious instant noodle with authentic Malaysian curry flavor. Quick and easy to prepare for a satisfying meal.',
        features: [
            '✅ Authentic curry flavor',
            '✅ Ready in 3 minutes',
            '✅ No preservatives',
            '✅ Halal certified'
        ]
    },
    { 
        id: 'p2b', 
        name: 'Instant Noodles', 
        price: 4.50, 
        rating: '4.6', 
        favorite: false, 
        fallbackIcon: 'fa-bowl-food', 
        image: 'Img/indomie.jpg', 
        quantity: 0, 
        category: 'Food',
        brand: 'Indomie Mi Goreng',
        description: 'Indomie Mi Goreng is a popular instant noodle with a unique blend of spices and seasonings. A favorite Malaysian comfort food.',
        features: [
            '✅ Authentic Indonesian taste',
            '✅ Ready in 5 minutes',
            '✅ Halal certified',
            '✅ No MSG added'
        ]
    },
    { 
        id: 'p2c', 
        name: 'Instant Noodles', 
        price: 5.50, 
        rating: '4.7', 
        favorite: false, 
        fallbackIcon: 'fa-bowl-food', 
        image: 'Img/buldak.webp', 
        quantity: 0, 
        category: 'Food',
        brand: 'Samyang',
        description: 'Samyang is a spicy cheesy instant noodle in a convenient pack. Just add hot water and enjoy a delicious meal anytime, anywhere.',
        features: [
            '✅ Convenient cup format',
            '✅ Ready in 3 minutes',
            '✅ Great taste',
            '✅ Perfect for travel'
        ]
    },
    { 
        id: 'p3', 
        name: 'Potato Chips', 
        price: 6.50, 
        rating: '4.7', 
        favorite: false, 
        fallbackIcon: 'fa-box-tissue', 
        image: 'Img/potato.jpg', 
        quantity: 0, 
        category: 'Food',
        brand: 'Lay\'s Classic',
        description: 'Lay\'s Classic Potato Chips are crispy, crunchy, and made from premium potatoes. Perfect for snacking anytime, anywhere.',
        features: [
            '✅ Made from premium potatoes',
            '✅ No artificial flavors',
            '✅ Crispy texture',
            '✅ Perfect for sharing'
        ]
    },
    { 
        id: 'p3b', 
        name: 'Potato Chips', 
        price: 5.90, 
        rating: '4.5', 
        favorite: false, 
        fallbackIcon: 'fa-box-tissue', 
        image: 'Img/pringles.jpg', 
        quantity: 0, 
        category: 'Food',
        brand: 'Pringles Original',
        description: 'Pringles Original Potato Chips come in a unique stackable shape with a satisfying crunch. A modern snack classic loved by all.',
        features: [
            '✅ Stackable design',
            '✅ Consistent crunch',
            '✅ Less greasy',
            '✅ Resealable can'
        ]
    },

    // ============ DRINKS ============
    { 
        id: 'p4', 
        name: 'Mineral Water', 
        price: 2.00, 
        rating: '4.9', 
        favorite: false, 
        fallbackIcon: 'fa-bottle-water', 
        image: 'Img/mineral.jpg', 
        quantity: 0, 
        category: 'Drinks',
        brand: 'Spritzer',
        description: 'Spritzer Natural Mineral Water is sourced from pristine springs deep within the earth. Refreshing and packed with natural minerals for your hydration needs.',
        features: [
            '✅ Natural spring source',
            '✅ Rich in minerals',
            '✅ Refreshing taste',
            '✅ BPA-free bottle'
        ]
    },
    { 
        id: 'p4b', 
        name: 'Mineral Water', 
        price: 1.80, 
        rating: '4.7', 
        favorite: false, 
        fallbackIcon: 'fa-bottle-water', 
        image: 'Img/dasani.jpg', 
        quantity: 0, 
        category: 'Drinks',
        brand: 'Dasani',
        description: 'Dasani Purified Water is enhanced with minerals for a pure, crisp taste. Perfect for everyday hydration on the go.',
        features: [
            '✅ Purified water',
            '✅ Added minerals',
            '✅ Crisp taste',
            '✅ Recyclable bottle'
        ]
    },
    { 
        id: 'p4c', 
        name: 'Energy Drink', 
        price: 3.50, 
        rating: '4.4', 
        favorite: false, 
        fallbackIcon: 'fa-bottle-water', 
        image: 'Img/redbull.jpg', 
        quantity: 0, 
        category: 'Drinks',
        brand: 'Red Bull',
        description: 'Red Bull Energy Drink gives you wings with its unique formula of caffeine, taurine, and B-vitamins. Perfect for a quick energy boost.',
        features: [
            '✅ Instant energy boost',
            '✅ Contains taurine',
            '✅ B-vitamin enriched',
            '✅ Great taste'
        ]
    },

    // ============ STATIONERY ============
    { 
        id: 'p5', 
        name: 'Notebook', 
        price: 4.50, 
        rating: '4.5', 
        favorite: false, 
        fallbackIcon: 'fa-book-open', 
        image: 'Img/notebook.jpg', 
        quantity: 0, 
        category: 'Stationery',
        brand: 'PaperOne A5',
        description: 'PaperOne A5 Notebook features premium quality paper with a smooth writing surface. Perfect for students and professionals.',
        features: [
            '✅ Premium quality paper',
            '✅ 80gsm thickness',
            '✅ Smooth writing surface',
            '✅ Acid-free paper'
        ]
    },
    { 
        id: 'p5b', 
        name: 'Notebook', 
        price: 5.50, 
        rating: '4.7', 
        favorite: false, 
        fallbackIcon: 'fa-book-open', 
        image: 'Img/note.jpg', 
        quantity: 0, 
        category: 'Stationery',
        brand: 'Sticky Note',
        description: 'Sticky Note Classic Notebook features a durable cover, acid-free paper, and an elastic closure. The iconic choice for creatives.',
        features: [
            '✅ Durable hard cover',
            '✅ Acid-free paper',
            '✅ Elastic closure',
            '✅ Ribbon bookmark'
        ]
    },
    { 
        id: 'p6', 
        name: 'Ballpoint Pen', 
        price: 1.50, 
        rating: '4.6', 
        favorite: false, 
        fallbackIcon: 'fa-pen', 
        image: 'Img/pilot.webp', 
        quantity: 0, 
        category: 'Stationery',
        brand: 'Pilot',
        description: 'Pilot Ballpoint Pen delivers smooth, consistent writing with a comfortable grip. Ideal for everyday use in school or office.',
        features: [
            '✅ Smooth writing experience',
            '✅ Comfortable grip',
            '✅ Long-lasting ink',
            '✅ Retractable design'
        ]
    },
    { 
        id: 'p6b', 
        name: 'Ballpoint Pen', 
        price: 2.00, 
        rating: '4.8', 
        favorite: false, 
        fallbackIcon: 'fa-pen', 
        image: 'Img/parker.jpg', 
        quantity: 0, 
        category: 'Stationery',
        brand: 'Parker',
        description: 'Parker Jotter Ballpoint Pen combines classic design with modern functionality. A premium writing instrument for professionals.',
        features: [
            '✅ Premium design',
            '✅ Stainless steel tip',
            '✅ Smooth ink flow',
            '✅ Lifetime warranty'
        ]
    }
];

const DELIVERY_FEE = 4.90;

// State management variables
let products = [];
let selectedMethodId = 'tng';
let currentUser = null;
let currentSearchQuery = '';
let currentCategory = null;
let currentProductId = null;

// =========================================================================
// 2. LOCAL STORAGE SYSTEMS (PERSISTENCE)
// =========================================================================

function loadSavedState() {
    try {
        const savedProducts = localStorage.getItem('coop_cart_products');
        if (savedProducts && savedProducts !== "undefined") {
            products = JSON.parse(savedProducts);
            
            products = products.map(savedProduct => {
                const defaultProduct = DEFAULT_PRODUCTS.find(p => p.id === savedProduct.id);
                if (defaultProduct) {
                    return { ...defaultProduct, ...savedProduct };
                }
                return savedProduct;
            });
        } else {
            products = DEFAULT_PRODUCTS.map(p => ({ ...p }));
        }
    } catch (e) {
        console.error("Local storage read error. Using defaults.", e);
        products = DEFAULT_PRODUCTS.map(p => ({ ...p }));
    }

    selectedMethodId = localStorage.getItem('coop_payment_method') || 'tng';
    currentUser = localStorage.getItem('coop_current_user') || null;
}

function saveAppState() {
    localStorage.setItem('coop_cart_products', JSON.stringify(products));
    localStorage.setItem('coop_payment_method', selectedMethodId);
    if (currentUser) {
        localStorage.setItem('coop_current_user', currentUser);
    } else {
        localStorage.removeItem('coop_current_user');
    }
}

// =========================================================================
// 3. UI SCREEN ROUTER & APP ORCHESTRATION
// =========================================================================

function navigateTo(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    if (screenId === 'main-screen') {
        currentSearchQuery = '';
        const searchInput = document.getElementById('store-search-bar');
        if (searchInput) searchInput.value = '';
        currentCategory = null;
        currentProductId = null;
    }
    
    renderApp();
}

function navigateToCategory(categoryName) {
    currentCategory = categoryName;
    
    const titleDisplay = document.getElementById('category-title-display');
    if (titleDisplay) {
        titleDisplay.textContent = categoryName;
    }
    
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    const targetScreen = document.getElementById('category-screen');
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    renderCategoryProducts(categoryName);
}

function navigateToProductDetail(productId) {
    currentProductId = productId;
    
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    const targetScreen = document.getElementById('product-detail-screen');
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    renderProductDetail(productId);
}

function renderApp() {
    renderProductGrid();
    renderCheckoutSummary();
    updateGlobalCartBadge();
    updateBellBadge();
}

// =========================================================================
// 4. STUDENT USER AUTHENTICATION HANDLERS
// =========================================================================

function handleAuthLogin() {
    const idField = document.getElementById('student-id').value.trim();
    const passField = document.getElementById('student-pass').value.trim();
    const role = document.getElementById('selected-role').value;
    
    if (!idField || !passField) {
        showAppToast('Please enter both your User ID and Password.', 'error');
        return;
    }
    
    if (idField.length < 4 || passField.length < 4) {
        showAppToast('Invalid credentials. Must be at least 4 characters.', 'error');
        return;
    }

    currentUser = idField;
    saveAppState();
    
    // Add welcome notification
    addPromoNotification(
        '👋 Welcome to CoopMart!',
        'Enjoy 10% off your first purchase. Use code: FIRST10 at checkout.',
        'Shop Now',
        'main-screen'
    );
    
    showAppToast(`Welcome ${role === 'admin' ? 'Admin' : ''}!`, 'success');
    
    if (role === 'admin') {
        navigateTo('admin-screen');
        setTimeout(renderSalesChart, 300);
    } else {
        navigateTo('main-screen');
    }
}

function handleAuthLogout() {
    currentUser = null;
    products = DEFAULT_PRODUCTS.map(p => ({ ...p, quantity: 0 })); 
    saveAppState();
    
    const idInput = document.getElementById('student-id');
    const passInput = document.getElementById('student-pass');
    if (idInput) idInput.value = '';
    if (passInput) passInput.value = '';
    
    // Reset role selection
    document.querySelectorAll('.role-option').forEach(el => {
        el.classList.remove('active');
    });
    document.getElementById('role-user').classList.add('active');
    document.getElementById('selected-role').value = 'user';
    
    showAppToast('Logged out successfully.', 'info');
    navigateTo('login-screen');
}

// =========================================================================
// 5. GRAPHICS INTERFACE RENDER ENGINES
// =========================================================================

function getImageMarkup(prod) {
    if (prod.image && prod.image.trim() !== "") {
        return `<img src="${prod.image}" class="product-img" alt="${prod.name}" onerror="handleImgError(this, '${prod.fallbackIcon}')">`;
    }
    return `<i class="fa-solid ${prod.fallbackIcon} fallback-icon"></i>`;
}

function handleImgError(imgElement, fallbackIcon) {
    const parent = imgElement.parentElement;
    if (parent) {
        parent.innerHTML = `<i class="fa-solid ${fallbackIcon} fallback-icon"></i>`;
    }
}

function renderProductDetail(productId) {
    const container = document.getElementById('product-detail-container');
    if (!container) return;
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        container.innerHTML = `
            <div class="empty-category-state">
                <i class="fa-solid fa-circle-exclamation"></i>
                <p>Product not found</p>
            </div>
        `;
        return;
    }

    // Get all products with the same name (different brands)
    const sameProductType = products.filter(p => p.name === product.name);
    
    let imageHtml = '';
    if (product.image && product.image.trim() !== "") {
        imageHtml = `<img src="${product.image}" alt="${product.name}" onerror="handleImgError(this, '${product.fallbackIcon}')">`;
    } else {
        imageHtml = `<i class="fa-solid ${product.fallbackIcon} fallback-icon"></i>`;
    }

    const isInCart = product.quantity > 0;

    container.innerHTML = `
        <div class="product-detail-card">
            <!-- Main Product Image -->
            <div class="detail-product-image">
                ${imageHtml}
            </div>
            
            <!-- Product Name and Brand -->
            <div class="detail-product-name">${product.name}</div>
            <div style="font-size: 14px; color: #666; margin-bottom: 4px; font-weight: 500;">${product.brand}</div>
            <div class="detail-product-price">RM ${product.price.toFixed(2)}</div>
            
            <div class="detail-product-rating">
                <i class="fa-solid fa-star star-icon"></i>
                <span>${product.rating}</span>
                <span style="color: #999;">(120 reviews)</span>
            </div>

            <!-- OTHER BRANDS CAROUSEL - MOVED BELOW RATING -->
            ${sameProductType.length > 1 ? `
                <div style="margin: 16px 0 20px 0; background: #F8F9FA; border-radius: 12px; padding: 15px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                        <h4 style="font-size: 13px; color: #333; font-weight: 700;">
                            <i class="fa-solid fa-layer-group" style="color: var(--bright-red);"></i> Other Brands Available
                        </h4>
                        <span style="font-size: 11px; color: #999; background: white; padding: 2px 10px; border-radius: 12px;">${sameProductType.length} brands</span>
                    </div>
                    <div class="brand-carousel" style="
                        display: flex; 
                        gap: 12px; 
                        overflow-x: auto; 
                        padding: 5px 0 10px 0; 
                        scroll-snap-type: x mandatory; 
                        -webkit-overflow-scrolling: touch;
                        scrollbar-width: thin;
                    ">
                        ${sameProductType.map(brand => `
                            <div class="brand-carousel-item" onclick="navigateToProductDetail('${brand.id}')" style="
                                min-width: 100px;
                                max-width: 110px;
                                background: white;
                                border-radius: 12px;
                                padding: 10px;
                                text-align: center;
                                cursor: pointer;
                                border: ${brand.id === product.id ? '2.5px solid var(--bright-red)' : '1px solid #E8E8E8'};
                                scroll-snap-align: start;
                                transition: all 0.2s ease;
                                flex-shrink: 0;
                                box-shadow: ${brand.id === product.id ? '0 2px 8px rgba(255,0,0,0.15)' : '0 1px 3px rgba(0,0,0,0.05)'};
                            " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
                                <div style="
                                    width: 70px; 
                                    height: 70px; 
                                    margin: 0 auto 6px; 
                                    display: flex; 
                                    align-items: center; 
                                    justify-content: center; 
                                    background: #FAFAFA; 
                                    border-radius: 8px; 
                                    overflow: hidden;
                                ">
                                    ${brand.image ? `<img src="${brand.image}" style="max-width: 100%; max-height: 100%; object-fit: contain;" alt="${brand.brand}">` : `<i class="fa-solid ${brand.fallbackIcon}" style="font-size: 28px; color: #BDC3C7;"></i>`}
                                </div>
                                <div style="font-size: 10px; font-weight: 600; color: #333; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-bottom: 2px;">${brand.brand}</div>
                                <div style="font-size: 12px; font-weight: 700; color: var(--bright-red);">RM ${brand.price.toFixed(2)}</div>
                                <div style="font-size: 9px; color: #999; margin-top: 2px;">
                                    <i class="fa-solid fa-star" style="color: #FFB300;"></i> ${brand.rating}
                                </div>
                                ${brand.id === product.id ? `<div style="font-size: 8px; color: var(--bright-red); font-weight: 700; margin-top: 3px; background: #FFEAEA; padding: 1px 6px; border-radius: 8px; display: inline-block;">● SELECTED</div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
            
            <div class="detail-section-title">Brand</div>
            <div class="detail-brand-name">${product.brand || 'CoopMart Brand'}</div>
            
            <div class="detail-section-title">Description</div>
            <div class="detail-description">${product.description || 'High-quality product from CoopMart.'}</div>
            
            <div class="detail-section-title">Features</div>
            <ul class="detail-features">
                ${(product.features || ['✅ High quality product', '✅ Great value for money']).map(f => `<li><i class="fa-solid fa-check-circle"></i> ${f}</li>`).join('')}
            </ul>
            
            <div style="margin-top: 10px;">
                <span class="detail-product-category"><i class="fa-solid fa-tag"></i> ${product.category}</span>
            </div>
            
            ${isInCart ? `
                <div class="detail-quantity-controls">
                    <button class="qty-btn minus" onclick="updateQty('${product.id}', -1)">-</button>
                    <span class="qty-val">${product.quantity}</span>
                    <button class="qty-btn plus" onclick="updateQty('${product.id}', 1)">+</button>
                </div>
                <button class="detail-add-to-cart" style="background: #4CAF50;" onclick="navigateTo('payment-screen')">
                    <i class="fa-solid fa-shopping-cart"></i> Go to Cart
                </button>
            ` : `
                <button class="detail-add-to-cart" onclick="addToCartFromDetail('${product.id}')">
                    <i class="fa-solid fa-cart-plus"></i> Add to Cart
                </button>
            `}
        </div>
    `;
}

function renderCategoryProducts(categoryName) {
    const container = document.getElementById('category-product-list');
    if (!container) return;
    container.innerHTML = '';

    const filteredProducts = products.filter(prod => {
        return prod.category && prod.category.toLowerCase() === categoryName.toLowerCase();
    });

    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="empty-category-state">
                <i class="fa-solid fa-box-open"></i>
                <p>No products found in this category</p>
            </div>
        `;
        return;
    }

    // Group products by name to show unique product types
    const productTypes = {};
    filteredProducts.forEach(prod => {
        if (!productTypes[prod.name]) {
            productTypes[prod.name] = [];
        }
        productTypes[prod.name].push(prod);
    });

    // Show only the first product from each type (as a representative)
    const uniqueProducts = Object.values(productTypes).map(group => group[0]);

    uniqueProducts.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';

        const heartClass = prod.favorite ? 'heart-icon-wrapper active' : 'heart-icon-wrapper';
        const heartIconHtml = prod.favorite ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';

        // Count how many brands for this product type
        const brandCount = productTypes[prod.name] ? productTypes[prod.name].length : 1;

        card.innerHTML = `
            <div class="${heartClass}" onclick="toggleFavorite('${prod.id}')">${heartIconHtml}</div>
            <div class="product-clickable" onclick="navigateToProductDetail('${prod.id}')" style="cursor: pointer;">
                <div class="product-img-wrapper">
                    ${getImageMarkup(prod)}
                </div>
                <div class="product-name">${prod.name}</div>
                <div style="font-size: 11px; color: #999; margin-bottom: 4px;">${brandCount} brands available</div>
                <div class="product-meta">
                    <span class="product-price">From RM ${Math.min(...productTypes[prod.name].map(p => p.price)).toFixed(2)}</span>
                    <span class="product-rating">
                        <i class="fa-solid fa-star star-icon"></i> ${prod.rating}
                    </span>
                </div>
            </div>
            <button class="add-cart-btn" onclick="navigateToProductDetail('${prod.id}')" style="width: 100%; border: 1px solid #FFCCBC; background: white; color: #FF7043; padding: 8px; border-radius: 10px; font-size: 12px; font-weight: 600; cursor: pointer;">
                View
            </button>
        `;
        container.appendChild(card);
    });
}

function renderProductGrid() {
    const container = document.getElementById('product-list-container');
    if (!container) return;
    container.innerHTML = '';

    // Group products by name for the main grid
    const productTypes = {};
    products.forEach(prod => {
        if (!productTypes[prod.name]) {
            productTypes[prod.name] = [];
        }
        productTypes[prod.name].push(prod);
    });

    // Show only one card per product type
    const uniqueProducts = Object.values(productTypes).map(group => group[0]);
    
    // Filter by search
    const filteredProducts = uniqueProducts.filter(prod => 
        prod.name.toLowerCase().includes(currentSearchQuery.toLowerCase())
    );

    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div class="empty-search-state">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>No products found matching "${currentSearchQuery}"</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';

        const heartClass = prod.favorite ? 'heart-icon-wrapper active' : 'heart-icon-wrapper';
        const heartIconHtml = prod.favorite ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';

        const brandCount = productTypes[prod.name] ? productTypes[prod.name].length : 1;
        const minPrice = Math.min(...productTypes[prod.name].map(p => p.price));

        card.innerHTML = `
            <div class="${heartClass}" onclick="toggleFavorite('${prod.id}')">${heartIconHtml}</div>
            <div class="product-clickable" onclick="navigateToProductDetail('${prod.id}')" style="cursor: pointer;">
                <div class="product-img-wrapper">
                    ${getImageMarkup(prod)}
                </div>
                <div class="product-name">${prod.name}</div>
                <div style="font-size: 11px; color: #999; margin-bottom: 4px;">${brandCount} brands available</div>
                <div class="product-meta">
                    <span class="product-price">From RM ${minPrice.toFixed(2)}</span>
                    <span class="product-rating">
                        <i class="fa-solid fa-star star-icon"></i> ${prod.rating}
                    </span>
                </div>
            </div>
            <button class="add-cart-btn" onclick="navigateToProductDetail('${prod.id}')" style="width: 100%; border: 1px solid #FFCCBC; background: white; color: #FF7043; padding: 8px; border-radius: 10px; font-size: 12px; font-weight: 600; cursor: pointer;">
                View
            </button>
        `;
        container.appendChild(card);
    });
}

function renderCheckoutSummary() {
    const listContainer = document.getElementById('checkout-items-list');
    if (!listContainer) return;
    listContainer.innerHTML = '';

    let calculatedSubtotal = 0;
    let runningTotalItemsQuantity = 0;

    products.forEach(prod => {
        if (prod.quantity > 0) {
            runningTotalItemsQuantity += prod.quantity;
            const itemCost = prod.price * prod.quantity;
            calculatedSubtotal += itemCost;

            const row = document.createElement('div');
            row.className = 'checkout-item-row';
            row.innerHTML = `
                <div class="checkout-img-box">
                    ${getImageMarkup(prod)}
                </div>
                <div class="checkout-details">
                    <div class="checkout-name">${prod.brand || prod.name}</div>
                    <div class="checkout-price">RM ${prod.price.toFixed(2)}</div>
                </div>
                
                <div class="checkout-qty-actions">
                    <button class="checkout-qty-btn minus" onclick="updateQty('${prod.id}', -1)">
                        ${prod.quantity === 1 ? '<i class="fa-solid fa-trash-can"></i>' : '-'}
                    </button>
                    <span class="checkout-qty-val">${prod.quantity}</span>
                    <button class="checkout-qty-btn plus" onclick="updateQty('${prod.id}', 1)">+</button>
                </div>
            `;
            listContainer.appendChild(row);
        }
    });

    if (runningTotalItemsQuantity === 0) {
        listContainer.innerHTML = `
            <div class="empty-cart-state">
                <i class="fa-solid fa-cart-shopping"></i>
                <p>Your cart is empty</p>
            </div>
        `;
    }

    const finalGrandTotalValue = calculatedSubtotal > 0 ? (calculatedSubtotal + DELIVERY_FEE) : 0;

    document.getElementById('summary-qty-count').innerText = runningTotalItemsQuantity;
    document.getElementById('summary-subtotal').innerText = `RM ${calculatedSubtotal.toFixed(2)}`;
    document.getElementById('summary-delivery').innerText = `RM ${calculatedSubtotal > 0 ? DELIVERY_FEE.toFixed(2) : '0.00'}`;
    document.getElementById('summary-total').innerText = `RM ${finalGrandTotalValue.toFixed(2)}`;
    document.getElementById('footer-grand-total').innerText = `RM ${finalGrandTotalValue.toFixed(2)}`;
}

// =========================================================================
// 6. CORE APP ACTIONS LOGIC INTERRUPTS
// =========================================================================

function updateQty(id, modifier) {
    const targetIdx = products.findIndex(p => p.id === id);
    if (targetIdx !== -1) {
        let resQty = products[targetIdx].quantity + modifier;
        if (resQty < 0) resQty = 0;
        
        products[targetIdx].quantity = resQty;
        saveAppState();
        renderApp();
        
        if (currentCategory) {
            renderCategoryProducts(currentCategory);
        }
        
        if (currentProductId) {
            renderProductDetail(currentProductId);
        }
    }
}

function toggleFavorite(id) {
    const product = products.find(p => p.id === id);
    if (product) {
        product.favorite = !product.favorite;
        saveAppState();
        renderProductGrid();
        
        if (currentCategory) {
            renderCategoryProducts(currentCategory);
        }
        
        if (currentProductId) {
            renderProductDetail(currentProductId);
        }
        
        // Check if wishlist is currently visible and re-render it
        const wishlistScreen = document.getElementById('wishlist-screen');
        if (wishlistScreen && wishlistScreen.classList.contains('active')) {
            renderWishlistProducts();
        }
        
        // Check if all-products is currently visible and re-render it
        const allProductsScreen = document.getElementById('all-products-screen');
        if (allProductsScreen && allProductsScreen.classList.contains('active')) {
            renderAllProducts();
        }
        
        showAppToast(product.favorite ? '❤️ Added to Wishlist' : '💔 Removed from Wishlist', 'info');
    }
}

function addToCartFromDetail(productId) {
    updateQty(productId, 1);
    showAppToast('Added to cart!', 'success');
    
    setTimeout(() => {
        renderProductDetail(productId);
    }, 100);
}

function updateGlobalCartBadge() {
    const totalCount = products.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.getElementById('global-cart-badge');
    if (badge) {
        badge.innerText = totalCount;
        badge.style.display = totalCount > 0 ? 'flex' : 'none';
    }
}

function selectPaymentMethod(methodId) {
    selectedMethodId = methodId;
    saveAppState();
    
    document.querySelectorAll('.method-container').forEach(cnt => {
        cnt.classList.remove('selected');
    });
    
    const matchedEl = document.getElementById(`method-${methodId}`);
    if (matchedEl) matchedEl.classList.add('selected');
}

// =========================================================================
// 7. SECURE SERVER TRANSACTIONS SIMULATION GATEWAY
// =========================================================================

function executePayment() {
    const orderValue = products.reduce((acc, p) => acc + (p.price * p.quantity), 0);
    if (orderValue === 0) {
        showAppToast('Your cart is empty! Add products to checkout.', 'error');
        return;
    }

    if (selectedMethodId === 'fpx') {
        const selectedBank = document.getElementById('bank-selector-input').value;
        if (!selectedBank) {
            showAppToast('Please select a banking portal from the drop-down to pay.', 'error');
            return;
        }
        triggerOrderCompletionProcess(`Paid via FPX (${selectedBank})`);
    } 
    else if (selectedMethodId === 'card') {
        const cardNum = document.getElementById('card-num-input').value.trim();
        const cardExp = document.getElementById('card-expiry-input').value.trim();
        const cardCvv = document.getElementById('card-cvv-input').value.trim();
        
        if (cardNum.length < 19 || cardExp.length < 5 || cardCvv.length < 3) {
            showAppToast('Invalid card information layouts.', 'error');
            return;
        }
        triggerOrderCompletionProcess(`Paid via Card ending in *${cardNum.slice(-4)}`);
    } 
    else {
        const providerTitle = selectedMethodId === 'tng' ? "Touch 'n Go eWallet" : 'DuitNow QR';
        triggerOrderCompletionProcess(`Paid via ${providerTitle}`);
    }
}

function triggerOrderCompletionProcess(paymentSuccessMessageText) {
    const payloadFooterBtn = document.querySelector('.pay-now-btn');
    if (!payloadFooterBtn) return;
    
    const originalBtnTextContent = payloadFooterBtn.innerHTML;
    
    payloadFooterBtn.disabled = true;
    payloadFooterBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processing...`;

    setTimeout(() => {
        alert(`🎉 Transaction Approved!\n\n${paymentSuccessMessageText}\nYour order has been logged into the system.`);
        
        products.forEach(p => p.quantity = 0);
        saveAppState();
        
        ['bank-selector-input', 'card-num-input', 'card-expiry-input', 'card-cvv-input'].forEach(id => {
            const inputNode = document.getElementById(id);
            if (inputNode) inputNode.value = "";
        });

        payloadFooterBtn.disabled = false;
        payloadFooterBtn.innerHTML = originalBtnTextContent;
        
        navigateTo('main-screen');
    }, 1500); 
}

// =========================================================================
// 8. NOTIFICATION TOAST BAR COMPONENT ENGINE
// =========================================================================

function showAppToast(message, type = 'info') {
    let container = document.getElementById('app-toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'app-toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `app-toast ${type}`;
    
    let icon = 'fa-info-circle';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'error') icon = 'fa-circle-exclamation';

    toast.innerHTML = `
        <i class="fa-solid ${icon}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add('visible'), 50);
    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// =========================================================================
// 9. ME / PROFILE SCREEN FUNCTIONS
// =========================================================================

// Function to handle change password
function handleChangePassword() {
    const currentPw = document.getElementById('current-password').value.trim();
    const newPw = document.getElementById('new-password').value.trim();
    const confirmPw = document.getElementById('confirm-password').value.trim();

    if (!currentPw || !newPw || !confirmPw) {
        showAppToast('Please fill in all fields.', 'error');
        return;
    }

    if (newPw.length < 4) {
        showAppToast('New password must be at least 4 characters.', 'error');
        return;
    }

    if (newPw !== confirmPw) {
        showAppToast('Passwords do not match.', 'error');
        return;
    }

    // Simulate password change
    showAppToast('Password changed successfully!', 'success');
    
    // Clear fields
    document.getElementById('current-password').value = '';
    document.getElementById('new-password').value = '';
    document.getElementById('confirm-password').value = '';
}

// Variable to store selected rating
let selectedRating = 0;

// Function to set star rating
function setRating(value) {
    selectedRating = value;
    document.getElementById('refund-rating').value = value;
    
    // Update star icons
    const stars = document.querySelectorAll('.star-rating-icon');
    stars.forEach((star, index) => {
        if (index < value) {
            star.className = 'fa-solid fa-star star-rating-icon active';
        } else {
            star.className = 'fa-regular fa-star star-rating-icon';
        }
    });
    
    // Update label
    const labels = ['', 'Terrible', 'Poor', 'Average', 'Good', 'Excellent'];
    document.getElementById('rating-label').textContent = labels[value] || 'Rate your experience';
}

// Function to handle refund form submission
function handleRefundSubmit() {
    const name = document.getElementById('refund-name').value.trim();
    const studentId = document.getElementById('refund-student-id').value.trim();
    const phone = document.getElementById('refund-phone').value.trim();
    const email = document.getElementById('refund-email').value.trim();
    const reason = document.getElementById('refund-reason').value.trim();
    const fileInput = document.getElementById('refund-receipt');
    const rating = document.getElementById('refund-rating').value;

    // Validate required fields
    if (!name || !studentId || !phone || !email || !reason) {
        showAppToast('Please fill in all required fields.', 'error');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        showAppToast('Please enter a valid email address.', 'error');
        return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
        showAppToast('Please upload a receipt.', 'error');
        return;
    }

    if (parseInt(rating) === 0) {
        showAppToast('Please rate your experience.', 'error');
        return;
    }

    // Simulate submission
    showAppToast('✅ Refund form submitted successfully!', 'success');
    
    // Clear form
    document.getElementById('refund-name').value = '';
    document.getElementById('refund-student-id').value = '';
    document.getElementById('refund-phone').value = '';
    document.getElementById('refund-email').value = '';
    document.getElementById('refund-reason').value = '';
    document.getElementById('refund-receipt').value = '';
    document.getElementById('file-name-display').textContent = 'No file chosen';
    setRating(0);
    
    // Navigate back to me page after delay
    setTimeout(() => {
        navigateTo('me-screen');
    }, 1500);
}

// =========================================================================
// 10. ROLE SELECTION & ADMIN FUNCTIONS
// =========================================================================

let selectedRole = 'user';

function selectRole(role) {
    selectedRole = role;
    document.querySelectorAll('.role-option').forEach(el => {
        el.classList.remove('active');
    });
    document.getElementById(`role-${role}`).classList.add('active');
    document.getElementById('selected-role').value = role;
}

// Admin Navigation
function navigateAdmin(page) {
    // Hide all admin pages
    document.querySelectorAll('.admin-page').forEach(p => {
        p.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(`admin-${page}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update sidebar active state
    document.querySelectorAll('.sidebar-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Find and activate the clicked sidebar item
    const items = document.querySelectorAll('.sidebar-item');
    const pageMap = {
        'dashboard': 0,
        'products': 1,
        'orders': 2,
        'refunds': 3,
        'points': 4,
        'reports': 5,
        'users': 6,
        'settings': 7
    };
    if (pageMap[page] !== undefined) {
        items[pageMap[page]].classList.add('active');
    }
    
    // Render chart if dashboard
    if (page === 'dashboard') {
        setTimeout(renderSalesChart, 100);
    }
}

// Product Modal Functions
function showEditProduct() {
    document.getElementById('edit-product-modal').style.display = 'flex';
}

function closeEditProduct() {
    document.getElementById('edit-product-modal').style.display = 'none';
}

function showAddProduct() {
    document.getElementById('add-product-modal').style.display = 'flex';
}

function closeAddProduct() {
    document.getElementById('add-product-modal').style.display = 'none';
}

function saveProduct() {
    showAppToast('Product saved successfully!', 'success');
    closeEditProduct();
    closeAddProduct();
}

// =========================================================================
// 11. EVENT LISTENERS & DOM BOOTLOAD INIT ENGINE
// =========================================================================

document.addEventListener("DOMContentLoaded", function () {
    loadSavedState();
    loadNotifications();

    // Check if user is logged in and their role
    const isAdmin = localStorage.getItem('coop_is_admin') === 'true';
    
    if (currentUser) {
        if (isAdmin) {
            const targetLoginScreen = document.getElementById('login-screen');
            if (targetLoginScreen) targetLoginScreen.classList.remove('active');
            const targetAdminScreen = document.getElementById('admin-screen');
            if (targetAdminScreen) targetAdminScreen.classList.add('active');
            setTimeout(renderSalesChart, 300);
        } else {
            const targetLoginScreen = document.getElementById('login-screen');
            if (targetLoginScreen) targetLoginScreen.classList.remove('active');
            const targetMainScreen = document.getElementById('main-screen');
            if (targetMainScreen) targetMainScreen.classList.add('active');
        }
    } else {
        navigateTo('login-screen');
    }

    renderApp();
    selectPaymentMethod(selectedMethodId);

    // Search bar listener
    const searchBarElement = document.getElementById('store-search-bar');
    if (searchBarElement) {
        searchBarElement.addEventListener('input', function (e) {
            currentSearchQuery = e.target.value;
            renderProductGrid(); 
        });
    }

    // All Products search bar listener
    const allProductsSearch = document.getElementById('all-products-search-bar');
    if (allProductsSearch) {
        allProductsSearch.addEventListener('input', function(e) {
            allProductsSearchQuery = e.target.value.trim().toLowerCase();
            renderAllProducts();
        });
    }

    // Card input formatting
    const cardNumInput = document.getElementById('card-num-input');
    const cardExpiryInput = document.getElementById('card-expiry-input');
    const cardCvvInput = document.getElementById('card-cvv-input');

    if (cardNumInput) {
        cardNumInput.addEventListener('input', function (e) {
            let val = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
            let chunks = [];
            for (let i = 0; i < val.length && i < 16; i += 4) {
                chunks.push(val.substring(i, i + 4));
            }
            e.target.value = chunks.join(' ');
        });
    }

    if (cardExpiryInput) {
        cardExpiryInput.addEventListener('input', function (e) {
            let val = e.target.value.replace(/[^0-9]/g, '');
            if (val.length >= 2) {
                e.target.value = val.slice(0, 2) + '/' + val.slice(2, 4);
            } else {
                e.target.value = val;
            }
        });
    }

    if (cardCvvInput) {
        cardCvvInput.addEventListener('input', function (e) {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    }

    // File upload listener for refund form
    const fileInput = document.getElementById('refund-receipt');
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            const fileName = e.target.files[0] ? e.target.files[0].name : 'No file chosen';
            document.getElementById('file-name-display').textContent = fileName;
        });
    }
});

// =========================================================================
// WISHLIST / FAVORITES FUNCTIONS
// =========================================================================

function navigateToWishlist() {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    const targetScreen = document.getElementById('wishlist-screen');
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    renderWishlistProducts();
}

function renderWishlistProducts() {
    const container = document.getElementById('wishlist-product-grid');
    if (!container) return;
    container.innerHTML = '';

    // Get all favorited products (grouped by product name to avoid duplicates)
    const favoriteProducts = products.filter(p => p.favorite === true);
    
    // Group by name to show unique product types
    const productTypes = {};
    favoriteProducts.forEach(prod => {
        if (!productTypes[prod.name]) {
            productTypes[prod.name] = [];
        }
        productTypes[prod.name].push(prod);
    });

    // Get unique products (one per type)
    const uniqueFavorites = Object.values(productTypes).map(group => group[0]);

    if (uniqueFavorites.length === 0) {
        container.innerHTML = `
            <div class="wishlist-empty-state">
                <i class="fa-regular fa-heart"></i>
                <div class="empty-title">Your wishlist is empty</div>
                <div class="empty-sub">Start adding products you love by tapping the heart icon on any product.</div>
                <button class="browse-btn" onclick="navigateTo('main-screen')">
                    <i class="fa-solid fa-store"></i> Browse Products
                </button>
            </div>
        `;
        return;
    }

    // Render each favorite product
    uniqueFavorites.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';

        // Get all brands for this product type
        const allBrands = productTypes[prod.name] || [prod];
        const minPrice = Math.min(...allBrands.map(p => p.price));
        const brandCount = allBrands.length;

        card.innerHTML = `
            <div class="heart-icon-wrapper active" onclick="toggleFavorite('${prod.id}')">
                <i class="fa-solid fa-heart"></i>
            </div>
            <button class="wishlist-remove-btn" onclick="toggleFavorite('${prod.id}')" title="Remove from wishlist">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="product-clickable" onclick="navigateToProductDetail('${prod.id}')" style="cursor: pointer;">
                <div class="product-img-wrapper">
                    ${getImageMarkup(prod)}
                </div>
                <div class="product-name">${prod.name}</div>
                <div style="font-size: 11px; color: #999; margin-bottom: 4px;">${brandCount} brands available</div>
                <div class="product-meta">
                    <span class="product-price">From RM ${minPrice.toFixed(2)}</span>
                    <span class="product-rating">
                        <i class="fa-solid fa-star star-icon"></i> ${prod.rating}
                    </span>
                </div>
            </div>
            <button class="add-cart-btn" onclick="navigateToProductDetail('${prod.id}')" style="width: 100%; border: 1px solid #FFCCBC; background: white; color: #FF7043; padding: 8px; border-radius: 10px; font-size: 12px; font-weight: 600; cursor: pointer;">
                View
            </button>
        `;
        container.appendChild(card);
    });
}

// =========================================================================
// ALL PRODUCTS FUNCTIONS
// =========================================================================

let allProductsFilter = 'all';
let allProductsSearchQuery = '';

function navigateToAllProducts() {
    // Reset filters when navigating
    allProductsFilter = 'all';
    allProductsSearchQuery = '';
    
    // Update filter chips UI
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.remove('active');
        if (chip.dataset.filter === 'all') {
            chip.classList.add('active');
        }
    });
    
    // Clear search bar
    const searchBar = document.getElementById('all-products-search-bar');
    if (searchBar) searchBar.value = '';
    
    // Navigate to screen
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    const targetScreen = document.getElementById('all-products-screen');
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    renderAllProducts();
}

function filterAllProducts(category) {
    allProductsFilter = category;
    
    // Update filter chips
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.classList.remove('active');
        if (chip.dataset.filter === category) {
            chip.classList.add('active');
        }
    });
    
    renderAllProducts();
}

function renderAllProducts() {
    const container = document.getElementById('all-products-grid');
    if (!container) return;
    container.innerHTML = '';

    // Get search query
    const searchBar = document.getElementById('all-products-search-bar');
    if (searchBar) {
        allProductsSearchQuery = searchBar.value.trim().toLowerCase();
    }

    // Filter products based on category and search
    let filteredProducts = products.filter(prod => {
        // Category filter
        if (allProductsFilter !== 'all' && prod.category !== allProductsFilter) {
            return false;
        }
        
        // Search filter
        if (allProductsSearchQuery) {
            const searchMatch = prod.name.toLowerCase().includes(allProductsSearchQuery) ||
                               prod.brand?.toLowerCase().includes(allProductsSearchQuery) ||
                               prod.category?.toLowerCase().includes(allProductsSearchQuery);
            if (!searchMatch) return false;
        }
        
        return true;
    });

    // Group by name for unique product display
    const productTypes = {};
    filteredProducts.forEach(prod => {
        if (!productTypes[prod.name]) {
            productTypes[prod.name] = [];
        }
        productTypes[prod.name].push(prod);
    });

    // Get unique products (one per type)
    const uniqueProducts = Object.values(productTypes).map(group => group[0]);

    // Show count
    const countDisplay = document.querySelector('.products-count span');
    if (countDisplay) {
        countDisplay.textContent = uniqueProducts.length;
    }

    if (uniqueProducts.length === 0) {
        container.innerHTML = `
            <div class="all-products-empty">
                <i class="fa-solid fa-box-open"></i>
                <p>No products found</p>
                ${allProductsSearchQuery ? `<p style="font-size: 12px;">Try adjusting your search or filter</p>` : ''}
            </div>
        `;
        return;
    }

    // Render each product
    uniqueProducts.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';

        // Get all brands for this product type
        const allBrands = productTypes[prod.name] || [prod];
        const minPrice = Math.min(...allBrands.map(p => p.price));
        const brandCount = allBrands.length;
        
        // Check if any brand of this product is favorited
        const isFavorited = allBrands.some(p => p.favorite === true);
        const heartClass = isFavorited ? 'heart-icon-wrapper active' : 'heart-icon-wrapper';
        const heartIconHtml = isFavorited ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>';

        card.innerHTML = `
            <div class="${heartClass}" onclick="toggleFavorite('${prod.id}')">${heartIconHtml}</div>
            <div class="product-clickable" onclick="navigateToProductDetail('${prod.id}')" style="cursor: pointer;">
                <div class="product-img-wrapper">
                    ${getImageMarkup(prod)}
                </div>
                <div class="product-name">${prod.name}</div>
                <div style="font-size: 11px; color: #999; margin-bottom: 4px;">
                    ${brandCount} ${brandCount > 1 ? 'brands' : 'brand'} available
                </div>
                <div class="product-meta">
                    <span class="product-price">From RM ${minPrice.toFixed(2)}</span>
                    <span class="product-rating">
                        <i class="fa-solid fa-star star-icon"></i> ${prod.rating}
                    </span>
                </div>
            </div>
            <button class="add-cart-btn" onclick="navigateToProductDetail('${prod.id}')" style="width: 100%; border: 1px solid #FFCCBC; background: white; color: #FF7043; padding: 8px; border-radius: 10px; font-size: 12px; font-weight: 600; cursor: pointer;">
                View
            </button>
        `;
        container.appendChild(card);
    });
}

// =========================================================================
// NOTIFICATIONS SYSTEM
// =========================================================================

// Notification data
let notifications = [];
let notificationFilter = 'all';

// Sample notifications data
const SAMPLE_NOTIFICATIONS = [
    {
        id: 'n1',
        type: 'promo',
        title: '🎉 Weekend Special!',
        message: 'Get 15% off on all Food items this weekend. Use code: WEEKEND15',
        time: '2 hours ago',
        read: false,
        action: 'Shop Now',
        actionLink: 'main-screen',
        icon: 'fa-tag'
    },
    {
        id: 'n2',
        type: 'promo',
        title: '🔥 Flash Sale Alert!',
        message: 'Limited time offer: Buy 1 Get 1 Free on all Drinks! Hurry, while stocks last.',
        time: '5 hours ago',
        read: false,
        action: 'Grab Deal',
        actionLink: 'category-screen',
        actionParam: 'Drinks',
        icon: 'fa-bolt'
    },
    {
        id: 'n3',
        type: 'reminder',
        title: '⏰ Don\'t Forget!',
        message: 'Your reward points (250 pts) are expiring in 3 days. Redeem them before they\'re gone!',
        time: '1 day ago',
        read: false,
        action: 'Redeem Now',
        actionLink: 'redeem-screen',
        icon: 'fa-clock'
    },
    {
        id: 'n4',
        type: 'promo',
        title: '🎁 New User Special!',
        message: 'First time shopping? Get RM 10 off your first purchase. Minimum spend RM 50.',
        time: '2 days ago',
        read: true,
        action: 'Claim Offer',
        actionLink: 'main-screen',
        icon: 'fa-gift'
    },
    {
        id: 'n5',
        type: 'reminder',
        title: '🛒 Cart Reminder',
        message: 'You left 3 items in your cart. Complete your purchase now and enjoy free delivery!',
        time: '3 days ago',
        read: true,
        action: 'View Cart',
        actionLink: 'payment-screen',
        icon: 'fa-cart-shopping'
    },
    {
        id: 'n6',
        type: 'order',
        title: '📦 Order Confirmed',
        message: 'Your order #ORD10025 has been confirmed and is being processed. Estimated delivery: 2-3 days.',
        time: '3 days ago',
        read: true,
        action: 'Track Order',
        actionLink: 'main-screen',
        icon: 'fa-check-circle'
    },
    {
        id: 'n7',
        type: 'promo',
        title: '⭐ Student Discount!',
        message: 'Show your student ID and get 10% off on all Stationery items. Valid until end of month.',
        time: '4 days ago',
        read: true,
        action: 'Learn More',
        actionLink: 'main-screen',
        icon: 'fa-graduation-cap'
    },
    {
        id: 'n8',
        type: 'reminder',
        title: '💳 Payment Reminder',
        message: 'Your pending payment for order #ORD10023 needs to be completed within 24 hours.',
        time: '5 days ago',
        read: true,
        action: 'Pay Now',
        actionLink: 'payment-screen',
        icon: 'fa-credit-card'
    }
];

// Load notifications from localStorage
function loadNotifications() {
    try {
        const saved = localStorage.getItem('coop_notifications');
        if (saved && saved !== "undefined") {
            notifications = JSON.parse(saved);
        } else {
            notifications = SAMPLE_NOTIFICATIONS.map(n => ({ ...n }));
        }
    } catch (e) {
        notifications = SAMPLE_NOTIFICATIONS.map(n => ({ ...n }));
    }
    updateBellBadge();
}

// Save notifications to localStorage
function saveNotifications() {
    localStorage.setItem('coop_notifications', JSON.stringify(notifications));
    updateBellBadge();
}

// Navigate to notifications screen
function navigateToNotifications() {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    const targetScreen = document.getElementById('notifications-screen');
    if (targetScreen) {
        targetScreen.classList.add('active');
    }
    
    // Reset filter
    notificationFilter = 'all';
    document.querySelectorAll('.notif-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.filter === 'all') {
            tab.classList.add('active');
        }
    });
    
    renderNotifications();
}

// Render notifications
function renderNotifications() {
    const container = document.getElementById('notifications-container');
    if (!container) return;
    container.innerHTML = '';

    // Filter notifications
    let filtered = notifications;
    if (notificationFilter !== 'all') {
        filtered = filtered.filter(n => n.type === notificationFilter);
    }

    // Sort: unread first, then by time (newest first)
    filtered.sort((a, b) => {
        if (a.read !== b.read) return a.read ? 1 : -1;
        return 0;
    });

    if (filtered.length === 0) {
        container.innerHTML = `
            <div class="notifications-empty">
                <i class="fa-regular fa-bell-slash"></i>
                <div class="empty-title">No notifications</div>
                <div class="empty-sub">${notificationFilter === 'all' ? 'You\'re all caught up!' : `No ${notificationFilter} notifications`}</div>
            </div>
        `;
        return;
    }

    // Render each notification
    filtered.forEach(notif => {
        const item = document.createElement('div');
        item.className = `notification-item ${notif.read ? 'read' : 'unread'}`;
        
        const iconMap = {
            promo: 'fa-tag',
            reminder: 'fa-clock',
            order: 'fa-box',
            system: 'fa-info-circle'
        };
        const icon = notif.icon || iconMap[notif.type] || 'fa-bell';

        item.innerHTML = `
            <div class="notif-icon-wrapper ${notif.type}">
                <i class="fa-solid ${icon}"></i>
            </div>
            <div class="notif-content" onclick="handleNotificationClick('${notif.id}')">
                <div class="notif-title">${notif.title}</div>
                <div class="notif-message">${notif.message}</div>
                <div class="notif-time">
                    <i class="fa-regular fa-clock"></i> ${notif.time}
                </div>
                ${notif.action ? `
                    <button class="notif-action-btn" onclick="handleNotificationAction('${notif.id}', event)">
                        ${notif.action}
                    </button>
                ` : ''}
            </div>
            <button class="notif-delete-btn" onclick="deleteNotification('${notif.id}', event)" title="Dismiss">
                <i class="fa-solid fa-xmark"></i>
            </button>
        `;
        container.appendChild(item);
    });
}

// Filter notifications
function filterNotifications(filter) {
    notificationFilter = filter;
    
    document.querySelectorAll('.notif-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.filter === filter) {
            tab.classList.add('active');
        }
    });
    
    renderNotifications();
}

// Handle notification click (mark as read)
function handleNotificationClick(notificationId) {
    const notif = notifications.find(n => n.id === notificationId);
    if (notif && !notif.read) {
        notif.read = true;
        saveNotifications();
        renderNotifications();
        updateBellBadge();
    }
}

// Handle notification action button
function handleNotificationAction(notificationId, event) {
    event.stopPropagation();
    
    const notif = notifications.find(n => n.id === notificationId);
    if (!notif) return;
    
    // Mark as read
    if (!notif.read) {
        notif.read = true;
        saveNotifications();
        updateBellBadge();
    }
    
    // Navigate to the action link
    if (notif.actionLink) {
        if (notif.actionParam) {
            navigateToCategory(notif.actionParam);
        } else {
            navigateTo(notif.actionLink);
        }
    }
    
    showAppToast(`Opening: ${notif.action || 'View details'}`, 'info');
    renderNotifications();
}

// Delete/Dismiss notification
function deleteNotification(notificationId, event) {
    event.stopPropagation();
    
    if (confirm('Dismiss this notification?')) {
        notifications = notifications.filter(n => n.id !== notificationId);
        saveNotifications();
        renderNotifications();
        updateBellBadge();
        showAppToast('Notification dismissed', 'info');
    }
}

// Mark all as read
function markAllNotificationsRead() {
    const unreadCount = notifications.filter(n => !n.read).length;
    if (unreadCount === 0) {
        showAppToast('All notifications are already read', 'info');
        return;
    }
    
    notifications.forEach(n => n.read = true);
    saveNotifications();
    renderNotifications();
    updateBellBadge();
    showAppToast(`✅ Marked ${unreadCount} notifications as read`, 'success');
}

// Update bell badge
function updateBellBadge() {
    const unreadCount = notifications.filter(n => !n.read).length;
    const badge = document.querySelector('.bell-badge');
    if (badge) {
        if (unreadCount > 0) {
            badge.textContent = unreadCount > 9 ? '9+' : unreadCount;
            badge.classList.add('show');
        } else {
            badge.classList.remove('show');
        }
    }
}

// Add a new notification
function addNotification(title, message, type = 'system', action = null, actionLink = null, actionParam = null) {
    const newNotif = {
        id: 'n' + Date.now(),
        type: type,
        title: title,
        message: message,
        time: 'Just now',
        read: false,
        action: action,
        actionLink: actionLink,
        actionParam: actionParam,
        icon: 'fa-bell'
    };
    
    notifications.unshift(newNotif);
    saveNotifications();
    updateBellBadge();
    renderNotifications();
    showAppToast('🔔 New notification received!', 'info');
}

// Function to add promo notification
function addPromoNotification(title, message, action = 'Shop Now', actionLink = 'main-screen', actionParam = null) {
    addNotification(title, message, 'promo', action, actionLink, actionParam);
}

// Function to add reminder notification
function addReminderNotification(title, message, action = 'View Details', actionLink = 'main-screen', actionParam = null) {
    addNotification(title, message, 'reminder', action, actionLink, actionParam);
}

// =========================================================================
// LINE GRAPH RENDERER
// =========================================================================

function renderSalesChart() {
    const svg = document.getElementById('sales-chart');
    if (!svg) return;
    
    // Sales data for the week (Monday to Sunday)
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const salesData = [1890, 2450, 1350, 2850, 2200, 1750, 2357];
    
    // Find max value for scaling
    const maxValue = Math.max(...salesData);
    const minValue = Math.min(...salesData);
    const range = maxValue - minValue || 1;
    
    // Chart dimensions
    const padding = { top: 20, right: 20, bottom: 30, left: 30 };
    const chartWidth = 400 - padding.left - padding.right;
    const chartHeight = 180 - padding.top - padding.bottom;
    
    // Build SVG content
    let svgContent = '';
    
    // Add gradient definition
    svgContent += `
        <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style="stop-color: var(--bright-red); stop-opacity: 0.3" />
                <stop offset="100%" style="stop-color: var(--bright-red); stop-opacity: 0.02" />
            </linearGradient>
        </defs>
    `;
    
    // Calculate points
    const points = salesData.map((value, index) => {
        const x = padding.left + (index / (salesData.length - 1)) * chartWidth;
        const y = padding.top + chartHeight - ((value - minValue) / range) * chartHeight * 0.85 - 5;
        return { x, y, value };
    });
    
    // Build path data
    const linePath = points.map((p, i) => {
        return (i === 0 ? 'M' : 'L') + p.x + ',' + p.y;
    }).join(' ');
    
    // Area path (line to bottom)
    const areaPath = linePath + ' L' + points[points.length - 1].x + ',' + (padding.top + chartHeight + 5) + 
                    ' L' + points[0].x + ',' + (padding.top + chartHeight + 5) + ' Z';
    
    // Add grid lines
    const numGridLines = 4;
    for (let i = 0; i <= numGridLines; i++) {
        const yPos = padding.top + (i / numGridLines) * chartHeight;
        svgContent += `<line class="chart-grid-line" x1="${padding.left}" y1="${yPos}" x2="${padding.left + chartWidth}" y2="${yPos}" />`;
    }
    
    // Add area fill
    svgContent += `<path class="chart-area" d="${areaPath}" />`;
    
    // Add line
    svgContent += `<path class="chart-line" d="${linePath}" />`;
    
    // Add dots and labels
    points.forEach((p, index) => {
        // Data point dot
        svgContent += `<circle class="chart-dot" cx="${p.x}" cy="${p.y}" r="4" data-value="${p.value}" data-day="${days[index]}" />`;
        
        // X-axis labels
        svgContent += `<text class="chart-axis-label" x="${p.x}" y="${padding.top + chartHeight + 15}" text-anchor="middle">${days[index]}</text>`;
        
        // Data value labels (above dots)
        svgContent += `<text class="chart-dot-label" x="${p.x}" y="${p.y - 8}" text-anchor="middle">${p.value}</text>`;
    });
    
    // Y-axis labels (min, mid, max)
    const yLabels = [minValue, Math.round((minValue + maxValue) / 2), maxValue];
    const yPositions = [
        padding.top + chartHeight,
        padding.top + chartHeight * 0.5,
        padding.top
    ];
    yLabels.forEach((label, i) => {
        if (i === 0 || i === yLabels.length - 1) {
            svgContent += `<text class="chart-axis-label" x="${padding.left - 8}" y="${yPositions[i] + 4}" text-anchor="end">RM${label}</text>`;
        }
    });
    
    // Set SVG content
    svg.setAttribute('viewBox', `0 0 400 180`);
    svg.innerHTML = svgContent;
    
    // Add interactivity - tooltip on hover
    addChartInteractivity();
    
    // Animate the line
    setTimeout(animateChartLine, 200);
}

// Animate the line drawing
function animateChartLine() {
    const line = document.querySelector('.chart-line');
    if (!line) return;
    
    const length = line.getTotalLength();
    line.style.strokeDasharray = length;
    line.style.strokeDashoffset = length;
    line.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
    
    // Trigger animation
    setTimeout(() => {
        line.style.strokeDashoffset = '0';
    }, 100);
}

// Add interactivity to chart dots
function addChartInteractivity() {
    const dots = document.querySelectorAll('.chart-dot');
    const container = document.getElementById('line-chart-container');
    
    // Remove existing tooltip if any
    const existingTooltip = document.querySelector('.chart-tooltip');
    if (existingTooltip) existingTooltip.remove();
    
    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'chart-tooltip';
    container.style.position = 'relative';
    container.appendChild(tooltip);
    
    dots.forEach(dot => {
        // Mouse enter
        dot.addEventListener('mouseenter', function(e) {
            const value = this.dataset.value;
            const day = this.dataset.day;
            tooltip.textContent = `${day}: RM${value}`;
            tooltip.classList.add('show');
            
            // Highlight dot
            this.setAttribute('r', '7');
            this.style.strokeWidth = '3';
            this.style.filter = 'drop-shadow(0 2px 8px rgba(255,0,0,0.4))';
        });
        
        // Mouse move
        dot.addEventListener('mousemove', function(e) {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top - 10;
            
            tooltip.style.left = Math.min(Math.max(x - 30, 10), rect.width - 80) + 'px';
            tooltip.style.top = Math.max(y, 10) + 'px';
        });
        
        // Mouse leave
        dot.addEventListener('mouseleave', function(e) {
            tooltip.classList.remove('show');
            this.setAttribute('r', '4');
            this.style.strokeWidth = '2.5';
            this.style.filter = 'none';
        });
    });
}