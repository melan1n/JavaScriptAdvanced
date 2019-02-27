class Stringer{
    constructor(innerString, innerLength){
        this.innerString = innerString;
        this.innerLength = Number(innerLength);
        this._innerString = innerString;
    }

       increase(lengthChange){
        this.innerLength += lengthChange;
    }

    decrease(lengthChange){
        if (this.innerLength <= lengthChange) {
            this.innerLength = 0;
        } else {
            this.innerLength -= lengthChange;
        }
    }

    toString(){
        if (this.innerLength >= this._innerString.length) {
            return this._innerString;
        } else {
            return `${this._innerString.substr(0,this.innerLength)}...`;
        }
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); //Test

test.decrease(3);
console.log(test.toString());

test.decrease(5);
console.log(test.toString());

test.increase(4);
console.log(test.toString()); //Test
