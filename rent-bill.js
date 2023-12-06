document.addEventListener('DOMContentLoaded', function () {
    // Retrieve admin-sent bill details from localStorage
    const RbillInfo = localStorage.getItem('RbillInfo');
    const EbillInfo = localStorage.getItem('EbillInfo');
    
    if (RbillInfo && EbillInfo) {
      const RbillInfoObj = JSON.parse(RbillInfo);
      const EbillInfoObj = JSON.parse(EbillInfo);
      
      displayBillDetails(RbillInfoObj, EbillInfoObj);
    } else {
      alert('No bill details found.');
    }
  });
  
  function displayBillDetails(RbillInfo, EbillInfo) {
    const billDetailsElement = document.getElementById('billDetails');
    
    // Display the admin-sent bill details
    billDetailsElement.innerHTML = `
      <p>Rent Amount for ${RbillInfo.month}: ${RbillInfo.rentAmount}</p>
      <p>Electricity Amount for ${EbillInfo.month}: ${EbillInfo.rentAmount}</p>
      <button type="button" id="totalButton" onclick="calculateTotal()">Total</button>
    `;
  }
  
  function redirectToPayment() {
    // Fetch the total amount from localStorage
    const RbillInfo = localStorage.getItem('RbillInfo');
    const EbillInfo = localStorage.getItem('EbillInfo');
  
    if (RbillInfo && EbillInfo) {
      const RbillInfoObj = JSON.parse(RbillInfo);
      const EbillInfoObj = JSON.parse(EbillInfo);
  
      // Calculate total amount
      const totalAmount = Number(RbillInfoObj.rentAmount) + Number(EbillInfoObj.rentAmount);
  
      // Display total amount and provide an option to pay
      const confirmPayment = confirm(`Total Amount: ${totalAmount}\nDo you want to proceed with the payment?`);
  
      if (confirmPayment) {
        // Redirect to the payment page
        window.location.href = 'payment.html';
      }
    } else {
      alert('No bill details found.');
    }
  }
  
  
  function calculateTotal() {
    const RbillInfo = localStorage.getItem('RbillInfo');
    const EbillInfo = localStorage.getItem('EbillInfo');
  
    if (RbillInfo && EbillInfo) {
      const RbillInfoObj = JSON.parse(RbillInfo);
      const EbillInfoObj = JSON.parse(EbillInfo);
  
      // Calculate total amount
      let totalAmount = Number(RbillInfoObj.rentAmount)+ Number(EbillInfoObj.rentAmount);
  
      alert(`Total Amount: ${totalAmount}`);
    } else {
      alert('No bill details found.');
    }
  }
  
 