const posts = [
    {
        id: 1,
        title: "The Future of Creative Work in an AI Era",
        date: "January 5, 2026",
        category: "Technology",
        excerpt: "As artificial intelligence reshapes industries, creative professionals are discovering new ways to collaborate with machines while preserving the human touch.",
        content: "The intersection of human creativity and artificial intelligence represents one of the most profound shifts in how we work and create. Rather than replacing human creativity, AI tools are becoming collaborators—augmenting our capabilities and opening new avenues for expression. The key is learning to harness these tools while maintaining the irreplaceable human elements of intuition, emotion, and cultural understanding that give creative work its soul.",
        featured: true
    },
    {
        id: 2,
        title: "Rediscovering Slow Living",
        date: "January 3, 2026",
        category: "Lifestyle",
        excerpt: "In our hyperconnected world, a growing movement embraces intentional living and the art of doing less, better.",
        content: "The slow living movement isn't about doing everything at a snail's pace—it's about being intentional with your time and energy. It means savoring meals instead of rushing through them, choosing quality over quantity, and creating space for reflection. In a culture that celebrates busyness, choosing to slow down is a radical act of self-care and mindfulness."
    },
    {
        id: 3,
        title: "The Renaissance of Independent Publishing",
        date: "January 1, 2026",
        category: "Culture",
        excerpt: "Digital platforms have democratized publishing, giving rise to a new generation of independent voices and niche publications.",
        content: "We're witnessing a golden age for independent creators and publishers. No longer gatekept by traditional media conglomerates, writers, artists, and thinkers can reach global audiences directly. This shift has created space for diverse voices, experimental formats, and specialized content that would never have found a home in mainstream publishing."
    },
    {
        id: 4,
        title: "Minimalist Architecture and Modern Living",
        date: "December 28, 2025",
        category: "Design",
        excerpt: "How minimalist design principles are shaping the way we think about space, function, and the places we call home.",
        content: "Minimalist architecture strips away the superfluous to reveal the essential. Clean lines, open spaces, and careful material selection create environments that are both beautiful and deeply functional. It's not about deprivation—it's about clarity, allowing the architecture itself to become a backdrop for life rather than a distraction from it."
    },
    {
        id: 5,
        title: "The Art of Digital Detox",
        date: "December 25, 2025",
        category: "Lifestyle",
        excerpt: "Practical strategies for reclaiming your attention and building a healthier relationship with technology.",
        content: "Our devices promise connection but often deliver distraction. A digital detox isn't about abandoning technology—it's about using it intentionally. Set boundaries, create phone-free zones, and remember that being unreachable sometimes is not a luxury but a necessity for mental clarity and genuine human connection."
    },
    {
        id: 6,
        title: "Craft Coffee Culture Goes Global",
        date: "December 20, 2025",
        category: "Culture",
        excerpt: "From Tokyo to São Paulo, specialty coffee is creating communities and elevating an everyday ritual into an art form.",
        content: "The third wave coffee movement has transformed how we think about our daily cup. It's not just about caffeine—it's about origin, processing, roasting, and brewing. Each cup tells a story of farmers, climate, and craft. Coffee shops have become community hubs where people gather not just to drink, but to connect and create."
    }
];

function showPage(pageName) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    document.getElementById(pageName).classList.add('active');
    
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    
    window.scrollTo(0, 0);
}

function renderFeaturedPost() {
    const featured = posts.find(p => p.featured);
    if (!featured) return;

    document.getElementById('featuredPost').innerHTML = `
        <div class="featured-post" onclick="openModal(${featured.id})">
            <div class="featured-image">📰</div>
            <div class="featured-content">
                <div class="post-category">${featured.category}</div>
                <h2 class="featured-title">${featured.title}</h2>
                <p class="featured-excerpt">${featured.excerpt}</p>
                <div class="post-meta">${featured.date}</div>
            </div>
        </div>
    `;
}

function renderPosts() {
    const regularPosts = posts.filter(p => !p.featured);
    const grid = document.getElementById('postsGrid');
    grid.innerHTML = regularPosts.map(post => `
        <article class="post-card" onclick="openModal(${post.id})">
            <div class="post-image">📄</div>
            <div class="post-category">${post.category}</div>
            <h3 class="post-title">${post.title}</h3>
            <p class="post-excerpt">${post.excerpt}</p>
            <div class="post-meta">${post.date}</div>
        </article>
    `).join('');
}

function openModal(postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) return;

    document.getElementById('modalTitle').textContent = post.title;
    document.getElementById('modalMeta').innerHTML = `${post.category} • ${post.date}`;
    document.getElementById('modalBody').innerHTML = `<p>${post.content}</p>`;
    document.getElementById('modal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}

renderFeaturedPost();
renderPosts();