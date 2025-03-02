function calValue(value) {
    let myvalue = document.getElementById('result').value += value;
    console.log(myvalue);
}

function calResult() {
    let calresult = document.getElementById('result').value
    let result = eval(document.getElementById('result').value);
    document.getElementById('result').value = eval(document.getElementById('result').value);
    console.log(calresult,"=",result);
}

// function calResult2(event) {
//     if (event.key == '0' || event.key == '1' || 
//         event.key == '2' || event.key == '3' ||
//         event.key == '4' || event.key == '5' ||
//         event.key == '6' || event.key == '7' ||
//         event.key == '8' || event.key == '9' ||
//         event.key == '+' || event.key == '-' ||
//         event.key == '*' || event.key == '/' ||
//         event.key == '%' || event.key == '.' ||
//         event.key == '=' 
//     ) {
//         document.getElementById('result').value += event.key;
//     }
    
// }

function clrResult() {
    let clrvalue = document.getElementById('result').value = "";
    console.log(clrvalue);
}