const db = require('./db');
const helper = require('../helper');
const config = require('../config');

var getAllProducts = async (page = 1) => {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT * 
    FROM Products LIMIT ?,?`, 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    meta,
    data
  }
}

var createProduct = async (newProduct) => {
    const result = await db.query(
        `INSERT INTO Products 
        (Nom, Ville, Prix) 
        VALUES 
        (?, ?, ?)`, 
        [
          newProduct.Nom, newProduct.Ville, newProduct.Prix
        ]
    );
    var message = 'Error in creating new product';
    if (result.affectedRows) {
    message = 'New product created successfully';
    }
    return {message};
};

var updateProduct = async (refProduct, updatedProduct) => {
    const result = await db.query(
        `UPDATE Products 
        SET Nom=?, Ville=?, Prix=? 
        WHERE Ref=?`, 
        [
          updatedProduct.Nom, updatedProduct.Ville, updatedProduct.Prix, refProduct
        ]
    );
    let message = 'Error in updating product';
    if (result.affectedRows) {
        message = 'Product updated successfully';
    }
    return {message};
};

var deleteProduct = async (refProduct) => {
    const result = await db.query(
        `DELETE FROM Products 
        WHERE Ref=?`, 
        [ refProduct ]
    );
    let message = 'Error in deleting product';
    if (result.affectedRows) {
        message = 'Product deleted successfully';
    }
    return {message};
};

module.exports = {
  getAllProducts, 
  createProduct,
  updateProduct,
  deleteProduct
}