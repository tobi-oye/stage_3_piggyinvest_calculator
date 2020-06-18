const amountValueNode = document.querySelector('#amount-value');
const monthValueNode = document.querySelector('#month-value');
const submitButtonNode = document.querySelector('#submit-button');

const resultAmountNode = document.querySelector('#result-amount');

submitButtonNode.addEventListener('click', () => {
  const rate = 0.1;
  const principal = amountValueNode.value || 0;
  const time = monthValueNode.value / 12;

  const interest = (principal * rate * time).toFixed(2);
  resultAmountNode.innerHTML = `₦${interest}`;
});
