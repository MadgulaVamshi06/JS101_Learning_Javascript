function rightAngleTriangle(N) {
    var str = "";
    for (i = 1; i <= N; i++) {
        for (j = 1; j <= i; j++) {
            str += i + " ";
        }
        str += "\n";
    }
    console.log(str);
}
rightAngleTriangle(4);    