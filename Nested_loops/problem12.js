function patternPrintingII(N) {
    for (i = 0; i < N; i++) {
        var bag = "";
        for (j = 0; j < N; j++) {
            if (i !== N - 1) {
                if (j === 0 || j === N - 1) {
                    bag = bag + "*" + " ";
                }
                else {
                    bag = bag + " " + " ";
                }
            } else {
                bag = bag + "*" + " ";
            }
        }
        console.log(bag);
    }
}
patternPrintingII(5);