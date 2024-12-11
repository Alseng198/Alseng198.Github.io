
const displayedImagedigi = document.querySelector('.displayed-imgdigi');
const thumbBardigi = document.querySelector('.thumb-bardigi');


const imagesdigi = ['Clive1.JPG', 'Clive2.JPG', 'Silas.JPG', 'Sophie.JPG', 'Hope.PNG', 'DLMini.JPG', 'DLPromo.JPG', 'Finnie.PNG', 'Zyaire.PNG']
const altsdigi = {
    'Clive1.JPG' : 'Clive and Claire ready to fight.',
    'Clive2.JPG' : 'Clive and Clare meeting Destiny.',
    'Silas.JPG' : 'Silas in day vs night.',
    'Sophie.JPG' : 'Sophie and Frost.',
    'Hope.PNG' : 'Hope with his double saber dripping blood.',
    'DLMini.JPG' : 'Zyaire and Finnygan.',
    'DLPromo.JPG' : 'Promotional image for The Darkest Light starring Nyx, Dialusra, Ladarius, Zyaire, and Finnygan',
    'Finnie.PNG' : 'Character sheet for Finnygan.',
    'Zyaire.PNG' : 'Character sheet for Zyaire.'
}

for (let i = 0; i < imagesdigi.length; i++) {
    const newImagedigi = document.createElement('img');
    newImagedigi.setAttribute('src', 'JSfinalimgs/' + imagesdigi[i]);
    newImagedigi.setAttribute('alt', altsdigi[i]);
    thumbBardigi.appendChild(newImagedigi);
    newImagedigi.addEventListener('click', e => {
        displayedImagedigi.src = e.target.src;
        displayedImagedigi.alt = e.target.alt;
        
        
});
}


function displaydigiText1() {
    var digitext1 = document.getElementById("clive1");
    if (digitext1.style.display === "none") {
    digitext1.style.display = "block";
} else {
    digitext1.style.display = "none";
}
}


function displaydigiText2() {
    var digitext1 = document.getElementById("clive2");
    if (digitext1.style.display === "none") {
    digitext1.style.display = "block";
} else {
    digitext1.style.display = "none";
}
}


function displaydigiText3() {
    var digitext1 = document.getElementById("silas");
    if (digitext1.style.display === "none") {
    digitext1.style.display = "block";
} else {
    digitext1.style.display = "none";
}
}


function displaydigiText4() {
    var digitext1 = document.getElementById("sophie");
    if (digitext1.style.display === "none") {
    digitext1.style.display = "block";
} else {
    digitext1.style.display = "none";
}
}


function displaydigiText5() {
    var digitext1 = document.getElementById("hope");
    if (digitext1.style.display === "none") {
    digitext1.style.display = "block";
} else {
    digitext1.style.display = "none";
}
}


function displaydigiText6() {
    var digitext1 = document.getElementById("dlmini");
    if (digitext1.style.display === "none") {
    digitext1.style.display = "block";
} else {
    digitext1.style.display = "none";
}
}


function displaydigiText7() {
    var digitext1 = document.getElementById("dlpromo");
    if (digitext1.style.display === "none") {
    digitext1.style.display = "block";
} else {
    digitext1.style.display = "none";
}
}


function displaydigiText8() {
    var digitext1 = document.getElementById("finnie");
    if (digitext1.style.display === "none") {
    digitext1.style.display = "block";
} else {
    digitext1.style.display = "none";
}
}


function displaydigiText9() {
    var digitext1 = document.getElementById("zyaire");
    if (digitext1.style.display === "none") {
    digitext1.style.display = "block";
} else {
    digitext1.style.display = "none";
}
}