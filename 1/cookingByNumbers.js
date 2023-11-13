function cookingByNumbers(num, first, second, third, fourth, fifth) {
    let numAsNum = Number(num);
    let arrComm = [];
    arrComm.push(first);
    arrComm.push(second);
    arrComm.push(third);
    arrComm.push(fourth);
    arrComm.push(fifth);

    for (const com of arrComm) {
        switch (com) {
            case 'chop':
                numAsNum /= 2;
                break;
            case 'dice':
                numAsNum = Math.sqrt(numAsNum);
                break;
            case 'spice':
                numAsNum += 1;
                break;
            case 'bake':
                numAsNum *= 3;
                break;
            case 'fillet':
                numAsNum *= 0.8;
                break;         
        }
        console.log(numAsNum);
    }

}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')