function identifyPrime(num) {

    for (i = 2; i <= Math.floor(num / 2); i++) {

        if (num % i === 0) {
            console.log("No");
            return;
        }
    }
    console.log("Yes");

}
identifyPrime(13);