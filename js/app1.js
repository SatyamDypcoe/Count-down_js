const arr = [1, 2 ,8, 2, 9, 8]
const dup = arr.filter((ele, index, arr) => arr.indexOf(ele) !== index)
console.log(dup)