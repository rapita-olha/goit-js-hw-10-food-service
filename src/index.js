import createMenu from "./templates/menu.hbs";
import menu from "./data/menu.json";

const listRef = document.querySelector('.js.menu');

listRef.insertAdjacentHTML('beforeend', createMenu(menu));

