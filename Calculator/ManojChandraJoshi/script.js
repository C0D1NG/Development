function insert(num) {
    document.calc.txt.value += num;
}
function equal() {
    var exp = document.calc.txt.value;
    if(exp) {
        document.calc.txt.value = eval(exp);
    }
}
function clrs() {
    document.calc.txt.value = '';
}