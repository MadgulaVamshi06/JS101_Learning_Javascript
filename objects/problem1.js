function mapChar(N) {
    let obj = {};
    let str = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < N; i++) {
        obj[str[i]] = i;
        console.log(str[i] + "-" + (i + 1));
    }
}
mapChar(5);