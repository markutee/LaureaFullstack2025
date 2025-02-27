const axios = require('axios'); // Tuodaan axios-kirjasto

// Tehdään GET-pyyntö julkiseen API:in
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => {
    console.log('Testi vastaus:', response.data); // Tulostetaan vastaus
  })
  .catch(error => {
    console.error('Virhe haettaessa dataa:', error); // Virheilmoitus, jos pyyntö epäonnistuu
  });