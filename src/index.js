module.exports = function reverse(n) {
    const string = n.toString().split('').reverse().join('')
    return parseFloat(string);
}
