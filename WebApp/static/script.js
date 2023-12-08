// Funkcja do zmiany statusu dla danego urządzenia
function changeStatus(endpoint, containerId, className, text, color) {
    const statusElement = document.getElementById(containerId);
    statusElement.innerHTML = `Urządzenie <span class="${className}" style="color: ${color}">${text}</span>`;
    saveStatus(containerId, text, color); // Zapisz status i kolor

    fetch(endpoint, { method: 'GET' })
        .then(response => {
            if (!response.ok) {
                throw new Error('Wystąpił błąd podczas wysyłania żądania');
            }
        })
        .catch(error => {
            console.error(error);
        });
}

// Funkcja do zapisu statusu w pamięci sessionStorage
function saveStatus(containerId, text, color) {
    sessionStorage.setItem(`${containerId}_status`, text);
    sessionStorage.setItem(`${containerId}_color`, color);
}

// Funkcja do odczytu i ustawienia statusu z pamięci sessionStorage
function setStatusFromStorage(containerId) {
    const storedText = sessionStorage.getItem(`${containerId}_status`);
    const storedColor = sessionStorage.getItem(`${containerId}_color`);

    if (storedText && storedColor) {
        const statusElement = document.getElementById(containerId);
        statusElement.innerHTML = `Urządzenie <span class="${storedText === 'włączone' ? 'device-on' : 'device-off'}" style="color: ${storedColor}">${storedText}</span>`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setStatusFromStorage('status');
    setStatusFromStorage('status2');
    setStatusFromStorage('status3');

    document.getElementById('turnOn').addEventListener('click', () =>
        changeStatus(
            'https://svr59.supla.org/direct/XYZ/XYZ/turn-on',
            'status',
            'device-on',
            'ON',
            '#03AC13'
        )
    );

    document.getElementById('turnOff').addEventListener('click', () =>
        changeStatus(
            'https://svr59.supla.org/direct/XYZ/XYZ/turn-off',
            'status',
            'device-off',
            'OFF',
            'rgb(255, 0, 0)'
        )
    );

    document.getElementById('turnOn2').addEventListener('click', () =>
        changeStatus(
            'https://svr59.supla.org/direct/XYZ/XYZ/turn-on',
            'status2',
            'device-on',
            'ON',
            '#03AC13'
        )
    );

    document.getElementById('turnOff2').addEventListener('click', () =>
        changeStatus(
            'https://svr59.supla.org/direct/XYZ/XYZ/turn-off',
            'status2',
            'device-off',
            'OFF',
            'rgb(255, 0, 0)'
        )
    );

    document.getElementById('turnOn3').addEventListener('click', () =>
        changeStatus(
            'https://svr59.supla.org/direct/XYZ/XYZ/turn-on',
            'status3',
            'device-on',
            'ON',
            '#03AC13'
        )
    );

    document.getElementById('turnOff3').addEventListener('click', () =>
        changeStatus(
            'https://svr59.supla.org/direct/XYZ/XYZ/turn-off',
            'status3',
            'device-off',
            'OFF',
            'rgb(255, 0, 0)'
        )
    );
});

