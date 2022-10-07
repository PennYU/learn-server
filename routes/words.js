var express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
var router = express.Router();
var { Words } = require('../models');

/* GET words listing. */
router.get('/', async function(req, res, next) {
  const response = await Words.findAll({});
  res.json(response);
});

router.get('/todo', async function(req, res, next) {
  const response = await Words.findAll({
    where: {
      right: 0
    }
  });
  res.json(response);
});

router.get('/done', async function(req, res, next) {
  const response = await Words.findAll({
    where: {
      right: {
        [Op.gt]: 0
      }
    }
  });
  res.json(response);
});

router.get('/fail', async function(req, res, next) {
  const response = await Words.findAll({
    where: {
      wrong: {
        [Op.gt]: 0
      }
    }
  });
  res.json(response);
});

router.get('/:id', async function(req, res, next) {
  const response = await Words.findOne({where: {id: req.params.id}});
  res.json(response);
});

router.put('/:id/wrong', async function(req, res, next) {
  const word = await Words.findOne({where: {id: req.params.id}});
  let response = {};
  if (word) {
    response = await Words.update({wrong: word.wrong + 1}, {where: {id: req.params.id}});
  }
  res.json({success: true});
});

router.put('/:id/right', async function(req, res, next) {
  const word = await Words.findOne({where: {id: req.params.id}});
  let response = {};
  if (word) {
    response = await Words.update({right: word.right + 1}, {where: {id: req.params.id}});
  }
  res.json({success: true});
});

module.exports = router;
