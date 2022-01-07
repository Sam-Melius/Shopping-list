import { checkAuth, getListItems, logout } from '../fetch-utils.js';

checkAuth();

const form = document.querySelector('.item-form');
const deleteButton = document.querySelector('.delete'),
const listEl = document.querySelector('.list')

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const data = FormData(form);
    const item = data.get('item');
    const quantity = data.get('quantity');

    await createListItem(item, quantity);

    form.reset();
});

async function DisplayShoppingList(){
    const list = await getListItems();

        listEl.textContent = '';

        for (let item of items) {
            const listItemEl = document.createElement('p');
            listItemEl.classList.add('list-item');
            listItemEl.textContent = `${item.quantity} ${item.item}`;
        }
        if (item.bought) {
            listItemEl.classList.add('bought');
        } 
        else {
            listItemEl.classList.add('not-bought');
            listItemEl.addEventListener('click', async() => {
                await buyListItem(item.id);

                DisplayShoppingList();
            });
            
        }

}