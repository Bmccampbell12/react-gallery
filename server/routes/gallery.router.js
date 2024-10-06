const express = require('express');
const router = express.Router();
// const pool = require('.../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const galleryId = req.params.id; 
  const queryText = require('../modules/pool.js');
  
});

// GET /gallery
router.get('/', (req, res) => {
  // code here
});

module.exports = router;
