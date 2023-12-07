// What do I need in my admin pg? I need to:
// Step 1: have functionality for my "add new product" btn --> modal pops up that takes 4 inputs fr user (name, type, description, image and price) and pushes it to an array containing the products created in the products page and also storing the new item in localStorage so the product pg changes when a new item is added.
// Step 2: create a fx that takes the product-objects from local storage and displays the individual features of each product by appending them to the relevant table header.
// Step 3: create an edit and delete btn PER td that was created in step 2 and include the functionality of each btn.

// Step 1.1: create variable to call and hold product-objects fr localStorage
let adminProducts = [];
adminProducts = JSON.parse(localStorage.getItem("productArray"));

//Step 1.2: make a fx that creates a modal when the addNewProductBtn is clicked
//Step 1.2.1: attach btn to a variable
let addNewProductBtn = document.querySelector('#addNewProduct');
//Step 1.2.2: attach eventListener to btn
addNewProductBtn.addEventListener('click', ()=> addProductFx());
//Step 1.2.3: define addProductFx
function addProductFx(){
    alert('Add new product btn was clicked');
}

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

displayProduct(adminProducts)

// STEP 2 ENDS HERE


// STEP 3 STARTS HERE

// STEP 3 ENDS HERE
