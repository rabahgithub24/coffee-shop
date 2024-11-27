// Function to show the order form when the "Order Now" button is clicked
function showOrderForm() {
  // Hide the hero section and show the order form
  document.querySelector('.hero-section').style.display = 'none';
  document.getElementById('order-form').style.display = 'block';
}

// Function to handle form submission and display the order summary
document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form from submitting and refreshing the page

  // Get the selected coffee type and user details
  var coffeeType = document.getElementById('coffee-type').value;
  var userName = document.getElementById('name').value;
  var userEmail = document.getElementById('email').value;

  // Define the prices for each coffee type
  var prices = {
    'Hot Coffee': '$3.99',
    'Iced Coffee': '$4.49',
    'Espresso': '$2.99',
    'Latte': '$4.99'
  };

  // Show the order summary
  document.getElementById('order-summary-coffee').textContent = coffeeType;
  document.getElementById('order-summary-name').textContent = userName;
  document.getElementById('order-summary-email').textContent = userEmail;
  document.getElementById('order-summary-price').textContent = prices[coffeeType];

  // Hide the order form and show the order summary
  document.getElementById('order-form').style.display = 'none';
  document.getElementById('order-summary').style.display = 'block';
});
