function evenNumber(number) {
    var num = number.toString();
    var k = 0;
    for (var i = 0; i < num.length; i ++) {
        if (!(+num[i] % 2)) {
            k++;
        }
    }
    return k;
}


console.log(evenNumber(223344)); // 4
console.log(evenNumber(111)); // 0
console.log(evenNumber(123456)); // 3
console.log(evenNumber(97531)); // 0
console.log(evenNumber(8642)); // 4
console.log(evenNumber(24688642)); // 8