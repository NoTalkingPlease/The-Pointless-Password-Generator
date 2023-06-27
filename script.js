const generateButton = document.getElementById('generate-button');
const passwordDisplay = document.getElementById('password');

generateButton.addEventListener('click', () => {
  const password = generatePassword();
  passwordDisplay.textContent = password;
});

function generatePassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>/?';
  const passwordLength = 20;
  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  return password;
}
