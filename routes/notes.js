const express = require('express');
const router = express.Router();

router.get('/', async function(req, res, next) {

  const response = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await response.json();

  res.send(`
    <html>
      <body>
        <h1>Dog API</h1>
        <img src="${data.message}" width="400">
      </body>
    </html>
  `);

});

module.exports = router;
