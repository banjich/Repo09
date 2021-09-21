function compareStricValues(m) {
    if (m != 55) {
        return "Not equal"
        }
        return "Equal"
}

compareStricValues(55);
compareStricValues("55");
compareStricValues("21");
compareStricValues('12');
compareStricValues("Doe");


console.log(compareStricValues(55));
console.log(compareStricValues("55"));
console.log(compareStricValues("21"));
console.log(compareStricValues('23'));
console.log(compareStricValues("Doe"));

module.exports = compareStricValues;