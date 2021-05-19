let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'image.png') {
        myImage.setAttribute('src','image2.png');
    }   else {
        myImage.setAttribute('src','image.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Check this out, ' + myName;
    }
}
if (!localStorage.getItem('name')) {
    setUserName();
    } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Check this out, ' + storedName;
    }
