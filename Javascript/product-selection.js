function selectProduct(name, price, imageUrl, description) {
    localStorage.setItem('productName', name);
    localStorage.setItem('productPrice', price);
    localStorage.setItem('productImage', imageUrl);
    localStorage.setItem('productDescript', description); 
}
