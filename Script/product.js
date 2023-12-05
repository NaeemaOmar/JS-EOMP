// Process begins in the product page. Constructor fx originates here, products are created and added to the products array. Products array is stored in local storage. Products array is then called in the admin page and then edited||deleted.

// PseudoCode
// Step 1: create constructor fx
// Step 2.1: declare the array that will store the product-objects
// Step 2.2: declare and initialize the counter that will act as the product id
// Step 3.1: create the 5 default product-objects
// Step 3.2: push the objects to the Array
// Step 3.3: Store array into localStorage
// Step 3.4: Get array fr localStorage and attach it to a variable
// Step 4: create the fx to display the product-objects FROM the array
// Step 4.1: declare a variable that links to the productDisplayDiv
// Step 4.2: Loop through productsArray (using .map) and use the 'return' keyword to create a div holding the products how they're meant to be displayed
// Step 5: add functionality to sort btn. Sort btn must call the localStorage array, .map through it take the product.price and then display the array.
// Q: How tf am I gonna do this? A: there are 4 in-built methods I can use in JS: 1).map, 2).reduce, 3).filter, 4).sort
// .map: creates an array containing whatever is following the return keyword. Since .map contains a fx, I can edit ft's/components of the original array and then have those edited ft's returned. Ie, .map performs a certain action PER object in the array before returning a new sub-array WITHOUT EDITING THE ORIGINAL ARRAY
// .filter loops through an array and returns ONLY the objects that meet a certain condition. EXAMPLE: if an array has 4 items and a condition of item.price>=500 is given, .filter will return a new array holding ONLY the objects whose .pric property is >=500. This is used in e-commerce sites when searching for products w/in a certain price range.
// .reduce: while .map and .filter return arrays, .reduce returns a single value. .reduce loops through the array of objects, takes specified properties of each item of original array and then returns a single variable that holds the summation of whatever action was done to the specified properties eg, combining names, adding values, totalling price, etc.
// .sort sorts an array by its characters. If an array is made of numbers, it will turn the number into strings and sort it accordingly. Eg, [1, 7, 13, 27] will become [1, 13, 27, 7] since they will be ordered according to the first character that appears and not according to their value. To overcome this, it is necessary to use a compare function w/in the sort. the compare fx will take 2 placeholder parameters (eg: a and b). 
// Eg: arrayName.sort((a,b) => {return a-b}) THIS ARRANGES THE ARRAY IN ASCENDING ORDER. Q: why? A: since a is assumed to be bigger than b, a-b returns a +ve value which indicates ascending order
// Eg: arrayName.sort((a,b) => {return b-a}) THIS ARRANGES THE ARRAY IN DESCENDING ORDER. Q: why? A: since a is assumed to be bigger than b, b-a returns a -ve value which indicates descending order
// EXTREMELY ND TO NOTE: .sort PERMANENTLY alters the array so in the case of my sort btn, I CANNOT push the changes to the local storage and should instead save it into a new array to prevent the arrangement on the products and admin pg from being permanently changed
// Step 5.1: use .map to loop through the array. For each array item, take the item.price and the index. 


// Step 1: create constructor fx
function ProductDetails(id, name, type, description, price, url){
    this.id = id,
    this.name = name,
    this.type = type,
    this.description = description,
    this.price = price,
    this.url = url
}

// Step 2.1: declare the array that will store the product-objects
let idCounter = 0;

// Step 2.2: declare the array that will store the product-objects
let productsArray = [];

// Step 3.1: create the 5 default product-objects
let product1 = new ProductDetails(++idCounter, "First Product", "Noise-cancelling headphones", "EEG headphones that read your brainwaves to increase or decrease noise-cancellation", 2000, "https://i.postimg.cc/bvkZ2LCv/headphone5.jpg");
console.log(`This is product 1's id: ${product1.id}`)

let product2 = new ProductDetails(++idCounter, "Second Product", "Bluetooth headphones", "Comfortable and aesthetic wireless headphones with a snug fit. Have noise-cancelling properties", 350, "https://i.postimg.cc/zBDxHvC2/headphone3.jpg");
console.log(`This is product 2's id: ${product2.id}`)

let product3 = new ProductDetails(++idCounter, "Third Product", "Bluetooth headphones", "Comfortable and aesthetic wireless headphones with a snug fit. No noise-cancelling properties", 200, "https://i.postimg.cc/QNyYMvmQ/headphone1.jpg");
console.log(`This is product 3's id: ${product3.id}`)

let product4 = new ProductDetails(++idCounter, "Fourth Product", "Noise-cancelling headphones", "Standard noise-cancelling headphones", 500, "https://i.postimg.cc/2jbd5Mgf/headphone4.jpg");
console.log(`This is product 4's id: ${product4.id}`)

let product5 = new ProductDetails(++idCounter, "Fifth Product", "Bluetooth headphones", "Comfortable and aesthetic wireless headphones with a snug fit. No noise-cancelling properties", 300, "https://i.postimg.cc/Fzpk6b7N/headphone2.jpg");
console.log(`This is product 5's id: ${product5.id}`)


// Step 3.2: push the objects to the Array
productsArray.push(product1, product2, product3, product4, product5);
// EXTREMELY IMPORTANT TO NOTE: the product id is 1 more than the index of that specific id

// Step 3.3: Store array into localStorage
localStorage.setItem('productArray', JSON.stringify(productsArray)) //Q: WTF is this doing? A: .setItem first takes a key as its first parameter and then takes a stringified array as its 2nd parameter. JSON.stringify takes the object/array of objects that its turning into into string. Later, .getItems takes the KEY that was set in .setItems

// Step 3.4: Get array fr localStorage and attach it to a variable
let productsArrayFrLocalStorage = JSON.parse(localStorage.getItem('productArray'))
// 
console.log(productsArrayFrLocalStorage)

// STEP 4 BEGINS HERE

// Step 4.1: declare a variable that links to the productDisplayDiv
let productsDisplayDiv = document.getElementById('productDisplayDiv');

// Step 4.2: create a fx that loops through an array (that is takes as a parameter) using .map and then use the 'return' keyword to create a div holding the products how they're meant to be displayed
// NOTE: The following fx can be used to display the original products as well as the sorted products since it takes an array as its parameter
// NOTE: the original version of this code is at the bottom of the pg
function displayProducts(){
    const displayedItem = productsArrayFrLocalStorage.map(
    function(product, index){
        return `
        <div class="productBorder createdDivWidth col-6 col-sm-4 col-md-3">
            <p class="text-center">${product.name}</p>
            <p>${product.type}</p>
            <img src="${product.url}" class="productImg rounded-5" alt="">
            <p>${product.description}</p>
            <p class="boldText">${product.price}</p>
            <div class="d-flex justify-content-center"></div>
            <button class="purpleAccentBg mx-5 rounded-5" value="${index}">Add to cart</button>
        </div>
        `
    }) 
    productsDisplayDiv.innerHTML = displayedItem.join('');
    console.log(`This is the displayedItem array: ${displayedItem}`)
}

displayProducts(); //Q: Why did I call this fx? A: So the products can actually display since line 68 till line 84 only DEFINES the fx

// STEP 4 ENDS HERE


// STEP 5 STARTS HERE

function displaySortedArray(){
    // firstly, sort the products array in ascending order. EXTREMELY NB to NOT use the setToLocalStorage fx so the original order shows once the pg is refreshed
    let tempArr = productsArrayFrLocalStorage.toSorted((a, b) => {
        return a.price - b.price
    })

    // function showSortedArray(){
        // I don't understand what I can do differently so the pg returns to its original state when it is refreshed
        // SOLUTION: 1) edit the displayProducts fx so that it is allowed to take an array. 2) create a temporary array that has the value of productsArrayFrLocalStorage and then apply productsArrayFrLocalStorage.toSorted so that I have a sorted array w/out editing the localStorageArray. 3) apply displayProducts w/ the tempArray as it's parameter to override the original display. 4) instead of running the displayProducts(tempArr) fx in JS, attach it to a btn so that it is ONLY called when a btn is clicked
    // }
    // displayProducts();
}

displaySortedArray()
// STEP 5 ENDS HERE

// console.log(`Just me checking if the const keyword allows the displayedItem array to be called globally: ${displayedItem}`)

// The fx below is my first properly functioning sortNdisplay fx. The problem is that it permanently changes the displayed products so that even after refreshing the pg, the products are still sorted by price.
// function displaySortedArray(){
//     productsArrayFrLocalStorage.sort((a, b) => {
//         return a.price - b.price
//     })
//     console.log(`This is the sorted productsArrayFrLocalStorage ${productsArrayFrLocalStorage[0]}`)
//     displayProducts();
// }

// The codeBlock below is the original display fx. I need to edit it so that it takes an array as a parameter so that i can use it to display my randomized array and then also display my sorted array when the sort btn is clicked
// function displayProducts(){
//     const displayedItem = productsArrayFrLocalStorage.map(
//     function(product, index){
//         return `
//         <div class="productBorder createdDivWidth col-6 col-sm-4 col-md-3">
//             <p class="text-center">${product.name}</p>
//             <p>${product.type}</p>
//             <img src="${product.url}" class="productImg rounded-5" alt="">
//             <p>${product.description}</p>
//             <p class="boldText">${product.price}</p>
//             <div class="d-flex justify-content-center"></div>
//             <button class="purpleAccentBg mx-5 rounded-5" value="${index}">Add to cart</button>
//         </div>
//         `
//     }) 
//     productsDisplayDiv.innerHTML = displayedItem.join('');
//     console.log(`This is the displayedItem array: ${displayedItem}`)
// }