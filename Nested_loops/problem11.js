function patternPrintingI(N) {
    for (i = 0; i < N; i++) {
        var bag = "";
        for (j = 0; j < N; j++) {
            if (i === 0 || i === N - 1) {
                bag = bag + "*" + " ";
            }
            else {
                if (j === 0) {
                    bag = bag + "*" + " ";
                }
            }
        }
        console.log(bag);
    }
}
patternPrintingI(5);