// Create and display an array:
var HardWare = ["Hammer", "Nail", "Rake", "Boots", "Boards","Tape","Pipe",];
document.getElementById("List").innerHTML = HardWare;

function myFunction() {
    // First sort the array
    HardWare.sort();
    // Then reverse it:
    HardWare.reverse();
    document.getElementById("List").innerHTML = HardWare;
}

function myFunction2() {
    // First sort the array
    HardWare.reverse();
    // Then reverse it:
    HardWare.sort();
    document.getElementById("List").innerHTML = HardWare;
}
