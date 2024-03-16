function toggleTheme() {
    var body = document.body;
    var themeToggleText = document.getElementById('theme-toggle');
    if (body.classList.contains('night')) {
        body.classList.remove('night');
        themeToggleText.innerHTML = 'Day Mode';
    } else {
        body.classList.add('night');
        themeToggleText.innerHTML = 'Night Mode';
    }
}
