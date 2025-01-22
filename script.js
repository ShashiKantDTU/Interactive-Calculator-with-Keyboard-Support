const display = document.getElementById("text");
const result = document.getElementById("result")
let lastresult = 0;
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
const decimal = document.getElementById("decimal")
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equals = document.getElementById("equals");
const dele = document.getElementById("delete");
const ac = document.getElementById("clearall");

const deg = document.getElementById("deg");
const sin = document.getElementById("sin");
const cos = document.getElementById("cos");
const tan = document.getElementById("tan");
const exp = document.getElementById("EXP");
const rad = document.getElementById("rad");
const inv = document.getElementById("inv");
const pie = document.getElementById("pie");
const E = document.getElementById("e");
const ans = document.getElementById("ans");
const factorial = document.getElementById("factorial");
const ln = document.getElementById("ln");
const log = document.getElementById("log");
const root = document.getElementById("root");
const xtoy = document.getElementById("xtoy");
const bracketLeft = document.getElementById("bracket-left");
const bracketRight = document.getElementById("bracket-right");
const mode = document.getElementById("mode")
const π = Math.PI;
const e = Math.E;


const trignobtns = document.querySelectorAll(".trignoration");
let isinverse = false;


const trigLookupTable = {
    sin: {
        0: 0,
        30: 0.5,
        45: Math.sqrt(2) / 2,
        60: Math.sqrt(3) / 2,
        90: 1
    },
    cos: {
        0: 1,
        30: Math.sqrt(3) / 2,
        45: Math.sqrt(2) / 2,
        60: 0.5,
        90: 0
    },
    tan: {
        0: 0,
        30: Math.sqrt(3) / 3,
        45: 1,
        60: Math.sqrt(3),
        90: Infinity // Tan(90°) is undefined
    }


};




// Event Listener for mode switch list

mode.addEventListener("input", () => {
    switch (mode.value) {
        case "normal":
            setmodenormal();
            break;
        case "scientific":
            setmodescientific();
            break;
        case "bitwise":
            setmodebitwise();
            break;
        default:
            break;
    }
});



// scientific calculator fucntions

function fixPrecision(value) {
    const tolerance = 1e-10; // Small tolerance value
    if (Math.abs(value - 1) < tolerance) {
        return 1; // Force tan(45) to be exactly 1
    }
    return value;
}

function toggleinverse() {
    if (isinverse) {
        trignobtns[0].textContent = 'sin';
        trignobtns[1].textContent = 'cos';
        trignobtns[2].textContent = 'tan';
        inv.style.backgroundColor = '#434a54';
        isinverse = false;
    }
    else {
        trignobtns[0].textContent = 'sin⁻¹';
        trignobtns[1].textContent = 'cos⁻¹';
        trignobtns[2].textContent = 'tan⁻¹';
        inv.style.backgroundColor = 'green';
        isinverse = true;
    }
}



function checkdegandrad() {
    if (degree) {
        deg.style.backgroundColor = "green"
        rad.style.backgroundColor = "#434a54"
    }
    else {
        deg.style.backgroundColor = "#434a54"
        rad.style.backgroundColor = "green"
    }

}


let resultgenrated = false;
let degree = true;
let radtodeg = false;
checkdegandrad();









// mode swtich between normal and scientific
const scientificcalbtns = document.querySelectorAll(".scibtn");

function setmodescientific() {
    scientificcalbtns.forEach(scientificcalbtns => { scientificcalbtns.style.display = "flex" })

}


function setmodenormal() {

    scientificcalbtns.forEach((scientificcalbtns) => { scientificcalbtns.style.display = "none" })
}




function setmodebitwise() {

}

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
        case ")":
            clickedBracketRight();
            break;
        case "(":
            clickedBracketLeft();
            break;
        case ".":
            clickeddecimal();
            break;
        case "s":
            if (mode.value === "scientific") clickedsin();
            break;
        case "c":
            if (mode.value === "scientific") clickedcos();
            break;
        case "t":
            if (mode.value === "scientific") clickedtan();
            break;
        case "e":
            if (mode.value === "scientific") clickede();
            break;
        case "p":
            if (mode.value === "scientific") clickedpie();
            break;
        case "a":
            if (mode.value === "scientific") clickedans();
            break;
        case "l":
            if (mode.value === "scientific") clickedln();
            break;
        case "o":
            if (mode.value === "scientific") clickedlog();
            break;
        case "r":
            if (mode.value === "scientific") clickedroot();
            break;
        case "^":
            if (mode.value === "scientific") clickedxtoy();
            break;
        case "!":
            if (mode.value === "scientific") clickedfactorial();
            break;
        case "d":
            if (mode.value === "scientific") clickeddeg();
            break;
        case "i":
            if (mode.value === "scientific") toggleinverse();
            break;
        case "n":
            if (mode.value === "scientific") clickedrad();
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

function clickeddecimal() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay(".", string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay(".", string);
        resultgenrated = false;
    }
}

function clickedadd() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay(' + ', string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay(' + ', string);
        resultgenrated = false;
    }
}

function clickedsubtract() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay(' - ', string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay(' - ', string);
        resultgenrated = false;
    }
}

function clickedmultiply() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay(' × ', string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay(' × ', string);
        resultgenrated = false;
    }
}

function clickeddivide() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay('÷', string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay('÷', string);
        resultgenrated = false;
    }
}

function clickedac() {
    resultgenrated = false;
    display.value = "";
    result.value = "";
}

function clickedequals() {

    if (display.value === "") {
        display.value = "";
        result.value = "";
    }
    else {

        let string = "";
        string = display.value;

        try {
            // check for open paranthesis
            let openparanthesis = (string.match(/\(/g) || []).length;
            let closeparanthesis = (string.match(/\)/g) || []).length;
            if (openparanthesis > closeparanthesis) {
                let diff = openparanthesis - closeparanthesis;
                for (let i = 0; i < diff; i++) {
                    string = string + ")";
                }
            }




            string = string.replace(/Ans/g, lastresult);
            string = string.replace(/÷/g, "/");
            string = string.replace(/×/g, "*");
            string = string.replace(/π\(/g, "pi*(");
            string = string.replace(/π/g, "pi");
            string = string.replace(/EXP/g, "e");
            string = string.replace(/log\(/g, "log10(");
            string = string.replace(/ln\(/g, "log(");
            string = string.replace(/√/g, "sqrt");
            string = string.replace(/sin⁻¹/g, "asin");
            string = string.replace(/cos⁻¹/g, "acos");
            string = string.replace(/tan⁻¹/g, "atan");

            // check for deg and radians
            if (degree) {


                function checksinbase(string) {
                    let tempstring = string;
                    let openparanthesiscount = 0;
                    let closingparanthesisindex = NaN;
                    // find index of sin()

                    let sinindex1 = tempstring.indexOf("s");
                    let sinindex0 = sinindex1 - 1;
                    let sinindex2 = tempstring.indexOf("i");
                    let sinindex3 = tempstring.indexOf("n");
                    let sinindex4 = tempstring.indexOf("(");

                    if (sinindex4 - sinindex3 === 1 && sinindex3 - sinindex2 === 1 && sinindex2 - sinindex1 === 1 && tempstring[sinindex0] !== "a") {
                        let sinstring = tempstring.slice(sinindex4 + 1);
                        // find index of closing paranthesis
                        for (let i = 0; i < sinstring.length; i++) {
                            if (sinstring[i] === "(") {
                                openparanthesiscount++;
                            }
                            else if (sinstring[i] === ")") {
                                if (openparanthesiscount === 0) {
                                    closingparanthesisindex = sinindex4 + 1 + i;
                                    break;
                                }
                                openparanthesiscount--;
                            }
                        }
                        let exponent = tempstring.slice(sinindex4 + 1, closingparanthesisindex);
                        // convert radian to degree
                        exponent = exponent + " * pi / 180 ";
                        if (exponent.includes("sin")) {
                            exponent = checksinbase(exponent);
                        }
                        return tempstring.slice(0, sinindex4 + 1) + exponent + tempstring.slice(closingparanthesisindex);
                    }
                    else {
                        return tempstring;
                    }
                }

                function checkcosbase(string) {
                    let tempstring = string;
                    let openparanthesiscount = 0;
                    let closingparanthesisindex = NaN;
                    // find index of cos()

                    let cosindex1 = tempstring.indexOf("c");
                    let cosindex0 = cosindex1 - 1;
                    let cosindex2 = tempstring.indexOf("o");
                    let cosindex3 = tempstring.indexOf("s");
                    let cosindex4 = tempstring.indexOf("(");

                    if (cosindex4 - cosindex3 === 1 && cosindex3 - cosindex2 === 1 && cosindex2 - cosindex1 === 1 && tempstring[cosindex0] !== "a") {
                        let cosstring = tempstring.slice(cosindex4 + 1);
                        // find index of closing paranthesis
                        for (let i = 0; i < cosstring.length; i++) {
                            if (cosstring[i] === "(") {
                                openparanthesiscount++;
                            }
                            else if (cosstring[i] === ")") {
                                if (openparanthesiscount === 0) {
                                    closingparanthesisindex = cosindex4 + 1 + i;
                                    break;
                                }
                                openparanthesiscount--;
                            }
                        }
                        let exponent = tempstring.slice(cosindex4 + 1, closingparanthesisindex);
                        // convert radian to degree
                        exponent = exponent + " * pi / 180 ";
                        if (exponent.includes("cos")) {
                            exponent = checkcosbase(exponent);
                        }
                        return tempstring.slice(0, cosindex4 + 1) + exponent + tempstring.slice(closingparanthesisindex);
                    }
                    else {
                        return tempstring;
                    }
                }

                function checktanbase(string) {
                    let tempstring = string;
                    let openparanthesiscount = 0;
                    let closingparanthesisindex = NaN;
                    // find index of tan()
                    let tanindex1 = tempstring.indexOf("t");
                    let tanindex0 = tanindex1 - 1;
                    let tanindex2 = tempstring.indexOf("a");
                    let tanindex3 = tempstring.indexOf("n");
                    let tanindex4 = tempstring.indexOf("(");

                    if (tanindex4 - tanindex3 === 1 && tanindex3 - tanindex2 === 1 && tanindex2 - tanindex1 === 1 && tempstring[tanindex0] !== "a") {
                        let tanstring = tempstring.slice(tanindex4 + 1);
                        // find index of closing paranthesis
                        for (let i = 0; i < tanstring.length; i++) {
                            if (tanstring[i] === "(") {
                                openparanthesiscount++;
                            }
                            else if (tanstring[i] === ")") {
                                if (openparanthesiscount === 0) {
                                    closingparanthesisindex = tanindex4 + 1 + i;
                                    break;
                                }
                                openparanthesiscount--;
                            }
                        }
                        let exponent = tempstring.slice(tanindex4 + 1, closingparanthesisindex);
                        // convert radian to degree
                        exponent = exponent + " * pi / 180 ";
                        if (exponent.includes("tan")) {
                            exponent = checktanbase(exponent);
                        }
                        return tempstring.slice(0, tanindex4 + 1) + exponent + tempstring.slice(closingparanthesisindex);
                    }
                    else {
                        return tempstring;
                    }
                }

                string = checksinbase(string);
                string = checkcosbase(string);
                string = checktanbase(string);




                // Converting Inverse Trigonometric Functions to Degree from radians
                function degtoradianforinversesin(string) {
                    let tempstring = string;
                    let openparanthesiscount = 0;
                    let closingparanthesisindex = NaN;
                    let exponent = NaN;
                    // find index of asin()
                    let asinindex1 = tempstring.indexOf("a");
                    let asinindex2 = tempstring.indexOf("s");
                    let asinindex3 = tempstring.indexOf("i");
                    let asinindex4 = tempstring.indexOf("n");
                    let asinindex5 = tempstring.indexOf("(");

                    // by default if asin is not included in the string the value of "(" asinindex5 will be 3 as it is included in "sin("
                    // As same for "n" asindex4 will be 2
                    // for "i" asinindex3 will be 1
                    // for "s" asinindex2 will be 0
                    // for "a" asinindex1 will be -1 as it is not found and if directly used in the code it will be fitted as the index of it will be one less then the index of its next character
                    // so one extra check will be added to check if asinindex1 should not be -1 for the condition to be get true
                    // otherwise the fucntion will run unwantedly and will give wrong output
                    // even if the string will not include asin but have sin



                    if (asinindex5 - asinindex4 == 1 && asinindex4 - asinindex3 === 1 && asinindex3 - asinindex2 === 1 && asinindex2 - asinindex1 === 1 && asinindex1 !== -1) {
                        // find closing paranthesis
                        let asinstring = tempstring.slice(asinindex5 + 1);
                        for (let i = 0; i < asinstring.length; i++) {
                            if (asinstring[i] === "(") {
                                openparanthesiscount++;
                            }
                            else if (asinstring[i] === ")") {
                                if (openparanthesiscount === 0) {
                                    closingparanthesisindex = asinindex5 + 1 + i;
                                    break;
                                }
                                openparanthesiscount--;
                            }
                        }

                        exponent = tempstring.slice(asinindex5 + 1, closingparanthesisindex + 1) + " * 180 / pi ";

                        if (exponent.includes("asin")) {
                            exponent = degtoradianforinversesin(exponent);
                        }

                        return tempstring.slice(0, asinindex5 + 1) + exponent + tempstring.slice(closingparanthesisindex + 1);


                        // check if 

                    }
                    else {
                        return tempstring;
                    }
                }

                function degtoradianforinversecos(string) {
                    let tempstring = string;
                    let openparanthesiscount = 0;
                    let closingparanthesisindex = NaN;
                    let exponent = NaN;
                    // find index of acos()
                    let acosindex1 = tempstring.indexOf("a");
                    let acosindex2 = tempstring.indexOf("c");
                    let acosindex3 = tempstring.indexOf("o");
                    let acosindex4 = tempstring.indexOf("s");
                    let acosindex5 = tempstring.indexOf("(");

                    if (acosindex5 - acosindex4 == 1 && acosindex4 - acosindex3 === 1 && acosindex3 - acosindex2 === 1 && acosindex2 - acosindex1 === 1 && acosindex1 !== -1) {
                        // find closing paranthesis
                        let acosstring = tempstring.slice(acosindex5 + 1);
                        for (let i = 0; i < acosstring.length; i++) {
                            if (acosstring[i] === "(") {
                                openparanthesiscount++;
                            }
                            else if (acosstring[i] === ")") {
                                if (openparanthesiscount === 0) {
                                    closingparanthesisindex = acosindex5 + 1 + i;
                                    break;
                                }
                                openparanthesiscount--;
                            }
                        }

                        exponent = tempstring.slice(acosindex5 + 1, closingparanthesisindex + 1) + " * 180 / pi ";

                        if (exponent.includes("acos")) {
                            exponent = degtoradianforinversecos(exponent);
                        }

                        return tempstring.slice(0, acosindex5 + 1) + exponent + tempstring.slice(closingparanthesisindex + 1);




                    }
                    else {
                        return tempstring;
                    }
                }

                function degtoradianforinversetan(string) {
                    let tempstring = string;
                    let openparanthesiscount = 0;
                    let closingparanthesisindex = NaN;
                    let exponent = NaN;
                    // find index of atan()
                    let atanindex1 = tempstring.indexOf("a");
                    let atanindex2 = tempstring.indexOf("t");
                    let atanindex3 = tempstring.indexOf("a", atanindex2 + 1); // Fix for second 'a'
                    let atanindex4 = tempstring.indexOf("n");
                    let atanindex5 = tempstring.indexOf("(");

                    if (atanindex5 - atanindex4 == 1 && atanindex4 - atanindex3 === 1 && atanindex3 - atanindex2 === 1 && atanindex2 - atanindex1 === 1 && atanindex1 !== -1) {
                        // find closing paranthesis
                        let atanstring = tempstring.slice(atanindex5 + 1);
                        for (let i = 0; i < atanstring.length; i++) {
                            if (atanstring[i] === "(") {
                                openparanthesiscount++;
                            }
                            else if (atanstring[i] === ")") {
                                if (openparanthesiscount === 0) {
                                    closingparanthesisindex = atanindex5 + 1 + i;
                                    break;
                                }
                                openparanthesiscount--;
                            }
                        }

                        exponent = tempstring.slice(atanindex5 + 1, closingparanthesisindex + 1) + " * 180 / pi ";

                        if (exponent.includes("atan")) {
                            exponent = degtoradianforinversetan(exponent);
                        }

                        return tempstring.slice(0, atanindex5 + 1) + exponent + tempstring.slice(closingparanthesisindex + 1);


                        // check if 

                    }
                    else {
                        return tempstring;
                    }
                }
                
                // adding a check for isinverse to check if to execute the function or not
                if(isinverse){
                string = degtoradianforinversesin(string);
                string = degtoradianforinversecos(string);
                string = degtoradianforinversetan(string);
                }
                else{
                    string = string;}
            }
            else {
            
            }





            function checkforextraparathesis(string) {
                let tempstring = string;
                let openparanthesiscount = 0;

                for (let i = 0; i < tempstring.length; i++) {
                    if (tempstring[i] === "(") {
                        openparanthesiscount++;
                    }
                    else if (tempstring[i] === ")") {
                        openparanthesiscount--;
                    }
                }
                if (openparanthesiscount > 0) {
                    return "extra paranthesis";
                }
                else if (openparanthesiscount === 0) {
                    return "Okay";
                }
                else {
                    return "missing paranthesis";
                }
            }





            string = math.evaluate(string);
            const status = checkforextraparathesis(string);
            if (status === "extra paranthesis") {
                result.value = "Extra Paranthesis Error";
            }
            else if (status === "missing paranthesis") {
                result.value = "Missing Paranthesis Error";
            }
            else {
                lastresult = string;
                result.value = string;
                resultgenrated = true;
            }
        }
        catch (e) {
            string = "Syntax Error";
            console.error(e);
            result.value = string;
        }


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
        else {
            display.value = result.value;
            let string = "";
            string = String(display.value);
            display.value = del(string);
            resultgenrated = false;
        }
    }
}


// ADDING SCIENTIFIC CALCULATOR  BUTTONS FORM HERE
function clickeddeg() {
    if (!degree) {
        degree = true
        checkdegandrad();
    }
}
function clickedrad() {
    if (degree) {
        degree = false
        checkdegandrad();
    }
}

function clickedBracketLeft() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay("(", string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay("(", string);
        resultgenrated = false;
    }
}

function clickedBracketRight() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay(")", string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay(")", string);
        resultgenrated = false;
    }
}



function clickedsin() {
    if (isinverse) {
        if (!resultgenrated) {
            let string = "";
            string = display.value;
            display.value = addtodisplay("sin⁻¹(", string);
        } else {
            display.value = result.value;
            let string = "";
            string = display.value;
            display.value = addtodisplay("sin⁻¹(", string);
            resultgenrated = false;
        }
    } else {
        if (!resultgenrated) {
            let string = "";
            string = display.value;
            display.value = addtodisplay("sin(", string);
        } else {
            display.value = result.value;
            let string = "";
            string = display.value;
            display.value = addtodisplay("sin(", string);
            resultgenrated = false;
        }
    }
}

function clickedcos() {
    if (isinverse) {
        if (!resultgenrated) {
            let string = "";
            string = display.value;
            display.value = addtodisplay("cos⁻¹(", string);
        } else {
            display.value = result.value;
            let string = "";
            string = display.value;
            display.value = addtodisplay("cos⁻¹(", string);
            resultgenrated = false;
        }
    } else {
        if (!resultgenrated) {
            let string = "";
            string = display.value;
            display.value = addtodisplay("cos(", string);
        } else {
            display.value = result.value;
            let string = "";
            string = display.value;
            display.value = addtodisplay("cos(", string);
            resultgenrated = false;
        }
    }
}

function clickedtan() {
    if (isinverse) {
        if (!resultgenrated) {
            let string = "";
            string = display.value;
            display.value = addtodisplay("tan⁻¹(", string);
        } else {
            display.value = result.value;
            let string = "";
            string = display.value;
            display.value = addtodisplay("tan⁻¹(", string);
            resultgenrated = false;
        }
    } else {
        if (!resultgenrated) {
            let string = "";
            string = display.value;
            display.value = addtodisplay("tan(", string);
        } else {
            display.value = result.value;
            let string = "";
            string = display.value;
            display.value = addtodisplay("tan(", string);
            resultgenrated = false;
        }
    }
}


function clickedexp() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay("EXP", string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay("EXP", string);
        resultgenrated = false;
    }
}






function clickedpie() {
    let string = '';
    string = display.value;
    if (!resultgenrated) {
        display.value = addtodisplay("π", string);
    } else {
        let string = "";
        string = result.value;
        display.value = addtodisplay("π", string);
    }
}




function clickede() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        let laststring = string[string.length - 1];
        if (laststring !== " ") {
            display.value = addtodisplay(" e ", string)
        }

        else { display.value = addtodisplay("e", string); }
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay(" e ", string);
        resultgenrated = false;
    }
}

function clickedans() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay("Ans", string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay("Ans", string);
        resultgenrated = false;
    }
}

function clickedfactorial() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay("!", string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay("!", string);
        resultgenrated = false;
    }
}

function clickedln() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay("ln(", string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay("ln(", string);
        resultgenrated = false;
    }
}

function clickedlog() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay("log(", string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay("log(", string);
        resultgenrated = false;
    }
}

function clickedroot() {

    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay("\u221A(", string);
    } else {

        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay("\u221A(", string);
        resultgenrated = false;
    }
}

function clickedxtoy() {
    if (!resultgenrated) {
        let string = "";
        string = display.value;
        display.value = addtodisplay("^", string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay("^", string);
        resultgenrated = false;
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

decimal.onclick = function () {
    clickeddecimal();
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








// ADDING SCIENTIFIC CALCULATOR  BUTTONS FORM HERE


sin.onclick = function () {
    clickedsin();
}

cos.onclick = function () {
    clickedcos();
}

tan.onclick = function () {
    clickedtan();
}

bracketRight.onclick = function () {
    clickedBracketRight();
}
bracketLeft.onclick = function () {
    clickedBracketLeft();
}




exp.onclick = function () {
    clickedexp();
}

inv.onclick = function () {
    toggleinverse();
}



pie.onclick = function () {
    clickedpie();
}

E.onclick = function () {
    clickede();
}


ans.onclick = function () {
    clickedans();
}

factorial.onclick = function () {
    clickedfactorial();
}

ln.onclick = function () {
    clickedln();
}

log.onclick = function () {
    clickedlog();
}

root.onclick = function () {

    clickedroot();
}

xtoy.onclick = function () {
    clickedxtoy();
}




















function addtodisplay(text, displaytext) {
    displaytext = String(displaytext);
    text = String(text);

    return displaytext + text;
}

function del(displaytext) {
    let result = "";
    displaytext = String(displaytext);
    let lastword = displaytext.slice(displaytext.length - 4, displaytext.length);
    let lastword1 = displaytext.slice(displaytext.length - 3, displaytext.length);
    let lastword2 = displaytext.slice(displaytext.length - 6, displaytext.length);
    if (lastword1 === "Ans") {
        result = displaytext.slice(0, displaytext.length - 4);
        return result;
    }
    else if(lastword1 === "EXP" || lastword === "ln("){
        result = displaytext.slice(0, displaytext.length - 4);
        return result;
    }
    else if( lastword === "sin(" || lastword === "cos(" || lastword === "tan("  || lastword === "log(" || lastword === "log10"  || lastword === "sqrt" || lastword === "e " || lastword === "π " || lastword === "Ans " || lastword === "!" || lastword === "^ " || lastword === "√("){
        result = displaytext.slice(0, displaytext.length - 4);
        return result;
    }
    else if(lastword2 === "sin⁻¹(" || lastword2 === "cos⁻¹(" || lastword2 === "tan⁻¹("){
        result = displaytext.slice(0, displaytext.length - 6);
        return result;
    }
    else{
    result = displaytext.slice(0, displaytext.length - 1)
    return result;
}
    
}
