// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Lightsaber sound effect on nav click
  const sound = new Audio('assets/lightsaber.mp3');

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      sound.currentTime = 0;
      sound.play().catch(e => console.log('Sound play failed:', e));
    });
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
  const input = document.getElementById('credits').value;
  const tacos = input * 2;
  document.getElementById('result').textContent = `You can buy ${tacos} space tacos! 🌮🚀`;
}
