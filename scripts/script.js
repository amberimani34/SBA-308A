const apiKey = "live_sLS3gKZwS6XyTaHyoBgm939Nb5yjGd0gM1OHO9s0eKI8U8eZfEaENjOABCpShIJB";
const apiBaseURL = "https://api.thedogapi.com/v1/images/search?limit=10&api_key=" + apiKey;

let page = 1;
let breed = "";

// Elements
const puppyGallery = document.getElementById('puppy-gallery');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

// Fetch puppies from the API
async function fetchPuppies() {
    const url = breed
        ? `${apiBaseURL}&breed_ids=${breed}&page=${page}`
        : `${apiBaseURL}&page=${page}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Clear previous images
        puppyGallery.innerHTML = '';

        if (data.length > 0) {
            data.forEach(puppy => {
                const puppyCard = document.createElement('div');
                puppyCard.classList.add('puppy-card');
                puppyCard.innerHTML = `
                    <img src="${puppy.url}" alt="Puppy" class="puppy-img">
                `;
                puppyGallery.appendChild(puppyCard);
            });
        } else {
            puppyGallery.innerHTML = "<p>No puppies found.</p>";
        }

        togglePaginationButtons(data.length > 0);
    } catch (error) {
        console.error("Error fetching puppies:", error);
    }
}

// Toggle visibility of pagination buttons
function togglePaginationButtons(hasMore) {
    prevBtn.disabled = page === 1;
    nextBtn.disabled = !hasMore;
}


// Event Listener for "Next" button
nextBtn.addEventListener('click', () => {
    page++;
    fetchPuppies();
});

// Event Listener for "Previous" button
prevBtn.addEventListener('click', () => {
    if (page > 1) {
        page--;
        fetchPuppies();
    }
});

// Initial load of puppies
window.onload = fetchPuppies;