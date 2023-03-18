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

let basket = JSON.parse(localStorage.getItem("data")) || [];

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
}; generateMenu()


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
    calculation()
    // console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
};