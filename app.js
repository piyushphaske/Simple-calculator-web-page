const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){ 
    try{
        display.value = eval(display.value + ')'.repeat((display.value.match(/\(/g) || []).length - (display.value.match(/\)/g) || []).length));
        const result = display.value;
        //document.getElementById('history').innerHTML += `<p>${display.value} = ${result}</p>`;
    }
    catch(error){
        display.value = "error";
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearDisplay();
    }
});
