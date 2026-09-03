const navbar = `
    <nav class="navbar">
        <div class="main-title">
            <a href="index.html">Linnea Forslin</a>
        </div>
        <ul class="nav-links">
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="resume.html">Resume</a></li>
            <div class="webring">
                <a href="https://calwebring.com/prev?current=linneaforslin.github.io">\<</a>
                
                <a href="https://calwebring.com/" class="webring-icon-link">
                    <span id="webring-icon-container" class="webring-icon"></span>
                </a>

                <a href="https://calwebring.com/next?current=linneaforslin.github.io">\></a>
            </div>
        </ul>
    </nav>
`;

    // <img src="webring-icon.svg" width="35" height="35" alt="Webring icon" class="webring-icon"/>

const footer = `
    <footer class="footer">
        <img src="img/chicken-footer.png" alt="Footer" class="footer-img">
        <p class="copyright">&copy; 2026 Linnea Forslin</p>
    </footer>
`;

// Inject navbar and footer
document.body.insertAdjacentHTML('afterbegin', navbar);
document.body.insertAdjacentHTML('beforeend', footer);

// Load SVG into DOM for CSS access
fetch('img/webring-icon.svg')
    .then(response => {
        if (!response.ok) throw new Error('SVG not found');
        return response.text();
    })
    .then(svgText => {
        const container = document.getElementById('webring-icon-container');
        if (container) {
            container.innerHTML = svgText;
        }
    })
    .catch(err => console.error('Error loading webring SVG:', err));
    

// <img src="https://calwebring.com/badge.png" width="30"/>
    // <a href="https://calwebring.com/random?current=linneaforslin.github.io"></a>