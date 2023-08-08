const arr = [1, 9, 87, 65 ,655]
const maxFunction = (arr) => {
    return  arr.reduce(function(pre, cur){
        return pre>cur?pre:cur
    })
}
console.log(maxFunction(arr))
const minFunction = (arr) => {
    return  arr.reduce(function(pre, cur){
        return pre<cur?pre:cur
    })
}
console.log(minFunction(arr))