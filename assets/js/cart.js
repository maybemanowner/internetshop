function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Корзина пуста.</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <p>${item.name} - ${item.price} руб. (x${item.quantity})</p>
                <button class="remove-from-cart" data-id="${item.id}">Удалить</button>
            `;
            cartContainer.appendChild(cartItem);
        });

        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const itemId = e.target.dataset.id;
                removeFromCart(itemId);
            });
        });
    }

    document.getElementById('clear-cart').addEventListener('click', () => {
        localStorage.removeItem('cart');
        renderCart();
    });

    document.getElementById('proceed-to-checkout').addEventListener('click', () => {
        window.location.href = 'checkout.html';
    });
}

// Функция удаления товара из корзины
function removeFromCart(itemId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id != itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

renderCart();
