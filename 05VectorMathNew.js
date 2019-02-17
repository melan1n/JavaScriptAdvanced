solution = {

    add(vec1, vec2) {
        let result = [];
        result[0] = vec1[0] + vec2[0];
        result[1] = vec1[1] + vec2[1];

        return result;
    },

    multiply (vec1, num) {
        let result = [];
        result[0] = vec1[0] * num;
        result[1] = vec1[1] * num;

        return result;
    },

    length (vec1) {
        let result;
        result = Math.sqrt(vec1[0] ** 2 + vec1[1] ** 2);
        return result;
    },

    dot (vec1, vec2) {
        let result = [];
        result = vec1[0] * vec1[1] + vec2[0] * vec2[1];
        return result;
    },

    cross (vec1, vec2) {
        let result = [];
        result = vec1[0] * vec2[1] - vec1[1] * vec2[0];
        return result;
    }
}

console.log(solution.add([1, 1], [1, 0]))
console.log(solution.multiply([3.5, -2], 2))
console.log(solution.length([3, -4]))
console.log(solution.dot([1, 0], [0, -1]))
console.log(solution.cross([3, 7], [1, 0]))