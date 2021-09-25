//JS for the Catalogue and Cart html

let carts = document.querySelectorAll(".add-cart");

//product array
let products = [
    {
        name: 'Puffer Jacket',
        tag: 'pufferjacket',
        price: 479.99,
        inCart: 0
    },
    {
        name: 'Culotte Pants',
        tag: 'culottepants',
        price: 299.99,
        inCart: 0
    },
    {
        name: 'Polo-neck Top',
        tag: 'polo-necktop',
        price: 159.99,
        inCart: 0
    },
    {
        name: 'Mid-length Dress',
        tag: 'mid-lengthdress',
        price: 239.99,
        inCart: 0
    },
    {
        name: 'Soft Shacket',
        tag: 'softshacket',
        price: 319.99,
        inCart: 0
    }
];

//for loop for each add to cart button
for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

//displays quantity in cart
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers'); 

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

//displays quantity in cart
function cartNumbers(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    //parseint used to convert the string to number

    if( productNumbers ) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }  
    setItems(product);
}

//display item name in cart
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        if(cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

//display price in cart
function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');

    if(cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
        alert("Current total is: " + cartCost);
        //above creates an alert to show the current total with vat once added to the cart
    } else {
        localStorage.setItem("totalCost", product.price);
    }   
}

//allows items to be displayed in html product container div
function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);  
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    //multipies total with 15% vat
    let withVat = (cartCost * 0.15);
    
    console.log(cartItems);
    //creates div to be displayed on cart html
    if( cartItems && productContainer ) {
        productContainer.innerHTML = ' ';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="row">
                <div class="product">
                    <img src="Images/${item.tag}.jpg">
                    <span>${item.name}</span>
                </div>

                <div class="price">R${item.price}</div>

                <div class="quantity">
                    <span>${item.inCart}</span
                </div>

                <div class="total">
                    R${item.inCart * item.price}
                </div
            </div>
            `; 
        });

        productContainer.innerHTML +=  `
            <div class="basketTotalContainer">
                <h4 class="vat">
                    Vat
                </h4>
                <h4 class="basketTotalVat">
                    R${withVat}
                </h4>
            </div>
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Total
                </h4>
                <h4 class="basketTotal">
                    R${cartCost}
                </h4>
            </div>
        `
    }
}

onLoadCartNumbers();
displayCart();


//The below creates the functionality for the discount coupon form.
function discountSubmit() {
    // Get the value of the input field with id="numb"
    let x = document.getElementById("numb").value;
    // If x is Not a Number or less than one or greater than 10
    let text;
    if (isNaN(x) || x < 1 || x > 10) {
      text = "Discount Coupon Code Invalid";
    } 
    else {
      text = "20% Discount Coupon was successfully applied!";
    }
    document.getElementById("discount").innerHTML = text;
}

//Below creates the functionality for the delivery and collection form.
const btn = document.querySelector('#btn');
const sb = document.querySelector('#framework');
    btn.onclick = (event) => {
        event.preventDefault();
    }

//Below creates the functionality and alert for the confirm button.
function confirmBtn() {
    document.getElementsByClassName("confirmBtn");
    alert ("Your order was successful! Your reference number is: " + Math.floor(Math.random()* 11));
    // generates random number that returns a random integer from 0 to 10
}