function gcd(a, b) {
    let greatest = a % b;
    while(greatest !== 0) {
        a = b;
        b = greatest;
        greatest = a % b;
    }
    console.log(b);
}
gcd(2154, 458);