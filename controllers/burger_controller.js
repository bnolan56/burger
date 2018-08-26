const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');

router.get('/', function(req, res) {

  // object that holds the burger info
  let info = {
    brgr: [],
    itm: []
  };

  // grabs data from burger table
  burger.selectAll(function(data) {
   for (let i = 0; i < data.length; i++) {
     info.brgr.push(data[i]);
   }
    // grabs data from menu table
   burger.getMenu(function(data) {
     for (let i = 0; i < data.length; i++) {
       info.itm.push(data[i]);
     }
     // generates it in index.handlebars
     res.render('index', info);
   });
 });
});

router.get('/menu', function(req, res) {
  burger.getMenu(function(data) {
    res.render('Menu', { itm: data });
  });
});

router.post('/create', function(req, res) {
  burger.insertOne([req.body.burgerInput], function() {
    res.redirect('/');
  });
});

router.put('/update/:id', function(req, res) {
  burger.updateOne([req.body.devoured], [req.params.id], function() {
    res.redirect('/');
  });
});

router.delete('/delete/:id', function(req, res) {
  burger.deleteOne([req.params.id], function() {
    res.redirect('/');
  });
});

module.exports = router;
