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
