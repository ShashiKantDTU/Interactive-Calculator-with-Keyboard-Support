
# 🧮 **Interactive Calculator with Keyboard Support**

![Calculator Preview](https://placehold.co/800x400?text=Calculator+Preview)

*A sleek, responsive, and interactive calculator built with HTML, CSS, and JavaScript.*

The **Interactive Calculator with Keyboard Support** is a powerful web-based calculator that offers multiple modes, including basic arithmetic, scientific calculations, and bitwise operations. It also includes intuitive keyboard support for seamless user interaction.



## 🚀 **Features**

### ✨ Key Functionalities:
- **Standard Arithmetic Operations:** Perform basic calculations like addition, subtraction, multiplication, and division.
- **Scientific Functions:** Includes advanced math operations such as:
  - Sine (`sin`), Cosine (`cos`), Tangent (`tan`), and their inverses (e.g., `sin⁻¹`)
  - Logarithmic calculations (`log`, `ln`)
  - Exponentiation
  - Square roots and power operations (e.g., `√` and `xⁿ`)
  - Constants like `π` (Pi) and `e`
  - Factorials and percentage calculations
- **Bitwise Operations:** Perform binary operations like AND, OR, XOR, etc. *(Future enhancement)*
- **Keyboard Support:** Fully functional keyboard interaction for numbers, operators, and special commands. For example:
  - `Enter` evaluates the result.
  - `Backspace` deletes the last character.
  - `Escape` clears all inputs.
- **Mode Selector:** Three modes to dynamically switch between functionalities:
  - Normal mode
  - Scientific mode
  - Bitwise mode *(future updates)*
- **Error Handling:** Friendly error messages like "Syntax Error" for invalid inputs.
- **Responsive Design:** Works flawlessly on desktop, tablet, and mobile devices.



## 📸 **Screenshots**

### Desktop View:
![Desktop View](https://placehold.co/800x400?text=Desktop+View)

### Mobile View:
![Mobile View](https://placehold.co/400x800?text=Mobile+View)



## 🛠️ **Technologies Used**

- **HTML:** For the structure of the calculator.
- **CSS:** For responsive styling and a modern user interface.
- **JavaScript:** For functionality, interactivity, and dynamic calculations.



## 📂 **File Structure**





```
Interactive-Calculator/
│
├── index.html        # The main HTML structure
├── style.css         # Styling for the calculator
├── script.js         # JavaScript for functionality
├── calculator.png    # Favicon for the webpage
├── README.md         # Project documentation
```

---

## 🎮 **How to Use**

1. Clone the repository:
   ```bash
   git clone https://github.com/ShashiKantDTU/Interactive-Calculator-with-Keyboard-Support.git
   ```

2. Navigate to the project directory:
   ```bash
   cd interactive-calculator
   ```

3. Open `index.html` in your favorite browser.

4. Start using the calculator:
   - Click the buttons on the interface.
   - Or, use your keyboard for input (numbers, operators, `Enter` for equals, `Backspace` to delete, and `Escape` to clear).

---

## 🌟 **Customization**

You can easily customize the calculator based on your requirements:

- **Styling:** Modify the colors, fonts, gradients, and design using the `style.css` file.
- **Functionality:** Add new features or enhance existing ones by editing the `script.js` file. For instance:
  - Update the `trigLookupTable` for specific angles.
  - Customize or expand keyboard shortcuts to include additional operations.

---

## 🔧 **Functions and Code**

Here is a quick overview of some key JavaScript functions driving the calculator:

### `trigLookupTable`:
A utility object that provides trigonometric results for common angles:
```javascript
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
```

### Mode Switching:
Switches between Normal, Scientific, and Bitwise modes dynamically:
```javascript
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
```

### `addtodisplay` Function:
Adds text into the calculator's display:
```javascript
function addtodisplay(text, displaytext) {
    return String(displaytext) + String(text);
}
```

### Delete Functionality:
Handles deletion of the last entry while considering multi-character tokens, like `sin` or `log`:
```javascript
function del(displaytext) {
    let result = "";
    displaytext = String(displaytext);
    // Handle trigonometric and special function deletions
    let lastword2 = displaytext.slice(displaytext.length - 6, displaytext.length);
    if (lastword2 === "sin⁻¹(" || lastword2 === "cos⁻¹(" || lastword2 === "tan⁻¹(") {
        result = displaytext.slice(0, displaytext.length - 6);
        return result;
    }
    return displaytext.slice(0, displaytext.length - 1);
}
```

---

## 👨‍💻 **Made By**

**Shashi Kant**  
*B.Tech. in Environmental Engineering, Delhi Technological University (DTU)*  

Feel free to connect with me:  
- **[LinkedIn](https://www.linkedin.com/in/sunny-poddar-2595b4229/)**   
- **[GitHub](https://github.com/ShashiKantDTU/Interactive-Calculator-with-Keyboard-Support)** 
- **[Portfolio](#)**   `will update soon`  

---

## ⚠️ **License**

This project is licensed under the **MIT License**. You are free to use, modify, and distribute the project under the terms of the license.

---

## 🤝 **Acknowledgements**

- **Flaticon:** For the calculator icon. [Link to Flaticon](https://www.flaticon.com/free-icons/calculator)
- **Google Fonts:** For the beautiful "Bangers" font used in the project.

---

## 📝 **Feedback**

Have suggestions or want to report a bug? Feel free to open an issue or contact me at **shashi.kant935473@gmail.com**.

---

### 🎉 **Happy Calculating!**
```

---

### Key Enhancements Added:
1. Detailed **functionality** explanation for JavaScript functions in the "Functions and Code" section.
2. Clean **File Structure**, **How to Use**, and **Customization** sections.
3. Added **Screenshots** placeholders for better showcase.
4. Included a **Feedback** section for user engagement.
5. Polish & organization for modern and professional appeal.

Copy this entire `.md` text and paste it into your `README.md` file directly. Let me know if you need further assistance! 🚀 