function anotherNested(num) {
    for (i = 1; i <= num; i++) {
        for (j = 1; j <= i; j++) {
            console.log(j);
        }
    }
}
anotherNested(4);