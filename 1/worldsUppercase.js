function wordsUppercase(string) {
    let regex = /[A-Za-z]*\w/g;
 
    let find = string.match(regex);
 
    console.log(find.join(', ').toUpperCase());
}