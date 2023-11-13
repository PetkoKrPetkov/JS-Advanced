function addItem() {
    
    const newItemTextRef = document.querySelector('#newItemText');
    const itemValueR = document.querySelector('#newItemValue');
    const selectMenuRef = document.querySelector('#menu');
    
    const newOption = document.createElement('option');
    newOption.textContent = newItemTextRef.value;
    newOption.value = itemValueR.value;

    selectMenuRef.appendChild(newOption);
    newItemTextRef.value = '';
    itemValueR.value = '';
}