function charAtOddPos(N, str) {
    for (i = 0; i < N; i++) {
        if (i % 2 !== 0) {
            console.log(str[i]);
        } else continue;
    }

}
charAtOddPos(6, "ankush");