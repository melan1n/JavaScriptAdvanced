let solution = (function(){

    const add = (vec1, vec2) => {
        let result = [];
        result[0] = vec1[0] + vec2[0];
        result[1] = vec1[1] + vec2[1];

        return result;
    }

    const multiply = (vec1, num) => {
        let result = [];
        result[0] = vec1[0] * num;
        result[1] = vec1[1] * num;

        return result;
    }

    const length = (vec1) => {
        let result;
        result = Math.sqrt((vec1[0] * vec1[0]) + (vec1[1] * vec1[1]));
        return result;
    }

    const dot = (vec1, vec2) => {
        let result = [];
        result = vec1[0] * vec2[0] + vec1[1] * vec2[1];
        return result;
    }

    const  cross = (vec1, vec2) => {
        let result = [];
        result = vec1[0] * vec2[1] - vec1[1] * vec2[0];
        return result;
    }

    return {
        add,
        multiply,
        length,
        dot,
        cross
    }

})()

console.log(solution.add([1, 1], [1, 0]))