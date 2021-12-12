
var blood1 = window.prompt("Enter Blood Type: ")
var blood2 = window.prompt("Enter Blood Type: ")
    if (blood1 == "O-" ) {
        window.alert(true)
    } 
    else if (blood1.charAt(0) == blood2.charAt(0) && blood1.charAt(1) == blood2.charAt(1)){
        window.alert(true)
    }
    else if (blood1 == "O+" && blood2.charAt(1) == "+" ){
        window.alert(true)
    }
    else if (blood2 == "O+" && blood1.charAt(1) == "+" ){
        window.alert(true)
    }
    else if (blood2 == "AB-" && blood1.charAt(2) == "-") {
        window.alert(true)
    }
    else if (blood2 == "AB+"){
        window.alert(true)
    }
    else{
        window.alert(false)
    }

