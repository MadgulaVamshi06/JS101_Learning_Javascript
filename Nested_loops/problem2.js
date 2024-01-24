function yourFirstPattern(n) {

    for (var i = 0; i < n; i++) {
        var bag = "";
        for (var j = 0; j < n; j++) {
            bag = bag + "*" + " ";
        }
        console.log(bag);
    }
}
yourFirstPattern(5);