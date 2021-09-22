


function functionElse(num) {
    var result = "Bigger then 5"
    if (num <= 5) {
        return "5 or smaller"}
        else {
        return result
}

}

functionElse(4);
functionElse(5);
functionElse(6);
functionElse(10);

console.log(functionElse(4));
console.log(functionElse(5));
console.log(functionElse(6));
console.log(functionElse(10));

module.exports = functionElse;