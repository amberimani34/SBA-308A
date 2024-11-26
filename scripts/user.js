// ui.js

// Render a list of puppies to the gallery
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

// Toggle pagination buttons based on the current page and availability of next page
export function togglePaginationButtons(page, hasMore) {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.disabled = page === 1;
    nextBtn.disabled = !hasMore;
}

// Update the breed dropdown list with available breeds
export function updateBreedDropdown(breeds) {
    const breedSelect = document.getElementById('breed-select');
    breedSelect.innerHTML = '<option value="">Select a breed...</option>'; // Reset the dropdown
    
    breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
    });
}

