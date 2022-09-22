import { createElement } from '/src/scripts/elementCreation.js';
import { navBarElem } from '/src/scripts/ressourcesHTML.js';

const createFooter = () => {

    const share = createElement('div', {class:'share'}, createElement('a', {href:'', class:'fab fa-facebook-f'}, ''),
                                                        createElement('a', {href:'', class:'fab fa-twitter'}, ''),
                                                        createElement('a', {href:'', class:'fab fa-instagram'}, ''),
                                                        createElement('a', {href:'', class:'fab fa-linkedin'}, ''),
                                                        createElement('a', {href:'', class:'fab fa-pinterest'}, ''), '');

     const a = [];
    for(let i = 0; i < navBarElem.length; i++){
         a[i] = createElement('a', {href:'#'}, `${navBarElem[i].name}`);
    }
    const links = createElement('div', {class:'links'}, ...a);

    const credit = createElement('div', {class:'credit'},
                                                         `Inspirated from `, createElement('span', {}, 'mr. web designer'), ' by ', createElement('span', {}, 'EtnoPolino') );
    const footer = createElement('section', {class:'footer'}, share, links, credit);
    document.body.appendChild(footer);
}

export{ createFooter }