import { checkAuth, getItems, createItem, buyItem, deleteAllItems, logout } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();

const form = document.querySelector('.item-form');
const deleteButton = document.querySelector('.delete');
const listEl = document.querySelector('.list');

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = new FormData(form);
    const item = data.get('item');
    const quantity = data.get('quantity');

    await createItem(item, quantity);

    form.reset();

    await displayShoppingList();
});

deleteButton.addEventListener('click', async() => {
    await deleteAllItems();

    await displayShoppingList();
});

window.addEventListener('load', async() => {
    await displayShoppingList();
});

async function displayShoppingList() {
    const list = await getItems();

    listEl.textContent = '';

    for (let item of list) {
        const listItemEl = renderItem(item);

        
        listItemEl.addEventListener('click', async() => {
            await buyItem(item.id);

            displayShoppingList();
        });
            
    
        listEl.append(listItemEl);
    }
}