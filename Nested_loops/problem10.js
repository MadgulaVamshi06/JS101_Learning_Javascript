function charAtEvenPos(N, str) {
    for (i = 0; i < N; i++) {
        if (i % 2 === 0) {
            console.log(str[i]);
        }
    }

}
charAtEvenPos(6, "ankush");