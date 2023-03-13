let myImage = 0
input.onButtonPressed(Button.A, function () {
    myImage = (31 - 24) % 7
    if (myImage == 1) {
        basic.showString("Monday")
    } else if (myImage == 2) {
        basic.showString("Tuesday")
    } else if (myImage == 3) {
        basic.showString("Wednesday ")
    } else if (myImage == 4) {
        basic.showString("Thursday ")
    } else if (myImage == 5) {
        basic.showString("Friday")
    } else if (myImage == 6) {
        basic.showString("Saturday")
    } else {
        basic.showString("Sunday")
    }
})
