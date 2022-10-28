import Product from '../model/product.js'
import ShoppingCart from '../model/shoppingCart.js'

//STORAGE PRODUCTS

const prod1 = new Product('Camisa Copa', 230.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/camisa-copa.png?raw=true', 'Copa', 1, 3);
const prod2 = new Product('Álbum Copa', 110.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/album-copa.png?raw=true', 'Copa', 1, 2);
const prod3 = new Product('Mascote da Copa', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/mascote-copa.jpg?raw=true', 'Copa', 1, 10);
const prod4 = new Product('Bola de futebol da Copa', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/bola-futebol-copa.jpeg?raw=true', 'Copa', 1, 6);
const prod5 = new Product('Chaveiro Troféu Copa', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/chaveiro-copa.jpeg?raw=true', 'Copa', 1, 7);
const prod6 = new Product('Garrafa Retro Copa', 120.0, 'Lorem ipsum dolor sit amet', 'https://raw.githubusercontent.com/martimpalmeira/shopping-cart/main/img/garrafa-retro-copa.jpeg', 'Copa', 1, 3);
const prod7 = new Product('Brinquedo Neymar', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/brinquedo-neymar.jpeg?raw=true', 'Copa', 1, 8);
const prod8 = new Product('Ingresso Copa 2022', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/ingresso-copa.jpeg?raw=true', 'Copa', 1, 4);
const prod9 = new Product('Figurinhas da Copa 2022', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/figurinhas-copa.jpeg?raw=true', 'Copa', 1, 13);
const prod10 = new Product('Balde pipoca Copa', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/balde-pipoca-copa.jpeg?raw=true', 'Copa', 1, 12);

//Produtos eletronicos/setup
const prod11 = new Product('Iphone 14 PLUS', 8000.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/iphone.jpeg?raw=true', 'Eletrônicos', 1, 14);
const prod12 = new Product('Head Set Razer', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/head-set.png?raw=true', 'Eletrônicos', 1, 2);
const prod13 = new Product('Cadeira Gamer', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/cadeira-gamer.jpeg?raw=true', 'Eletrônicos', 1, 4);
const prod14 = new Product('Samsung Galaxy', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/samsung-galaxy.jpeg?raw=true', 'Eletrônicos', 1, 5);
const prod15 = new Product('Smartphone Xiaomi', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/smartphone-xiaomi.jpeg?raw=true', 'Eletrônicos', 1, 7);
const prod16 = new Product('SmartPhone Motorola', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/smartphone-motorola.jpeg?raw=true', 'Eletrônicos', 1, 9);
const prod17 = new Product('MacBook', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/macbook.jpeg?raw=true', 'Eletrônicos', 1, 3);
const prod18 = new Product('Pc Gamer', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/pc-gamer.jpeg?raw=true', 'Eletrônicos', 1, 11);
const prod19 = new Product('Mouse Gamer', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/mouse-gamer.jpeg?raw=true', 'Eletrônicos', 1, 9);
const prod20 = new Product('Teclado Gamer', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/teclado-gamer.jpeg?raw=true', 'Eletrônicos', 1, 2);

//Produtos Vestimenta
const prod21 = new Product('Casaco moletom Adidas', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/moletom-adidas.jpeg?raw=true', 'Vestuario', 1, 20);
const prod22 = new Product('Tênis Nike', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/tenis-nike.jpeg?raw=true', 'Vestuario', 1, 17);
const prod23 = new Product('Boné da Puma', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/bone-puma.jpeg?raw=true', 'Vestuario', 1, 5);
const prod24 = new Product('Calça da Diesel', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/calca-diesel.jpeg?raw=true', 'Vestuario', 1, 11);
const prod25 = new Product('Cueca Lupo', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/cueca-lupo.jpeg?raw=true', 'Vestuario', 1, 2);
const prod26 = new Product('Jaqueta Jeans', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/jaqueta-jeans.jpeg?raw=true', 'Vestuario', 1, 9);
const prod27 = new Product('Calça moletom Adidas', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/calca-moletom-adidas.jpeg?raw=true', 'Vestuario', 1, 1);
const prod28 = new Product('Calça Levis', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/calca-levis.jpeg?raw=true', 'Vestuario', 1, 8);
const prod29 = new Product('Camisa Nike', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/camisa-nike.jpeg?raw=true', 'Vestuario', 1, 3);
const prod30 = new Product('Tenis Corrida Asics', 120.0, 'Lorem ipsum dolor sit amet', 'https://github.com/martimpalmeira/shopping-cart/blob/main/img/tenis-corrida-asics.jpeg?raw=true', 'Vestuario', 1, 25);

const products = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8, prod9, prod10,
    prod11, prod12, prod13, prod14, prod15, prod16, prod17, prod18, prod19, prod20,
    prod21, prod22, prod23, prod24, prod25, prod26, prod27, prod28, prod29, prod30]

export function saveProducts() {
    let n = 1;
    products.forEach(product => {
        localStorage.setItem(`Product${n}`, JSON.stringify(product))
        n += 1
    })
}

function getAllProductsJsonFormat() {
    let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        if (keys[i].includes('Product')) {
            values.push(localStorage.getItem(keys[i]));
        }

    }

    return values;
}

const listProductsJson = getAllProductsJsonFormat();

export function getAllProductsObj() {
    const listProductObj = listProductsJson.map(prod => {
        return JSON.parse(prod)
    })

    return listProductObj;
}

//STORAGE CARRINHO

let listOfProducts = []
const carrinho = new ShoppingCart(listOfProducts);

export function saveShoppingCart() {
    localStorage.setItem(`Carrinho`, JSON.stringify(carrinho))
}

export function addProductToCarrinho(product) {
    carrinho.listOfProducts.push(product);
    localStorage.setItem(`Carrinho`, JSON.stringify(carrinho))
}

export function increaseProductQuantInCarrinho(product) {
    carrinho.listOfProducts.forEach(prods => {
        if (prods.name == product.name) {
            prods.quantidadeNoCarrinho++;
        }
    });
    localStorage.setItem(`Carrinho`, JSON.stringify(carrinho))
}

export function decreaseProductQuantInCarrinho(product) {
    carrinho.listOfProducts.forEach(prods => {
        if (prods.name == product.name && prods.quantidadeNoCarrinho > 0) {
            prods.quantidadeNoCarrinho--;
        }
    });
    localStorage.setItem(`Carrinho`, JSON.stringify(carrinho))
}

export function removeProductInCarrinho(product) {
    carrinho.listOfProducts.forEach(prods => {
        if (prods.name == product.name) {
            const index = listOfProducts.indexOf(prods);
            listOfProducts.splice(index,1);
        }
    });
    localStorage.setItem(`Carrinho`, JSON.stringify(carrinho))
}

function getCarrinhoJsonFormat() {
    let values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        if (keys[i].includes('Carrinho')) {
            values.push(localStorage.getItem(keys[i]));
        }

    }
    return values;
}

export function getCarrinhoObj() {
    return JSON.parse(getCarrinhoJsonFormat());
}




