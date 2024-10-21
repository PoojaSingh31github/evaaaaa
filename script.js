const products =
    [
        {
            "id": 1,
            "title": "Wireless Bluetooth Headphones",
            "description": "High-quality wireless headphones with noise cancellation and long battery life.",
            "price": 49.99,
            "strikePrice": 79.99,
            "quantity": 120,
            "category": "Electronics",
            "images": [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                ""
            ]
        },
        {
            "id": 2,
            "title": "Smartphone with 128GB Storage",
            "description": "A smartphone with 128GB storage, 8GB RAM, and a 48MP camera.",
            "price": 599.99,
            "strikePrice": 699.99,
            "quantity": 85,
            "category": "Electronics",
            "images": [
                "https://via.placeholder.com/150",
                "",
                "https://via.placeholder.com/150"
            ]
        },
        {
            "id": 3,
            "title": "4K Ultra HD Smart TV",
            "description": "55-inch 4K Ultra HD Smart TV with built-in streaming apps.",
            "price": 449.99,
            "strikePrice": 549.99,
            "quantity": 30,
            "category": "Electronics",
            "images": [
                "",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ]
        },
        {
            "id": 4,
            "title": "Gaming Laptop",
            "description": "High-performance gaming laptop with Intel i7, 16GB RAM, and RTX 3060.",
            "price": 1199.99,
            "strikePrice": 1399.99,
            "quantity": 50,
            "category": "Electronics",
            "images": [
                "https://via.placeholder.com/150",
                "",
                "https://via.placeholder.com/150"
            ]
        },
        {
            "id": 5,
            "title": "Fitness Smartwatch",
            "description": "Smartwatch with heart rate monitor, GPS, and step tracker.",
            "price": 129.99,
            "strikePrice": 199.99,
            "quantity": 150,
            "category": "Wearables",
            "images": [
                "",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ]
        },
        {
            "id": 6,
            "title": "Portable Bluetooth Speaker",
            "description": "Compact and powerful speaker with deep bass and 10-hour battery life.",
            "price": 39.99,
            "strikePrice": 59.99,
            "quantity": 200,
            "category": "Electronics",
            "images": [
                "https://via.placeholder.com/150",
                "",
                "https://via.placeholder.com/150"
            ]
        },
        {
            "id": 7,
            "title": "Stainless Steel Water Bottle",
            "description": "Insulated water bottle that keeps drinks cold for 24 hours.",
            "price": 14.99,
            "strikePrice": 24.99,
            "quantity": 300,
            "category": "Home & Kitchen",
            "images": [
                "",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ]
        },
        {
            "id": 8,
            "title": "Ergonomic Office Chair",
            "description": "Comfortable office chair with lumbar support and adjustable height.",
            "price": 179.99,
            "strikePrice": 249.99,
            "quantity": 45,
            "category": "Furniture",
            "images": [
                "https://via.placeholder.com/150",
                "",
                "https://via.placeholder.com/150"
            ]
        },
        {
            "id": 9,
            "title": "Wireless Charging Pad",
            "description": "Fast wireless charging pad compatible with all Qi-enabled devices.",
            "price": 24.99,
            "strikePrice": 34.99,
            "quantity": 170,
            "category": "Electronics",
            "images": [
                "",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ]
        },
        {
            "id": 10,
            "title": "Action Camera 4K",
            "description": "Waterproof action camera with 4K recording and wide-angle lens.",
            "price": 99.99,
            "strikePrice": 149.99,
            "quantity": 75,
            "category": "Cameras",
            "images": [
                "https://via.placeholder.com/150",
                "",
                "https://via.placeholder.com/150"
            ]
        },
        {
            "id": 11,
            "title": "Wireless Earbuds with Charging Case",
            "description": "Compact and lightweight earbuds with a 24-hour battery life and charging case.",
            "price": 59.99,
            "strikePrice": 79.99,
            "quantity": 150,
            "category": "Electronics",
            "images": [
                "https://via.placeholder.com/150",
                "",
                "https://via.placeholder.com/150"
            ]
        },
        {
            "id": 12,
            "title": "Electric Standing Desk",
            "description": "Adjustable height standing desk with motorized lift and memory settings.",
            "price": 349.99,
            "strikePrice": 499.99,
            "quantity": 20,
            "category": "Furniture",
            "images": [
                "",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ]
        },
        {
            "id": 13,
            "title": "Noise-Cancelling Headphones",
            "description": "Over-ear headphones with active noise-cancelling and 30-hour battery life.",
            "price": 89.99,
            "strikePrice": 129.99,
            "quantity": 60,
            "category": "Electronics",
            "images": [
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150",
                ""
            ]
        },
        {
            "id": 14,
            "title": "Smart Thermostat",
            "description": "Wi-Fi enabled smart thermostat that allows temperature control via smartphone.",
            "price": 129.99,
            "strikePrice": 179.99,
            "quantity": 45,
            "category": "Home Appliances",
            "images": [
                "",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ]
        },
        {
            "id": 15,
            "title": "Mechanical Gaming Keyboard",
            "description": "RGB backlit mechanical keyboard with programmable keys and fast response.",
            "price": 69.99,
            "strikePrice": 99.99,
            "quantity": 100,
            "category": "Electronics",
            "images": [
                "https://via.placeholder.com/150",
                "",
                "https://via.placeholder.com/150"
            ]
        },
        {
            "id": 16,
            "title": "Stainless Steel Cookware Set",
            "description": "10-piece stainless steel cookware set with non-stick coating.",
            "price": 149.99,
            "strikePrice": 199.99,
            "quantity": 80,
            "category": "Home & Kitchen",
            "images": [
                "",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ]
        },
        {
            "id": 17,
            "title": "Fitness Tracker with Heart Rate Monitor",
            "description": "Fitness tracker that monitors heart rate, sleep, and steps.",
            "price": 49.99,
            "strikePrice": 79.99,
            "quantity": 220,
            "category": "Wearables",
            "images": [
                "https://via.placeholder.com/150",
                "",
                "https://via.placeholder.com/150"
            ]
        },
        {
            "id": 18,
            "title": "LED Desk Lamp with USB Charging Port",
            "description": "Dimmable LED desk lamp with adjustable brightness and built-in USB port.",
            "price": 34.99,
            "strikePrice": 49.99,
            "quantity": 110,
            "category": "Home & Kitchen",
            "images": [
                "",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ]
        },
        {
            "id": 19,
            "title": "Air Purifier for Home",
            "description": "HEPA air purifier with 3-stage filtration and coverage up to 500 sq. ft.",
            "price": 89.99,
            "strikePrice": 129.99,
            "quantity": 60,
            "category": "Home Appliances",
            "images": [
                "https://via.placeholder.com/150",
                "",
                "https://via.placeholder.com/150"
            ]
        },
        {
            "id": 20,
            "title": "Digital Photo Frame",
            "description": "Wi-Fi enabled digital photo frame that can display photos and videos.",
            "price": 99.99,
            "strikePrice": 149.99,
            "quantity": 75,
            "category": "Electronics",
            "images": [
                "",
                "https://via.placeholder.com/150",
                "https://via.placeholder.com/150"
            ]
        }
    ]

const reviews = [
    {
        "userId": 101,
        "productId": 1,
        "content": "Great sound quality and battery life. Very comfortable to wear.",
        "rating": 5
    },
    {
        "userId": 130,
        "productId": 6,
        "content": "Decent speaker, but doesn’t last very long without charging.",
        "rating": 3
    },
    {
        "userId": 102,
        "productId": 1,
        "content": "Decent, but the ear cups are a bit too tight for my liking.",
        "rating": 3
    },
    {
        "userId": 104,
        "productId": 1,
        "content": "Battery drains faster than expected, but sound quality is top-notch.",
        "rating": 4
    },
    {
        "userId": 106,
        "productId": 2,
        "content": "Solid performance, but the camera is not up to par with competitors.",
        "rating": 4
    },
    {
        "userId": 107,
        "productId": 2,
        "content": "Smooth interface and fast processor. Satisfied with the purchase.",
        "rating": 5
    },
    {
        "userId": 109,
        "productId": 2,
        "content": "Perfect for everyday use. Fast charging is a plus.",
        "rating": 4
    },
    {
        "userId": 110,
        "productId": 2,
        "content": "Amazing phone for the price. Highly recommended.",
        "rating": 5
    },
    {
        "userId": 111,
        "productId": 3,
        "content": "The picture quality on this TV is incredible!",
        "rating": 5
    },
    {
        "userId": 108,
        "productId": 2,
        "content": "Good phone, but battery life could be better.",
        "rating": 3
    },
    {
        "userId": 112,
        "productId": 3,
        "content": "The colors are vibrant, but the remote control is sluggish.",
        "rating": 4
    },
    {
        "userId": 105,
        "productId": 1,
        "content": "Super lightweight and durable. Worth every penny.",
        "rating": 5
    },
    {
        "userId": 114,
        "productId": 3,
        "content": "Good value for the price. Easy to set up.",
        "rating": 5
    },
    {
        "userId": 115,
        "productId": 3,
        "content": "Perfect TV for gaming. I love the refresh rate.",
        "rating": 5
    },
    {
        "userId": 129,
        "productId": 6,
        "content": "Very loud for its size. Highly recommended.",
        "rating": 5
    },
    {
        "userId": 116,
        "productId": 4,
        "content": "Handles all my gaming needs perfectly. A bit loud when running.",
        "rating": 4
    },
    {
        "userId": 117,
        "productId": 4,
        "content": "Fast and smooth performance. Worth the money.",
        "rating": 5
    },
    {
        "userId": 103,
        "productId": 1,
        "content": "Amazing clarity and bass. Best headphones I’ve ever owned.",
        "rating": 5
    },
    {
        "userId": 118,
        "productId": 4,
        "content": "Gets hot after long gaming sessions, but overall great.",
        "rating": 4
    },
    {
        "userId": 120,
        "productId": 4,
        "content": "A beast for performance, though it’s a bit bulky.",
        "rating": 4
    }, {
        "userId": 123,
        "productId": 5,
        "content": "Solid fitness tracker. Battery life is good.",
        "rating": 4
    },
    {
        "userId": 122,
        "productId": 5,
        "content": "Tracks all my activities well. Sleek design.",
        "rating": 5
    },
    {
        "userId": 124,
        "productId": 5,
        "content": "Works well, but the heart rate monitor isn’t very accurate.",
        "rating": 3
    },
    {
        "userId": 138,
        "productId": 8,
        "content": "Best ergonomic chair I’ve used so far.",
        "rating": 5
    },
    {
        "userId": 125,
        "productId": 5,
        "content": "Good fitness tracker for the price, but not for serious athletes.",
        "rating": 4
    },
    {
        "userId": 126,
        "productId": 6,
        "content": "Amazing sound for such a compact speaker. Love it.",
        "rating": 5
    },
    {
        "userId": 127,
        "productId": 6,
        "content": "Portable and powerful. Perfect for outdoor gatherings.",
        "rating": 5
    },
    {
        "userId": 121,
        "productId": 5,
        "content": "Great tracker for daily fitness, but the app could be better.",
        "rating": 4
    },
    {
        "userId": 128,
        "productId": 6,
        "content": "Impressive bass, but the battery life could be longer.",
        "rating": 4
    },
    {
        "userId": 132,
        "productId": 7,
        "content": "Love the design, but it leaks if not sealed properly.",
        "rating": 3
    },
    {
        "userId": 142,
        "productId": 9,
        "content": "Good value for the price, but could be faster.",
        "rating": 4
    },
    {
        "userId": 133,
        "productId": 7,
        "content": "Sturdy and durable. I take it everywhere.",
        "rating": 4
    },
    {
        "userId": 135,
        "productId": 7,
        "content": "Good bottle, but a bit hard to clean.",
        "rating": 3
    },
    {
        "userId": 136,
        "productId": 8,
        "content": "Super comfortable chair for long hours at the desk.",
        "rating": 5
    },
    {
        "userId": 148,
        "productId": 10,
        "content": "Solid camera, but the lens options are limited.",
        "rating": 4
    },
    {
        "userId": 137,
        "productId": 8,
        "content": "Great support, but the padding could be thicker.",
        "rating": 4
    },
    {
        "userId": 140,
        "productId": 8,
        "content": "A bit expensive, but worth the investment for comfort.",
        "rating": 4
    },
    {
        "userId": 141,
        "productId": 9,
        "content": "Works well, but sometimes disconnects unexpectedly.",
        "rating": 3
    },
    {
        "userId": 150,
        "productId": 10,
        "content": "Good camera for beginners, but lacks advanced features.",
        "rating": 4
    },
    {
        "userId": 143,
        "productId": 9,
        "content": "Great for phone backups. No issues so far.",
        "rating": 5
    },
    {
        "userId": 134,
        "productId": 7,
        "content": "Keeps drinks cold for a long time. No complaints.",
        "rating": 5
    },
    {
        "userId": 144,
        "productId": 9,
        "content": "Storage capacity is great, but the speed is average.",
        "rating": 4
    },
    {
        "userId": 145,
        "productId": 9,
        "content": "Does the job, but the transfer speed could be better.",
        "rating": 3
    },
    {
        "userId": 146,
        "productId": 10,
        "content": "Captured amazing photos on my trip. Highly recommend.",
        "rating": 5
    },
    {
        "userId": 119,
        "productId": 4,
        "content": "The graphics are amazing! Best laptop for gaming.",
        "rating": 5
    },
    {
        "userId": 139,
        "productId": 8,
        "content": "Helps with back pain, but armrests could be better.",
        "rating": 4
    },
    {
        "userId": 147,
        "productId": 10,
        "content": "Great for outdoor photography, but struggles in low light.",
        "rating": 4
    },
    {
        "userId": 113,
        "productId": 3,
        "content": "Great for streaming, but the sound system could be better.",
        "rating": 4
    },
    {
        "userId": 149,
        "productId": 10,
        "content": "Picture quality is great, but the battery drains fast.",
        "rating": 3
    },
    {
        "userId": 131,
        "productId": 7,
        "content": "Keeps water cold for hours. Great for outdoor activities.",
        "rating": 5
    }
]

const productsContainer = document.getElementById("products-container");

const selectCat = document.getElementById("selectCat");
const selectPrice = document.getElementById("selectPrice");

function displayProducts(filteredProducts = products) {
    productsContainer.innerHTML = "";
    filteredProducts.forEach((product, index) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product", "bg-white", "p-4", "shadow-md", "rounded-lg");

        const productImage = product.images.find(img => img !== "") || "https://via.placeholder.com/150";

        const starRating = getStarRating(product.rating);

        productDiv.innerHTML = `
        <div class="product-image mb-3">
          <img src="${productImage}" alt="${product.title}" class="w-full h-48 object-cover rounded-lg" />
        </div>
        <div class="product-info mb-3">
          <h3 class="text-xl font-bold">${product.title}</h3>
          <p class="text-gray-600">${product.description}</p>
          <p class="text-lg font-bold">Price: $${product.price} 
          <span class="text-sm line-through text-gray-500">$${product.strikePrice}</span></p>
          <p><strong>Category:</strong> ${product.category}</p>
          <p><strong>Available Quantity:</strong> ${product.quantity}</p>
        </div>
        <div class="rating mb-3">
          <p><strong>Rating:</strong> ${starRating}</p>
        </div>
        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg" onclick="addToCart(${index + 1}, ${product.id})">Add To Cart</button>
      `;

        const productReviews = reviews.filter(review => review.productId === product.id);
        if (productReviews.length > 0) {
            const reviewsDiv = document.createElement("div");
            reviewsDiv.classList.add("reviews", "mt-3", "text-sm", "text-gray-600");
            reviewsDiv.innerHTML = `<h4 class="font-bold">Customer Reviews:</h4>`;
            productReviews.forEach((review) => {
                const reviewDiv = document.createElement("div");
                reviewDiv.classList.add("review", "mt-2");
                reviewDiv.innerHTML = `<p>${review.rating} ★ - ${review.content}</p>`;
                reviewsDiv.appendChild(reviewDiv);
            });
            productDiv.appendChild(reviewsDiv);
        }

        productsContainer.appendChild(productDiv);
    });
}

function getStarRating(rating) {
    let stars = "";
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += `<i class="fa-regular fa-star" style="color: #FFD43B;"></i>`;
        } else {
            stars += `<i class="fa-solid fa-star" style="color: #FFD43B;"></i>`;
        }
    }
    return stars;
}
// taking category from product array 
const uniqueCategories = [...new Set(products.map(product => product.category))];

uniqueCategories.map((cat) => {
    const options = document.createElement("option");
    options.value = cat;
    options.text = cat;
    selectCat.appendChild(options)

});

function applyFilter() {
    const selectedCat = selectCat.value;
    if (selectedCat === "all") {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter((p) => p.category === selectedCat);
        displayProducts(filteredProducts);
    }
}

function applySort() {
    const selectedPrice = selectPrice.value;
    let sortedProducts = [...products];
    if (selectedPrice === "low-high") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else {
        sortedProducts.sort((a, b) => b.price - a.price);
    }
    displayProducts(sortedProducts);
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartLen = document.getElementById("cartLen");

function updateCartLen() {
    let totalQuantity = cart.reduce((sum, item) => sum + item.qt, 0);
    cartLen.textContent = totalQuantity;
}

function addToCart(index, id) {
    const productID = products[index - 1].id;
    const temp = cart.find((p) => p.itemId == productID);

    if (temp != null) {
        temp.qt++; 
    } else {
        const res = {
            itemId: productID,
            qt: 1 
        };
        cart.push(res); 
    }
    window.alert(`product added to cart`)
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartLen();
}

updateCartLen();
displayProducts();
