import * as Storage from '../storage/localStorage.js';
import * as CardController from './cardController.js';
import * as productsController from './productsController.js';

const allProductsObj = Storage.getAllProductsObj();

const linkVestuario = document.querySelector('.link-vestuario');
const linkCopa = document.querySelector('.link-copa');
const linkEletronicos = document.querySelector('.link-eletronicos');
const linkHome = document.querySelector('.link-home');

const limitOfProductsToShow = 12;
let countProducts = 1;


export function init(){
    linkVestuario.addEventListener('click', ()=>{
        handleLinkClick('Vestuario');
    });
    linkCopa.addEventListener('click', ()=>{
        handleLinkClick('Copa');
    });
    linkEletronicos.addEventListener('click', ()=>{
        handleLinkClick('Eletrônicos');
    });
    linkHome.addEventListener('click', ()=>{
        handleLinkHomeClick();
    });
}

function handleLinkClick(segment){
    
    CardController.cleanCards();
   
    allProductsObj.forEach(productObj => {
        if(productObj.segment == segment){
            
            CardController.createCard(productObj);
        }
    })
}

function handleLinkHomeClick(){
    productsController.shuffle(allProductsObj);
    CardController.cleanCards();
    allProductsObj.forEach(productObj => {
        if (countProducts <= limitOfProductsToShow) {
            CardController.createCard(productObj);
        }
        countProducts++
    })

    countProducts = 1;
}