const arr = [2, 8, 6, 7, 9]

const largestVal = (arr) => {
    fLargestVal = Math.max(...arr)
    index = arr.indexOf(fLargestVal)
    arr.splice(index, 1)
    sLargestVal = Math.max(...arr)
    return(sLargestVal)
}
console.log(largestVal(arr))