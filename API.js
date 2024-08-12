const API_KEY = "0b79e3ccbc2e40148e5ddc493181982d";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

const movieCard = document.getElementById("movie-card");
const poster = document.getElementById("poster");
const title = document.getElementById("title");
const releaseDate = document.getElementById("release-date");
const overview = document.getElementById("overview");
const searchButton = document.getElementById("search-button");
const clearButton = document.getElementById("Clear-button");
const searchInput = document.getElementById("search-input");

searchButton.addEventListener("click", () => {
  const query = searchInput.value;
  if (query) {
    searchMovie(query);
  }
});

clearButton.addEventListener("click", () => {
   searchInput.value = "";

  poster.src = "";
  title.textContent = "Movie Title";
  releaseDate.textContent = "Release Date";
  overview.textContent = "Movie overview goes here.";
});

function searchMovie(query) {
  fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.results && data.results.length > 0) {
        const movie = data.results[0];
        populateMovieCard(movie);
        movieCard.style.display = "block"; 
      } else {
        alert("Movie not found");
      }
    })
    .catch((error) => {
      console.error("Error fetching the movie data:", error);
    });
}

function populateMovieCard(movie) {
  poster.src = `${IMG_BASE_URL}${movie.poster_path}`;
  title.textContent = movie.title;
  releaseDate.textContent = `Release Date: ${movie.release_date}`;
  overview.textContent = movie.overview;
}



