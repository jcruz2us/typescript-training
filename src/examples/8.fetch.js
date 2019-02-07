(async function run() {
  const response = await fetch(
    "https://www.hipmunk.com/interviews/hotel_search/scraper/Expedia",
  );
  const payload = await response.json();
})();
