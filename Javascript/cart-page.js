document.addEventListener("DOMContentLoaded", function () {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalItemsElement = document.getElementById('total-items');
    const totalCostElement = document.getElementById('total-cost');

    let totalCost = 0;

    cartItems.forEach((item, index) => {
        totalCost += parseFloat(item.price);

        const itemElement = document.createElement('div');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width:300px; height:auto;">
            <p>${item.name}</p>
            <p>$${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
            <hr>
        `;
        cartContainer.appendChild(itemElement);
    });

    // Update totals
    totalItemsElement.textContent = cartItems.length;
    totalCostElement.textContent = totalCost.toFixed(2);
});

function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    location.reload();
}

document.getElementById('purchase-btn').addEventListener('click', function () {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function confirmPurchase() {
    const gmail = document.getElementById('gmail-input').value;

    if (!gmail.endsWith('@gmail.com')) {
        alert('Please enter a valid Gmail address.');
        return;
    }

    alert(`Purchase confirmed! A receipt has been sent to ${gmail}`);
    localStorage.removeItem('cart'); 
    closePopup();
    location.reload(); 
}

document.getElementById('clear-cart-btn').addEventListener('click', function () {
    if (confirm("Are you sure you want to clear the cart?")) {
        localStorage.removeItem('cart');
        location.reload();
    }
});
