// What do I need in my admin pg? I need to:
// Step 1: have functionality for my "add new product" btn --> modal pops up that takes 4 inputs fr user (name, type, description, image and price) and pushes it to an array containing the products created in the products page and also storing the new item in localStorage so the product pg changes when a new item is added.
// Step 2: create a fx that takes the product-objects from local storage and displays the individual features of each product by appending them to the relevant table header.
// Step 3: create an edit and delete btn PER td that was created in step 2 and include the functionality of each btn.

// Step 1.1: create variable to call and hold product-objects fr localStorage
let adminProducts = [];
adminProducts = JSON.parse(localStorage.getItem("productArray"));

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
    //Step 1.2.2.1: initialize a counter that is equal to adminProducts.length
    let i = adminProducts.length;
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
    let newProduct = new NewProduct(++i, newProductName.value, newProductType.value, newProductDescription.value, newProductPrice.value, newProductImageUrl.value);
    console.log(newProduct);
    //Step 1.2.2.4: push the new product to the adminProducts array
    adminProducts.push(newProduct);
    console.log(adminProducts);
    localStorage.setItem('productArray', JSON.stringify(adminProducts));
    })
   






// STEP 2 BEGINS HERE
// STRUCTURE I WANT AT .html:
{/* <tr>
    <td>${adminProducts.id}</td>
    <td>${adminProducts.name}</td>
    <td>${adminProducts.type}</td>
    <td>${adminProducts.description}</td>
    <td>${adminProducts.url}</td>
    <td>${adminProducts.price}</td>
    <td><div class="d-flex justify-content-evenly"><button>edit</button><button>delete</button></div></td>
</tr> */}
// Step 2.1: declare variables for each th (I don't think this is necessary because I can apply styling using bootstrap)
// let numberTh = document.querySelector('#number');
// let nameTh = document.querySelector('#name');
// let typeTh = document.querySelector('#type');
// let descriptionTh = document.querySelector('#description');
// let imageTh = document.querySelector('#image');
// let priceTh = document.querySelector('#price');
// let changeDeleteTh = document.querySelector('table');

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
                    <td class="productBorder mx-3"><div class="d-flex"><button class="mainBtnStyling rounded-5 softPinkBg mx-3">Update</button> <button class="mainBtnStyling rounded-5 softPinkBg mx-3">Delete</button></div></td>
                </tr>
            `
        }
    )
    displayTable.innerHTML += productsToDisplay
    // += acts like .appendChild in the sense that it adds to the bottom of whatever shows in the table
}

displayProduct(adminProducts);

// STEP 2 ENDS HERE


// STEP 3 STARTS HERE

// STEP 3 ENDS HERE
