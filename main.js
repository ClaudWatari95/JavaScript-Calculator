const modal = document.querySelector("#documentor");

const btn = document.querySelector("#documentorButton");

const modalContent = document.querySelector(".d-cm");

const modalContentFirst = document.querySelector(".d-cf");

const modalContentSecond = document.querySelector(".d-cs");

const moreFirst = document.querySelector("#moreDocumentationToOne");

const moreSecond = document.querySelector("#moreDocumentationToSecond");

const span = document.querySelectorAll(".close");

const closeButton = document.querySelector(".c");

const myData = document.querySelector("#owner-info");

const showmyInfo = document.querySelector("#firstMenu");

showmyInfo.addEventListener('click', () => {
    const isOpen = myData.classList.contains('slide-in');

    myData.classList.remove("h");

    myData.setAttribute('class', isOpen ? 'slide-out' : 'slide-in');
});

const showModal = () => {
  modal.style.display = "block";
  modalContent.style.display = "block";
  modalContentFirst.style.display = "none";
  modalContentSecond.style.display = "none";
}

const toggleFirst = () => {
  modalContent.style.display = "none";
  modalContentFirst.style.display = "block";
  modalContentSecond.style.display = "none";
}

const toggleSecond = () => {
    modalContent.style.display = "none";
    modalContentFirst.style.display = "none";
    modalContentSecond.style.display = "block";
}

const hideModal = () => {
  modal.style.display = "none";
}

window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

btn.addEventListener("click", showModal);
moreFirst.addEventListener("click", toggleFirst);
moreSecond.addEventListener("click", toggleSecond)
span.forEach((span) => {
    span.addEventListener("click", hideModal);
});
closeButton.addEventListener("click", hideModal);


const calculator = document.querySelector(".parent-calculator-div");
const keys = calculator.querySelector(".three-by-four");
const displayFirst = document.querySelector(".firstEntry");
const displaySymbol = document.querySelector(".operEntry");
const displayLast = document.querySelector(".finalEntry");

keys.addEventListener("click", (e) => {
 if (e.target.matches("button")) {
     const key = e.target;
     const action = key.dataset.action;
     const keyContent = key.textContent;
     const displayedNumFirst = displayFirst.textContent;
     const displayedNumLast = displayLast.textContent;


    if (!action) {
        if (displayedNumFirst === "0") {
            displayFirst.textContent = keyContent;

        return true;
        } else {
            displayFirst.textContent = displayedNumFirst + keyContent;

            if (displaySymbol.textContent !== "") {

                displayFirst.textContent = displayedNumFirst;
                displayLast.textContent = displayedNumLast + keyContent;
            }

        return true;
        }
    }
    
    if (action === "decimal") {

        if(displayedNumFirst !== "" && displayedNumLast === "") {
            displayFirst.textContent = displayedNumFirst + ".";

            if (displayFirst.textContent.toString().indexOf(".") > 0 && displaySymbol.textContent === "") {

                document.querySelector("button[data-action = 'decimal']").disabled = true;
                document.querySelector("button[data-action = 'decimal']").style.color = "rgb(0, 0, 0)";
                return false;
            }

            return true;
        } else if (displaySymbol.textContent !== ""){
            displayFirst.textContent = displayedNumFirst ;
            displayLast.textContent = displayedNumLast + ".";

            if (displayLast.textContent.toString().indexOf(".") > 0) {

                document.querySelector("button[data-action = 'decimal']").disabled = true;
                document.querySelector("button[data-action = 'decimal']").style.color = "rgb(0, 0, 0)";
                return false;
            }

            return true;
        }
        return true;
    }
    
    if (action === "multiply") {
        document.querySelector("button[data-action = 'decimal']").disabled = false;
        displaySymbol.textContent = keyContent;

        document.querySelector("button[data-action = 'decimal']").onclick = () => {
            if(displayLast.textContent === "") {
                displayLast.textContent = "0";
            }
        }
        
        const firstValue = displayFirst.textContent;
        const finalValue = displayLast.textContent;

        const res = parseInt(firstValue) * parseInt(finalValue);

        return res;
    }
    if (action === "divide") {
        document.querySelector("button[data-action = 'decimal']").disabled = false;
        displaySymbol.textContent = keyContent;
        
        document.querySelector("button[data-action = 'decimal']").onclick = () => {
            if(displayLast.textContent === "") {
                displayLast.textContent = "0";
            }
        }
        
        const firstValue = displayFirst.textContent;
        const finalValue = displayLast.textContent;

        const res = parseInt(firstValue) / parseInt(finalValue);

        return res;
    }
    if (action === "subtract") {
        document.querySelector("button[data-action = 'decimal']").disabled = false;
        displaySymbol.textContent = keyContent;
        
        document.querySelector("button[data-action = 'decimal']").onclick = () => {
            if(displayLast.textContent === "") {
                displayLast.textContent = "0";
            }
        }
        
        const firstValue = displayFirst.textContent;
        const finalValue = displayLast.textContent;

        const res = parseInt(firstValue) - parseInt(finalValue);

        return res;
    }
    if (action === "add") {
        document.querySelector("button[data-action = 'decimal']").disabled = false;
        displaySymbol.textContent = keyContent;
        
        document.querySelector("button[data-action = 'decimal']").onclick = () => {
            if(displayLast.textContent === "") {
                displayLast.textContent = "0";
            }
        }
        
        const firstValue = displayFirst.textContent;
        const finalValue = displayLast.textContent;

        const res = parseInt(firstValue) + parseInt(finalValue);

        return res;
    }
    
    const multiply = () => {
        const firstValue = displayFirst.textContent;
        const lastValue = displayLast.textContent;
        ans = parseFloat(firstValue) * parseFloat(lastValue);

        let finalAns;

        if(ans.toString().indexOf(".") == -1){
            roundedAns = ans.toFixed(0);
            finalAns = ""+ firstValue + " " + "x" + " " + lastValue + " = " + ans;
        } else {
            var countDecimals = (value) => {
                if(Math.floor(value) === value) return 0;
                return value.toString().split(".")[1].length || 0; 
            }
            if (countDecimals(ans) > 2) {
                roundedAns = ans.toFixed(2);
                finalAns = ""+ firstValue + " " + "x" + " " + lastValue + " = " + roundedAns;
            } else if (countDecimals(ans) <= 2) {
                roundedAns = ans.toFixed(2);
                finalAns = ""+ firstValue + " " + "x" + " " + lastValue + " = " + roundedAns;
            } else if (countDecimals(ans) <= 1) {
                roundedAns = ans.toFixed(1);
                finalAns = ""+ firstValue + " " + "x" + " " + lastValue + " = " + roundedAns;
            }
        }

        return finalAns;
    }
    const divide = () => {
        const firstValue = displayFirst.textContent;
        const lastValue = displayLast.textContent;
        ans = parseFloat(firstValue) / parseFloat(lastValue);

        let finalAns;

        if(ans.toString().indexOf(".") == -1){
            roundedAns = ans.toFixed(0);
            finalAns = ""+ firstValue + " " + "x" + " " + lastValue + " = " + ans;
        } else {
            var countDecimals = (value) => {
                if(Math.floor(value) === value) return 0;
                return value.toString().split(".")[1].length || 0; 
            }
            if (countDecimals(ans) > 2) {
                roundedAns = ans.toFixed(2);
                finalAns = ""+ firstValue + " " + "/" + " " + lastValue + " = " + roundedAns;
            } else if (countDecimals(ans) <= 2) {
                roundedAns = ans.toFixed(2);
                finalAns = ""+ firstValue + " " + "/" + " " + lastValue + " = " + roundedAns;
            } else if (countDecimals(ans) <= 1) {
                roundedAns = ans.toFixed(1);
                finalAns = ""+ firstValue + " " + "/" + " " + lastValue + " = " + roundedAns;
            }
        }

        return finalAns;
    }
    const subtract = () => {
        const firstValue = displayFirst.textContent;
        const lastValue = displayLast.textContent;
        ans = parseFloat(firstValue) - parseFloat(lastValue);

        let finalAns;

        if(ans.toString().indexOf(".") == -1){
            roundedAns = ans.toFixed(0);
            finalAns = ""+ firstValue + " " + "-" + " " + lastValue + " = " + ans;
        } else {
            var countDecimals = (value) => {
                if(Math.floor(value) === value) return 0;
                return value.toString().split(".")[1].length || 0; 
            }
            if (countDecimals(ans) > 2) {
                roundedAns = ans.toFixed(2);
                finalAns = ""+ firstValue + " " + "-" + " " + lastValue + " = " + roundedAns;
            } else if (countDecimals(ans) <= 2) {
                roundedAns = ans.toFixed(2);
                finalAns = ""+ firstValue + " " + "-" + " " + lastValue + " = " + roundedAns;
            } else if (countDecimals(ans) <= 1) {
                roundedAns = ans.toFixed(1);
                finalAns = ""+ firstValue + " " + "-" + " " + lastValue + " = " + roundedAns;
            }
        }

        return finalAns;
    }
    const add = () => {
        const firstValue = displayFirst.textContent;
        const lastValue = displayLast.textContent;
        ans = parseFloat(firstValue) + parseFloat(lastValue);

        let finalAns;

        if(ans.toString().indexOf(".") == -1){
            roundedAns = ans.toFixed(0);
            finalAns = ""+ firstValue + " " + "+" + " " + lastValue + " = " + ans;
        } else {
            var countDecimals = (value) => {
                if(Math.floor(value) === value) return 0;
                return value.toString().split(".")[1].length || 0; 
            }
            if (countDecimals(ans) > 2) {
                roundedAns = ans.toFixed(2);
                finalAns = ""+ firstValue + " " + "+" + " " + lastValue + " = " + roundedAns;
            } else if (countDecimals(ans) <= 2) {
                roundedAns = ans.toFixed(2);
                finalAns = ""+ firstValue + " " + "+" + " " + lastValue + " = " + roundedAns;
            } else if (countDecimals(ans) <= 1) {
                roundedAns = ans.toFixed(1);
                finalAns = ""+ firstValue + " " + "+" + " " + lastValue + " = " + roundedAns;
            }
        }

        return finalAns;
    }


    if (action === "calculate") {
        const operator = displaySymbol.textContent;
        if(operator === "x") {
            document.querySelector(".result").textContent = multiply();
            document.querySelector(".firstEntry").textContent = roundedAns;                   

            return true;
        }
        if(operator === "/") {
            document.querySelector(".result").textContent = divide();
            document.querySelector(".firstEntry").textContent = roundedAns;

            return true;
        }
        if(operator === "-") {
            document.querySelector(".result").textContent = subtract();
            document.querySelector(".firstEntry").textContent = roundedAns;
            
            return true;
        }
        if(operator === "+") {
            document.querySelector(".result").textContent = add();
            document.querySelector(".firstEntry").textContent = roundedAns;
            
            return true;
        }
    }
 }
})


const clearDisplay = () => {

    const ansVal = document.querySelector(".result");
    const defaultDisplay = document.querySelector(".firstEntry");
    const operator = document.querySelector(".operEntry");
    const lastDisplayValue = document.querySelector(".finalEntry");

    ansVal.textContent = "";
    defaultDisplay.textContent = "0";
    operator.textContent = "";
    lastDisplayValue.textContent = "";
    document.querySelector("button[data-action = 'decimal']").disabled = false;
}

document.querySelector("button[data-action = 'clear'").addEventListener("click", clearDisplay);


const hideDecimalError = () => {

    const decimalerror = document.querySelector(".decimalerror");

    decimalerror.style.display = "none";

    return false;
}

const exitErrorModal = () => {
    document.querySelector(".decimalerror").style.display = "none";
}

document.querySelector("#exitError").addEventListener("click", exitErrorModal);