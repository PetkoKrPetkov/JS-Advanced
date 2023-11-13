function extract(arr) {
//    let newArr = [];
//    let biggestNumber = 0;

//    arr.forEach(element => {
//     if(element >= biggestNumber) {
//         biggestNumber = element;
//         return newArr.push(element);
//     }
//    });

//    return newArr;
// }

let biggest = 0;
let result =  arr.reduce((acc, el)=>{
    if(el >= biggest) {
        biggest = el;
        acc.push(el);
    }
    return acc;
}, [])
return result;
}

extract([1, 3, 8, 4, 10, 12, 3, 2, 24]);
