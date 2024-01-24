function mapCharAgain(N) {
    let alphabet = {};
    for (var i = 0; i < 26; i++) {
        alphabet = String.fromCharCode('a'.charCodeAt() + i);
        console.log(alphabet + "-" + (i + N));
    }
}
mapCharAgain(30);  