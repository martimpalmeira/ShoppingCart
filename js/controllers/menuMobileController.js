const menuContainer = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.mobile-icon-hamburguer')



export function init() {
    menuIcon.addEventListener('click', handleMenuIconClick);
}

function handleMenuIconClick() {
    
    menuContainer.classList.toggle('show');
}