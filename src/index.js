import './scripts/css';

const noResult = document.getElementById('no-result');
const result = document.getElementById('result');

const form = document.forms.selectForm;
const baseUrl = 'https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com';
const slideItemContainer = document.getElementById('slideItemContainer');

form.addEventListener('change', _ => {
  if ([...form.elements].every(input => input.checkValidity())) {
    const formData = new FormData(form);
    const searchParams = new URLSearchParams(formData);
    const url = new URL(`${baseUrl}/default/front-plantTest-service?${searchParams}`);

    fetch(url)
      .then(res => res.json())
      .then(data => {
        noResult.style.display = 'none';
        result.style.display = 'block';
        slideItemContainer.innerHTML = renderPlants(data);
      });
  }
});

function renderPlants(plants) {
  return plants
    .map(plant => renderPlant(plant))
    .join('\n');
}

function renderPlant(plant) {
  return `
  <div class="card">
    <div class="card-image">
      <img src="${plant.url}"/>
    </div>
    <div class="card-content">
      <p class="name">${plant.name}</p>
      <div class="card-actions">
        <p class="price">${plant.price}</p>
        <div class="icons">
        <i class="icon ${plant.sun}"></i>
        <i class="icon ${plant.toxicity}"></i>
        <i class="icon ${plant.water}"></i>
        </div>
      </div>
    </div>
  </div>
  `
}

function scrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
