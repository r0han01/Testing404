document.getElementById('goHome').onclick = function() {
    window.location.href = 'https://username.github.io'; // Replace with your homepage URL
};

document.getElementById('randomPage').onclick = function() {
    const pages = [
        'https://username.github.io/page1.html',
        'https://username.github.io/page2.html',
        'https://username.github.io/page3.html' // Add your random page URLs
    ];
    const randomPage = pages[Math.floor(Math.random() * pages.length)];
    window.location.href = randomPage;
};

