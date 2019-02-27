function euclid(a, b) {

    if (a % b === 0) {
        return b;
    }
    return euclid(b, a % b)
}

console.log(euclid(252, 105))