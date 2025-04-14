// Sample news data (replace with backend API fetch)
const newsArticles = [
    {
        title: "Canada Announces New Health Policy",
        description: "Government unveils plans to improve rural healthcare access.",
        image: "https://via.placeholder.com/300x200",
        category: "Health"
    },
    {
        title: "Toronto Hosts Global Tech Summit",
        description: "Innovators gather to discuss AI and sustainability.",
        image: "https://via.placeholder.com/300x200",
        category: "Tech"
    },
    {
        title: "Climate Action Plan Gains Support",
        description: "Provinces unite for greener future.",
        image: "https://via.placeholder.com/300x200",
        category: "Environment"
    }
];

// Load news articles
function loadNews() {
    const newsContainer = document.getElementById('news-container');
    newsArticles.forEach(article => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-card');
        newsCard.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description}</p>
        `;
        newsContainer.appendChild(newsCard);
    });
}

// Accessibility toggles
document.getElementById('high-contrast').addEventListener('click', () => {
    document.body.classList.toggle('high-contrast');
});

document.getElementById('text-size').addEventListener('click', () => {
    document.body.classList.toggle('large-text');
});

// Newsletter form submission
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    e.target.reset();
});

// Initialize
window.onload = loadNews;