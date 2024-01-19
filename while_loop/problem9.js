function modeof10(num) {
    var i = 1;
    while (i <= num) {
        var mod = i % 10;
        console.log(mod);
        i++;
    }
}
modeof10(7);