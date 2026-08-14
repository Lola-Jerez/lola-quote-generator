function getQuote() {
  fetch("/api/quote")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      document.getElementById("quoteText").textContent = '"' + data.text + '"';
      document.getElementById("quoteAuthor").textContent = "- " + data.author;
    })
    .catch(function (error) {
      document.getElementById("quoteText").textContent =
        "Could not load quote.";
      console.log(error);
    });
}

// loads a quote as soon as the page opens
getQuote();
