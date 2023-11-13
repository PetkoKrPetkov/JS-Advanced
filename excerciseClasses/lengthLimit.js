class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(value) {
        return this.innerLength += Number(value);
    }
    decrease(value) {
        this.innerLength -= Number(value);
        if(this.innerLength < 0) {
            this.innerLength = 0;
        }
        return this.innerLength;
    }
    toString() {
        if(this.innerString.length > this.innerLength) {
            let diff = this.innerString.length - this.innerLength;
            this.innerString = this.innerString.substring(0, this.innerString.length - diff) + '...';
            if(this.innerLength = 0) {
                this.innerString = '...';
            }
        }
        return this.innerString;
    }

}

let str = new Stringer('Petko', 22);
console.log(str);
str.decrease(23);
console.log(str);
str.increase(100);
console.log(str);