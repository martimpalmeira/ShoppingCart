const menuContainer = document.querySelector('.desktop-menu');
const menuIcon = document.querySelector('.mobile-icon-hamburguer');
const topLine = document.querySelector('.top-line');
const middleLine = document.querySelector('.middle-line');
const bottomLine = document.querySelector('.bottom-line');
const openCarrinho = document.querySelector('.open-carrinho');

export function init() {
    menuIcon.addEventListener('click', handleMenuIconClick);

    

    window.addEventListener("resize", function(event) {
        topLine.classList.remove('top-line-x-reverse')
        middleLine.classList.remove('middle-line-x-reverse')
        bottomLine.classList.remove('bottom-line-x-reverse')
        menuContainer.classList.remove('hide')
        if(this.window.innerWidth <= 940){
            openCarrinho.classList.remove('show')
        }
        
        //console.log(window.innerWidth)
    })
}

function handleMenuIconClick() {
    
    //menuContainer.classList.toggle('show');
    
    if(!menuContainer.classList.contains('show-menu')){
        menuContainer.classList.remove('hide')
        void menuContainer.offsetWidth; 
        menuContainer.classList.add('show-menu')
    }else{
        menuContainer.classList.remove('show-menu')
        void menuContainer.offsetWidth; 
        menuContainer.classList.add('hide')
    }

    if(!topLine.classList.contains('top-line-x')){
        topLine.classList.remove('top-line-x-reverse')
        void topLine.offsetWidth; 
        topLine.classList.add('top-line-x')
    }else{
        topLine.classList.remove('top-line-x')
        void topLine.offsetWidth; 
        topLine.classList.add('top-line-x-reverse')
    }

    if(!middleLine.classList.contains('middle-line-x')){
        middleLine.classList.remove('middle-line-x-reverse')
        void middleLine.offsetWidth; 
        middleLine.classList.add('middle-line-x')
    }else{
        middleLine.classList.remove('middle-line-x')
        void middleLine.offsetWidth; 
        middleLine.classList.add('middle-line-x-reverse')
    }

    if(!bottomLine.classList.contains('bottom-line-x')){
        bottomLine.classList.remove('bottom-line-x-reverse')
        void bottomLine.offsetWidth; 
        bottomLine.classList.add('bottom-line-x')
    }else{
        bottomLine.classList.remove('bottom-line-x')
        void bottomLine.offsetWidth; 
        bottomLine.classList.add('bottom-line-x-reverse')
    }
    
    
   
    
       
    
    
}