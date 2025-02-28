document.addEventListener('DOMContentLoaded', () => {
    const toggleRegPassword = document.getElementById('toggleRegPassword');
    const regPasswordInput = document.getElementById('regPasswordInput');

    toggleRegPassword.addEventListener('click', () => {
        const type = regPasswordInput.type === 'password' ? 'text' : 'password';
        regPasswordInput.type = type;
        toggleRegPassword.textContent = type === 'password' ? 'Show Password' : 'Hide Password';
    });
});