 
 function calculate(operation){
    let num1= document.getElementsByClassName("num1").value;
    let num2 = document.getElementsByClassName("num2").value;
    let result = document.getElementsByClassName("res").value;  
    switch(operation)
{
                case 'add':
                    result = num1+ num2;
                    break;
                case 'subtract':
                    result = num1 - num2;
                    break;
                case 'multiply':
                    result = num1 * num2;
                    break;
                case 'divide':
                    result = num1 / num2 ;
                    break;
            }
            document.getElementsByClassName('result')=result;
        }
        

