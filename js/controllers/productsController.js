import * as Storage from '../storage/localStorage.js';
import * as CardController from './cardController.js';

const allProductsObj = Storage.getAllProductsObj();
const limitOfProductsToShow = 12;
let countProducts = 1;

export function init() {
    Storage.saveProducts();
    showCards();
   
}

export function showCards() {
    allProductsObj.forEach(prodObj => {
        if (countProducts <= limitOfProductsToShow) {
            CardController.createCard(prodObj);
        }
        countProducts++

    })
}


//Shuffle function
export function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

shuffle(allProductsObj);



