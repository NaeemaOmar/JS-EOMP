// ERROR TO BE FIXED - referes to imperfections in the JS that I need to get back to

// Get array fr localStorage and attach it to a variable.
let productsArrayFrLocalStorage = JSON.parse(localStorage.getItem('productArray'));
// 
console.log(productsArrayFrLocalStorage);

// Declare a variable that links to the productDisplayDiv
let productsDisplayDiv = document.getElementById('productDisplayDiv');

// Create a fx that loops through an array (that is takes as a parameter) using .map and then use the 'return' keyword to create a div holding the products how they're meant to be displayed
// NOTE: The following fx can be used to display the original products as well as the sorted products since it takes an array as its parameter
function displayProducts(a){
    const displayedItem = a.map(
    function(product, index){
        return `
        <div class="productBorder createdDivWidth col-6 col-sm-4 col-md-3 mt-3 mx-1">
            <p class="text-center">${product.name}</p>
            <p>${product.type}</p>
            <img src="${product.url}" class="productImg rounded-5" alt="">
            <p>${product.description}</p>
            <p class="boldText">${product.price}</p>
            <div class="d-flex justify-content-center"></div>
            <button class="mainBtnStyling softPinkBg mx-5 rounded-5" id = "toCartBtn" value="${product.id}" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
        </div>
        `
    }) 
    // In the btn above w/ the onclick, It is necessary to stringify the product-object since in the fx where addToCart is defined, it is stored in localStorage as a string. If JSON.stringify is not used here, it causes the [object: Object] display error
    productsDisplayDiv.innerHTML = displayedItem.join('');
    console.log(`This is the displayedItem array: ${displayedItem}`)
}


displayProducts(productsArrayFrLocalStorage); //Q: Why did I call this fx? A: So the products can actually display since lines 13 till line 27 only DEFINE the fx


// Add functionality to sort btn. Sort btn must call the localStorage array, .map through it take the product.price and then display the array.

// Create sort fx that sorts the products by price
function sortPriceToHigh(){
    // firstly, sort the products array in ascending order. EXTREMELY NB to NOT use the setToLocalStorage fx so the original order shows once the pg is refreshed
    let tempArr = productsArrayFrLocalStorage.toSorted((a, b) => {
        return a.price - b.price
    })
    displayProducts(tempArr);
} 
// ERROR TO BE FIXED: both of my sortPrice fx's permanently changes my display. Solution: like the searchBar event listener, define the sort fx w/in the event listener so that it is ONLY activated when the btn is clicked and the display returns to normal when the pg is refreshed
// Declare variable to hold the btn DOM
let sortToHighBtn = document.querySelector('#sortToHigh');

// Attach eventListener to the sortBtn
sortToHighBtn.addEventListener('click', () => sortPriceToHigh());

// Rinse and repeat sortToHigh fx to get sortToLow btn w/ functionality
function sortPriceToLow(){
    let tempArr = productsArrayFrLocalStorage.toSorted((a, b) => {
        return b.price - a.price
    })
    displayProducts(tempArr);
} 

let sortToLowBtn = document.querySelector('#sortToLow');
sortToLowBtn.addEventListener('click', () => sortPriceToLow());


// STEP 6 STARTS HERE
// Take searchInput.value 
let searchInput = document.querySelector('#searchInput');

// Attach searchBtn and errorPtag to a variable
let searchBtn = document.querySelector('#searchBtn');
let errorPtag = document.querySelector('#errorTag')
errorPtag.textContent ="Ight, where are you errorPtag"

// Create an event listener that defines its fx w/in the listener
searchBtn.addEventListener('click', function(event){
    event.preventDefault();
    let tempArr = [];
    let searchArray = productsArrayFrLocalStorage.map(function(item, index){
        if (item.name.toLowerCase().includes(searchInput.value.toLowerCase()) || item.description.toLowerCase().includes(searchInput.value.toLowerCase()) || item.type.toLowerCase().includes(searchInput.value.toLowerCase())) {
            tempArr.push(item);
        }
    })
    if (tempArr.length == 0){
        errorPtag.textContent = "Sorry, the product you are looking for cannot be found"
    }
    displayProducts(tempArr)
} );

// STEP 6 ENDS HERE


// STEP 7 STARTS HERE
//Create an empty purchasedProductsArray
let purchasedProductsArray = JSON.parse(localStorage.getItem('checkout')) ? JSON.parse(localStorage.getItem('checkout')) : [];
// Declare variable to call addToCart btn
let toCartBtn = document.querySelector('#toCartBtn');
function addToCart(item) {
    if(item){
        purchasedProductsArray.push(item)
        localStorage.setItem('checkout', JSON.stringify(purchasedProductsArray));
        toCartBtn.disabled = true;
        alert("You have added this item to your cart. Please choose the quantity you want at the checkout page.")
    }
        
}
// ERROR TO BE FIXED - addToCart btn doesn't work when the purchased items are sorted. SOLUTION FR JOEL: define a fx called addToCart and apply it to the product btn's via an onlcick attribute in the original display fx 

// STEP 7 ENDS HERE


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