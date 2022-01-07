import { checkAuth, logout } from '../fetch-utils.js';

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