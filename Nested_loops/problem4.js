function evenSumAgain(num) {

    for (i = 1; i <= num; i++) {
        var sum = 0;
        for (j = 1; j <= i; j++) {
            if (j % 2 === 0) {
                sum = sum + j;
            }
        }
        console.log(sum);
    }
}
evenSumAgain(4);