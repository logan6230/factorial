function factorial() {
    let n = parseInt(document.getElementById('n').value);
    let factorial = 1;
    let i = 2;

    while (i <= n) {
        factorial = factorial * i;
        i += 1;
    }
    console.log(factorial);
    return factorial;
}