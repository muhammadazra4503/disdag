document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('tas-checkbox');
    const acceptButton = document.querySelector('.btn-accept');
    const loginModal = document.querySelector('.login-modal');
    const tasBox = document.querySelector('.tas-box');
    const background = document.querySelector('.bg');

    checkbox.addEventListener('change', function () {
        acceptButton.disabled = !this.checked;
    });

    acceptButton.addEventListener('click', function () {
        tasBox.style.display = 'none';

        loginModal.style.display = 'block';

        background.style.filter = 'none';
    });
});