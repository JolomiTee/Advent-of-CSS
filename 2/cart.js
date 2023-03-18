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


// // Function that sums up the amount of items in the cart
// let calculation = () => {
//     let cartIcon = document.getElementById("badgeCounter");
//     cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
// }; calculation()





// let CartItems = document.getElementById('cartItems')


// let generateCartItems = () => {
//     let subtotal = 0
//     let tax = 0.129

//     if (basket.length === 0){
//         document.getElementById('cartItems').innerHTML = `<p>Add something to your cart!</p>`
//         document.getElementById('subtotal').innerText = `0.00`
//         document.getElementById('total').innerText = `0.00`
//     }
//     else {
//         return CartItems.innerHTML = basket.map((items) => {
//             console.log(items.id)
//             let {id, item} = items
//         })
//     }
// }


// let generateCartItems = () => {

//     if (basket.length === 0){
//         document.getElementById('cartItems').innerHTML = `<p>Add something to your cart!</p>`
//         document.getElementById('subtotal').innerText = `0.00`
//         document.getElementById('total').innerText = `0.00`
//     } else {
//         return (CartItems.innerHTML = basket.map((cartItem) => {
//             let {id, item} = cartItem
//             let search = foodMenu.find((menuItem) => menuItem.id === id) || [];

//             return `
//             <div class="cart-item row m-0">
//                 <div class="col-3 p-0 cart-img-counter">
//                     <div class="inner-cart-img-counter">
//                         <img src=${search.img} alt="Food" class="img-fluid">
//                         <span class="badge cart__item-badge">1</span>
//                     </div>
//                 </div>
//                 <div class="col pe-0">
//                     <div>
//                         <p class="cart-item-desc m-0">${search.name}</p>
//                         <b>$ <span id="price">${search.price}</span></b>
//                     </div>
//                     <div class="evaluator mt-3 d-flex justify-content-between align-items-center">
//                         <div class="controls d-flex align-items-center gap-3">
//                             <button id="minus">-</button><span id="quantity">1</span><button id="plus">+</button>
//                         </div>
//                         <button class='delete' onclick=delElement()>🚮</button>
//                         <h6 class="item__price">$<span id="quantityPrice">${item * search.price}</span></h6>
//                     </div>
//                 </div>
//             </div>
//             `
//         }).join(""))
//     }
// };

// let generateCartItems = () => {
//     let subtotal = 0;
//     let tax = 0.129;

//     if (basket.length === 0) {
//       document.getElementById("cartItems").innerHTML = `<p>Add something to your cart!</p>`;
//       document.getElementById("subtotal").innerText = `0.00`;
//       document.getElementById("total").innerText = `0.00`;
//     } else {
//       CartItems.innerHTML = basket
//         .map((cartItem) => {
//           let { id, item } = cartItem;
//           let search = foodMenu.find((menuItem) => menuItem.id === id);

//           if (!search) {
//             return '';
//           }

//           let itemPrice = item * search.price;
//           subtotal += itemPrice;

//           return `
//             <div class="cart-item row m-0">
//               <div class="col-3 p-0 cart-img-counter">
//                 <div class="inner-cart-img-counter">
//                   <img src="${search.img}" alt="Food" class="img-fluid">
//                   <span class="badge cart__item-badge">1</span>
//                 </div>
//               </div>
//               <div class="col pe-0">
//                 <div>
//                   <p class="cart-item-desc m-0">${search.name}</p>
//                   <b>$ <span class="price">${search.price.toFixed(2)}</span></b>
//                 </div>
//                 <div class="evaluator mt-3 d-flex justify-content-between align-items-center">
//                   <div class="controls d-flex align-items-center gap-3">
//                     <button class="minus" onclick="decrementQuantity(this)">-</button>
//                     <span class="quantity">${item}</span>
//                     <button class="plus" onclick="incrementQuantity(this)">+</button>
//                   </div>
//                   <button class="delete" onclick="deleteCartItem(this)">🚮</button>
//                   <h6 class="item__price">$<span class="quantityPrice">${itemPrice.toFixed(2)}</span></h6>
//                 </div>
//               </div>
//             </div>
//           `;
//         })
//         .join("");

//       document.getElementById("subtotal").innerText = `$${subtotal.toFixed(2)}`;
//       document.getElementById("total").innerText = `$${(subtotal * (1 + tax)).toFixed(2)}`;
//     }
// };

generateCartItems()
