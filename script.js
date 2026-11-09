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


const artworks = [
  { title: "Illuminated",             img: "illuminated.jpg" },
  { title: "A Moment of Discovery",   img: "a-moment-of-discovery.jpg" },
  { title: "Food4All",                img: "food4all-1.jpg" },
  { title: "Food4All",                img: "food4all-2.jpg" },
  { title: "Rancho Roben Murals",     img: "murals.jpg" },
  { title: "Seeds of a Dream",        img: "seeds-of-a-dream.jpg" },
  { title: "Rabbit Rabbit",           img: "rabbit-rabbit.jpg" },
  { title: "Companion",               img: "companion.jpg" },
  { title: "Dissolution",             img: "dissolution.jpg"},
  { title: "Paper Cranes",            img: "paper-cranes.jpg" },
//   { title: "No Idling",               img: "no-idling.jpg" },
  { title: "Sailing",                 img: "sailing.jpg" },
  { title: "Heteractis Crispa",       img: "heteractis-crispa.jpg"},
  { title: "Neural Network",          img: "neural-network.jpg" },
  { title: "Airborne",                img: "airborne.jpg" },
  { title: "Maui Coloring Page",      img: "maui-coloring-book.jpg"},
  { title: "Suspension",              img: "suspension.jpg" },
  { title: "Headache",                img: "headache.jpg" },
  { title: "Wild Berries",            img: "wild-berries.jpg" },
//   { title: "T Shirt Design",          img: "t-shirt-design.jpg" },
  
];

const grid = document.getElementById("portfolio-grid");

grid.innerHTML = artworks.map(({ title, img }) => `
  <div class="grid-card">
    <div class="card-img-wrapper">
      <img src="img/${img}" alt="${title}">
      <div class="card-overlay">
        <h3 class="card-title">${title}</h3>
      </div>
    </div>
  </div>
`).join("");



// ----- Lightbox -----
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = `
    <button class="lightbox-btn lightbox-prev" aria-label="Previous">
    <svg viewBox="0 0 24 24"><path d="M21 12 H3 M9 5 L2 12 L9 19"/></svg>
  </button>
  <figure class="lightbox-figure">
    <img class="lightbox-img" alt="">
    <figcaption class="lightbox-caption"></figcaption>
  </figure>
  <button class="lightbox-btn lightbox-next" aria-label="Next">
    <svg viewBox="0 0 24 24"><path d="M3 12 H21 M15 5 L22 12 L15 19"/></svg>
  </button>
`;
document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector(".lightbox-img");
const lightboxCaption = lightbox.querySelector(".lightbox-caption");
let currentIndex = 0;

function showArtwork(index) {
  // Wrap around at both ends
  currentIndex = (index + artworks.length) % artworks.length;
  const { title, img } = artworks[currentIndex];
  lightboxImg.src = `img/${img}`;
  lightboxImg.alt = title;
  lightboxCaption.textContent = title;
}

function openLightbox(index) {
  showArtwork(index);
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

// Clicking a card opens the lightbox at that card's position
grid.addEventListener("click", (e) => {
  const card = e.target.closest(".grid-card");
  if (!card) return;
  const index = [...grid.children].indexOf(card);
  openLightbox(index);
});

// Arrow buttons (stopPropagation so they don't trigger the close-on-click)
lightbox.querySelector(".lightbox-prev").addEventListener("click", (e) => {
  e.stopPropagation();
  showArtwork(currentIndex - 1);
});
lightbox.querySelector(".lightbox-next").addEventListener("click", (e) => {
  e.stopPropagation();
  showArtwork(currentIndex + 1);
});

// Click the dark background to close
lightbox.addEventListener("click", closeLightbox);

// Keyboard: Esc closes, arrows navigate
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showArtwork(currentIndex - 1);
  if (e.key === "ArrowRight") showArtwork(currentIndex + 1);
});