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
            document.getElementById('subtotal').innerText = `${subtotal}`
            document.getElementById('total').innerText = `${tax + subtotal}`

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
                            <div class="controls d-flex align-items-center gap-3">` +
                                "<button id='minus' onclick=delElement(" +(j++)+ `)>-</button><span id="quantity">1</span><button id="plus">+</button>
                            </div>
                            <h6 class="item__price">$<span id="quantityPrice">${price}</span></h6>
                        </div>
                    </div>

                </div>
                `
            )
        }).join('')
    }
}

function addtocart(a){
    cart.push({...categories[a]})
    displayCart()
}

function delElement(a){
    cart.splice(a, 1)
    displayCart()
}

displayCart()