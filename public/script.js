const text = document.getElementById('text');

//alert('This is text from DOM: ' + text);

const button = document.getElementById('button');

/*
button.onClick = () => {
  text.innerText = "Welcome to Frontend";
};*/

button.addEventListener('click', () => {
  text.innerText = 'Welcome to Frontend!';
})
