function sumOfMultiples(n, k, y) {
    var sum = 0;
    for (i = 1; i <= k; i++) {
        var multiple = n * i;
        if (multiple % y === 0) {
            sum = sum + multiple;
        }
    }
    console.log(sum);
}
sumOfMultiples(3, 10, 5);