import * as Storage from '../storage/localStorage.js';
import * as ItemShoppingCartController from './itemShoppingCartController.js';
import * as ShoppingCartController from './shoppingCartController.js'

const numberItens = document.querySelector('.number-itens')
const section = document.querySelector('section')
const valorTotal = document.querySelector('.valor-total');
const allProductsObj = Storage.getAllProductsObj();

let numberOfItens = 1;



function handleCardClick(card) {

    const productName = card.childNodes[1].textContent;
    allProductsObj.forEach(productObj => {
        if (productObj.name == productName && productObj.quantidadeNoCarrinho < productObj.estoque) {
            if (ShoppingCartController.alreadyExistsProductInCart(productObj)) {
                // console.log("já existe")
                Storage.increaseProductQuantInCarrinho(productObj);
                let allItensContainers = document.querySelectorAll('.item-container')
                allItensContainers.forEach(item => {
                    if (item.childNodes[0].childNodes[1].childNodes[0].textContent == productObj.name) {
                        item.childNodes[1].childNodes[1].innerText = productObj.quantidadeNoCarrinho;
                    }
                })


            } else {
                Storage.addProductToCarrinho(productObj);
                ItemShoppingCartController.createItemInShoppingCart(productObj)
                numberItens.innerText = Storage.getCarrinhoObj().listOfProducts.length;
                // console.log("não existe")
                //console.log(ShoppingCartController.alreadyExistsProductInCart(productObj))
            }

        }

    })

    calculateTotalValue();
}

function calculateTotalValue() {
    let result = 0;
    let itens = document.querySelectorAll('.item-container');
    itens.forEach(item => {
        let price = parseInt((item.childNodes[2].textContent).substring(2))
        let quantity = parseInt(item.childNodes[1].childNodes[1].textContent)
        //console.log(price + " e " + quantity)
        result += (price * quantity);
    })



    valorTotal.innerText = "R$ " + result + ".00";
}

export function createCard(prodObj) {

    const div = document.createElement('div')
    div.classList.add('card')
    const imgProd = document.createElement('img')
    const pTitle = document.createElement('p')
    const pPrice = document.createElement('p')
    const pDescription = document.createElement('p')
    const pEstoque = document.createElement('p')
    const btnAddToShoppingCart = document.createElement('button')

    div.addEventListener('click', () => {
        handleCardClick(div)

    })

    imgProd.src = prodObj.linkImg
    pTitle.innerText = prodObj.name
    pPrice.innerText = "R$" + prodObj.price + ".00"
    pDescription.innerText = prodObj.description
    pEstoque.innerText = "Quantidade estoque: " + prodObj.estoque
    btnAddToShoppingCart.innerText = "Adicionar ao carrinho"

    div.appendChild(imgProd)
    div.appendChild(pTitle)
    div.appendChild(pPrice)
    div.appendChild(pDescription)
    div.appendChild(pEstoque)
    div.appendChild(btnAddToShoppingCart)


    section.appendChild(div)

}

export function cleanCards() {
    while (section.firstChild) {
        section.removeChild(section.lastChild);
    }
}

