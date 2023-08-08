const arr = [1, 3, 5, 7, 9]
const missArr = []
const missVal = (arr) =>{
    const minV = Math.min(...arr)
    const maxV = Math.max(...arr)
    
    for(let i = minV; i< maxV; i++){
        if(arr.indexOf(i)< 0){
            missArr.push(i)
        }
    }
    return missArr
}
console.log(missVal(arr))