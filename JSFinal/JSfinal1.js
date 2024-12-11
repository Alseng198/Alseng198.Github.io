

const displayedImagephys = document.querySelector('.displayed-imgphys');
const thumbBarphys = document.querySelector('.thumb-barphys');


const imagesphys = [ 'Virtual.JPG', 'Crystaldragon.PNG', 'Stilllife1.JPG', 'Stilllife2.png', 'Stilllife3.png', 'Stilllife4.JPG', 'White Charcoal.jpg'];
const altsphys = {
    'Virtual.JPG' : 'Vivian in both the real world and the virtual.',
    'Crystaldragon.PNG' : 'A graphite drawing of a dragon with crystals for horns.',
    'Stilllife1.JPG' : 'A graphite drawing of misc. items.',
    'Stilllife2.png' : 'A graphite outline of misc. items.',
    'Stilllife3.png' : 'A graphite drawing of misc. items decorated with flowers, lines, or checkerboard.',
    'Stilllife4.JPG' : 'A shaded graphite drawing of misc. items.',
    'White Charcoal.jpg' : 'A shaded drawing of a character in white charcoal on black paper.'
}



for (let i = 0; i < imagesphys.length; i++) {
    const newImagephys = document.createElement('img');
    newImagephys.setAttribute('src', 'JSfinalimgs/' + imagesphys[i]);
    newImagephys.setAttribute('alt', altsphys[i]);
    thumbBarphys.appendChild(newImagephys);
    newImagephys.addEventListener('click', e => {
        displayedImagephys.src = e.target.src;
        displayedImagephys.alt = e.target.alt;
        
        
});
}



function displayphysText1() {
    var phystext1 = document.getElementById("vr");
    if (phystext1.style.display === "none") {
    phystext1.style.display = "block";
} else {
    phystext1.style.display = "none";
}
}

function displayphysText2() {
    var phystext2 = document.getElementById("crysdrago");
    if (phystext2.style.display === "none") {
    phystext2.style.display = "block";
} else {
    phystext2.style.display = "none";
}
}

function displayphysText3() {
    var phystext3 = document.getElementById("vase");
    if (phystext3.style.display === "none") {
    phystext3.style.display = "block";
} else {
    phystext3.style.display = "none";
}
}

function displayphysText4() {
    var phystext4 = document.getElementById("maniq");
    if (phystext4.style.display === "none") {
    phystext4.style.display = "block";
} else {
    phystext4.style.display = "none";
}
}

function displayphysText5() {
    var phystext5 = document.getElementById("posneg");
    if (phystext5.style.display === "none") {
    phystext5.style.display = "block";
} else {
    phystext5.style.display = "none";
}
}

function displayphysText6() {
    var phystext6 = document.getElementById("pots");
    if (phystext6.style.display === "none") {
    phystext6.style.display = "block";
} else {
    phystext6.style.display = "none";
}
}

function displayphysText7() {
    var phystext7 = document.getElementById("whcharc");
    if (phystext7.style.display === "none") {
    phystext7.style.display = "block";
} else {
    phystext7.style.display = "none";
}
}
