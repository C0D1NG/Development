
function generateRandom(){
    var upperBound = document.getElementById('maxValue').value;
    if(upperBound != '' ){
        var rand_number =Math.round(Math.random() *Math.floor(upperBound))/100;


        console.log(rand_number);
        var ans = document.getElementById('random_number');
        ans.innerHTML= rand_number;
        console.log(ans.innerHTML);
    }
}
