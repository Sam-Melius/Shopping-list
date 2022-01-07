export function renderItem(item) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    div.classList.add(item.bought ? 'bought' : 'not-bought');
    div.classList.add('item');

    p.textContent = `${item.quantity} ${item.item}`;

    div.append(p);

    return div;
}