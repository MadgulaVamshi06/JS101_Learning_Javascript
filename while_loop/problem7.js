function evenSumBelowN(num) {
    var sum = 0, i = 1;
    while (i <= num) {

        if (i % 2 === 0) {
            sum = sum + i;
        }
        i++;
    }
    console.log(sum);

}
evenSumBelowN(6);