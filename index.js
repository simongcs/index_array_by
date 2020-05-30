module.exports = (arr, key) => arr.reduce((acc, elem) => {
    acc[elem[key]] = elem;
    return acc
},{});