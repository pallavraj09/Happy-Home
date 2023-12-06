document.addEventListener('DOMContentLoaded', function () {
  const adminLoginForm = document.getElementById('adminLoginForm');
  const clearAdminDataButton = document.getElementById('clearAdminDataButton');

  adminLoginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    try {
      // Get admin login input values
      const adminEmail = document.getElementById('adminEmail').value;
      const adminPassword = document.getElementById('adminPassword').value;

      // Retrieve admin information from localStorage
      const storedAdmin = localStorage.getItem('admin');

      if (storedAdmin) {
        const adminData = JSON.parse(storedAdmin);

        // Verify admin credentials
        if (adminData.email === adminEmail && adminData.password === adminPassword) {
          alert('Admin login successful!');
          // Redirect to admin dashboard page
          window.location.href = 'admin-dashboard.html';
        } else {
          throw new Error('Admin login failed. Please check your credentials.');
        }
      } else {
        throw new Error('Admin information not found. Please signup.');
      }
    } catch (error) {
      console.error('Error during admin login:', error.message);
      alert('An error occurred during admin login. Please try again.');
    }
  });

  clearAdminDataButton.addEventListener('click', function () {
    // Prompt for password
    const enteredPassword = prompt('Enter password to clear admin data:');

    // Check if password is correct
    if (enteredPassword === '0907') {
      // Clear admin data
      localStorage.removeItem('admin');
      alert('Admin data cleared successfully!');
    } else {
      alert('Incorrect password. Admin data not cleared.');
    }
  });

  function goHome() {
    window.location.href = 'index.html';
  }
});
