function patternOfN(N) {
    var count = 1;
    for (i = 1; i <= N; i++) {
        var bag = "";
        for (j = 1; j <= N; j++) {
            bag = bag + count + " ";
            count++;
        }
        console.log(bag);

    }
}
patternOfN(4);    