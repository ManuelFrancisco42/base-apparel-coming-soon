document.addEventListener('DOMContentLoaded', function () {
  const submitBtn = document.getElementById('submit-btn');
  const emailInput = document.querySelector('.email-input');
  const inputWrapper = document.querySelector('.email-input-wrapper');
  const errorMessage = document.querySelector('.error-message');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  submitBtn.addEventListener('mouseover', function () {
    inputWrapper.classList.add('hover');
  });

  submitBtn.addEventListener('mouseout', function () {
    inputWrapper.classList.remove('hover');
  });

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const emailValue = emailInput.value.trim();

    if (emailValue === '' || !emailRegex.test(emailValue)) {
      errorMessage.innerText = 'Please provide a valid email';
      errorMessage.style.display = 'block';
      setTimeout(function () {
        errorMessage.style.display = 'none';
      }, 2000);
    } else {
      errorMessage.style.display = 'none';
      setTimeout(() => {
        emailInput.value = '';
      }, 2000);
    }
  });
});
