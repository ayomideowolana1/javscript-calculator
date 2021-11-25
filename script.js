// calculator functions
// divide
const add =(a,b)=> a + b;
// subtract
const subtract =(a,b)=> a - b;
// multiply
const multiply =(a,b)=> a * b;
// divide 
const divide =(a,b)=> a / b;

// main variables
let arr1=[0],arr2=[0];
let num1=0,num2=0,currentOperator = null,prevOperator;
const operators = ["+","-","/","*"];

// dom variables
const screen = document.querySelector("#screen");
const buttons = document.querySelectorAll("button");

screen.innerHTML = 0;

// calculator main functions
function calculate(operator){
    switch(operator){
        case "+":
            return add(num1,num2);
            break;
            case "-":
                return subtract(num1,num2);
            break;
            case "/":
                return divide(num1,num2);
                break;
        case "*":
            return multiply(num1,num2);
            break;
        } 
}

//clear function
const clear = document.querySelector("#clear");
clear.addEventListener("click",()=>{
      arr1 = [0];
      arr2 = [0];
      num1=0;
      num2 =0;
      prevOperator =  null;
      currentOperator =  null;
      screen.innerHTML = 0;
      console.log(`${num1} ${currentOperator} ${num2}`);
  
})

buttons.forEach(button => {
    button.addEventListener("click",()=>{
         if(button.innerHTML != "C"){

             //perfeom op
         if(!isNumberBtn(button.innerHTML) && currentOperator){
            prevOperator = currentOperator;
            let result = calculate(prevOperator);
            num1 = result;
            screen.innerHTML = num1
            num2 = 0;
            arr1 = [0];
            arr2 = [0];
            currentOperator =  null;
        }
        

        //get number if number btn clicked
        if(isNumberBtn(button.innerHTML) && currentOperator == null){
            if(button.innerHTML != "="){
                getNum1(button.innerHTML);
            }
            screen.innerHTML = num1;
        };
        
        if(isNumberBtn(button.innerHTML) && num1 && currentOperator != null){
            if(button.innerHTML != "="){
                getNum2(button.innerHTML);
            }
            screen.innerHTML = num2;
        }


       
        
        // operator btn clicked
        if(!isNumberBtn(button.innerHTML) && operators.includes(button.innerHTML)){
            currentOperator = button.innerHTML;
            
        }

        // = button clicked
        if(button.innerHTML == "=" && num1 && num2){   
            let result = calculate(currentOperator);
            num1 = result;
            screen.innerHTML = num1
            num2 = 0;
           arr1 = [0];
           arr2 = [0];
           currentOperator  = null;
        }


        console.log(`${num1} ${currentOperator} ${num2}`);
         }
    })
})

  

  // helper functions
  isNumberBtn = (val) =>{
    if(operators.includes(val)){
        return false;
    }else{
        return true;
    }
}

getNum1 = (x) => {
    arr1.push(x);
    num1 = parseInt(arr1.join("")); 
}

getNum2 = (x) =>{
    arr2.push(x);
    num2 = parseInt(arr2.join("")); 
}