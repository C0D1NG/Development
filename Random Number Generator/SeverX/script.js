function generateRandom(){
    var upperBound = document.getElementById('maxValue').value;
    if(upperBound != '' ){
        let rand_number =Math.round(Math.random() * Math.floor(upperBound))/100;
        document.getElementById('random_number').innerHTML= rand_number;
    }
}