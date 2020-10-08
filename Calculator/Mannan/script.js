//function to show number in textbox

function insertNum(num){
    document.getElementById("textview").value += num;   
}


//function to show final result when clicked = button

function finalResult(){
    let storedValue =  document.getElementById("textview").value;
    if(storedValue){
        document.getElementById("textview").value = eval(storedValue);
    }    
}

// functionality to clear button

function clearValue(){
    document.getElementById("textview").value = "";
}

//functionality to back button



function back() {
    var value = document.getElementById("textview").value;
    document.getElementById("textview").value = value.substr(0, value.length - 1);
}