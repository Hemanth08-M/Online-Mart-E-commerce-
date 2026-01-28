const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 99.99,
        image: "images/headphones.jpg",
        description: "High-quality wireless headphones with noise cancellation.",
        category: "Electronics"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 199.99,
        image: "images/watch.jpg",
        description: "Feature-rich smart watch with health tracking.",
        category: "Electronics"
    },
    {
        id: 3,
        name: "Laptop",
        price: 899.99,
        image: "images/laptop.jpg",
        description: "Powerful laptop for work and entertainment.",
        category: "Electronics"
    },
    {
        id: 4,
        name: "JoyStick",
        price: 349.99,
        image: "images/joyStick.jpg",
        description: "Gaming joystick for better control and fun.",
        category: "Electronics"
    },
    {
        id: 5,
        name: "Gaming Mouse",
        price: 49.99,
        image: "images/mouse.jpg",
        description: "Precision gaming mouse with customizable buttons.",
        category: "Electronics"
    },
    {
        id: 6,
        name: "Bluetooth Speaker",
        price: 79.99,
        image: "images/speaker.jpg",
        description: "Portable Bluetooth speaker with excellent sound quality.",
        category: "Electronics"
    },

    // Clothing
    {
        id: 7,
        name: "Cotton T-Shirt",
        price: 19.99,
        image: "images/cotton-tshirt.jpg",
        description: "Comfortable cotton t-shirt for everyday wear.",
        category: "Clothing"
    },
    {
        id: 8,
        name: "Denim Jeans",
        price: 59.99,
        image: "images/denim-jeans.jpg",
        description: "Classic denim jeans with perfect fit.",
        category: "Clothing"
    },
    {
        id: 9,
        name: "Winter Jacket",
        price: 89.99,
        image: "images/winter-jacket.png",
        description: "Warm winter jacket for cold weather.",
        category: "Clothing"
    },

    // Footwear
    {
        id: 10,
        name: "Running Shoes",
        price: 79.99,
        image: "images/running-shoes.png",
        description: "Comfortable running shoes for athletes.",
        category: "Footwear"
    },

    {
        id: 11,
        name: "Casual Sneakers",
        price: 49.99,
        image: "images/sneakers.png",
        description: "Stylish casual sneakers for everyday use.",
        category: "Footwear"
    },

    {
        id: 12,
        name: "Formal Shoes",
        price: 99.99,
        image: "images/formal-shoes.png",
        description: "Elegant formal shoes for office wear.",
        category: "Footwear"
    },

    // Kids
    {
        id: 13,
        name: "Kids Toy Car",
        price: 14.99,
        image: "images/toy-car.png",
        description: "Fun toy car for kids to play with.",
        category: "Kids"
    },

    {
        id: 14,
        name: "Children's Book",
        price: 9.99,
        image: "images/childrens-book.png",
        description: "Educational book for young children.",
        category: "Kids"
    },

    {
        id: 15,
        name: "Kids Backpack",
        price: 24.99,
        image: "images/kids-bagpack.png",
        description: "Colorful backpack for school kids.",
        category: "Kids"
    }
];

function displayFeaturedProducts() {
    const featuredProductsContainer = document.getElementById('featured-products');
    if (!featuredProductsContainer) return;

    const categoryOrder = ['Electronics', 'Clothing', 'Footwear', 'Kids'];

    categoryOrder.forEach(category => {
        const categoryProducts = products.filter(product => product.category === category);
        categoryProducts.forEach(product => {
            const productCard = createProductCard(product);
            featuredProductsContainer.appendChild(productCard);
        });
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="price">$${product.price.toFixed(2)}</p>
            <button class="click-btn" onclick="buyNow(${product.id})">Buy Now</button>
        </div>
    `;

    return card;
}

function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        alert(
            `Thank you for purchasing ${product.name}!\n` +
            `Price: $${product.price.toFixed(2)}\n\n` +
            `(This is a demo - no real purchase was made)`
        );
    }
}

function displayAllProducts() {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;

    products.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}

function loginUser(event) {
    event.preventDefault();
    alert("Login successful (Demo only)");
}

function signupUser(event) {
    event.preventDefault();
    alert("Signup successful (Demo only)");
}

document.addEventListener('DOMContentLoaded', function () {
    displayFeaturedProducts();
    displayAllProducts();
});

