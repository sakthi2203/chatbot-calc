let expression = '';

function appendValue(value) {
    expression += value;
    document.getElementById('display').value = expression;
}

function clearDisplay() {
    expression = '';
    document.getElementById('display').value = expression;
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('display').value = result.toFixed(2);
        expression = '';
    } catch (error) {
        document.getElementById('display').value = 'Error';
        expression = '';
    }
}
