// ui.js
export function renderPuppies(puppies) {
    const puppyGallery = document.getElementById('puppy-gallery');
    puppyGallery.innerHTML = ''; // Clear previous images

    if (puppies.length === 0) {
        puppyGallery.innerHTML = "<p>No puppies found.</p>";
    } else {
        puppies.forEach(puppy => {
            const puppyCard = document.createElement('div');
            puppyCard.classList.add('puppy-card');
            puppyCard.innerHTML = `
                <img src="${puppy.url}" alt="Puppy" class="puppy-img">
            `;
            puppyGallery.appendChild(puppyCard);
        });
    }
}

export function togglePaginationButtons(page, hasMore) {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.disabled = page === 1;
    nextBtn.disabled = !hasMore;
}


