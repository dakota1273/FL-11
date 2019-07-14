function getMin () {
    const min = Math.min(...arguments);
    return min;
}
console.log(getMin(10, 8, 199, -1, -3, -30, 11, 0))