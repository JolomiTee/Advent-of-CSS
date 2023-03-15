const mainCart = document.getElementById('Cart__container')

const mediaQuery = window.matchMedia('(min-width: 768px)')

function handleWindowChange(){
    if(mediaQuery.matches){
        mainCart.classList.remove('offcanvas', 'offcanvas-start')
        mainCart.classList.add('main__cart')
    }
    else{
        mainCart.classList.add('offcanvas', 'offcanvas-start')
        mainCart.classList.remove('main__cart')
    }
}
mediaQuery.addEventListener('change', handleWindowChange)

handleWindowChange(mediaQuery)

const products = [
    {
        id: 0,
        img: './images/plate__bacon-eggs.png',
        name: 'Fried bacon with delicious eggs',
        price: 1.83
    },
    {
        id: 1,
        img: './images/plate__chicken-salad.png',
        name: 'Chicken salad with any topping',
        price: 3.65
    },
    {
        id: 2,
        img: './images/plate__fish-sticks-fries.png',
        name: 'Fish sticks and fries',
        price: 2.34
    },
    {
        id: 3,
        img: './images/plate__french-fries.png',
        name: 'French fries and ketchup',
        price: 1.99
    },
    {
        id: 4,
        img: './images/plate__ravioli.png',
        name: 'Delicious ravioli with sides',
        price: 3.99
    },
    {
        id: 5,
        img: './images/plate__salmon-vegetables.png',
        name: 'Sea salmon with veggies',
        price: 2.99
    },
    {
        id: 6,
        img: './images/plate__spaghetti-meat-sauce.png',
        name: 'Spaghetti meat sauce with hotdogs',
        price: 3.99
    },
    {
        id: 7,
        img: './images/plate__tortellini.png',
        name: 'Italian Tortellini and Wine',
        price: 5.99
    },

]

const categories = [...new Set(products.map((item) => {return item}))]
// categories is an array that is created by first mapping over the products array and returning only the item object for each element. Then, the Set constructor is used to create a new set object from the resulting array. A Set object is an object that allows you to store unique values of any type (including objects). The spread operator (...) is then used to convert the set back into an array, which is assigned to categories.


let i = 0;
document.getElementById('menuItem').innerHTML = categories.map((item) => {
    let {img, name, price} = item
    return(
        `
        <div class="menu-item row">
            <div class="item__img col-5">
                <img src=${img} alt="Food item" class="itemImg img-fluid">
            </div>
            <div class="item__description col">
                <p class="item__name">${name}</p>
                <h3 class="item__price">$ <span>${price}</span></h3>

                <div>` +
                    "<button class='item__button' onclick='addtocart(" + (i++) + ")'>Add to Cart</button>" +
                `</div>
            </div>
        </div>
        `
    )
}).join('')
// In this line, the categories array is being mapped over to generate HTML code that will be injected into the DOM. The map method is called on the categories array, which means that each element of categories will be processed and turned into a new array of HTML strings.

// The item argument represents a single element of categories that is being processed by the map function. The properties of each item object are being destructured into separate variables named img, name, and price. This makes it easier to reference these properties later on in the template literal.

// The resulting HTML code will display an image, name, price, and an "Add to Cart" button for each element in the categories array.

var cart = []

function displayCart(a){
    let j = 0;
    let subtotal = 0
    let tax = 0.129

    document.getElementById('badgeCounter').innerText = cart.length
    if (cart.length == 0){
        document.getElementById('cartItems').innerHTML = "Add something to your cart!"
        document.getElementById('subtotal').innerText = `0.00`
        document.getElementById('total').innerText = `0.00`
    } else{
        document.getElementById('cartItems').innerHTML = cart.map((items) => {
            let {img, name, price} = items;
            subtotal = subtotal + price;
            document.getElementById('subtotal').innerText = `${subtotal.toFixed(2)}`
            document.getElementById('total').innerText = `${(tax + subtotal).toFixed(2)}`

            return(
                `
                <div class="cart-item row m-0">
                    <div class="col-3 p-0 cart-img-counter">
                        <div class="inner-cart-img-counter">
                            <img src=${img} alt="Food" class="img-fluid">
                            <span class="badge cart__item-badge">1</span>
                        </div>
                    </div>
                    <div class="col pe-0">
                        <div>
                            <p class="cart-item-desc m-0">${name}</p>
                            <b>$ <span id="price">${price}</span></b>
                        </div>
                        <div class="evaluator mt-3 d-flex justify-content-between align-items-center">
                            <div class="controls d-flex align-items-center gap-3">
                                <button id="minus">-</button><span id="quantity">1</span><button id="plus">+</button>
                            </div>
                            <button class='delete' onclick=delElement(${(j++)})>🚮</button>
                            <h6 class="item__price">$<span id="quantityPrice">2.23</span></h6>
                        </div>
                    </div>
                </div>
                `
            )
        }).join('')
    }
}
// This function updates the cart display and the corresponding subtotal and total prices. It first initializes a variable j to 0 and creates two variables for the subtotal and tax values.

// It then sets the inner text of an HTML element with the id badgeCounter to the length of the cart array.

// If the cart array is empty, it sets the inner HTML of an element with id cartItems to display the message "Add something to your cart!" and sets the inner text of elements with ids subtotal and total to display "0.00".

// If the cart array is not empty, it uses the map method to iterate through the cart array and create HTML elements for each item in the cart. For each item, it sets variables for the img, name, and price properties. It also increments the subtotal variable by the price of the item.

// It then sets the inner text of an element with the id subtotal to display the updated subtotal and sets the inner text of an element with the id total to display the subtotal plus a tax value. Finally, it returns the created HTML elements as a string using the join method.







function addtocart(a){
    cart.push({...categories[a]})
    displayCart()
}

function delElement(a){
    cart.splice(a, 1)
    displayCart()
}

displayCart()
// These are functions for adding and deleting items from the cart.

// The addtocart function takes an index of a product and adds a copy of that product to the cart array using the push method. It then calls the displayCart function to update the cart view.

// The delElement function takes an index of an item in the cart array and removes it using the splice method. It then calls the displayCart function to update the cart view.










// n                            Refactored code

// const categories = [...new Set(products.map((item) => item))];
// const cart = [];

// const displayCart = () => {
//   let subtotal = 0;
//   const tax = 0.129;
//   const cartItemsEl = document.getElementById('cartItems');
//   const subtotalEl = document.getElementById('subtotal');
//   const totalEl = document.getElementById('total');
//   const badgeCounterEl = document.getElementById('badgeCounter');

//   badgeCounterEl.innerText = cart.length;

//   if (cart.length === 0) {
//     cartItemsEl.innerHTML = 'Add something to your cart!';
//     subtotalEl.innerText = '0.00';
//     totalEl.innerText = '0.00';
//   } else {
//     cartItemsEl.innerHTML = cart
//       .map((item, index) => {
//         const { img, name, price } = item;
//         subtotal += price;

//         return `
//           <div class="cart-item row m-0">
//             <div class="col-3 p-0 cart-img-counter">
//               <div class="inner-cart-img-counter">
//                 <img src="${img}" alt="Food" class="img-fluid">
//                 <span class="badge cart__item-badge">1</span>
//               </div>
//             </div>
//             <div class="col pe-0">
//               <div>
//                 <p class="cart-item-desc m-0">${name}</p>
//                 <b>$ <span id="price">${price}</span></b>
//               </div>
//               <div class="evaluator mt-3 d-flex justify-content-between align-items-center">
//                 <div class="controls d-flex align-items-center gap-3">
//                   <button id="minus" onclick="delElement(${index})">-</button>
//                   <span id="quantity">1</span>
//                   <button id="plus">+</button>
//                 </div>
//                 <h6 class="item__price">$<span id="quantityPrice">${price}</span></h6>
//               </div>
//             </div>
//           </div>
//         `;
//       })
//       .join('');

//     subtotalEl.innerText = `${subtotal.toFixed(2)}`;
//     totalEl.innerText = `${(subtotal + (subtotal * tax)).toFixed(2)}`;
//   }
// };

// const addItemToCart = (index) => {
//   const item = categories[index];
//   cart.push({ ...item });
//   displayCart();
// };

// const deleteItemFromCart = (index) => {
//   cart.splice(index, 1);
//   displayCart();
// };

// const menuEl = document.getElementById('menuItem');
// const menuItemsHTML = categories
//   .map((item, index) => {
//     const { img, name, price } = item;

//     return `
//       <div class="menu-item row">
//         <div class="item__img col-5">
//           <img src="${img}" alt="Food item" class="itemImg img-fluid">
//         </div>
//         <div class="item__description col">
//           <p class="item__name">${name}</p>
//           <h3 class="item__price">$ <span>${price.toFixed(2)}</span></h3>
//           <div>
//             <button class="item__button" onclick="addItemToCart(${index})">Add to Cart</button>
//           </div>
//         </div>
//       </div>
//     `;
//   })
//   .join('');

// menuEl.innerHTML = menuItemsHTML;

// displayCart();




// const categories = [...new Set(products.map((item) => {return item}))]

// document.getElementById('menuItem').innerHTML = categories.map((item) => {
//     let i = 0;
//     let {img, name, price} = item
//     i++
//     return(
//         `
//         <div class="menu-item row">
//         <div class="item__img col-5">
//         <img src=${img} alt="Food item" class="itemImg img-fluid">
//         </div>
//         <div class="item__description col">
//         <p class="item__name">${name}</p>
//         <h3 class="item__price">$ <span>${price}</span></h3>

//         <div>` +
//         `<button id="addButton-${i}" class='item__button' onclick='addtocart(${i})'>Add to Cart</button>` +
//         `</div>
//         </div>
//         </div>
//         `
//         )
// }).join('')

// var cart = []

// function displayCart(){
//     let j = 0;
//     let subtotal = 0
//     let tax = 0.129

//     document.getElementById('badgeCounter').innerText = cart.length
//     if (cart.length == 0){
//         document.getElementById('cartItems').innerHTML = "Add something to your cart!"
//         document.getElementById('subtotal').innerText = `0.00`
//         document.getElementById('total').innerText = `0.00`
//     } else{
//         document.getElementById('cartItems').innerHTML = cart.map((items) => {
//             let {img, name, price} = items;
//             subtotal = subtotal + price;
//             document.getElementById('subtotal').innerText = `${subtotal}`
//             document.getElementById('total').innerText = `${tax + subtotal}`

//             return(
//                 `
//                 <div class="cart-item row m-0">
//                     <div class="col-3 p-0 cart-img-counter">
//                         <div class="inner-cart-img-counter">
//                             <img src=${img} alt="Food" class="img-fluid">
//                             <span class="badge cart__item-badge">1</span>
//                         </div>
//                     </div>
//                     <div class="col pe-0">
//                         <div>
//                             <p class="cart-item-desc m-0">${name}</p>
//                             <b>$ <span id="price">${price}</span></b>
//                         </div>
//                         <div class="evaluator mt-3 d-flex justify-content-between align-items-center">
//                             <div class="controls d-flex align-items-center gap-3">` +
//                                 "<button id='minus' onclick=delElement(" +(j++)+ `)>-</button><span id="quantity">1</span><button id="plus">+</button>
//                             </div>
//                             <h6 class="item__price">$<span id="quantityPrice">${price}</span></h6>
//                         </div>
//                     </div>

//                 </div>
//                 `
//             )
//         }).join('')
//     }
// }

// function addtocart(a){
//     const addButton = document.getElementById(`addButton-${a}`)
//     addButton.disabled = true
//     addButton.removeEventListener('click', () => addtocart(a))

//     cart.push({...categories[a]})
//     displayCart()
// }

// function delElement(a){
//     cart.splice(a, 1)
//     displayCart()
// }

// displayCart()







// const categories = [...new Set(products.map((item) => {return item}))]
// let i = 0;
// document.getElementById('menuItem').innerHTML = categories.map((item, index) => {
//     let {img, name, price} = item
//     return(
//         `
//         <div class="menu-item row">
//             <div class="item__img col-5">
//                 <img src=${img} alt="Food item" class="itemImg img-fluid">
//             </div>
//             <div class="item__description col">
//                 <p class="item__name">${name}</p>
//                 <h3 class="item__price">$ <span>${price}</span></h3>

//                 <div>` +
//                     `<button class='item__button' id='addButton-${index}' onclick='addtocart(${index})'>Add to Cart</button>` +
//                 `</div>
//             </div>
//         </div>
//         `
//     )
// }).join('')

// var cart = []

// function displayCart(){
//     let j = 0;
//     let subtotal = 0
//     let tax = 0.129

//     document.getElementById('badgeCounter').innerText = cart.length
//     if (cart.length == 0){
//         document.getElementById('cartItems').innerHTML = "Add something to your cart!"
//         document.getElementById('subtotal').innerText = `0.00`
//         document.getElementById('total').innerText = `0.00`
//     } else{
//         document.getElementById('cartItems').innerHTML = cart.map((items) => {
//             let {img, name, price} = items;
//             subtotal = subtotal + price;
//             document.getElementById('subtotal').innerText = `${subtotal}`
//             document.getElementById('total').innerText = `${tax + subtotal}`

//             return(
//                 `
//                 <div class="cart-item row m-0">
//                     <div class="col-3 p-0 cart-img-counter">
//                         <div class="inner-cart-img-counter">
//                             <img src=${img} alt="Food" class="img-fluid">
//                             <span class="badge cart__item-badge">1</span>
//                         </div>
//                     </div>
//                     <div class="col pe-0">
//                         <div>
//                             <p class="cart-item-desc m-0">${name}</p>
//                             <b>$ <span id="price">${price}</span></b>
//                         </div>
//                         <div class="evaluator mt-3 d-flex justify-content-between align-items-center">
//                             <div class="controls d-flex align-items-center gap-3">` +
//                                 "<button id='minus' onclick=delElement(" +(j++)+ `)>-</button><span id="quantity">1</span><button id="plus">+</button>
//                             </div>
//                             <h6 class="item__price">$<span id="quantityPrice">${price}</span></h6>
//                         </div>
//                     </div>

//                 </div>
//                 `
//             )
//         }).join('')
//     }
// }

// function addtocart(index){
//     cart.push({...categories[index]})
//     displayCart()
//     const button = document.getElementById(`addButton-${index}`)
//     button.disabled = true
// }
// function delElement(a){
//     const item = cart[a]
//     const index = products.indexOf(item)
//     const button = document.getElementById(`addButton-${index}`)
//     button.disabled = false
//     cart.splice(a, 1)
//     displayCart()
// }


// const categories = [...new Set(products.map((item) => {return item}))]
// let i = 0;
// document.getElementById('menuItem').innerHTML = categories.map((item, index) => {
//     let {img, name, price} = item
//     return(
//         `
//         <div class="menu-item row">
//             <div class="item__img col-5">
//                 <img src=${img} alt="Food item" class="itemImg img-fluid">
//             </div>
//             <div class="item__description col">
//                 <p class="item__name">${name}</p>
//                 <h3 class="item__price">$ <span>${price}</span></h3>

//                 <div>` +
//                     `<button class='item__button' id='addButton-${index}' onclick='addtocart(${index})'>Add to Cart</button>` +
//                 `</div>
//             </div>
//         </div>
//         `
//     )
// }).join('')

// var cart = []

// function displayCart(){
//     let j = 0;
//     let subtotal = 0
//     let tax = 0.129

//     document.getElementById('badgeCounter').innerText = cart.length
//     if (cart.length == 0){
//         document.getElementById('cartItems').innerHTML = "Add something to your cart!"
//         document.getElementById('subtotal').innerText = `0.00`
//         document.getElementById('total').innerText = `0.00`
//     } else{
//         document.getElementById('cartItems').innerHTML = cart.map((items) => {
//             let {img, name, price} = items;
//             subtotal = subtotal + price;
//             document.getElementById('subtotal').innerText = `${subtotal}`
//             document.getElementById('total').innerText = `${tax + subtotal}`

//             return(
//                 `
//                 <div class="cart-item row m-0">
//                     <div class="col-3 p-0 cart-img-counter">
//                         <div class="inner-cart-img-counter">
//                             <img src=${img} alt="Food" class="img-fluid">
//                             <span class="badge cart__item-badge">1</span>
//                         </div>
//                     </div>
//                     <div class="col pe-0">
//                         <div>
//                             <p class="cart-item-desc m-0">${name}</p>
//                             <b>$ <span id="price">${price}</span></b>
//                         </div>
//                         <div class="evaluator mt-3 d-flex justify-content-between align-items-center">
//                             <div class="controls d-flex align-items-center gap-3">` +
//                                 `<button id='minus' onclick='delElement(${j})'>-</button><span id="quantity">1</span><button id="plus">+</button>
//                             </div>
//                             <h6 class="item__price">$<span id="quantityPrice">${price}</span></h6>
//                         </div>
//                     </div>

//                 </div>
//                 `
//             )
//         }).join('')
//     }
// }

// function addtocart(index){
//     cart.push({...categories[index]})
//     displayCart()
//     const button = document.getElementById(`addButton-${index}`)
//     button.disabled = true
// }
// function delElement(a){
//     const item = cart[a]
//     const index = categories.indexOf(item)
//     const button = document.getElementById(`addButton-${index}`)
//     button.disabled = false
//     cart.splice(a, 1)
//     displayCart()
// }
