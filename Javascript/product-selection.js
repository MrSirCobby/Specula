function selectProduct(name, price, imageUrl) {
    localStorage.setItem('productName', name);
    localStorage.setItem('productPrice', price);
    localStorage.setItem('productImage', imageUrl);
}
