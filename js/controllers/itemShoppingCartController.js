import * as Storage from '../storage/localStorage.js';

const itensContainer = document.querySelector('.itens-container');

const numberItens = document.querySelector('.number-itens')

export function createItemInShoppingCart(productObj) {

    // const numberItens = document.querySelector('.number-itens')
    const itemImg = document.createElement('img');
    const itemName = document.createElement('p');
    itemName.classList.add('item-name')

    const itemPrice = document.createElement('p');
    const itemDescription = document.createElement('p');
    const itemContainer = document.createElement('div');
    const quantidade = document.createElement('span');
    const diminuirQuantidade = document.createElement('p');
    const aumentarQuantidade = document.createElement('p');
    const quantidadeContainer = document.createElement('div');
    const removerItem = document.createElement('p');
    const valorTotal = document.querySelector('.valor-total')

    quantidadeContainer.classList.add('quantidade-container')
    quantidade.classList.add('quantidade');
    itemContainer.classList.add('item-container')
    diminuirQuantidade.classList.add('diminuir-quantidade')
    aumentarQuantidade.classList.add('aumentar-quantidade')
    removerItem.classList.add('remover-item')

    const itemLeftContainer = document.createElement('div');
    itemLeftContainer.classList.add('itemLeftContainer');

    const itemLeftContainerText = document.createElement('div');
    itemLeftContainerText.classList.add('itemLeftContainerText');

    itemImg.src = productObj.linkImg;
    itemName.innerText = productObj.name;
    itemPrice.innerText = "R$" + productObj.price + ".00";
    itemDescription.innerText = productObj.description;
    quantidade.innerText = productObj.quantidadeNoCarrinho;
    diminuirQuantidade.innerText = '−';
    aumentarQuantidade.innerText = "+";
    removerItem.innerText = "Remover produto";

    removerItem.addEventListener('click', () => {
        Storage.removeProductInCarrinho(productObj);
        itensContainer.removeChild(itemContainer)

        numberItens.innerText = Storage.getCarrinhoObj().listOfProducts.length;
        let result = 0;
        let itens = document.querySelectorAll('.item-container');
        itens.forEach(item => {
            let price = parseInt((item.childNodes[2].textContent).substring(2))
            let quantity = parseInt(item.childNodes[1].childNodes[1].textContent)
            //console.log(price + " e " + quantity)
            result += (price * quantity);
        })
        valorTotal.innerText = "R$ " + result + ".00";

    })

    diminuirQuantidade.addEventListener('click', () => {

            Storage.decreaseProductQuantInCarrinho(productObj);
        quantidade.innerText = productObj.quantidadeNoCarrinho;
        valorTotal.innerText = "R$ " + productObj.price * productObj.quantidadeNoCarrinho + ".00";
        let result = 0;
        let itens = document.querySelectorAll('.item-container');
        itens.forEach(item => {
            let price = parseInt((item.childNodes[2].textContent).substring(2))
            let quantity = parseInt(item.childNodes[1].childNodes[1].textContent)
            //console.log(price + " e " + quantity)
            result += (price * quantity);
        })

        valorTotal.innerText = "R$ " + result + ".00";

    })

    aumentarQuantidade.addEventListener('click', () => {
        if (productObj.quantidadeNoCarrinho < productObj.estoque){

        
        Storage.increaseProductQuantInCarrinho(productObj);
        quantidade.innerText = productObj.quantidadeNoCarrinho;
        valorTotal.innerText = "R$ " + productObj.price * productObj.quantidadeNoCarrinho + ".00";
        let result = 0;
        let itens = document.querySelectorAll('.item-container');
        itens.forEach(item => {
            let price = parseInt((item.childNodes[2].textContent).substring(2))
            let quantity = parseInt(item.childNodes[1].childNodes[1].textContent)
            //console.log(price + " e " + quantity)
            result += (price * quantity);
        })



        valorTotal.innerText = "R$ " + result + ".00";
    } else if(productObj.quantidadeNoCarrinho == productObj.estoque){
        window.alert("Não é possível adicionar mais produto, estoque insuficiente");
    }})

    itensContainer.appendChild(itemContainer)

    itemContainer.appendChild(itemLeftContainer)
    itemContainer.appendChild(quantidadeContainer)

    quantidadeContainer.appendChild(diminuirQuantidade)
    quantidadeContainer.appendChild(quantidade)
    quantidadeContainer.appendChild(aumentarQuantidade)


    itemContainer.appendChild(itemPrice)


    itemLeftContainer.appendChild(itemImg)
    itemLeftContainer.appendChild(itemLeftContainerText)

    itemLeftContainerText.appendChild(itemName)
    itemLeftContainerText.appendChild(itemDescription)
    itemLeftContainerText.appendChild(removerItem)


}