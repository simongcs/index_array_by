const arr = [
    { product: 'milk', id: 1, price: 500 },
    { product: 'bread', id: 2, price: 300 },
    { product: 'coffee', id: 3, price: 900 },
];
const idxArrBy = require('../index');
const chai = require('chai');
chai.should();
describe('test create object index', () => {
    it('Creates ab object with indexes from an array', (done) => {
        let key = 'id';
        let result = idxArrBy(arr,key);
        let len = Object.keys(result).length;
        let first = arr[0][key];
        result.should.be.a('object');
        chai.expect(len).to.equal(arr.length);
        chai.expect(result[first]).to.equal(arr[0]);
        done();
    });
});
