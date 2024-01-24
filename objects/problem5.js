function mapSymbols(N) {
    var symbolMapping = {};
    var symbols = ['!', '@', '#', '$', '%', '^', '&', '*'];
    var value = N;
    for (var i = 0; i < symbols.length; i++) {
        symbolMapping[symbols[i]] = value;
        console.log(symbols[i] + "-" + value);
        value += 2;
    }

}
mapSymbols(20);