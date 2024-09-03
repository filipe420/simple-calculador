import { add, subtract, multiply, divide } from './operations.js';
import { ErrorPopUp } from './error.js';

function Calc() {
    document.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const calcInput = document.getElementById("calcInput");
            const input = calcInput.value;
            let result;
            try {
                if (input.includes('+')) {
                    const [a, b] = input.split('+').map(Number);
                    result = add(a, b);
                } else if (input.includes('-')) {
                    const [a, b] = input.split('-').map(Number);
                    result = subtract(a, b);
                } else if (input.includes('*')) {
                    const [a, b] = input.split('*').map(Number);
                    result = multiply(a, b);
                } else if (input.includes('%')) {
                    const [a, b] = input.split('%').map(Number);
                    result = divide(a, b);
                } else {
                    throw new Error('Invalid operation');
                }
                const resultText = document.getElementById("resultText");
                resultText.innerText = result;
                resultText.classList.add("most-result");
            } catch (error) {
                ErrorPopUp();
            }
        }
    });
}

Calc();