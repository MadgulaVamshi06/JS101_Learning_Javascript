function minimumInArray(N, arr) {
    var min = Infinity;
    for (i = 0; i < N; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else continue;
    }
    console.log(min);
}
minimumInArray(5, [1, 2, 3, 4, 5]);