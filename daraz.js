// ============================================
    // DATA - Products, Categories, Orders
    // ============================================
    const categories = [
      { id: 1, name: 'Electronics', icon: '📱', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=200&h=200&fit=crop' },
      { id: 2, name: 'Fashion', icon: '👗', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=200&fit=crop' },
      { id: 3, name: 'Home', icon: '🏠', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200&h=200&fit=crop' },
      { id: 4, name: 'Beauty', icon: '💄', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=200&h=200&fit=crop' },
      { id: 5, name: 'Sports', icon: '⚽', image: 'https://images.unsplash.com/photo-1461896836934- voices?w=200&h=200&fit=crop' },
      { id: 6, name: 'Groceries', icon: '🛒', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop' }
    ];

    const products = [
      {
        id: 1,
        name: 'Wireless Bluetooth Earbuds Pro',
        category: 'electronics',
        price: 2999,
        originalPrice: 5999,
        discount: 50,
        rating: 4.8,
        reviews: 2456,
        image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
        flash: true
      },
      {
        id: 2,
        name: 'Smart Watch Series 8 GPS',
        category: 'electronics',
        price: 45999,
        originalPrice: 59999,
        discount: 23,
        rating: 4.9,
        reviews: 1823,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop',
        flash: true
      },
      {
        id: 3,
        name: 'Premium Cotton T-Shirt Pack',
        category: 'fashion',
        price: 1499,
        originalPrice: 2499,
        discount: 40,
        rating: 4.5,
        reviews: 3421,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
      },
      {
        id: 4,
        name: 'Designer Sunglasses UV Protection',
        category: 'fashion',
        price: 2199,
        originalPrice: 4500,
        discount: 51,
        rating: 4.6,
        reviews: 876,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
        flash: true
      },
      {
        id: 5,
        name: 'Robot Vacuum Cleaner Smart',
        category: 'home',
        price: 35999,
        originalPrice: 55000,
        discount: 35,
        rating: 4.7,
        reviews: 567,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop'
      },
      {
        id: 6,
        name: 'Air Fryer Digital 5.5L',
        category: 'home',
        price: 8999,
        originalPrice: 15000,
        discount: 40,
        rating: 4.8,
        reviews: 2134,
        image: 'https://images.unsplash.com/photo-1626509653291-18d9a934b9db?w=400&h=400&fit=crop'
      },
      {
        id: 7,
        name: 'Wireless Gaming Mouse RGB',
        category: 'electronics',
        price: 3499,
        originalPrice: 5999,
        discount: 42,
        rating: 4.6,
        reviews: 1567,
        image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop'
      },
      {
        id: 8,
        name: 'Leather Crossbody Bag',
        category: 'fashion',
        price: 4999,
        originalPrice: 8999,
        discount: 44,
        rating: 4.7,
        reviews: 982,
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop'
      },
      {
        id: 9,
        name: 'Mechanical Keyboard RGB',
        category: 'electronics',
        price: 7999,
        originalPrice: 12000,
        discount: 33,
        rating: 4.9,
        reviews: 2341,
        image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=400&h=400&fit=crop',
        flash: true
      },
      {
        id: 10,
        name: 'Running Shoes Sports',
        category: 'fashion',
        price: 6499,
        originalPrice: 12000,
        discount: 46,
        rating: 4.5,
        reviews: 1876,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop'
      },
      {
        id: 11,
        name: 'Skincare Gift Set Premium',
        category: 'home',
        price: 3999,
        originalPrice: 6999,
        discount: 43,
        rating: 4.8,
        reviews: 1234,
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=400&fit=crop'
      },
      {
        id: 12,
        name: 'Portable Bluetooth Speaker',
        category: 'electronics',
        price: 5499,
        originalPrice: 9999,
        discount: 45,
        rating: 4.7,
        reviews: 3456,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop'
      }
    ];

    const orderHistory = [
      {
        id: 'MM-123456',
        date: '2024-01-15',
        status: 'Delivered',
        items: [
          { name: 'Wireless Bluetooth Earbuds Pro', quantity: 1, price: 2999, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=100&h=100&fit=crop' }
        ],
        total: 2999
      },
      {
        id: 'MM-123457',
        date: '2024-01-10',
        status: 'Shipped',
        items: [
          { name: 'Smart Watch Series 8 GPS', quantity: 1, price: 45999, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=100&h=100&fit=crop' },
          { name: 'Wireless Gaming Mouse RGB', quantity: 2, price: 6998, image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=100&h=100&fit=crop' }
        ],
        total: 52997
      },
      {
        id: 'MM-123458',
        date: '2024-01-05',
        status: 'Processing',
        items: [
          { name: 'Premium Cotton T-Shirt Pack', quantity: 2, price: 2998, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop' }
        ],
        total: 2998
      }
    ];

    // ============================================
    // STATE MANAGEMENT
    // ============================================
    
    let cart = [];
    let currentUser = null;
    let currentPage = 'home';
    let currentFilter = 'all';
    let selectedPaymentMethod = 'cod';

    // ============================================
    // INITIALIZATION
    // ============================================
    
    document.addEventListener('DOMContentLoaded', function() {
      // Load cart from localStorage
      const savedCart = localStorage.getItem('megamart_cart');
      if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
      }

      // Load user from localStorage
      const savedUser = localStorage.getItem('megamart_user');
      if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUserUI();
      }

      // Render initial content
      renderCategories();
      renderProducts();
      renderFlashSale();
      renderOrders();
      startCountdown();

      // Add scroll effect to navbar
      window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
          navbar.classList.add('shadow-lg');
        } else {
          navbar.classList.remove('shadow-lg');
        }
      });
    });

    // ============================================
    // RENDERING FUNCTIONS
    // ============================================
    
    function renderCategories() {
      const grid = document.getElementById('categoriesGrid');
      if (!grid) return;

      grid.innerHTML = categories.map(cat => `
        <div class="category-card bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg cursor-pointer text-center" onclick="filterByCategory('${cat.name.toLowerCase()}')">
          <div class="w-16 h-16 mx-auto rounded-full overflow-hidden mb-3 bg-gray-100">
            <img src="${cat.image}" alt="${cat.name}" class="w-full h-full object-cover">
          </div>
          <p class="font-medium text-gray-900 text-sm">${cat.name}</p>
        </div>
      `).join('');
    }

    function renderProducts(filter = 'all') {
      const grid = document.getElementById('productsGrid');
      if (!grid) return;

      let filteredProducts = products;
      if (filter !== 'all') {
        filteredProducts = products.filter(p => p.category === filter);
      }

      grid.innerHTML = filteredProducts.map((product, index) => `
        <div class="product-card bg-white rounded-2xl shadow-sm overflow-hidden animate-fadeIn" style="animation-delay: ${index * 0.05}s">
          <div class="relative overflow-hidden">
            <img src="${product.image}" alt="${product.name}" class="product-image w-full h-48 object-cover">
            ${product.discount ? `
              <span class="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                -${product.discount}%
              </span>
            ` : ''}
            <button onclick="addToCart(${product.id})" class="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:scale-110">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
            </button>
          </div>
          <div class="p-4">
            <h3 class="font-medium text-gray-900 text-sm mb-2 line-clamp-2 h-10">${product.name}</h3>
            <div class="flex items-center gap-1 mb-2">
              ${renderStars(product.rating)}
              <span class="text-xs text-gray-500">(${product.reviews})</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-lg font-bold text-primary">Rs. ${product.price.toLocaleString()}</span>
              ${product.originalPrice ? `
                <span class="text-sm text-gray-400 line-through">Rs. ${product.originalPrice.toLocaleString()}</span>
              ` : ''}
            </div>
          </div>
        </div>
      `).join('');
    }

    function renderFlashSale() {
      const grid = document.getElementById('flashSaleGrid');
      if (!grid) return;

      const flashProducts = products.filter(p => p.flash);

      grid.innerHTML = flashProducts.map((product, index) => `
        <div class="product-card bg-white rounded-2xl shadow-lg overflow-hidden animate-fadeIn" style="animation-delay: ${index * 0.1}s">
          <div class="relative overflow-hidden">
            <img src="${product.image}" alt="${product.name}" class="product-image w-full h-40 object-cover">
            <span class="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
              -${product.discount}%
            </span>
          </div>
          <div class="p-3">
            <h3 class="font-medium text-gray-900 text-xs mb-2 line-clamp-2">${product.name}</h3>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-base font-bold text-primary">Rs. ${product.price.toLocaleString()}</span>
              <span class="text-xs text-gray-400 line-through">Rs. ${product.originalPrice.toLocaleString()}</span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div class="bg-primary h-2 rounded-full" style="width: ${Math.random() * 50 + 50}%"></div>
            </div>
            <p class="text-xs text-gray-500">${Math.floor(Math.random() * 20 + 5)} sold</p>
            <button onclick="addToCart(${product.id})" class="w-full mt-2 btn-primary gradient-primary text-white py-2 rounded-xl text-xs font-semibold">
              Add to Cart
            </button>
          </div>
        </div>
      `).join('');
    }

    function renderStars(rating) {
      const fullStars = Math.floor(rating);
      const hasHalf = rating % 1 >= 0.5;
      let stars = '';
      
      for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
          stars += '<svg class="w-4 h-4 star-filled" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
        } else if (i === fullStars && hasHalf) {
          stars += '<svg class="w-4 h-4 star-filled" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
        } else {
          stars += '<svg class="w-4 h-4 star-empty" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
        }
      }
      return stars;
    }

    function renderOrders() {
      const list = document.getElementById('ordersList');
      if (!list) return;

      if (orderHistory.length === 0) {
        list.innerHTML = '<p class="text-gray-500 text-center py-8">No orders yet</p>';
        return;
      }

      list.innerHTML = orderHistory.map(order => `
        <div class="border border-gray-200 rounded-xl p-4">
          <div class="flex items-center justify-between mb-4">
            <div>
              <p class="font-semibold text-gray-900">${order.id}</p>
              <p class="text-sm text-gray-500">${order.date}</p>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-semibold status-${order.status.toLowerCase()}">${order.status}</span>
          </div>
          <div class="space-y-3">
            ${order.items.map(item => `
              <div class="flex items-center gap-3">
                <img src="${item.image}" alt="${item.name}" class="w-12 h-12 rounded-lg object-cover">
                <div class="flex-1">
                  <p class="text-sm font-medium text-gray-900">${item.name}</p>
                  <p class="text-xs text-gray-500">Qty: ${item.quantity}</p>
                </div>
                <p class="text-sm font-semibold text-gray-900">Rs. ${item.price.toLocaleString()}</p>
              </div>
            `).join('')}
          </div>
          <div class="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <span class="text-sm text-gray-600">Total</span>
            <span class="font-bold text-gray-900">Rs. ${order.total.toLocaleString()}</span>
          </div>
        </div>
      `).join('');
    }

    function renderCartItems() {
      const list = document.getElementById('cartItemsList');
      const empty = document.getElementById('emptyCart');
      const footer = document.getElementById('cartFooter');

      if (cart.length === 0) {
        list.innerHTML = '';
        empty.classList.remove('hidden');
        footer.classList.add('hidden');
        return;
      }

      empty.classList.add('hidden');
      footer.classList.remove('hidden');

      list.innerHTML = cart.map(item => `
        <div class="flex gap-3 bg-gray-50 rounded-xl p-3 animate-fadeIn">
          <img src="${item.image}" alt="${item.name}" class="w-20 h-20 rounded-lg object-cover">
          <div class="flex-1">
            <h4 class="font-medium text-gray-900 text-sm mb-1">${item.name}</h4>
            <p class="text-primary font-bold">Rs. ${item.price.toLocaleString()}</p>
            <div class="flex items-center gap-2 mt-2">
              <button onclick="updateQuantity(${item.id}, -1)" class="qty-btn w-7 h-7 rounded-lg bg-gray-200 flex items-center justify-center">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                </svg>
              </button>
              <span class="w-8 text-center font-semibold">${item.quantity}</span>
              <button onclick="updateQuantity(${item.id}, 1)" class="qty-btn w-7 h-7 rounded-lg bg-gray-200 flex items-center justify-center">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
              </button>
            </div>
          </div>
          <button onclick="removeFromCart(${item.id})" class="text-gray-400 hover:text-red-500 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
          </button>
        </div>
      `).join('');

      updateCartTotals();
    }

    function renderCheckoutItems() {
      const container = document.getElementById('checkoutItems');
      if (!container) return;

      container.innerHTML = cart.map(item => `
        <div class="flex gap-3">
          <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover">
          <div class="flex-1">
            <h4 class="font-medium text-gray-900 text-sm">${item.name}</h4>
            <p class="text-gray-500 text-xs">Qty: ${item.quantity}</p>
          </div>
          <p class="font-semibold text-gray-900">Rs. ${(item.price * item.quantity).toLocaleString()}</p>
        </div>
      `).join('');

      updateCheckoutTotals();
    }

    // ============================================
    // CART FUNCTIONS
    // ============================================
    
    function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      if (!product) return;

      const existingItem = cart.find(item => item.id === productId);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        });
      }

      saveCart();
      updateCartUI();
      showToast('Added to cart!', 'success');
    }

    function removeFromCart(productId) {
      cart = cart.filter(item => item.id !== productId);
      saveCart();
      updateCartUI();
      showToast('Removed from cart', 'info');
    }

    function updateQuantity(productId, change) {
      const item = cart.find(i => i.id === productId);
      if (!item) return;

      item.quantity += change;
      
      if (item.quantity <= 0) {
        removeFromCart(productId);
        return;
      }

      saveCart();
      updateCartUI();
    }

    function saveCart() {
      localStorage.setItem('megamart_cart', JSON.stringify(cart));
    }

    function updateCartUI() {
      // Update cart count
      const count = cart.reduce((sum, item) => sum + item.quantity, 0);
      document.getElementById('cartCount').textContent = count;

      // Update cart items
      renderCartItems();
    }

    function updateCartTotals() {
      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      document.getElementById('cartSubtotal').textContent = `Rs. ${subtotal.toLocaleString()}`;
      document.getElementById('cartTotal').textContent = `Rs. ${subtotal.toLocaleString()}`;
    }

    function updateCheckoutTotals() {
      const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const discount = Math.floor(subtotal * 0.1);
      const total = subtotal - discount;

      document.getElementById('checkoutSubtotal').textContent = `Rs. ${subtotal.toLocaleString()}`;
      document.getElementById('checkoutDiscount').textContent = `-Rs. ${discount.toLocaleString()}`;
      document.getElementById('checkoutTotal').textContent = `Rs. ${total.toLocaleString()}`;
    }

    function toggleCart() {
      const sidebar = document.getElementById('cartSidebar');
      const overlay = document.getElementById('cartOverlay');

      sidebar.classList.toggle('translate-x-full');
      overlay.classList.toggle('hidden');
    }

    // ============================================
    // AUTHENTICATION FUNCTIONS
    // ============================================
    
    function showAuthModal(type) {
      const modal = document.getElementById('authModal');
      const loginForm = document.getElementById('loginForm');
      const signupForm = document.getElementById('signupForm');

      modal.classList.remove('hidden');
      
      if (type === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
      } else {
        loginForm.classList.add('hidden');
        signupForm.classList.remove('hidden');
      }

      closeUserMenu();
    }

    function closeAuthModal() {
      document.getElementById('authModal').classList.add('hidden');
    }

    function handleLogin(e) {
      e.preventDefault();
      
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      // Simulate login
      currentUser = {
        firstName: 'John',
        lastName: 'Doe',
        email: email,
        phone: '+92 300 1234567'
      };

      localStorage.setItem('megamart_user', JSON.stringify(currentUser));
      updateUserUI();
      closeAuthModal();
      showToast('Welcome back!', 'success');
    }

    function handleSignup(e) {
      e.preventDefault();

      const firstName = document.getElementById('signupFirstName').value;
      const lastName = document.getElementById('signupLastName').value;
      const email = document.getElementById('signupEmail').value;
      const phone = document.getElementById('signupPhone').value;

      currentUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone
      };

      localStorage.setItem('megamart_user', JSON.stringify(currentUser));
      updateUserUI();
      closeAuthModal();
      showToast('Account created successfully!', 'success');
    }

    function handleLogout() {
      currentUser = null;
      localStorage.removeItem('megamart_user');
      updateUserUI();
      closeUserMenu();
      showToast('Logged out successfully', 'info');
    }

    function updateUserUI() {
      const loggedOutMenu = document.getElementById('loggedOutMenu');
      const loggedInMenu = document.getElementById('loggedInMenu');
      const userGreeting = document.getElementById('userGreeting');
      const userName = document.getElementById('userName');

      if (currentUser) {
        loggedOutMenu.classList.add('hidden');
        loggedInMenu.classList.remove('hidden');
        
        const fullName = `${currentUser.firstName} ${currentUser.lastName}`;
        userGreeting.textContent = 'Hello,';
        userName.textContent = currentUser.firstName;
        
        document.getElementById('dropdownUserName').textContent = fullName;
        document.getElementById('dropdownUserEmail').textContent = currentUser.email;
        document.getElementById('userInitials').textContent = `${currentUser.firstName[0]}${currentUser.lastName[0]}`;

        // Update profile page
        document.getElementById('profileName').textContent = fullName;
        document.getElementById('profileEmail').textContent = currentUser.email;
        document.getElementById('profileAvatar').textContent = `${currentUser.firstName[0]}${currentUser.lastName[0]}`;
        document.getElementById('editFirstName').value = currentUser.firstName;
        document.getElementById('editLastName').value = currentUser.lastName;
        document.getElementById('editEmail').value = currentUser.email;
        document.getElementById('editPhone').value = currentUser.phone;
      } else {
        loggedOutMenu.classList.remove('hidden');
        loggedInMenu.classList.add('hidden');
        userGreeting.textContent = 'Hello, Sign in';
        userName.textContent = 'Account';
      }
    }

    function toggleUserMenu() {
      document.getElementById('userDropdown').classList.toggle('hidden');
    }

    function closeUserMenu() {
      document.getElementById('userDropdown').classList.add('hidden');
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      const userMenu = document.getElementById('userMenu');
      if (!userMenu.contains(e.target)) {
        closeUserMenu();
      }
    });

    // ============================================
    // NAVIGATION FUNCTIONS
    // ============================================
    
    function navigateTo(page) {
      const homePage = document.getElementById('homePage');
      const profilePage = document.getElementById('profilePage');
      const checkoutPage = document.getElementById('checkoutPage');

      // Hide all pages
      homePage.classList.add('hidden');
      profilePage.classList.add('hidden');
      checkoutPage.classList.add('hidden');

      // Show selected page
      switch(page) {
        case 'home':
          homePage.classList.remove('hidden');
          break;
        case 'profile':
          if (!currentUser) {
            showAuthModal('login');
            return;
          }
          profilePage.classList.remove('hidden');
          break;
        case 'orders':
          if (!currentUser) {
            showAuthModal('login');
            return;
          }
          profilePage.classList.remove('hidden');
          showProfileTab('orders');
          break;
        case 'checkout':
          if (cart.length === 0) {
            showToast('Your cart is empty', 'error');
            return;
          }
          checkoutPage.classList.remove('hidden');
          renderCheckoutItems();
          break;
      }

      currentPage = page;
      closeUserMenu();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function showProfileTab(tab) {
      const tabs = ['info', 'orders', 'addresses'];
      const buttons = document.querySelectorAll('.profile-tab');

      tabs.forEach(t => {
        document.getElementById(`${t}Tab`).classList.add('hidden');
      });

      document.getElementById(`${tab}Tab`).classList.remove('hidden');

      buttons.forEach(btn => {
        btn.classList.remove('bg-primary/10', 'text-primary');
        btn.classList.add('hover:bg-gray-100');
      });

      event.target.closest('.profile-tab').classList.add('bg-primary/10', 'text-primary');
      event.target.closest('.profile-tab').classList.remove('hover:bg-gray-100');
    }

    function toggleMobileMenu() {
      document.getElementById('mobileMenu').classList.toggle('hidden');
    }

    // ============================================
    // PRODUCT FILTERING
    // ============================================
    
    function filterProducts(filter) {
      currentFilter = filter;
      
      // Update button styles
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
      });

      event.target.classList.remove('bg-gray-200', 'text-gray-700');
      event.target.classList.add('bg-primary', 'text-white');

      renderProducts(filter);
    }

    function filterByCategory(category) {
      navigateTo('home');
      filterProducts(category);
    }

    function handleSearch(e) {
      if (e.key === 'Enter') {
        performSearch();
      }
    }

    function performSearch() {
      const query = document.getElementById('searchInput').value.toLowerCase();
      if (!query) {
        renderProducts('all');
        return;
      }

      const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query)
      );

      const grid = document.getElementById('productsGrid');
      grid.innerHTML = filtered.length ? filtered.map((product, index) => `
        <div class="product-card bg-white rounded-2xl shadow-sm overflow-hidden animate-fadeIn" style="animation-delay: ${index * 0.05}s">
          <div class="relative overflow-hidden">
            <img src="${product.image}" alt="${product.name}" class="product-image w-full h-48 object-cover">
            ${product.discount ? `
              <span class="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                -${product.discount}%
              </span>
            ` : ''}
            <button onclick="addToCart(${product.id})" class="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:scale-110">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
            </button>
          </div>
          <div class="p-4">
            <h3 class="font-medium text-gray-900 text-sm mb-2 line-clamp-2 h-10">${product.name}</h3>
            <div class="flex items-center gap-1 mb-2">
              ${renderStars(product.rating)}
              <span class="text-xs text-gray-500">(${product.reviews})</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-lg font-bold text-primary">Rs. ${product.price.toLocaleString()}</span>
              ${product.originalPrice ? `
                <span class="text-sm text-gray-400 line-through">Rs. ${product.originalPrice.toLocaleString()}</span>
              ` : ''}
            </div>
          </div>
        </div>
      `).join('') : '<p class="col-span-4 text-center text-gray-500 py-12">No products found</p>';
    }

    // ============================================
    // CHECKOUT FUNCTIONS
    // ============================================
    
    function selectPaymentMethod(method) {
      selectedPaymentMethod = method;
      
      document.querySelectorAll('.payment-option').forEach(opt => {
        opt.classList.remove('selected');
      });

      event.currentTarget.classList.add('selected');

      const cardForm = document.getElementById('cardForm');
      if (method === 'card') {
        cardForm.classList.remove('hidden');
      } else {
        cardForm.classList.add('hidden');
      }
    }

    function formatCardNumber(input) {
      let value = input.value.replace(/\s/g, '').replace(/\D/g, '');
      let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
      input.value = formatted;
    }

    function formatExpiry(input) {
      let value = input.value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2);
      }
      input.value = value;
    }

    function proceedToCheckout() {
      if (!currentUser) {
        showAuthModal('login');
        return;
      }
      
      toggleCart();
      navigateTo('checkout');
    }

    function placeOrder() {
      // Validate shipping form
      const form = document.getElementById('shippingForm');
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // Generate order number
      const orderNumber = 'MM-' + Math.floor(100000 + Math.random() * 900000);
      document.getElementById('orderNumber').textContent = '#' + orderNumber;

      // Show success modal
      document.getElementById('orderSuccessModal').classList.remove('hidden');

      // Clear cart
      cart = [];
      saveCart();
      updateCartUI();
    }

    function closeOrderSuccessModal() {
      document.getElementById('orderSuccessModal').classList.add('hidden');
      navigateTo('home');
    }

    // ============================================
    // COUNTDOWN TIMER
    // ============================================
    
    function startCountdown() {
      // Set end time to 24 hours from now
      const endTime = new Date().getTime() + (24 * 60 * 60 * 1000);

      function updateCountdown() {
        const now = new Date().getTime();
        const distance = endTime - now;

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
      }

      updateCountdown();
      setInterval(updateCountdown, 1000);
    }

    // ============================================
    // TOAST NOTIFICATIONS
    // ============================================
    
    function showToast(message, type = 'info') {
      const container = document.getElementById('toastContainer');
      
      const colors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-primary'
      };

      const icons = {
        success: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>',
        error: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>',
        info: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>'
      };

      const toast = document.createElement('div');
      toast.className = `toast ${colors[type]} text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-2`;
      toast.innerHTML = `
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          ${icons[type]}
        </svg>
        <span class="font-medium">${message}</span>
      `;

      container.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }

    // ============================================
    // PROFILE FORM HANDLING
    // ============================================
    
    document.getElementById('profileForm').addEventListener('submit', function(e) {
      e.preventDefault();

      currentUser.firstName = document.getElementById('editFirstName').value;
      currentUser.lastName = document.getElementById('editLastName').value;
      currentUser.email = document.getElementById('editEmail').value;
      currentUser.phone = document.getElementById('editPhone').value;

      localStorage.setItem('megamart_user', JSON.stringify(currentUser));
      updateUserUI();
      showToast('Profile updated successfully!', 'success');
    });

    // ============================================
    // KEYBOARD ACCESSIBILITY
    // ============================================
    
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeAuthModal();
        closeOrderSuccessModal();
        if (!document.getElementById('cartSidebar').classList.contains('translate-x-full')) {
          toggleCart();
        }
      }
    });
  