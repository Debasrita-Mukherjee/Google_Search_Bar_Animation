const searchBarContainer =
  document.querySelector(".search-bar-container");

const magnifier =
  document.querySelector(".magnifier");

const input =
  document.querySelector(".input");


// OPEN SEARCH BAR
magnifier.addEventListener("click", () => {

  searchBarContainer.classList.toggle("active");

  input.focus();

});


// SEARCH ON ENTER
input.addEventListener("keypress", (e) => {

  if (e.key === "Enter") {

    const searchText = input.value.trim();

    if (searchText !== "") {

      window.location.href =
        `https://www.google.com/search?q=${encodeURIComponent(searchText)}`;

    }
  }

});