function evenNumber(number) {
    var num = number.toString();
    var k = 0;
    for (var i = 0; i < num.length; i ++) {
        if (+num[i] % 2 === 0) {
            k++;
        }
    }
    console.log(k);
}


evenNumber(223344); // 4
evenNumber(111); // 0
evenNumber(123456); // 3
evenNumber(97531); // 0
evenNumber(8642); // 4
evenNumber(24688642); // 8