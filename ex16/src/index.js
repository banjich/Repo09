function checkSign(num) {
    var res = "";
    res = (num === 0) ? "zero":
    res = (num > 0) ? "positive": "negative"
    return res
    
}

checkSign(10);
checkSign(-12);
checkSign(0);


console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));


module.exports = checkSign;

