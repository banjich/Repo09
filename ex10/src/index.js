function logicOrder(num) {
   var result = "Greater then or equal to 100"
    if (num < 50) {return "Less then 50";
    }
    else if (num < 100) {
       return "Less then 100"}
    else {
       return result
    }
}

logicOrder(28);
logicOrder(60);
logicOrder(110);


console.log(logicOrder(28));
console.log(logicOrder(60));
console.log(logicOrder(110));

module.exports = logicOrder;