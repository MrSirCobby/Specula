document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('product-name').innerText = localStorage.getItem('productName');
    document.getElementById('product-price').innerText = "$" + localStorage.getItem('productPrice');
    document.getElementById('product-image').src = localStorage.getItem('productImage');
});

// Function to add to cart
function addToCart() {
    const productName = localStorage.getItem('productName');
    const productPrice = localStorage.getItem('productPrice');
    const productImage = localStorage.getItem('productImage');

    const product = { name: productName, price: productPrice, image: productImage };

    addToCartStorage(product);

    window.location.href = "Cart.html";
}

// Cart data
function addToCartStorage(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}
