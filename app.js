// app.js

const controls = document.querySelectorAll('.control');
const sections = document.querySelectorAll('section');

function handleControlClick(event) {
  // Prevent default link behavior
  event.preventDefault();

  // Get the ID of the section to scroll to
  const targetId = this.dataset.id; 
  const targetSection = document.getElementById(targetId);

  // Smooth scroll to the section
  targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

controls.forEach(control => {
  control.addEventListener('click', handleControlClick);
});
