function mapCharAndSum(N, K, str) {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let obj = {};
    for (let i = 0; i < lower.length; i++) {
        obj[lower[i]] = N;
        N++;
    }
    let sum = 0;
    for (let i = 0; i < K; i++) {
        sum += obj[str[i]];
    }
    console.log(sum);
}
mapCharAndSum(30, 3, abc);