const catalogItems = [
    { id: 1, name: 'Сковорода', price: 1500, img: 'assets/images/product1.jpg', category: 'kitchen' },
    { id: 2, name: 'Диван', price: 12000, img: 'assets/images/product2.jpg', category: 'living' },
    { id: 3, name: 'Полотенце', price: 500, img: 'assets/images/product3.jpg', category: 'bathroom' },
    { id: 4, name: 'Кастрюля', price: 2500, img: 'assets/images/product4.jpg', category: 'kitchen' },
    { id: 5, name: 'Кресло', price: 8000, img: 'assets/images/product5.jpg', category: 'living' },
    { id: 6, name: 'Моющее средство', price: 300, img: 'assets/images/product6.jpg', category: 'bathroom' },
    { id: 7, name: 'Тарелки', price: 1500, img: 'assets/images/product7.jpg', category: 'kitchen' },
    { id: 8, name: 'Шкаф', price: 10000, img: 'assets/images/product8.jpg', category: 'living' },
    { id: 9, name: 'Душевая лейка', price: 1000, img: 'assets/images/product9.jpg', category: 'bathroom' },
];

function renderCatalog(filteredItems) {
    const catalogContainer = document.getElementById('catalog');
    catalogContainer.innerHTML = '';
    filteredItems.forEach(item => {
        const catalogItem = document.createElement('div');
        catalogItem.classList.add('catalog-item');
        catalogItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p class="price">${item.price} руб.</p>
            <button class="add-to-cart" data-id="${item.id}">Добавить в корзину</button>
        `;
        catalogContainer.appendChild(catalogItem);
    });

    // Обработчик добавления товара в корзину
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const itemId = e.target.dataset.id;
            addToCart(itemId);
        });
    });
}

function filterCatalog() {
    const categoryFilter = document.getElementById('category').value;
    const priceFilter = document.getElementById('price-range').value;

    const filteredItems = catalogItems.filter(item => {
        const matchesCategory = categoryFilter ? item.category === categoryFilter : true;
        const matchesPrice = item.price <= priceFilter;
        return matchesCategory && matchesPrice;
    });

    renderCatalog(filteredItems);

    document.getElementById('price-value').textContent = `${priceFilter} руб.`;
}

// Обработчик изменения ползунка ценового диапазона
document.getElementById('price-range').addEventListener('input', filterCatalog);

// Функция добавления товара в корзину
function addToCart(itemId) {
    const item = catalogItems.find(item => item.id == itemId);
    if (!item) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Проверка на наличие товара в корзине
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        // Если товар уже есть в корзине, увеличиваем количество
        existingItem.quantity++;
    } else {
        // Если товара нет в корзине, добавляем его
        cart.push({ ...item, quantity: 1 });
    }

    // Сохраняем корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Обновление корзины в интерфейсе
    alert(`${item.name} добавлен в корзину!`);
}

// Фильтрация товаров при изменении
filterCatalog();  // Initial render
