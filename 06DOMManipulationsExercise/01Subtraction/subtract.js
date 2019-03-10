function subtract() {
    let firstNumElement = document.getElementById('firstNumber');
    let secondNumElement = document.getElementById('secondNumber');

    let result = Number(firstNumElement.value) -
        Number(secondNumElement.value);

    let resultDiv = document.getElementById('result');

    resultDiv.textContent = result;
}
