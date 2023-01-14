let notAdded = true;
let lightTheme = true;
const buttonClick = (id) => {
    const buttonValue = id;
    let prev = false;

    if (buttonValue == 'theme') {
        updateTheme();
        return;
    }

    if (buttonValue == 'clear') {
        clearDisplay();
        return;
    }

    if (buttonValue == 'backspace') {
        backspace();
        return;
    }

    if (buttonValue == 'equal') {
        evaluate();
        return;
    }

    if (buttonValue == 'plusMinus') {
        prev = !prev;
        plusMinus(prev);
        return;
    }

    if (buttonValue == 'decimal ') {
        prev = !prev;
        plusMinus(prev);
        return;
    }

    updateDisplay(buttonValue);
}

const updateDisplay = (value) => {
    const display = document.getElementsByClassName('display')[0];
    display.innerText += value;
}

const addDecimal = () => {
    if (notAdded) {
        const display = document.getElementsByClassName('display')[0];
        display.innerText += '.';
        notAdded = false;
    } else {
        const display = document.getElementsByClassName('display')[0];
        const values = display.innerText.split('');
        values.pop();
        notAdded = true;
    }
}

const plusMinus = (prev) => {
    const display = document.getElementsByClassName('display')[0];
    const values = display.innerText.split('');
    display.innerText = values.join('');
    let newValue = null;

    if (values[values.length-1] != ')') {
        let lastValue = values[values.length - 1];
        newValue = `(-${lastValue})`;
        values.pop()
        display.innerText = values.join('') + newValue;
    }   else {
        let lastValue = values[values.length - 2];
        newValue = lastValue;
        values.splice((values.length - 4), 4)
        values.push(lastValue)
        display.innerText = values.join('');
    }
}

const clearDisplay = () => {
    const display = document.getElementsByClassName('display')[0];
    display.innerText = '';
}

const backspace = () => {
    const display = document.getElementsByClassName('display')[0];
    const values = display.innerText.split('');
    if (values.length > 0) {
        values.pop();
        display.innerHTML = values.join('');
    }
}

const evaluate = () => {
    const display = document.getElementsByClassName('display')[0];
    expression = display.innerText;
    const result = eval(expression);
    display.innerText = result;
}

const updateTheme = () => {
    const container = document.getElementsByClassName('container')[0];
    const themeName = document.getElementById('theme');
    if (lightTheme) {
        container.classList.add('dark-container');
        themeName.innerHTML = 'Light';
        lightTheme = false;
    } else {
        container.classList.remove('dark-container')
        themeName.innerHTML = 'Dark';
        lightTheme = true;
    }
}

// const themeName = document.getElementsById('theme')[0];
// hemeName.innerHTML = 'Light';
// ;
