function vowelAndConsonantCount(N, str) {
    var vowels = 0, consonants = 0;
    for (var i = 0; i < N; i++) {
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
            vowels++;
        } else {
            consonants++;
        }
    }
    console.log(vowels, consonants);
}
vowelAndConsonantCount(6, "ankush");