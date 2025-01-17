const loadingDiv = document.querySelector(".loading");
const image = document.querySelector("img");
let loading = false;
const api_key = "C0bJ5f1kNkzkcjZ0HVWI2Gq3T98aYh6PkcPvp7Pg";
let lat = 52.63;
let lon = 1.29;
let theDate = "2018-01-01";
let dim = 0.1;

// this function will get the information from our API
async function getData() {
  toggleLoading();

  // fetch the data
  const response = await fetch(
    `https://api.nasa.gov/planetary/earth/imagery?api_key=${api_key}&lat=${lat}&lon=${lon}&date=${theDate}&dim=${dim}`
  );

  // do something with the data
  document.querySelector("img").src = response.url;

  toggleLoading();
}

getData();

function toggleLoading() {
  image.classList.toggle("hidden");
  loadingDiv.classList.toggle("hidden");
}
function handleSubmit(event) {
  event.preventDefault();
  lat = event.target.lat.value;
  lon = event.target.lon.value;
  theDate = event.target.theDate.value;
  dim = event.target.dim.value;
  getData();
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
