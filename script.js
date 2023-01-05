add = (x, y) => +(x + y).toFixed(12);
sub = (x, y) => +(x - y).toFixed(12);
mul = (x, y) => +(x * y).toFixed(12);
div = (x, y) => +(x / y).toFixed(12);

operate = (num1, num2, operator) => {
    if (operator == '+') return add(num1, num2);
    else if (operator == '-') return sub(num1, num2);
    else if (operator == '*') return mul(num1, num2);
    else return div(num1, num2);
}

function numberClick() {


    if (operatorStatus == false) {
        displayBottom.innerText += this.textContent;
        num1 = parseFloat(displayBottom.innerText);
        num1Status = true;
    }
    else {
        //checking for division by zero
        // if(this.textContent==='0' && num2==='' && operator==='/') return; 
        displayBottom.innerText += this.textContent;
        num2 = parseFloat(displayBottom.innerText);
        num2Status = true;
    }
};


function operatorClick() {

    if (!num1Status) return;

    // if operator is pressed twice after num1 , stopping it
    if (operatorStatus && !num2Status) return;

    // if everything is present and an operator is pressed instead of equals
    // consider equals is pressed and store the result and the current operator in top (same as pressing the operator for first time);
    if (num1Status && num2Status && operatorStatus) {
        if (operator === '/' && num2 === 0) return;
        equalsClick();
    }
    // things to do if an operator is pressed for a first time
    displayTop.innerText = displayBottom.innerText + this.textContent;
    displayBottom.innerText = "";
    operator = this.textContent;
    operatorStatus = true;
};

function equalsClick() {

    // if any of numbers / operators is not filled , do nothing
    if (!num1Status || !num2Status || !operatorStatus) return;

    //not allowing divide by zero
    if (operator === '/' && num2 === 0) return;
    // calculating and displaying result in bottom
    console.log(num1 + " " + num2 + " " + operator);
    num1 = operate(+num1, +num2, operator);
    console.log(num1)
    num1Status = false;
    num2Status = false;
    decimal1Status = false;
    decimal2Status = false;
    operatorStatus = false;
    displayBottom.innerText = num1;
    num1Status = true;
    if (Number.isInteger(num1) == false) decimal1Status = true;
    num2 = '';
    operator = '';
    displayTop.innerText = "";
}

function decimalClick() {
    //if im clicking 1 decimal for the first number (operator not clicked yet and decimal too)
    if (!operatorStatus && !decimal1Status && num1 !== '') {
        displayBottom.innerText += this.textContent;
        num1 = parseFloat(displayBottom.innerText);
        decimal1Status = true;
    }
    if (operatorStatus && !decimal2Status && num2 !== '') {
        displayBottom.innerText += this.textContent;
        num2 = parseFloat(displayBottom.innerText);
        decimal2Status = true;
    }

}
function resetClick() {
    num1 = '';
    num2 = '';
    operator = '';
    operatorStatus = false;
    num1Status = false;
    num2Status = false;
    decimal1Status = false;
    decimal2Status = false;
    displayTop.innerText = "";
    displayBottom.innerText = "";

}

bt0 = document.querySelector(".bt-0");
bt1 = document.querySelector(".bt-1");
bt2 = document.querySelector(".bt-2");
bt3 = document.querySelector(".bt-3");
bt4 = document.querySelector(".bt-4");
bt5 = document.querySelector(".bt-5");
bt6 = document.querySelector(".bt-6");
bt7 = document.querySelector(".bt-7");
bt8 = document.querySelector(".bt-8");
bt9 = document.querySelector(".bt-9");
btDel = document.querySelector(".bt-del");
btAdd = document.querySelector(".bt-add");
btSub = document.querySelector(".bt-sub");
btMul = document.querySelector(".bt-mul");
btDiv = document.querySelector(".bt-div");
btEq = document.querySelector(".bt-equals");
btReset = document.querySelector(".bt-reset");
btDecimal = document.querySelector(".bt-decimal");
buttonNums = [bt0, bt1, bt2, bt3, bt4, bt5, bt6, bt7, bt8, bt9];
buttonOperations = [btAdd, btSub, btMul, btDiv];
displayBottom = document.querySelector(".display-bottom");
displayTop = document.querySelector(".display-top");
num1 = '';
num2 = '';
operator = "";
num1Status = false;
num2Status = false;
operatorStatus = false;
decimal1Status = false;
decimal2Status = false;
buttonNums.forEach(bt => bt.addEventListener("click", numberClick));
buttonOperations.forEach(bt => { bt.addEventListener("click", operatorClick) });
btEq.addEventListener("click", equalsClick);
btDecimal.addEventListener("click", decimalClick);
btReset.addEventListener("click", resetClick);

function addHoverNumbers() {
    console.log(this);
    this.classList.add("button-hover");
}
function removeHoverNumbers() {
    this.classList.remove("button-hover");
}

function addHoverOperators() {
    this.classList.add("operator-hover");
}
function removeHoverOperators() {
    this.classList.remove("operator-hover");
}

function addHoverReset() {
    console.log(this);
    this.classList.add("reset-hover");
}
function removeHoverReset() {
    this.classList.remove("reset-hover");
}

buttonsStyle = [bt0, bt1, bt2, bt3, bt4, bt5, bt6, bt7, bt8, bt9, btDecimal, btEq];
buttonsStyle.forEach(bt => bt.addEventListener("mouseover", addHoverNumbers));
buttonsStyle.forEach(bt => bt.addEventListener("mouseout", removeHoverNumbers));

buttonOperations.forEach(bt => bt.addEventListener("mouseover", addHoverOperators));
buttonOperations.forEach(bt => bt.addEventListener("mouseout", removeHoverOperators));

btReset.addEventListener("mouseover", addHoverReset);
btReset.addEventListener("mouseout", removeHoverReset);




