const navbar = `
    <nav class = "navbar">
        <div class = "main-title">
            Linnea Forslin
        </div>
        <ul class = "nav-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
        </ul>
    </nav>
    
    `;

const footer = `
    <footer class="footer">
        <img src="chicken-footer.png" alt="Footer" class="footer-img">
        <p class="copyright">&copy; 2024 Linnea Forslin</p>
    </footer>
`;

    document.body.insertAdjacentHTML('afterbegin', navbar)
    document.body.insertAdjacentHTML('beforeend', footer)