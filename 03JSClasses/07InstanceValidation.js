class checkingAccount {
        constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    get clientId() { return this._clientId; }
    set clientId(str) {
        if (typeof  str == 'string' && str.length === 6) {
            this._clientId = str;
        } else {
            throw TypeError('Client ID must be a 6-digit number');
        }
    }

    get email() { return this._email; }
    set email(str) {
        let emailPattern = /^[\w\d]+@[\w\.]+$/;
        if (emailPattern.test(str)) {
            this._email = str;
        } else {
            throw TypeError('Invalid e-mail');
        }
    }

    get firstName() { return this._firstName; }
    set firstName(str) {
        if (str.length < 3 || str.length > 20) {
            throw TypeError('First name must be between 3 and 20 characters long');
        } else if (!/^[a-zA-Z]+$/.test(str)){
            throw  TypeError('First name must contain only Latin characters');
        } else {
            this._firstName = str;
        }
    }

    get lastName() { return this._lastName; }
    set lastName(str) {
        if (str.length < 3 || str.length > 20) {
            throw TypeError('Last name must be between 3 and 20 characters long');
        } else if (!/^[a-zA-Z]+$/.test(str)){
            throw  TypeError('Last name must contain only Latin characters');
        } else {
            this._lastName = str;
        }
    }
}

let test = new checkingAccount('123456', 'iva1_n@ds', 'fsd', 'sdd1');
console.log(test.clientId)
console.log(test.email)
console.log(test.firstName)
console.log(test.lastName)