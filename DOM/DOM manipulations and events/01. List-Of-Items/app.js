function addItem() {
    let textToBeAdd = document.getElementById('newItemText').value;
    let parentEl = document.getElementById('items');

    let newChild = document.createElement('li');
    newChild.textContent = textToBeAdd;

    parentEl.appendChild(newChild);

}