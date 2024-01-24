function ArraySum(n, arr) {
    var sum = 0;
    for (i = 0; i < n; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
}
ArraySum(5, [1, 2, 3, 4, 5]);