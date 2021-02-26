let button = 'Klik!';
console.log(button);

let myHeading = document.querySelector('button');
console.log(myHeading);

myHeading.textContent = 'Klik!';
myHeading.onclick = function() {
    alert("Klik działa!");
}