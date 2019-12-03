const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('index.html', { title: 'Synaps' });
});

router.get('/article', (req,res) => {
  res.render('article-1.html', { title: 'Future youtube' });
});

module.exports = router;