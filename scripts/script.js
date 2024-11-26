// app.js
import { fetchPuppies } from './document.js';
import { renderPuppies, togglePaginationButtons } from './user.js';

let page = 1;
let breed = "";

// Elements
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

// Fetch puppies and update the UI
async function loadPuppies() {
    const puppies = await fetchPuppies(breed, page);
    renderPuppies(puppies);
    togglePaginationButtons(page, puppies.length > 0);
}


// Event Listener for "Next" Button
nextBtn.addEventListener('click', () => {
    page++;
    loadPuppies();
});

// Event Listener for "Previous" Button
prevBtn.addEventListener('click', () => {
    if (page > 1) {
        page--;
        loadPuppies();
    }
});

// Initial load of puppies
window.onload = loadPuppies;
