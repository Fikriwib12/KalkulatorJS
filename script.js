let currentOperation = ''

function appendToDisplay(value){
    if((value === '*' || value === '/' || value === '+') && document.getElementById('display').innerText === ''){
        return
    }

    if (value === '*' || value === '/' || value === '+'){
        currentOperation = value
    }
    document.getElementById('display').innerText += value
}

function clearDisplay(){
    document.getElementById('display').innerText = ''
}

function deleteNum() {
    let currentDisplay = document.getElementById('display').innerText;
    document.getElementById('display').innerText = currentDisplay.slice(0, -1);
}

function operation(){
    try{
        const result = eval(document.getElementById('display').innerText)
        document.getElementById('display').innerText = result
    }
    catch{
        document.getElementById('display').value = eror
    }
}

