class sortedList {
    constructor (){
        this.list = [];
        this.size = 0;
    }

    add(element){
        this.list.push(element);
        this.size++;
        return this.list.sort((a,b) =>
            a - b);
    }

    remove(index){
        if (index >= 0 && index < this.list.length) {
            this.list.splice(index, 1);
            this.size--;
        }
        return this.list.sort((a,b) =>
            a - b);
    }

    get(index) {
        if (index >= 0 && index < this.list.length) {
            return this.list[Number(index)];
        }
    }
}

let test = new sortedList();
console.log(test.hasOwnProperty('size'));
console.log(test.add(5));
console.log(test.add(3));
console.log(test.remove(0));
console.log(test.get(0));
console.log(test.size);
