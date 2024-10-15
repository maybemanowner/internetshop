document.getElementById('checkout-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const paymentMethod = document.getElementById('payment-method').value;

    if (name && address && phone && email && paymentMethod) {
        alert('Спасибо за ваш заказ! Мы свяжемся с вами в ближайшее время.');
        localStorage.removeItem('cart');
        window.location.href = 'index.html';
    } else {
        alert('Пожалуйста, заполните все поля, то мы не сможем с вами связаться =)');
    }
});
