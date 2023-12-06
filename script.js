// script.js

// Function to go back to the previous page
function goBack() {
  window.history.back();
}

// Function to go back to the home page
function goHome() {
  window.location.href = 'index.html';
}

// Signup functionality
document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('signup-form');

  signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get user information
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;

    // Create user object
    const user = {
      name,
      email,
      mobile,
      password
    };

    // Retrieve existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Append the new user to the list
    existingUsers.push(user);

    // Store the updated list of users in localStorage
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Redirect to welcome.html (or any other destination)
    window.location.href = 'dashboard.html';
  });
});

// Admin and User Dashboard functionality
document.addEventListener('DOMContentLoaded', function () {
  const isAdmin = localStorage.getItem('isAdmin');

  if (isAdmin) {
    // Admin is logged in
    displayAdminDashboard();
  } else {
    // Regular user is logged in
    displayUserDashboard();
  }

  function displayAdminDashboard() {
    // Assuming you have an "admin-dashboard.html" with the necessary elements
    window.location.href = 'admin-dashboard.html';
  }

  function displayUserDashboard() {
    // Fetch and display user information
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const user = JSON.parse(storedUser);

      // Display user information on the user dashboard
      const userNameElement = document.getElementById('user-name');
      const userMobileElement = document.getElementById('user-mobile');

      userNameElement.textContent = 'Name: ' + user.name;
      userMobileElement.textContent = 'Mobile: ' + user.mobile;

      // Handle the "Make Payment" button click event
      document.getElementById('paymentButton').addEventListener('click', function () {
        // Redirect to the payment page
        window.location.href = 'payment.html';
      });

      // Handle the "Logout" button click event
      document.getElementById('logoutButton').addEventListener('click', function () {
        // Redirect to the login page
        window.location.href = 'login.html';
      });

      // Fetch and display admin information
      const storedAdmin = localStorage.getItem('admin');

      if (storedAdmin) {
        const adminData = JSON.parse(storedAdmin);

        // Display admin information on the user dashboard
        const adminNameElement = document.getElementById('admin-name');
        const adminMobileElement = document.getElementById('admin-mobile');

        adminNameElement.textContent = 'Admin Name: ' + adminData.name;
        adminMobileElement.textContent = 'Admin Mobile: ' + adminData.mobile;

        // Fetch and display user list on the admin dashboard
        displayUserList();
      }
    }
  }

  function displayUserList() {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Clear previous list

    // Fetch and display registered users from your data source
    // Modify the following example with your actual implementation
    const users = JSON.parse(localStorage.getItem('users')) || [];

    users.forEach(user => {
      const listItem = document.createElement('li');

      const userInfo = document.createElement('div');
      userInfo.style.display = 'flex';
      userInfo.style.justifyContent = 'space-between';
      userInfo.style.alignItems = 'center';

      const userText = document.createElement('p');
      userText.textContent = `Name: ${user.name}, Mobile: ${user.mobile}`;

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.style.backgroundColor = 'red';

      removeButton.addEventListener('click', function () {
        // Remove user data (adjust the key as needed)
        removeUser(user);
      });

      userInfo.appendChild(userText);
      userInfo.appendChild(removeButton);

      listItem.appendChild(userInfo);
      userList.appendChild(listItem);
    });
  }

  function removeUser(user) {
    // Remove user data from local storage (adjust the key as needed)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.filter(u => u.name !== user.name && u.mobile !== user.mobile);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert('User removed successfully!');
    displayUserList(); // Refresh user list after removal
  }
});
