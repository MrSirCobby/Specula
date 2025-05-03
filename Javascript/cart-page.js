document.addEventListener("DOMContentLoaded", function () {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    const totalItemsElement = document.getElementById('total-items');
    const totalCostElement = document.getElementById('total-cost');

    let totalCost = 0;
    let totalItems = 0;

    cartItems.forEach((item, index) => {
        const quantity = item.quantity || 1;
        totalItems += quantity;
        totalCost += parseFloat(item.price) * quantity;

        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="item-details">
                <p class="item-name">${item.name}</p>
                <p class="item-cost">$${item.price} x ${quantity} = $${(item.price * quantity).toFixed(2)}</p>
                <p class="item-descript">${item.description}</p> 
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;

        cartContainer.appendChild(itemElement);
    });

    totalItemsElement.textContent = totalItems;
    totalCostElement.textContent = totalCost.toFixed(2);
});


function removeFromCart(index) {
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
    } else {
        cartItems.splice(index, 1);
    }

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
