function moveTwoAhead(num) {
    var i = 1;
    while (i <= num) {
        if (i % 2 !== 0) {
            console.log(i);
        }
        i++;
    }

}
moveTwoAhead(13);