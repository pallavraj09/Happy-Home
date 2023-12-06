document.addEventListener('DOMContentLoaded', function () {
  // Retrieve selected user's data from localStorage
  const selectedUser = localStorage.getItem('selectedUser');
  const user = JSON.parse(selectedUser);

  // Display user details
  const userInfoElement = document.getElementById('userInfo');
  userInfoElement.innerHTML = `
    <p>Name: ${user.name}</p>
    <p>Mobile: ${user.mobile}</p>
  `;

  // Populate months dropdown
  const monthsDropdown = document.getElementById('selectedMonth');
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  months.forEach(month => {
    const option = document.createElement('option');
    option.value = month;
    option.textContent = month;
    monthsDropdown.appendChild(option);
  });

  // Handle "Set Bill" button click event
  document.getElementById('setBillButton').addEventListener('click', function () {
    // Get selected month and bill amount
    const selectedMonth = monthsDropdown.value;
    const RbillAmount = document.getElementById('RbillAmount').value;
    const EbillAmount = document.getElementById('EbillAmount').value;

    // Validate bill amount
    if (!RbillAmount || isNaN(RbillAmount) || RbillAmount <= 0 || !EbillAmount || isNaN(EbillAmount) || EbillAmount <= 0) {
      alert('Please enter valid bill amounts.');
      return;
    }

    // Store bill information in localStorage
    const RbillInfo = {
      user: user,
      month: selectedMonth,
      rentAmount: RbillAmount
    };

    const EbillInfo = {
      user: user,
      month: selectedMonth,
      rentAmount: EbillAmount*8
    };
    
    const TbillInfo = {
      
      rentAmount: Number(RbillAmount)+Number(EbillAmount*8)
    };
    localStorage.setItem('RbillInfo', JSON.stringify(RbillInfo));
    localStorage.setItem('EbillInfo', JSON.stringify(EbillInfo));
    localStorage.setItem('TbillInfo', JSON.stringify(TbillInfo));
    // Redirect to rent.html page
    window.location.href = 'rent-bill.html';
  });
});
function goBack() {
  window.history.back();
}

// Function to go back to the home page
function goHome() {
  window.location.href = 'index.html';
}

logoutButton.addEventListener('click', function () {
  goHome();
});
