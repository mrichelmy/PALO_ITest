var assert = require('assert');
const products = require('../back/services/products');

/**
 * Services tests
 * 
 * 1st test concerns the GET request getProductsByCity that return products filtered by cities.
 * Input : Array cityList
 * Output expected : []
 */
describe('Test services that send requests on Products table', function() {
  describe('Test getting products filtered by cities', function() {
    var cityList = [];
    it('should return [] when the list of cities is empty', async function() {
      const rows = await products.getProductsByCity(cityList);
      assert.equal(rows.data.length, 0);
    });
  });
});
