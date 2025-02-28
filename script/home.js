document.addEventListener('DOMContentLoaded', () => {
    const searchCardsBtn = document.getElementById('searchCardsBtn');
    const searchUsersBtn = document.getElementById('searchUsersBtn');
    const searchInput = document.getElementById('searchInput');
    const scrollDown = document.querySelector('.scroll-down');
    const scrollTopBtn = document.getElementById('scrollTopBtn');


    let searchType = 'cards';
    searchCardsBtn.addEventListener('click', () => {
        searchType = 'cards';
        searchCardsBtn.classList.add('active');
        searchUsersBtn.classList.remove('active');
        searchInput.placeholder = `Search ${searchType}...`;
    });

    searchUsersBtn.addEventListener('click', () => {
        searchType = 'users';
        searchUsersBtn.classList.add('active');
        searchCardsBtn.classList.remove('active');
        searchInput.placeholder = `Search ${searchType}...`;
    });


    scrollDown.addEventListener('click', () => {
        const featuredContent = document.querySelector('.featuredContent');
        featuredContent.scrollIntoView({ behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const helpMenuToggle = document.getElementById('helpMenuToggle');
    const helpMenu = document.getElementById('helpMenu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    helpMenuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        helpMenu.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            helpMenu.classList.remove('show');
        }
    });

});