// api.js
export const apiKey = "live_sLS3gKZwS6XyTaHyoBgm939Nb5yjGd0gM1OHO9s0eKI8U8eZfEaENjOABCpShIJB";
export const apiBaseURL = "https://api.thedogapi.com/v1/images/search?limit=10&api_key=" + apiKey;

// Fetch puppies for a specific breed and page
export async function fetchPuppies(breed = "", page = 1) {
    const url = breed
        ? `${apiBaseURL}&breed_ids=${breed}&page=${page}`
        : `${apiBaseURL}&page=${page}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Not Found");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching puppies:", error);
        return [];
    }
}

// Fetch all breeds from the API
export async function fetchBreeds() {
    const breedUrl = "https://api.thedogapi.com/v1/breeds?api_key=" + apiKey;

    try {
        const response = await fetch(breedUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch breeds");
        }
        const breeds = await response.json();
        return breeds;
    } catch (error) {
        console.error("Error fetching breeds:", error);
        return [];
    }
}
