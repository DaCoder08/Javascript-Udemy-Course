const getDigit = (n,pos) => {
    return Math.floor(Math.abs(n) / Math.pow(10,pos)) % 10
}
const digitCount = (n) => {
    return Math.floor(Math.log10(Math.abs(num))) + 1
}
const mostDigit = (arr) => {
    let maxDigits = 0;
    for(let i = 0;i<arr.length;i++){
        maxDigits = Math.max(maxDigits, digitCount(arr[i]))
    }
    return maxDigits;
}
