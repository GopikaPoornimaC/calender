
function display(val){
    document.getElementById('result') .value += val;
}

function clearScreen(){
    document.getElementById('result').value='';
}

function evaluateExpression() {
    var expression = document.getElementById('result').value;
    var result;

    try {
        result = eval(expression); // Using eval() to evaluate the expression
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
        
    