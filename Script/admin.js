// What do I need in my admin pg? I need to:
// Step 1: have functionality for my "add new product" btn --> modal pops up that takes 4 inputs fr user (name, type, description, image and price) and pushes it to an array containing the products created in the products page and also storing the new item in localStorage so the product pg changes when a new item is added.
// Step 2: create a fx that takes the product-objects from local storage and displays the individual features of each product by appending them to the relevant table header. To do this, i need to assign each th to a unique variable then loop through the object-array via .map (like w/displayProducts fx at the product.js file). This will create an array that I can .innerHTML OR .appendChild to the specific th.
// Step 3: create an edit and delete btn PER td that was created in step 2 and include the functionality of each btn.

// Step 1.1: create variable to call and hold product-objects fr localStorage
let adminProducts = [];
adminProducts = JSON.parse(localStorage.getItem("productArray"));
// Dunno how to create modal so I'll pause step 1 here

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
// Step 2.1: declare variables for each th (later i will th.innerHTML each one)
let numberTh = document.querySelector('#number');
let nameTh = document.querySelector('#name');
let typeTh = document.querySelector('#type');
let descriptionTh = document.querySelector('#description');
let imageTh = document.querySelector('#image');
let priceTh = document.querySelector('#price');
let changeDeleteTh = document.querySelector('table');

// Step 2.2: create fx to loop through adminProducts via .map and create arrays for each th. NOTE: fx should be generalized since the sortBtn will also need to be displayed. NOTE: edit and delete btns need to have onclicks so they can work after items are sorted
function displayProductId(a){
    let displayedId = a.map(
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
    changeDeleteTh.innerHTML += displayedId
    // += acts like .appendChild in the sense that it adds to the bottom of whatever shows in the table
}

displayProductId(adminProducts)

// STEP 2 ENDS HERE


// STEP 3 STARTS HERE

// STEP 3 ENDS HERE
