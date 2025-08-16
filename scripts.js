document.querySelectorAll('nav a').forEach(link => {

// Lightsaber sound effect on nav link click
const lightsaberSound = new Audio('assets/lightsaber.mp3');
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    lightsaberSound.currentTime = 0;
    lightsaberSound.play();
  });
});

// Galactic Credit Converter
function convert() {
  const input = document.getElementById('credit-input').value;
  // Example conversion rate: 1 Galactic Credit = 0.62 USD
  const rate = 0.62;
  const usd = (input * rate).toFixed(2);
  document.getElementById('conversion-result').textContent = `${input} Galactic Credits = $${usd} USD`;
}
