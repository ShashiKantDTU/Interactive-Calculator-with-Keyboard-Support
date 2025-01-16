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

mode.addEventListener("input", ()=>{
    switch (mode.value) {
        case "normal":
            setmodenormal();
            break;
        case "scientific" :
            setmodescientific();
            break;
        case "bitwise" :
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
            clickedsin();
            break;
        case "c":
            clickedcos();
            break;
        case "t":
            clickedtan();
            break;
        case "e":
            clickedexp();
            break;
        case "i":
            toggleinverse();
            break;
        case "p":
            clickedpie();
            break;
        case "E":
            clickede();
            break;
        case "a":
            clickedans();
            break;
        case "!":
            clickedfactorial();
            break;
        case "l":
            clickedln();
            break;
        case "g":
            clickedlog();
            break;
        case "r":
            clickedroot();
            break;
        case "^":
            clickedxtoy();
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
        display.value = addtodisplay(' * ', string);
    } else {
        display.value = result.value;
        let string = "";
        string = display.value;
        display.value = addtodisplay(' * ', string);
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
    resultgenrated = false;
    display.value = "";
    result.value = "";
}

function clickedequals() {
    try {
        
        // Check if the display is empty
        if (display.value == "") {
            display.value = ""
        }
        else {


            let temp = "";
            temp = display.value;

        if(degree){
            // Replace Ans with the previous result
            temp = temp.replace(/Ans/g, lastresult);



            temp = temp.replace(/(\d*)tan\((\d*)/g, function (match, base, exponent) {
                if (exponent !== "") {
                    if (trigLookupTable.tan.hasOwnProperty(exponent)) {
                       
                        return "(" + trigLookupTable.tan[exponent] ;
                    }
                    else{ return match;}
                }
            });
            
           
            temp = temp.replace(/(\d*)sin\((\d*)/g, function (match, base, exponent) {
                if (exponent !== "") {
                    if (trigLookupTable.sin.hasOwnProperty(exponent)) {
                        return "(" + trigLookupTable.sin[exponent];
                    }
                    else{ return match;}

                }
            });

            temp = temp.replace(/(\d*)cos\((\d*)/g, function (match, base, exponent) {
                if (exponent !== "") {
                    if (trigLookupTable.cos.hasOwnProperty(exponent)) {
                        return "(" + trigLookupTable.cos[exponent];
                    }
                    else{ return match;}

                }
            });
        }else{}

            if (isinverse) {
                // let temp3 ;
                if (degree) {
                    
                    temp = temp.replace(/(\d*\.?\d*)tan⁻¹\((\d*\.?\d*)/g, function (match, base, exponent) {
                        if (base === "") {
                            if (exponent === "") {
                                return "Math.atan("; // No base, no exponent
                            } else {
                                return "Math.atan(" + exponent; // Only exponent provided
                            }
                        } else {
                            if (exponent === "") {
                                return base + " * Math.atan("; // Base provided, no exponent
                            } else {
                                return base + " * Math.atan(" + exponent; // Base and exponent provided
                            }
                        }
                    });
                    console.log(temp)

                    function transformAtanExpression(temp) {
                        const atanRegex = /Math\.atan\(/g; // Match the start of Math.atan(
                        let match;
                    
                        while ((match = atanRegex.exec(temp)) !== null) {
                            let startIndex = match.index + match[0].length; // Index after "Math.atan("
                            let openParentheses = 1; // Track open parentheses
                            let endIndex = startIndex;
                    
                            // Traverse the string to find the matching closing parenthesis
                            while (openParentheses > 0 && endIndex < temp.length) {
                                if (temp[endIndex] === "(") {
                                    openParentheses++;
                                } else if (temp[endIndex] === ")") {
                                    openParentheses--;
                                }
                                endIndex++;
                            }
                    
                            if (openParentheses === 0) {
                                // Extract the inner expression
                                const innerExpression = temp.slice(startIndex, endIndex - 1);
                    
                                // Transform the expression
                                const transformed = `Math.atan(${innerExpression}) * ( 180 / π )`;
                    
                                // Replace the original substring with the transformed one
                                temp =
                                    temp.slice(0, match.index) +
                                    transformed +
                                    temp.slice(endIndex);
                            } else {
                                throw new Error(
                                    "Unmatched parentheses in Math.atan expression"
                                );
                            }
                        }
                    
                        return temp;

                    }

                    temp = transformAtanExpression(temp);

                    temp = temp.replace(/(\d*\.?\d*)sin⁻¹\((\d*\.?\d*)/g, function (match, base, exponent) {
                        if (base === "") {
                            if (exponent === "") {
                                return "Math.asin("; // No base, no exponent
                            } else {
                                return "Math.asin(" + exponent; // Only exponent provided
                            }
                        } else {
                            if (exponent === "") {
                                return base + " * Math.asin("; // Base provided, no exponent
                            } else {
                                return base + " * Math.asin(" + exponent; // Base and exponent provided
                            }
                        }
                    });
                    console.log(temp)

                    function transformAsinExpression(temp) {
                        const asinRegex = /Math\.asin\(/g; // Match the start of Math.asin(
                        let match;
                    
                        while ((match = asinRegex.exec(temp)) !== null) {
                            let startIndex = match.index + match[0].length; // Index after "Math.asin("
                            let openParentheses = 1; // Track open parentheses
                            let endIndex = startIndex;
                    
                            // Traverse the string to find the matching closing parenthesis
                            while (openParentheses > 0 && endIndex < temp.length) {
                                if (temp[endIndex] === "(") {
                                    openParentheses++;
                                } else if (temp[endIndex] === ")") {
                                    openParentheses--;
                                }
                                endIndex++;
                            }
                    
                            if (openParentheses === 0) {
                                // Extract the inner expression
                                const innerExpression = temp.slice(startIndex, endIndex - 1);
                    
                                // Transform the expression
                                const transformed = `Math.asin(${innerExpression}) * ( 180 / π )`;
                    
                                // Replace the original substring with the transformed one
                                temp =
                                    temp.slice(0, match.index) +
                                    transformed +
                                    temp.slice(endIndex);
                            } else {
                                throw new Error(
                                    "Unmatched parentheses in Math.asin expression"
                                );
                            }
                        }
                    
                        return temp;
                        
                    }

                    temp = transformAsinExpression(temp);

                    temp = temp.replace(/(\d*\.?\d*)cos⁻¹\((\d*\.?\d*)/g, function (match, base, exponent) {
                        if (base === "") {
                            if (exponent === "") {
                                return "Math.acos("; // No base, no exponent
                            } else {
                                return "Math.acos(" + exponent; // Only exponent provided
                            }
                        } else {
                            if (exponent === "") {
                                return base + " * Math.acos("; // Base provided, no exponent
                            } else {
                                return base + " * Math.acos(" + exponent; // Base and exponent provided
                            }
                        }
                    });
                    console.log(temp)

                    function transformAcosExpression(temp) {
                        const acosRegex = /Math\.acos\(/g; // Match the start of Math.acos(
                        let match;
                    
                        while ((match = acosRegex.exec(temp)) !== null) {
                            let startIndex = match.index + match[0].length; // Index after "Math.acos("
                            let openParentheses = 1; // Track open parentheses
                            let endIndex = startIndex;
                    
                            // Traverse the string to find the matching closing parenthesis
                            while (openParentheses > 0 && endIndex < temp.length) {
                                if (temp[endIndex] === "(") {
                                    openParentheses++;
                                } else if (temp[endIndex] === ")") {
                                    openParentheses--;
                                }
                                endIndex++;
                            }
                    
                            if (openParentheses === 0) {
                                // Extract the inner expression
                                const innerExpression = temp.slice(startIndex, endIndex - 1);
                    
                                // Transform the expression
                                const transformed = `Math.acos(${innerExpression}) * ( 180 / π )`;
                    
                                // Replace the original substring with the transformed one
                                temp =
                                    temp.slice(0, match.index) +
                                    transformed +
                                    temp.slice(endIndex);
                            } else {
                                throw new Error(
                                    "Unmatched parentheses in Math.acos expression"
                                );
                            }
                        }
                    
                        return temp;
                        
                    }

                    temp = transformAcosExpression(temp);


                    // What the Functions Do an example of it :- 

                    // Example Usage
                    // let temp = "Math.atan(root(3)/2) + Math.atan(log(5) + root(3))";
                    // temp = transformAtanExpression(temp);
                    // console.log(temp);
                    // Output: "Math.atan(root(3)/2) * ( 180 / π ) + Math.atan(log(5) + root(3)) * ( 180 / π )"
                    
                    
                  
                
                }
                else {
                    temp = temp.replace(/(\d*\.?\d*)tan⁻¹\((\d*\.?\d*)/g, function (match, base, exponent) {
                        if (base === "") {
                            if (exponent === "") {
                                return "Math.atan("; // No base, no exponent
                            } else {

                                

                                return "Math.atan(" + exponent; // Only exponent provided
                            }
                        } else {
                            if (exponent === "") {
                                return base + " * Math.atan("; // Base provided, no exponent
                            } else {
                                return base + " * Math.atan(" + exponent; // Base and exponent provided
                            }
                        }
                    });
                    temp = temp.replace(/(\d*\.?\d*)sin⁻¹\((\(.?\d*\.?\d*)/g, function (match, base, exponent) {
                        if (base === "") {
                            if (exponent === "") {
                                return "Math.asin("; // No base, no exponent
                            } else {
                                return "Math.asin(" + exponent; // Only exponent provided
                            }
                        } else {
                            if (exponent === "") {
                                return base + " * Math.asin("; // Base provided, no exponent
                            } else {
                                return base + " * Math.asin(" + exponent; // Base and exponent provided
                            }
                        }
                    });
                    temp = temp.replace(/(\d*\.?\d*)cos⁻¹\((\d*\.?\d*)/g, function (match, base, exponent) {
                        if (base === "") {
                            if (exponent === "") {
                                return "Math.acos("; // No base, no exponent
                            } else {
                                return "Math.acos(" + exponent; // Only exponent provided
                            }
                        } else {
                            if (exponent === "") {
                                return base + " * Math.acos("; // Base provided, no exponent
                            } else {
                                return base + " * Math.acos(" + exponent; // Base and exponent provided
                            }
                        }
                    });
                }

            }
            else {
                if (degree) {
                    temp = temp.replace(/(\d*)tan\((\d*)/g, function (match, base, exponent) {
                        if (base === "") {
                            return "Math.tan(" + exponent + " * ( π / 180 )";
                        } else {
                            return base + " * " + "Math.tan(" + exponent + " * ( π / 180 )";
                        }
                    });
                    temp = temp.replace(/(\d*)sin\((\d*)/g, function (match, base, exponent) {
                        if (base === "") {
                           
                            return "Math.sin(" + exponent + " * ( π / 180 )";
                        } else {
                            return base + " * " + "Math.sin(" + exponent + " * ( π / 180 )";
                        }
                    });
                    temp = temp.replace(/(\d*)cos\((\d*)/g, function (match, base, exponent) {
                        if (base === "") {
                            return "Math.cos(" + exponent + " * ( π / 180 )";
                        } else {
                            return base + " * " + "Math.cos(" + exponent + " * ( π / 180 )";
                        }
                    });


                }
                else {

                    // Replace trigonometric functions with Math functions
                    temp = temp.replace(/(\d*)tan\(/g, function (match, base) {
                        if (base === "") {
                            return "Math.tan(";
                        }
                        else {
                            return base + " * " + "Math.tan(";
                        }
                    });
                    temp = temp.replace(/(\d*)sin\(/g, function (match, base) {
                       
                        if (base === "") {
                            return "Math.sin(";
                        }
                        else {
                            return base + " * " + "Math.sin(";
                        }
                    });
                    temp = temp.replace(/(\d*)cos\(/g, function (match, base) {
                        if (base === "") {
                            return "Math.cos(";
                        }
                        else {
                            return base + " * " + "Math.cos(";
                        }
                    });

                }

            }





            // Replace exponential notation with Math.pow
            temp = temp.replace(/(\d+)EXP(\d+)/g, function (match, base, exponent) {
                return base + "* Math.pow(10," + exponent + ")";
            });
            // Replace factorial notation with calculated factorial value
            temp = temp.replace(/(\d+)!/g, function (match, base) {
               
              
                
                base = parseInt(base);
                if (base < 0 || !Number.isInteger(base)) {
                    throw new Error("Factorial of other than Positive Integers are undefined");
                }

                let temp1 = 1;
                for (let i = 1; i <= base; i++) {
                    temp1 = temp1 * i;
                }
                
                return temp1;
            });




            // this fucntion will not run if base is not present
            //  add * if a number is present directly before the eulars number
            // temp = temp.replace(/(\d+)e/g, function (match, base) {
            //     return base + "*" + "e";

            // });

            // add * if a number is directly present before the log to avoid errors
            temp = temp.replace(/(\d*)log\(/g, function (match, base) {
                if (base === "") {
                    return "Math.log10("
                }
                else {
                    return base + " * " + "Math.log10(";
                }
            });

            // add * if a number is directly present before the ln to avoid errors
            temp = temp.replace(/(\d*)ln\(/g, function (match, base) {
                if (base === "") {
                    return "Math.log("
                }
                else {
                    return base + " * " + "Math.log(";
                }
            });

            temp = temp.replace(/(\d*)\u221A\(/g, function (match, base) {
                if (base === "") {
                    return "Math.sqrt("
                }
                else {
                    return base + " * " + "Math.sqrt(";
                }
            })

            temp = temp.replace(/(\(?[\w\.\-\/\+\*\(\)]+\)?)(\^)(\(?[\w\.\-\/\+\*\(\)]+\)?)/g, function(match, base, caret, exponent) {
            
                let evaluatedBase, evaluatedExponent;
            
                // Evaluate the base
                if (base.includes('(')) {
                    try {
                        evaluatedBase = eval(base.replace(/[()]/g, '')); // Evaluate base
                    } catch (e) {
                        console.error(`Error evaluating base: ${base}`, e);
                        return match; // Return the original match if there's an error
                    }
                } else {
                    evaluatedBase = parseFloat(base); // Parse as number if no parentheses
                }
            
                // Evaluate the exponent
                if (exponent.includes('(')) {
                    try {
                        evaluatedExponent = eval(exponent.replace(/[()]/g, '')); // Evaluate exponent
                    } catch (e) {
                        console.error(`Error evaluating exponent: ${exponent}`, e);
                        return match; // Return the original match if there's an error
                    }
                } else {
                    evaluatedExponent = parseFloat(exponent); // Parse as number if no parentheses
                }
            
                // Calculate the power
                const result = Math.pow(evaluatedBase, evaluatedExponent);
                
                // Check if the original base or exponent had parentheses
                const hasBaseParentheses = base.includes('(');
                const hasExponentParentheses = exponent.includes('(');
                // Add parentheses around the final result if needed
                if (hasBaseParentheses || hasExponentParentheses) {
                    return `(${result})`; // Wrap the result in balanced parentheses
                } else {
                    return result; // Return the result without additional parentheses
                }
            });
            

            




            // Evaluate the final expression and set the result
            console.log("transformed expression : ", temp);
            // CHECK IF ALL PARANTHESIS ARE CLOSED 
            function checkvalid() {
                let char, opencount = 0;
                for (let i = 0; i < temp.length; i++) {
                    char = temp[i];
                    if (char === "(") {
                        opencount++
                    }
                    else if (char === ")") {
                        opencount--;
                    }
                    else {

                    }
                }

                if (opencount === 0) { return true; }
                else { return false; }
            }
            if (checkvalid()) {
                resultgenrated = true;
                
                result.value = math.evaluate(temp);
                if (result.value !== "" && result.value != "undefined")
                    lastresult = result.value;
                else { }
            }

            else {
                result.value = "Close all open ')'"

            }
        }
    } catch (e) {
        console.error(e);
        display.value = "Syntax Error";
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

//  INV will be added





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
        let laststring = string[string.length-1];
        if(laststring !== " "){
            display.value = addtodisplay("* e",string)
        }
        
        else{display.value = addtodisplay("e", string);}
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
    result = displaytext.slice(0, displaytext.length - 1)
    return result;
}
