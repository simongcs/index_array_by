## Indexed object from array.
Create an object with indexes objects from array selecting a key.

### Usage
    const idxKey = require('index_array_by');
    
    let arr = [
        { product: 'milk', id: 1, price: 500 },
        { product: 'bread', id: 2, price: 300 },
        { product: 'coffee', id: 3, price: 900 },
    ];
    
    let result = idxArrBy(arr,'id');
	console.log(result);
	
    { '1': { product: 'milk', id: 1, price: 500 },
      '2': { product: 'bread', id: 2, price: 300 },
      '3': { product: 'coffee', id: 3, price: 900 } }
      
      result[1]
      { product: 'milk', id: 1, price: 500 }
### Test
    npm test

