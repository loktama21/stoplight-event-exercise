const stopButton = document.getElementById('stopButton');
const slowButton = document.getElementById('slowButton');
const goButton = document.getElementById('goButton');

const stopLight = document.getElementById('stopLight');
const slowLight = document.getElementById('slowLight');
const goLight = document.getElementById('goLight');


stopButton.addEventListener('click', () => stopLight.classList.toggle('stop'));
slowButton.addEventListener('click', () => slowLight.classList.toggle('slow'));
goButton.addEventListener('click', () => goLight.classList.toggle('go'));