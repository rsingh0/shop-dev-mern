import express from 'express';
import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.json(products);
  })
);

// @desc Fetch single products
// @route GET /api/products/:id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404)
      throw new Error('Product Not Found');
    }
  })
);

export default router;

// The asynchandler wrapper making use of the express-async-handler package takes care of this.

// const getUserProfile = asyncHandler(async (req, res) => {
// //...
// It is actually replacing a try-catch block which would be like

// try {
//   // route job
// } catch (error) {
//   next(error); // internally triggers next and pass error to general ecxeption handaler
// }
