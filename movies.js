// 1. Define a function, then call it
function showTonight() {
  console.log("Tonight's lineup:");
}

showTonight();

// 2. Send a value in with a parameter
function announceMovie(title) {
  console.log("Up next: " + title);
}

announceMovie("Wicked");
announceMovie("Dune: Part Two");
announceMovie("Inside Out 2");

// 3. Pick the right TMDB list
function getEndpoint(page) {
  if (page === "upcoming") {
    return "upcoming";
  } else if (page === "popular") {
    return "popular";
  } else if (page === "top-rated") {
    return "top_rated";
  }
}

console.log(getEndpoint("popular"));
console.log(getEndpoint("top-rated"));

// 4. Build a poster URL
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function makePosterUrl(posterPath) {
  return IMAGE_URL + posterPath;
}

console.log(makePosterUrl("/poster.jpg"));

// 5. Check a rating
function isHighlyRated(rating) {
  return rating >= 7;
}

console.log(isHighlyRated(8.2));
console.log(isHighlyRated(5.5));

// 6. Two parameters
function makeMovieLine(title, rating) {
  return title + " (" + rating + " / 10)";
}

let line = makeMovieLine("Wicked", 7.4);
console.log(line);


const ratings = [8.2, 5.5, 7, 6.9];

for (let i = 0; i < ratings.length; i++) {
  if (isHighlyRated(ratings[i])) {
    console.log(ratings[i] + " is a great pick!");
  }
}