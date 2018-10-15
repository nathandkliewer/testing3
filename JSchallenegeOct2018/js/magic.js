document.getElementById("checkMagicWord").onclick = function() {

    var CheckCode = document.getElementById("CouponCode").value;

    var CouponCode = "fallsaving";

    if (CheckCode == CouponCode) {

        alert("Your coupon discount has been added to your shopping cart");

    } else {

        alert("Code fail try again.");

    }

}
