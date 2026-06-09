const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.send("notes route OK");
});

module.exports = router;