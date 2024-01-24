function oddArray(n, arr) {
    for (var i = 0; i < n; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
}
oddArray(5, [1, 2, 3, 4, 5]);