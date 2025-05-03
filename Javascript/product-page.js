document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('product-name').innerText = localStorage.getItem('productName');
    document.getElementById('product-price').innerText = "$" + localStorage.getItem('productPrice');
    document.getElementById('product-image').src = localStorage.getItem('productImage');
    document.getElementById('product-descript').innerText = localStorage.getItem('productDescript'); 
});


// Function to add to cart
function addToCart() {
    const productName = localStorage.getItem('productName');
    const productPrice = localStorage.getItem('productPrice');
    const productImage = localStorage.getItem('productImage');
    const productDescription = localStorage.getItem('productDescript');  

    const product = { 
        name: productName, 
        price: productPrice, 
        image: productImage, 
        description: productDescription  
    };
    addToCartStorage(product);

    showPopup();        
    updateCartCount();  
}


// Cart data
function addToCartStorage(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItem = cart.find(item => item.name === product.name && item.price === product.price);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

function showPopup() {
    const popup = document.getElementById('popup-notification');
    popup.style.display = 'block';
    popup.style.opacity = '1';

    // Fade out after 3 seconds
    setTimeout(() => {
        popup.style.opacity = '0';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    }, 3000);

    popup.onclick = () => {
        window.location.href = 'Cart.html';
        popup.style.display = 'none';
    };
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.length;
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = count;
    }
}

// Update cart count on page load too
document.addEventListener('DOMContentLoaded', updateCartCount);
