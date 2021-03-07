let button = 'Klik!';
console.log(button);

let myButton = document.querySelector('button');
console.log(myButton);

myButton.textContent = 'Klik!';
myButton.onclick = function() {
    alert("Klik działa!");
}