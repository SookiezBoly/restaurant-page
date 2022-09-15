const cartItem = document.querySelector('.cart-items-container');
const searcForm = document.querySelector('.search-form');


document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    searcForm.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () =>{
    searcForm.classList.toggle('active');
    cartItem.classList.remove('active');
}

window.onscroll = () =>{
    cartItem.classList.remove('active');
    searcForm.classList.remove('active');
}