function patternPrinting(N) {
    for (i = 1; i <= N; i++) {
        var bag = "";
        for (j = 1; j <= i; j++) {
            bag = bag + "*";
        }
        console.log(bag);
    }
}
patternPrinting(2);