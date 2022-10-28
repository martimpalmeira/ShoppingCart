import * as Storage from '../storage/localStorage.js';
import * as CardController from './cardController.js';

const allProductsObj = Storage.getAllProductsObj();

const searchInput = document.querySelector('.search-input');

const limitOfProductsToShow = 12;
let countProducts = 1;

export function init() {
    searchInput.addEventListener('keyup', () => {
        CardController.cleanCards();
        handleSearchInputKeyUp();
    })
    

}


function handleSearchInputKeyUp() {
    countProducts = 1;
    allProductsObj.forEach(prodObj => {
        if (searchInput.value == "") {
            if (countProducts <= limitOfProductsToShow) {
                CardController.createCard(prodObj);
                countProducts++;
            }

        }
        else if (((prodObj.name).toLowerCase()).includes(searchInput.value.toLowerCase())) {
            CardController.createCard(prodObj);
        }
    })
}