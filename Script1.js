// JavaScript source code
<!DOCTYPE html>
<html>
<body>
document.addEventListener("DOMContentLoaded", function()
function addToCart(itemName, itemPrice) {
  var cartItems = document.getElementById("cart-items");
  var cartTotal = document.getElementById("cart-total");
  var checkoutButton = document.querySelector(".checkout-button");


  // Create a new list item for the cart
  var listItem = document.createElement("li");
  listItem.textContent = itemName + " - $" + itemPrice.toFixed(2);
  cartItems.appendChild(listItem);

  // Update the total price
  var currentTotal = parseFloat(cartTotal.textContent);
  cartTotal.textContent = (currentTotal + itemPrice).toFixed(2);

checkoutButton.addEventListener("click", function() {
    // Handle the checkout logic here
    var total = parseFloat(cartTotal.textContent);
    alert("Thank you for your purchase! Total amount: $" + total.toFixed(2));
    // Reset the cart
    cartItems.innerHTML = "";
    cartTotal.textContent = "0.00";

});

 });

 
</body>
</html> 
