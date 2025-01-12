const display = document.getElementById("text");
const result = document.getElementById("result")
// SETING BUTTONS
const one = document.getElementById("one")
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equals = document.getElementById("equals");
const dele = document.getElementById("delete");
const ac = document.getElementById("clearall");

let resultgenrated = false;

document.addEventListener("keydown", keypressed);

function keypressed(event) {
    switch (event.key) {
        case "1":
            clickedone();
            break;
        case "2":
            clickedtwo();
            break;
        case "3":
            clickedthree();
            break;
        case "4":
            clickedfour();
            break;
        case "5":
            clickedfive();
            break;
        case "6":
            clickedsix();
            break;
        case "7":
            clickedseven();
            break;
        case "8":
            clickedeight();
            break;
        case "9":
            clickednine();
            break;
        case "0":
            clickedzero();
            break;
        case "+":
            clickedadd();
            break;
        case "-":
            clickedsubtract();
            break;
        case "*":
            clickedmultiply();
            break;
        case "/":
            clickeddivide();
            break;
        case "Enter":
            clickedequals();
            break;
        case "Backspace":
            clickeddele();
            break;
        case "Escape":
            clickedac();
            break;
        default:
            break;
    }


}

function clickedone() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay(1, string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay(1, string);
        resultgenrated = false;
    }
}

function clickedtwo() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay(2, string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay(2, string);
        resultgenrated = false;
    }
}

function clickedthree() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay(3, string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay(3, string);
        resultgenrated = false;
    }
}

function clickedfour() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay(4, string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay(4, string);
        resultgenrated = false;
    }
}

function clickedfive() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay(5, string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay(5, string);
        resultgenrated = false;
    }
}

function clickedsix() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay(6, string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay(6, string);
        resultgenrated = false;
    }
}

function clickedseven() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay(7, string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay(7, string);
        resultgenrated = false;
    }
}

function clickedeight() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay(8, string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay(8, string);
        resultgenrated = false;
    }
}

function clickednine() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay(9, string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay(9, string);
        resultgenrated = false;
    }
}

function clickedzero() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay(0, string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay(0, string);
        resultgenrated = false;
    }
}

function clickedadd() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay('+', string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay('+', string);
        resultgenrated = false;
    }
}

function clickedsubtract() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay('-', string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay('-', string);
        resultgenrated = false;
    }
}

function clickedmultiply() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay('*', string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay('*', string);
        resultgenrated = false;
    }
}

function clickeddivide() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay('/', string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay('/', string);
        resultgenrated = false;
    }
}

function clickedac() {
    display.value = "";
    result.value = "";
}

function clickedequals() {
    try {
        if (display.value == "") {
            display.value = ""
        }
        else {
            resultgenrated = true;
            result.value = eval(display.value)
        }
    } catch (e) {
        display.value = "Syntax Error"
    }

}

function clickeddele() {
    if (display.value === "Syntax Error" || display.value === "undefined") {
        display.value = "";
        result.value = "";
    }
    else {
        if (!resultgenrated) {
            let string = "";
            string = String(display.value);
            display.value = del(string)
        }
        else{
            display.value = result.value;
            let string = "";
            string = String(display.value);
            display.value = del(string);
            resultgenrated = false;
        }
    }
}

ac.onclick = function () {
    clickedac();
}

one.onclick = function () {
    clickedone();
}

two.onclick = function () {
    clickedtwo();
}

three.onclick = function () {
    clickedthree();
}

four.onclick = function () {
    clickedfour();
}

five.onclick = function () {
    clickedfive();
}

six.onclick = function () {
    clickedsix();
}

seven.onclick = function () {
    clickedseven();
}

eight.onclick = function () {
    clickedeight();
}

nine.onclick = function () {
    clickednine();
}

zero.onclick = function () {
    clickedzero();
}

add.onclick = function () {
    clickedadd();
}

subtract.onclick = function () {
    clickedsubtract();
}

multiply.onclick = function () {
    clickedmultiply();
}

divide.onclick = function () {
    clickeddivide();
}

equals.onclick = function () {
    clickedequals();
}

dele.onclick = function () {
    clickeddele();
}


function addtodisplay(text, displaytext) {
    displaytext = String(displaytext);
    text = String(text);

    return displaytext + text;
}

function del(displaytext) {
    let result = "";
    displaytext = String(displaytext);
    result = displaytext.slice(0, displaytext.length - 1)
    return result;
}
