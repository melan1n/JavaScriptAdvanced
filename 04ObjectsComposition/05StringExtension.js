let extensions = (function () {
    String.prototype.ensureStart = function (str) {
        if (this.substr(0, str.length) !== str) {
            return str + this;
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {
        if (this.substr(this.length - str.length, str.length) !== str) {
            return this + str;
        }
        return this.toString();
    }

    String.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        }
        return false;
    }

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '...'.substr(0, n);
        }

        if (this.length <= n) {
            return this.toString();
        }

        const lastIndexOfSpace = this.toString().substr(0, n-2).lastIndexOf(' ');

        if (lastIndexOfSpace !== -1) {
            return this.substr(0, lastIndexOfSpace) + '...';
        } else {
            return this.substr(0, n - 3) + '...';
        }
    }

    String.format = function (string,...params
)
    {
        for (let index = 0; index < params.length; index++) {
            string = string.replace(`{${index}}`, params[index]);
        }
        return string;
    }
    ;
})
();


let str = 'my string'
console.log(str = str.ensureStart('my'))
console.log(str = str.ensureStart('hello '))
console.log(str = str.truncate(16))
console.log(str = str.truncate(14))
console.log(str = str.truncate(8))
console.log(str = str.truncate(4))
console.log(str = str.truncate(2))
console.log(str = String.format('The {0} {1} fox',
    'quick', 'brown'));
console.log(str = String.format('jumps {0} {1}',
    'dog'));


