function reverseNumber (number) {
    let reversedString = number.toString().split ('').reverse ().join ('');

    if (number < 0) {
        reversedString = reversedString.split('')
        reversedString.pop()
        reversedString.unshift('-')
        return +(reversedString.join(''));

    } else {
        return +reversedString;
    }
}

console.log(reverseNumber (-81278));