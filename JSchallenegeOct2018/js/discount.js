
///understanding alert

alert("Welcome to Mr. Super Hardware Store.");
            document.getElementById("myButton").onclick = function() {

                document.getElementById("discountprice").innerHTML = "Now $49.99";

           

///understanding var, if, else and maybe forms,input and responding to users
            document.getElementById("CheckCode").onclick = function() {

                var CheckCode = document.getElementById("CouponCode").value;

                var CouponCode = "fallsaving";

                if (CheckCode == CouponCode) {

                    alert("Your coupon discount has been added to your shopping cart");

                } else {

                    alert("Code fail try again.");

                }

            }
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
