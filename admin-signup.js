document.addEventListener('DOMContentLoaded', function () {
  const adminSignupForm = document.getElementById('adminSignupForm');

  adminSignupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Check if an admin already exists
    const existingAdmin = localStorage.getItem('admin');

    if (existingAdmin) {
      alert('Admin is already registered. Only one admin allowed.');
      // Redirect to admin login page
      window.location.href = 'admin-login.html';
      return;
    }

    try {
      // Get admin form input values
      const adminName = document.getElementById('adminName').value;
      const adminEmail = document.getElementById('adminEmail').value;
      const adminMobile = document.getElementById('adminMobile').value;
      const adminPassword = document.getElementById('adminPassword').value;

      // Validate the input values (you can add more validation)
      if (!adminName.trim() || !adminEmail.trim() || !adminMobile.trim() || !adminPassword.trim()) {
        throw new Error('All fields must be filled out');
      }

      // Store admin information in localStorage
      const adminData = {
        name: adminName,
        email: adminEmail,
        mobile: adminMobile,
        password: adminPassword,
      };

      localStorage.setItem('admin', JSON.stringify(adminData));

      alert('Admin signup successful!');
      // Redirect to admin login page
      window.location.href = 'admin-login.html';
    } catch (error) {
      console.error('Error during admin signup:', error.message);
      alert('An error occurred during admin signup. Please check your input and try again.');
    }
  });
});

function goHome() {
  window.location.href = 'index.html';
}
function goLogin() {
  window.location.href = 'admin-login.html';
}
