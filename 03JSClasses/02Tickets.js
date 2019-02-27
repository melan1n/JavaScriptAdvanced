function sortTickets(input, sortBy) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    for (let str of input) {
        let stringArray = str.split('|');
        let ticket = new Ticket(stringArray[0], parseFloat(stringArray[1]), stringArray[2]);
        result.push(ticket);
    }

    let sortedResult = result.sort(function (a, b) {
        var valueA = a[sortBy]; // ignore upper and lowercase
        var valueB = b[sortBy]; // ignore upper and lowercase
        if (valueA < valueB) {
            return -1;
        }
        if (valueA > valueB) {
            return 1;
        }

        // names must be equal
        return 0;
    })

    return sortedResult;
}

console.log(sortTickets(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'))

