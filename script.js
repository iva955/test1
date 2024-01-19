function onButtonClick () {
  alert ('You are getting OLD'); }

const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);

const newButton = document.createElement('button');
newButton.textContent = 'Another SURPRISEEEE!';
document.body.appendChild(newButton);

newButton.addEventListener('click', () => {
  alert('At least you are still alive!');
});