import { createHeader } from './scripts/header.js';
import { createHome } from './scripts/home.js';
import { createAbout } from './scripts/about.js';
import { createMenu } from './scripts/menu.js';
import { createProducts } from './scripts/products.js';
import { createReview } from './scripts/review.js';
import { createConctact } from './scripts/contact.js';
import { createBlog } from './scripts/blog.js';
import { createFooter } from './scripts/footer.js';

createHeader();
createHome();
createAbout();
createMenu();
createProducts();
createReview();
createConctact();
createBlog();
createFooter();

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
