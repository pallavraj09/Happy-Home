document.addEventListener('DOMContentLoaded', function () {
  const userEmail = localStorage.getItem('userEmail');
  const userName = localStorage.getItem('userName');

  // Display user information on the dashboard
  const userEmailElement = document.getElementById('user-email');
  const userNameElement = document.getElementById('user-name');

  if (userEmail && userName) {
    userEmailElement.innerText = userEmail;
    userNameElement.innerText = userName;
  }

  // Handle the "Pay" button click event
  document.getElementById('pay-button').addEventListener('click', function () {
    // Add your logic for payment or redirection here
    alert('Payment functionality goes here!');
  });

  // Retrieve user from localStorage
  const storedUser = localStorage.getItem('user');

  if (storedUser) {
    // Parse the stored user object
    const user = JSON.parse(storedUser);

    // Display user information
    const userNameElement = document.getElementById('user-name');
    const userMobileElement = document.getElementById('user-mobile');

    // Check if properties exist before updating
    if (user && user.name && user.mobile) {
      userNameElement.textContent = 'Name: ' + user.name;
      userMobileElement.textContent = 'Mobile: ' + user.mobile;
    }
  }
});
  // Add event listener for the "paymentButton"
  document.getElementById('paymentButton').addEventListener('click', function () {
    // Redirect to the payment page
    window.location.href = 'payment.html';
  });

  // Add event listener for the "logoutButton"
  document.getElementById('logoutButton').addEventListener('click', function () {
    window.location.href = 'login.html';
  });

  // Add event listener for the "goBack" button
  function goBack() {
    window.history.back();
  }


  // Add event listener for the "rentBillButton"
  document.getElementById('RentBillButton').addEventListener('click', function () {
    // Redirect to the rent-bill.html page
    window.location.href = 'rent-bill.html';
  });

  // Add event listener for the "electricityBillButton"
  document.getElementById('ElectricityBillButton').addEventListener('click', function () {
    // Redirect to the electricity-bill.html page
    window.location.href = 'electricity-bill.html';
  });
