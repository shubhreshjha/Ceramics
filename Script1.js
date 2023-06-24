// JavaScript source code
<!DOCTYPE html>
<html>
<body>
function addToCart(itemName, itemPrice) {
  var cartItems = document.getElementById("cart-items");
  var cartTotal = document.getElementById("cart-total");

  // Create a new list item for the cart
  var listItem = document.createElement("li");
  listItem.textContent = itemName + " - $" + itemPrice.toFixed(2);
  cartItems.appendChild(listItem);

  // Update the total price
  var currentTotal = parseFloat(cartTotal.textContent);
  cartTotal.textContent = (currentTotal + itemPrice).toFixed(2);
}


 
</body>
</html> 
