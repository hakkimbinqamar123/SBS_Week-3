console.log("My Profile")

const name = "Hakeem"
let age = 26
const role = "developer"

console.log("Name:", name)
console.log("Age:", age)
console.log("Role:", role)

// Arithematic operations
let a = 20
let b = 4

console.log("Addition: ", a + b)
console.log("Multiplication: ", a * b)
console.log("Remainder: ", a % b)

// String operations

const first_name = "Abdul"
const last_name = "hakeem"

console.log(first_name + " " + last_name)

console.log("First name length: ", first_name.length)
console.log("To uppercase:", first_name.toUpperCase())

console.log("data type:", typeof first_name)


const display = document.querySelector('.display');

        function appendNumber(number) {
            if (display.value === '0') {
                display.value = number;
            } else {
                display.value += number;
            }
        }

        function appendOperator(operator) {
            const lastChar = display.value.slice(-1);
            if (['+', '−', '×', '÷'].includes(lastChar)) {
                display.value = display.value.slice(0, -1) + operator;
            } else {
                display.value += operator;
            }
        }

        function clearDisplay() {
            display.value = '0';
        }

        function calculate() {
            let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
            try {
                const result = eval(expression);
                display.value = result;
            } catch (error) {
                display.value = 'Error';
            }
        }