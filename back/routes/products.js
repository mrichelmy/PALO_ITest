const express = require('express');
const router = express.Router();
const products = require('../services/products');


router.get('/', async (req, res, next) => {
  try {
    res.json(await products.getAllProducts(req.query.page));
  } catch (err) {
    console.error(`Ups, error while getting all products `, err.message);
    next(err);
  }
});

router.post('/city', async (req, res, next) => {
    try {
      if(req.body.cityList.length == 0 || req.body.cityList == undefined) {
        res.json(await products.getAllProducts(req.query.page));
      } else {
        res.json(await products.getProductsByCity(req.body.cityList));
      }
    } catch (err) {
      console.error(`Ups, error while getting products filtered by city \n `, err.message);
      next(err);
    }
  });

router.post('/', async (req, res, next) => {
    try {
        res.json(await products.createProduct(req.body));
    } catch (err) {
        console.error(`Error while creating a new product`, err.message);
        next(err);
    }
});

router.put('/:ref', async (req, res, next) => {
    try {
        res.json(await products.updateProduct(req.params.ref, req.body));
    } catch (err) {
        console.error(`Error while updating product`, err.message);
        next(err);
    }
});

router.delete('/:ref', async (req, res, next) => {
    try {
        res.json(await products.removeProduct(req.params.ref));
    } catch (err) {
        console.error(`Error while deleting product`, err.message);
        next(err);
    }
})

module.exports = router;