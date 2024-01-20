function showOptions(element) {
    const optionsWindow = element.querySelector('.options-window');
    optionsWindow.style.display = 'block';
}

function hideOptions() {
    const optionsWindows = document.querySelectorAll('.options-window');
    optionsWindows.forEach(window => {
        window.style.display = 'none';
    });
}
