function maximumInArray(N, arr) {
    var max = -Infinity;
    for (i = 0; i < N; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else continue;
    }
    console.log(max);
}
maximumInArray(5, [1, 2, 3, 4, 5]);