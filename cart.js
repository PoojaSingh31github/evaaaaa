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

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartContainer = document.getElementById("cart-container");
const cartLengthSpan = document.getElementById("cart-length");

// Render cart items
cart.forEach(element => {
    const item = products.find(p => p.id == element.itemId);
    if (item) {
        const cartRow = document.createElement("div");
        cartRow.className = "card bg-white rounded-lg shadow-lg p-4";
        const imageSrc = item.images.find(img => img !== '') || 'https://via.placeholder.com/150';
        
        cartRow.innerHTML = `
            <img src="${imageSrc}" alt="${item.title}" class="w-full h-40 object-cover rounded-md mb-4">
            <h2 class="text-xl font-semibold mb-2">${item.title}</h2>
            <p class="text-gray-600 mb-2">${item.description}</p>
            <p class="text-lg font-bold text-green-700">$${item.price} <span class="line-through text-gray-400">$${item.strikePrice}</span></p>
            <p class="text-gray-600">Available Quantity: <span class="font-bold">${element.qt}</span></p>
            <p class="text-gray-700">Category: <span class="font-bold">${item.category}</span></p>
        `;
        
        cartContainer.appendChild(cartRow);
    }
});