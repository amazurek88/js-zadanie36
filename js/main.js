let objectButton = document.querySelector('button');
console.log(objectButton);

objectButton.innerText = 'Klik!';
console.log(objectButton);

let myHeading = document.querySelector('button');
console.log(myHeading);

myHeading.textContent = 'Klik!';
myHeading.onclick = function() {
    atert ("Klik działa <button>");
}