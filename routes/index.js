const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const errorMessage = 'error creating author'
  res.render('index', { errorMessage: errorMessage });
});

module.exports = router;
