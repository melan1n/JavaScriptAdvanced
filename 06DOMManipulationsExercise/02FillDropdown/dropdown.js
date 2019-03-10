function addItem() {
    let newItemTextElement = document.getElementById('newItemText');
    let newItemValueElement = document.getElementById('newItemValue');

    let newText = newItemTextElement.value;
    let newValue = newItemValueElement.value;

    let dropdownElement = document.getElementById('menu');

    let optionElement = document.createElement('option');
    optionElement.setAttribute('value', newValue);
    optionElement.innerHTML = newText;
    
    newItemTextElement.value = '';
    newItemValueElement.value = '';

    dropdownElement.appendChild(optionElement);
}
