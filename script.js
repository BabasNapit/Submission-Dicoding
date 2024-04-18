// Efek hover pada artikel
const articles = document.querySelectorAll('article');

articles.forEach(article => {
    article.addEventListener('mouseover', function() {
        this.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)'; // Menambahkan bayangan saat dihover
    });

    article.addEventListener('mouseout', function() {
        this.style.boxShadow = 'none'; // Menghapus bayangan saat tidak dihover
    });
});
