function sortByTwoCriteria(input) {
    return input.sort((a,b)=>{
        if(a.length !== b.length) {
            return a.length - b.length;
        }
        return a.localeCompare(b);
    }).join('\n');
    
}