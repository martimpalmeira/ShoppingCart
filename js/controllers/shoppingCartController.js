import * as Storage from '../storage/localStorage.js';


const carrinhoTitle = document.querySelector('.carrinho-title');
const openCarrinho = document.querySelector('.open-carrinho');

export function init() {
    Storage.saveShoppingCart();
    carrinhoTitle.addEventListener('click', handleCarrinhoClick);

}


function handleCarrinhoClick() {
    openCarrinho.classList.toggle('show')

}

export function alreadyExistsProductInCart(newProduct) {
    let alreadyExists = false
    Storage.getCarrinhoObj().listOfProducts.forEach(existingProducts => {
        if (existingProducts.name == newProduct.name) {
            alreadyExists = true;

        }
    })
    return alreadyExists;


}