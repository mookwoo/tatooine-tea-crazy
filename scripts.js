
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Lightsaber sound effect on nav click
  const sound = new Audio('assets/lightsaber.mp3');

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      sound.currentTime = 0;
      sound.play().catch(e => console.log('Sound play failed:', e));
    });

document.querySelectorAll('nav a').forEach(link => {

// Lightsaber sound effect on nav link click
const lightsaberSound = new Audio('assets/lightsaber.mp3');
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    lightsaberSound.currentTime = 0;
    lightsaberSound.play();

  });


  // Light Side / Dark Side Toggle
  const toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('light-side');
    });
  }
});


// Galactic Credit Converter
function convert() {
  const input = document.getElementById('credit-input').value;
  // Example conversion rate: 1 Galactic Credit = 0.62 USD
  const rate = 0.62;
  const usd = (input * rate).toFixed(2);
  document.getElementById('conversion-result').textContent = `${input} Galactic Credits = $${usd} USD`;
}
