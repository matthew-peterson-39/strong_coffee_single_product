// ROUTE TO CHECKOUT BUTTON
document.getElementById("checkout-button").addEventListener("click", function() {
    var productID = "YOUR_PRODUCT_ID"; // Replace "YOUR_PRODUCT_ID" with the actual product ID
    var quantity = 1; // You can adjust this as needed
    var checkoutURL = "https://your-shopify-store.myshopify.com/cart/" + productID + ":" + quantity;

    window.location.href = checkoutURL; // Redirect to the checkout page with the product
});