let purchasedProductsArray = [];
purchasedProductsArray = JSON.parse(localStorage.getItem("checkout"));
let groupByIdObject = Object.groupBy(purchasedProductsArray, product => product.id);

// EXTREMELY NB TO NOTE: Object.groupBy does NOT return an array, it returns a NESTED OBJECT (object w/in object) that then has an array as its value
// What does the groupByIdObject look like?
// {1: Array(2), 2: Array(2), 3: Array(2), 4: Array(2), 5: Array(2)}
// 1: (2) [{…}, {…}]
// 2: (2) [{…}, {…}]
// 3: (2) [{…}, {…}]
// 4: (2) [{…}, {…}]
// 5: (2) [{…}, {…}]
// NOTE: there are 5 id's so there are 5 objects w/in the groupByIdArray. Each object has a key of the id number and array length showing how many times that id repeats in the purchasedProductsArray. 
// Q: how do I find how many times the id 1 is repeated in the array? A: By using groupByIdArray[1].length

// Q: how do I find the 'length' of the groupByIdObject?
// OPTION 1: use Object.keys(groupByIdObject).length to create an array of the enumerable property names (aka, property keys) of each object w/in the array but as a string (so in this case, 1 is returned as '1').
// OPTION 2: use Object.values(groupByIdObject).length as this will return the number of values the outer object has
let index = 0;
// Logic to create the object holding the purchased product:
// Purchased item will be as follows:
    // product1 = {
    //     name: purchasedProductsArray[index].name,
    //     id: Object.keys(groupByIdObject)[index],
    //     quantity: groupByIdObject[id].length,
    //     price: purchasedProductsArray[index].price,
    //     total: (quantity*price)
    // }

    // OR
    // groupByNameObject
    // product1 = {
    //     name: Object.keys(groupByNameObject)[index],
    //     id: purchasedProductsArray.indexOf(this.name),
    //     quantity: groupByNameObject[this.name].length,
    //     price: purchasedProductsArray[id].price,
    //     total: (quantity*price)
    // }
