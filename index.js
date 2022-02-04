const stopButton = document.getElementById('stopButton');
const slowButton = document.getElementById('slowButton');
const goButton = document.getElementById('goButton');

const stopLight = document.getElementById('stopLight');
const slowLight = document.getElementById('slowLight');
const goLight = document.getElementById('goLight');


stopButton.addEventListener('click', () => stopLight.classList.toggle('stop'));
slowButton.addEventListener('click', () => slowLight.classList.toggle('slow'));
goButton.addEventListener('click', () => goLight.classList.toggle('go'));

stopButton.addEventListener('mouseenter', () => console.log(`Entered ${stopButton.innerText} button`)); 
slowButton.addEventListener('mouseenter', () => console.log(`Entered ${slowButton.innerText} button`));
goButton.addEventListener('mouseenter', () => console.log(`Entered ${goButton.innerText} button`));

stopButton.addEventListener('mouseleave', () => console.log(`Left ${stopButton.innerText} button`)); 
slowButton.addEventListener('mouseleave', () => console.log(`Left ${slowButton.innerText} button`));
goButton.addEventListener('mouseleave', () => console.log(`Left ${goButton.innerText} button`));

