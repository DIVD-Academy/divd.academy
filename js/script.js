document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('check');
    var menu = document.querySelector('.menu');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            menu.style.right = '0';
        } else {
            menu.style.right = '-100%';
        }
    });
});
