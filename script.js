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
        <div class="webring">
        <a href="https://calwebring.com/prev?current=linneaforslin.github.io">←</a>
            <img src="icon-white.png" width="25"/>
            <a href="https://calwebring.com/random?current=linneaforslin.github.io"></a>
            <a href="https://calwebring.com/next?current=linneaforslin.github.io">→</a>
        </div>
        <p class="copyright">&copy; 2026 Linnea Forslin</p>
    </footer>
`;

// <img src="https://calwebring.com/badge.png" width="30"/>

    document.body.insertAdjacentHTML('afterbegin', navbar)
    document.body.insertAdjacentHTML('beforeend', footer)