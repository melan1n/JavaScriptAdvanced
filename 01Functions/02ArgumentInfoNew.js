function myFunc() {
    let summary = [];
    var sortedTypes = [];

    for (var i = 0; i < arguments.length; i++) {
        var obj = arguments[i];
        var type = typeof obj;
        console.log(type + ': ' + obj);

        if (!summary[type]) {
            summary[type] = 1;
        } else {
            summary[type]++;
        }
    }

    for (var currentType in summary) {
        sortedTypes.push([currentType, summary[currentType]]);
    }

    sortedTypes.sort((a, b) => b[1] - a[1]);

    for (let element of sortedTypes) {
        console.log(`${element[0]} = ${element[1]}`);
    }
}

myFunc({ name: 'bob'}, 3.333, 9.999)