let add = (function () {
    let sum = 0;

    function func(number){
        sum += number;
        console.log(sum);
        return func;
    }

    func.toString = function () {
        return sum
    }

    return func;
})()

add(1)(6);