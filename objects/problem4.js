function mapNumbers(N, K) {
    var obj = {};
    for (i = 1; i <= N; i++) {
        obj[i] = K;
        console.log(i + "-" + K);
        K++;
    }
}
mapNumbers(5, 10);