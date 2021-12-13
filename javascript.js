function Staircase(cost){
    var length = cost.length
    let array = new Array(length)
    if (length == 1)
      return cost[0]
    array[1] = cost[1]
    array[0] = cost[0]
    for (let i = 2; i < length; i++){
        array[i] = Math.min(array[i-1], array[i-2]) + cost[i]
    }
    return Math.min(array[length-2], array[length -1])
}

var test = [0, 2, 2, 1]
console.log(Staircase(test))