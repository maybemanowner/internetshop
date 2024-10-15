// Функция для переключения режима доступности
function toggleAccessibility() {
    document.body.classList.toggle('accessible');
    const button = document.getElementById('accessibility-toggle');
    if (document.body.classList.contains('accessible')) {
        button.textContent = 'Выключить режим доступности';
    } else {
        button.textContent = 'Включить режим доступности';
    }
}
