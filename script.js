// script.js
document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('planSelect');
  const paymentBox = document.getElementById('paymentBox');
  const copyBtn = document.getElementById('copyBtn');
  const walletAddress = document.getElementById('walletAddress');

  select.addEventListener('change', () => {
    if (select.value) {
      paymentBox.style.display = 'block';
    } else {
      paymentBox.style.display = 'none';
    }
  });

  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(walletAddress.textContent);
    copyBtn.textContent = '✅ Copied';
    setTimeout(() => {
      copyBtn.textContent = '📋 Copy';
    }, 2000);
  });
});
// Advanced verification form logic
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('verifyForm');
  const message = document.getElementById('verifyMessage');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const code = document.getElementById('verifyCode').value.trim();
      const xUser = document.getElementById('xUsername').value.trim();
      const fullName = document.getElementById('fullName').value.trim();
      const solWallet = document.getElementById('solAddress').value.trim();

      if (code === '123456' && xUser && fullName && solWallet) {
        message.style.color = 'lightgreen';
        message.textContent = '✅ Verified. Welcome, redirecting...';
        setTimeout(() => {
          window.location.href = 'access.html';
        }, 1500);
      } else {
        message.style.color = 'red';
        message.textContent = '❌ Please enter the correct code and all required info.';
      }
    });
  }
});
