let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function digitalDecipher(array,int){
    integer = String(int)
    var BOOM = 0
    while (integer.length < array.length){
        integer += String(integer.charAt(BOOM)) 
        BOOM += 1
    }
    var list = []
    BOOM = 0
    for (var i of array){
        list.push(i - integer.charAt(BOOM))
        BOOM += 1
    }
    var quote = ""
    for (var i of list){
        quote += alphabet[i-1]
    }
    return quote
}


console.log(digitalDecipher([20, 12, 18, 30, 21], 1939))