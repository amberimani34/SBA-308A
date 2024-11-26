// app.js
import { fetchPuppies, fetchBreeds } from './document.js';
import { renderPuppies, togglePaginationButtons, updateBreedDropdown } from './user.js';

let page = 1;
let breed = "";

// Elements
const breedSelect = document.getElementById('breed-select');
const searchBtn = document.getElementById('search-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');

// Fetch and display available breeds
async function loadBreeds() {
    const breeds = await fetchBreeds();
    updateBreedDropdown(breeds);
}

// Fetch puppies based on breed and page
async function loadPuppies() {
    const puppies = await fetchPuppies(breed, page);
    renderPuppies(puppies);
    togglePaginationButtons(page, puppies.length > 0);
}

// Event Listener for breed selection
breedSelect.addEventListener('change', (event) => {
    breed = event.target.value; // Get the selected breed id
    page = 1; // Reset to the first page
    loadPuppies();
});

// Event Listener for "Search" Button (Optional, for manual search)
searchBtn.addEventListener('click', () => {
    breed = breedSelect.value; // Get the selected breed from the dropdown
    page = 1; // Reset to the first page
    loadPuppies();
});

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

// Initial setup and load puppies
window.onload = async () => {
    await loadBreeds(); // Fetch and display breeds in the dropdown
    loadPuppies(); // Load puppies (default behavior)
};

