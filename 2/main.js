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




let Menu = document.getElementById("menuItem");

let foodMenu = [
    {
        id: 1,
        img: './images/plate__bacon-eggs.png',
        name: 'Fried bacon with delicious eggs',
        price: 1.83
    },
    {
        id: 2,
        img: './images/plate__chicken-salad.png',
        name: 'Chicken salad with any topping',
        price: 3.65
    },
    {
        id: 3,
        img: './images/plate__fish-sticks-fries.png',
        name: 'Fish sticks and fries',
        price: 2.34
    },
    {
        id: 4,
        img: './images/plate__french-fries.png',
        name: 'French fries and ketchup',
        price: 1.99
    },
    {
        id: 5,
        img: './images/plate__ravioli.png',
        name: 'Delicious ravioli with sides',
        price: 3.99
    },
    {
        id: 6,
        img: './images/plate__salmon-vegetables.png',
        name: 'Sea salmon with veggies',
        price: 2.99
    },
    {
        id: 7,
        img: './images/plate__spaghetti-meat-sauce.png',
        name: 'Spaghetti meat sauce with hotdogs',
        price: 3.99
    },
    {
        id: 8,
        img: './images/plate__tortellini.png',
        name: 'Italian Tortellini and Wine',
        price: 5.99
    },

]

let basket = [];

let generateMenu = () => {
    return (
        Menu.innerHTML = foodMenu.map((item) => {
            let {id, img, name, price} = item
            return `
            <div id=${id} class="menu-item row">
                <div class="item__img col-5">
                    <img src=${img} alt="Food item" class="itemImg img-fluid">
                </div>
                <div class="item__description col">
                    <p class="item__name">${name}</p>
                    <h3 class="item__price">$ <span>${price}</span></h3>

                    <div>
                        <button class='item__button' id=item__button onclick='addToCart(${id})'>Add to Cart</button>
                    </div>
                </div>
            </div>
            `
        }).join('')
    )
};

generateMenu()



let addToCart = (id) => {
    let selectedItem = document.getElementById(`${id}`)
    let selectedItemButton = selectedItem.querySelector('.item__button')
    let search = basket.find((x) => x.id === selectedItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id, item: 1,
        });
        selectedItemButton.innerText = "Added to cart"
        selectedItemButton.style.backgroundColor = "#000"
        selectedItemButton.style.color = "#fff"
    }
    else { return }

    generateCartItems()
    calculation()
    TotalAmount();
};


let CartItems = document.getElementById('cartItems')


let generateCartItems = () => {

    if (basket.length === 0){
        document.getElementById('cartItems').innerHTML = `<p>Add something to your cart!</p>`
        document.getElementById('subtotal').innerText = `0.00`
        document.getElementById('total').innerText = `0.00`
    }
    else {
        return (CartItems.innerHTML = basket.map((x) => {
            let { id, item } = x;
            let {img, name, price} = foodMenu[id - 1]

            return `
            <div class="cart-item row m-0">
                <div class="col-3 p-0 cart-img-counter">
                    <div class="inner-cart-img-counter">
                        <img src=${img} alt="Food" class="img-fluid">
                        <span class="badge cart__item-badge">${item}</span>
                    </div>
                </div>
                <div class="col pe-0">
                    <div>
                        <p class="cart-item-desc m-0">${name}</p>
                        <b>$ <span id="price">${price}</span></b>
                    </div>
                    <div class="evaluator mt-3 d-flex justify-content-between align-items-center">
                        <div class="controls d-flex align-items-center gap-3">
                            <button id="minus" onclick="decrement(${id})">-</button>
                            <span id="quantity">${item}</span>
                            <button id="plus" onclick="increment(${id})">+</button>
                        </div>
                            <h6 class="item__price">$<span id="quantityPrice">${price *= item}</span></h6>
                    </div>
                </div>

            </div>
            `
        }).join(''))
    }
};

generateCartItems()


let increment = (id) => {
    let selectedItem = document.getElementById(`${id}`);
    let search = basket.find((x) => x.id === selectedItem.id);
    search.item += 1;
    generateCartItems();
    TotalAmount();
};


let decrement = (id) => {
    let selectedItem = document.getElementById(`${id}`);
    let search = basket.find((x) => x.id === selectedItem.id);
    search.item -= 1;
    generateCartItems();
    TotalAmount();
};


let removeItem = (id) => {
    let selectedItem = document.getElementById(`${id}`);
    basket = basket.filter((x) => x.id !== selectedItem.id);
    generateCartItems();
    TotalAmount();
};


// Function that sums up the amount of items in the cart
let calculation = () => {
    let cartIcon = document.getElementById("badgeCounter");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);

    generateCartItems()
};
calculation()



let TotalAmount = () => {
    let tax = 0.120
    if (basket.length !== 0){


        let subtotal = basket.map((x) => {
            let {item, id} = x
            let {price} = foodMenu[id - 1]

            return item * price
        }).reduce((x,y) => x + y, 0)

        document.getElementById('subtotal').innerText = subtotal.toFixed(2)
        document.getElementById('total').innerText = (subtotal + tax).toFixed(2)
    }
};
TotalAmount();