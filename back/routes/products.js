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