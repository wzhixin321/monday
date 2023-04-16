let myImage = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        myImage = 155 % 7
        if (myImage == 1) {
            basic.showString("Saturday")
        } else if (myImage == 2) {
            basic.showString("Sunday")
        } else if (myImage == 3) {
            basic.showString("Monday")
        } else if (myImage == 4) {
            basic.showString("Tuesday")
        } else if (myImage == 5) {
            basic.showString("Wednesday ")
        } else if (myImage == 6) {
            basic.showString("Thursday ")
        } else {
            basic.showString("Friday")
        }
    }
})
