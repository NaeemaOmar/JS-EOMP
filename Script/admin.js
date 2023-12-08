// Step 1.1: create variable to call and hold product-objects fr localStorage. if local storage is empty, empty array is declared
let adminProducts = JSON.parse(localStorage.getItem('productArray')) ? JSON.parse(localStorage.getItem('productArray')) : [];

// Step 2.1: declare and initialize the id counter
let idCounter = 0;

if (adminProducts.length === 0){
    // Step 1: create constructor fx
function ProductDetails(id, name, type, description, price, url){
    this.id = id,
    this.name = name,
    this.type = type,
    this.description = description,
    this.price = price,
    this.url = url
}


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
adminProducts.push(product1, product2, product3, product4, product5);
// EXTREMELY IMPORTANT TO NOTE: the product id is 1 more than the index of that specific id

// Step 3.3: Store array into localStorage
localStorage.setItem('productArray', JSON.stringify(adminProducts)) //Q: WTF is this doing? A: .setItem takes a key as its first parameter and then takes a stringified array as its 2nd parameter. JSON.stringify takes the object/array of objects that it's turning into into string. Later, .getItems takes the KEY that was set in .setItems and JSON.parse returns the stringified object normal again
}

// END OF THE CONDITIONAL STATEMENT THAT POPULATES THE ARRAY IF LOCAL STORAGE IS EMPTY


// START OF MODAL FUNCTIONALITY

//Step 1.2: add functionality to the html modal
//NOTE: Since the process of creating a new product is entirely w/in the modal and triggered by the createNewProduct btn, the process needs to be w/in a fx
//Step 1.2.2: attach createNewProductBtn to a variable and then attach a eventListener to that variable
let createNewProductBtn = document.querySelector('#createNewProductBtn');
createNewProductBtn.addEventListener('click', function(){
    alert('The createNewProductBtn button was clicked');
    //Step 1.2.1: attach each input to a variable
    let newProductName = document.querySelector('#newProductName');
    let newProductType = document.querySelector('#newProductType');
    let newProductDescription = document.querySelector('#newProductDescription');
    let newProductPrice = document.querySelector('#newProductPrice');
    let newProductImageUrl = document.querySelector('#newProductImageUrl');
    //Step 1.2.2.2: create constructor fx to create a new product
    function NewProduct(id, name, type, description, price, url){
        this.id = id,
        this.name = name,
        this.type = type,
        this.description = description,
        this.price = price,
        this.url = url
    }
    //Step 1.2.2.3: create new product by populating the constructor fx
    let newProduct = new NewProduct(++idCounter, newProductName.value, newProductType.value, newProductDescription.value, newProductPrice.value, newProductImageUrl.value);
    console.log(newProduct);
    //Step 1.2.2.4: push the new product to the adminProducts array
    adminProducts.push(newProduct);
    console.log(adminProducts);
    localStorage.setItem('productArray', JSON.stringify(adminProducts));
    displayedArray = [newProduct];
    displayProduct(displayedArray);
    })
    // NOTE: it is not redundant to have a constructor fx inside the above fx coz the first constructor fx is declared inside a conditional statement and therefore cannot be used outside of its code-block
// END OF MODAL FUNCTIONALITY

// START OF PRODUCT DISPLAY
let displayTable = document.querySelector('table');

// Step 2.2: create fx to loop through adminProducts via .map and create arrays for each th. NOTE: fx should be generalized since the sortBtn will also need to be displayed. NOTE: edit and delete btns need to have onclicks so they can work after items are sorted
function displayProduct(a){
    let productsToDisplay = a.map(
        function(product, index){
            return `
                <tr>
                    <td class="productBorder">${product.id}</td>
                    <td class="productBorder">${product.name}</td>
                    <td class="productBorder">${product.type}</td>
                    <td class="productBorder">${product.description}</td>
                    <td class="productBorder"> <img class="productImg" src="${product.url}"> </td>
                    <td class="productBorder">${product.price}</td>
                    <td class=" mx-3"><div class="d-flex"><button class="mainBtnStyling rounded-5 softPinkBg mx-3">Update</button> <button class="mainBtnStyling rounded-5 softPinkBg mx-3">Delete</button></div></td>
                </tr>
            `
        }
    )
    displayTable.innerHTML += productsToDisplay.join('');
    // += acts like .appendChild in the sense that it adds to the bottom of whatever shows in the table
}

displayProduct(adminProducts);

// END OF PRODUCT DISPLAY