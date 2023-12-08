// declaring variable to access display div
let cartDisplayDiv = document.querySelector('#cartDisplayDiv');

// Declare variable to hold payNow btn. 
let payNowBtn = document.querySelector('#payNowBtn');

// Attach functionality to payNowBtn. This button should clear checkout and create an alert
payNowBtn.addEventListener('click', () => {
    cartItemsArray = [];
    localStorage.setItem( 'checkout', JSON.stringify(cartItemsArray));
    alert("Thank you for your purchase. Please leave a review when you receive your products");
    displayCartItems(cartItemsArray);
})

// Declare variable to hold grand total
let grandTotal = document.querySelector('#grandTotal');

// Declaring variable to access table
let cartTable = document.querySelector('#cartTable')

// accessing checkout items from localStorage
let cartItemsArray = JSON.parse(localStorage.getItem('checkout'));

// Declaring fx that displays the cart items
function displayCartItems(a){
    let cartItem = a.map((item, index)=>{
        return `
            <tr>
                <td class="productBorder">${item.name}</td>
                <td class="productBorder"> <img class="productImg" src="${item.url}"></td>
                <td class="productBorder">${item.type}</td>
                <td class="productBorder">${item.description}</td>
                <td class="productBorder">${item.price}</td>
                <td class="productBorder"><input type="number"></td>
                <td class="productBorder" id="productPriceTotal"></td>
            </tr>`
    })
    cartTable.innerHTML += cartItem.join('');
}

displayCartItems(cartItemsArray);
