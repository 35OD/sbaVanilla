document.addEventListener('DOMContentLoaded', () => {
    const loginPopup = document.getElementById('loginPopup');
    const closeBtn = document.getElementById('closeBtn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const switchToRegister = document.getElementById('switchToRegister');
    const switchToLogin = document.getElementById('switchToLogin');
    const formTitle = document.getElementById('formTitle');
    const togglePassword = document.getElementById('togglePassword');
    const toggleRegPassword = document.getElementById('toggleRegPassword');
    const passwordInput = document.getElementById('passwordInput');
    const regPasswordInput = document.getElementById('regPasswordInput');

    function togglePasswordVisibility(input, toggle) {
        if (input.type === 'password') {
            input.type = 'text';
            toggle.textContent = 'Hide Password';
        } else {
            input.type = 'password';
            toggle.textContent = 'Show Password';
        }
    }

    togglePassword.addEventListener('click', () => {
        togglePasswordVisibility(passwordInput, togglePassword);
    });

    toggleRegPassword.addEventListener('click', () => {
        togglePasswordVisibility(regPasswordInput, toggleRegPassword);
    });

    closeBtn.addEventListener('click', () => {
        loginPopup.classList.remove('show');
    });

    switchToRegister.addEventListener('click', () => {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        formTitle.textContent = 'Register';
    });

    switchToLogin.addEventListener('click', () => {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        formTitle.textContent = 'Login';
    });
});