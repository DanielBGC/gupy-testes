function isPalindrome(string) {
    //transforma a string em um vetor, e junta em uma string novamente, retirando os espaços
    string = string.toLowerCase().split("").map(letter => {
        if(letter != " ") return letter
    }).join("").toLowerCase()

    //transforma a string em um vetor, inverte o vetor e junta em uma string novamente, retirando os espaços
    let stringInvertida = string.split("").reverse().map(letter => {
        if(letter != " ") return letter
    }).join("").toLowerCase()

    //compara a string original com a string invertida
    if(string == stringInvertida) {
        return true;
    } else {
        return false;
    }
}