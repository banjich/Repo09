function comparationToEqual(a) {
    if (a < 5) {return "Less then 5";};
    if (a < 10) {return "Less then 10";};
    if (a > 20) {return "More then 20";};
    if (a >= 17) {return "10 or over";};
    
}

comparationToEqual(0);
comparationToEqual(5);
comparationToEqual(17);
comparationToEqual(21);


console.log(comparationToEqual(0));
console.log(comparationToEqual(5));
console.log(comparationToEqual(17));
console.log(comparationToEqual(21));

module.exports = comparationToEqual;