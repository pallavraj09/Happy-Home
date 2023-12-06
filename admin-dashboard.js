// admin-dashboard.js

document.addEventListener('DOMContentLoaded', function () {
  const clearDataButton = document.getElementById('clearDataButton');
  const clearAdminDataButton = document.getElementById('clearAdminDataButton');
  const clearUserDataButton = document.getElementById('clearUserDataButton');
  const logoutButton = document.getElementById('logoutButton');
  const adminInfo = document.getElementById('adminInfo'); // Added this line

  // Function to go back to the home page
  function goHome() {
    window.location.href = 'index.html';
  }

  // Function to go back to the previous page
  function goBack() {
    window.history.back();
  }

  // Function to update the user list
  function updateUserDataList() {
    const userList = document.getElementById('registeredUsers');
    userList.innerHTML = ''; // Clear the existing list

    // Retrieve user data from localStorage
    const storedUsers = localStorage.getItem('users');

    if (storedUsers) {
      const users = JSON.parse(storedUsers);

      // Loop through each user
      users.forEach(userData => {
        // Create a list item for the user
        const listItem = document.createElement('li');

        // Create a div to hold user information
        const userInfo = document.createElement('div');
        userInfo.style.display = 'flex';
        userInfo.style.justifyContent = 'space-between';
        userInfo.style.alignItems = 'center';

        // Create a paragraph for user info
        const userText = document.createElement('p');
        userText.textContent = `Name: ${userData.name}, Mobile: ${userData.mobile}`;

        // Create a view details button for the user
        const viewDetailsButton = document.createElement('button');
        viewDetailsButton.textContent = 'View Details';
        viewDetailsButton.style.backgroundColor = 'blue';

        viewDetailsButton.addEventListener('click', function () {
          // Open the user details page and pass user data
          openUserDetailsPage(userData);
        });

        // Append user info, view details button, and remove button to the div
        userInfo.appendChild(userText);
        userInfo.appendChild(viewDetailsButton);

        // Create a remove button for the user
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.style.backgroundColor = 'red';

        removeButton.addEventListener('click', function () {
          // Remove the user data from localStorage
          removeUser(userData);
          // Update the user list
          updateUserDataList();
          alert('User removed successfully!');
        });

        // Append remove button to the div
        userInfo.appendChild(removeButton);

        // Append the div to the list item
        listItem.appendChild(userInfo);

        // Append the list item to the user list
        userList.appendChild(listItem);
      });
    }
  }

  // Function to remove a user from the users array in local storage
  function removeUser(userToRemove) {
    const storedUsers = localStorage.getItem('users');

    if (storedUsers) {
      const users = JSON.parse(storedUsers);

      // Filter out the user to remove based on a unique identifier (e.g., email)
      const updatedUsers = users.filter(user => user.email !== userToRemove.email);

      // Update the users array in local storage
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }
  }

  // Call the function to update the user list when the page loads
  updateUserDataList();

  // Display admin information if available
  const storedAdmin = localStorage.getItem('admin');
  if (storedAdmin) {
    const adminData = JSON.parse(storedAdmin);

    const adminName = document.createElement('p');
    adminName.textContent = `Admin Name: ${adminData.name}`;

    const adminMobile = document.createElement('p');
    adminMobile.textContent = `Admin Mobile: ${adminData.mobile}`;

    adminInfo.innerHTML = ''; // Clear existing admin info
    adminInfo.appendChild(adminName);
    adminInfo.appendChild(adminMobile);
  }

  // Add event listeners for other buttons
  clearDataButton.addEventListener('click', function () {
    localStorage.clear();
    alert('All data cleared successfully!');
  });

  clearAdminDataButton.addEventListener('click', function () {
    localStorage.removeItem('admin');
    alert('Admin data cleared successfully!');
  });

  clearUserDataButton.addEventListener('click', function () {
    localStorage.removeItem('users');
    updateUserDataList(); // Update the user list after removing user data
    alert('User data cleared successfully!');
  });

  logoutButton.addEventListener('click', function () {
    goHome();
  });

  // Add event listener for the back button
  const backButton = document.getElementById('backButton');
  if (backButton) {
    backButton.addEventListener('click', goBack);
  }
});

// Function to open the user details page
function openUserDetailsPage(user) {
  // Store the selected user's data in localStorage
  localStorage.setItem('selectedUser', JSON.stringify(user));

  // Redirect to the user details page
  window.location.href = 'user-details.html';
}
