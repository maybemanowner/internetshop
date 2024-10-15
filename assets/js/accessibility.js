document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('accessibility-toggle');
    const body = document.body;

    // Проверяем, был ли уже активирован режим доступности в локальном хранилище
    if (localStorage.getItem('accessibleMode') === 'enabled') {
        body.classList.add('accessible');
        toggleButton.textContent = 'Выключить режим доступности';
    }

    // Переключаем режим доступности
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('accessible');
        
        // Обновляем текст кнопки в зависимости от состояния
        if (body.classList.contains('accessible')) {
            toggleButton.textContent = 'Выключить режим доступности';
            localStorage.setItem('accessibleMode', 'enabled');
        } else {
            toggleButton.textContent = 'Включить режим доступности';
            localStorage.setItem('accessibleMode', 'disabled');
        }
    });
});
