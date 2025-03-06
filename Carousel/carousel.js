const container = document.querySelector('.carousel-container');

const getLinks = async () => {
  const Access_Key = 'KVsIBq97bOm_8DK7LRzKmZJQ6DJcaib93we7PDORcSk';
  const url = `https://api.unsplash.com/search/photos?query=supercars&per_page=15&client_id=${Access_Key}`;

  try {
    const data = await fetch(url);
    const response = await data.json();

    const urls = response.results.map(
      (item) =>
        `<div class="carousel-item">
          <img src="${item.urls.regular}" alt="${item.alt_description}" />
        </div>`
    );
    container.innerHTML = urls.join('');
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

getLinks();
