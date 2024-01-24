function printHorizontalArray(N, arr) {
    var bag = "";
    for (var i = 0; i < N; i++) {
        bag = bag + arr[i] + " ";
    }
    console.log(bag);
}
printHorizontalArray(5, [1, 2, 3, 4, 5]);