document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('product-name').innerText = localStorage.getItem('productName');
    document.getElementById('product-price').innerText = "$" + localStorage.getItem('productPrice');
    document.getElementById('product-image').src = localStorage.getItem('productImage');
});
