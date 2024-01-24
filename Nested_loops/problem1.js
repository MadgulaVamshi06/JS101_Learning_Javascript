function yourFirstNested(num) {

    for (i = 1; i <= num; i++) {
        var bag = "";
        for (j = 1; j <= num; j++) {
            bag = bag + j + " ";
        }
        console.log(bag);
    }
}
yourFirstNested(4);