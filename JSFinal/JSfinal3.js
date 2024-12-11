
const displayedImagecolo = document.querySelector('.displayed-imgcolo');
const thumbBarcolo = document.querySelector('.thumb-barcolo');


const imagescolo = ['YBStudy.JPG', 'RPStudy.JPG', 'BWStudy.jpg', 'Drag1.png', 'Drag1Red.png', 'Drag1blue.png', 'Drag2.png', 'Drag2red.png', 'Drag2blue.png']
const altscolo = {
    'YBStudy.JPG' : 'Dazai and Chuuya in yellow and blue lighting.',
    'RPStudy.JPG' : 'Young Dazai and Chuuya in red and purple lighting.',
    'BWStudy.jpg' : 'Dazai and Chuuya in black and white lighting',
    'Drag1.png' : 'Red and blue dragon portrait framed with leaves.',
    'Drag1Red.png' : 'The same dragon portrait with a red color filter.',
    'Drag1blue.png' : 'The same fragon portrait with a blue color filter.',
    'Drag2.png' : 'Red and blue dragon drawing with large leaves.',
    'Drag2red.png' : 'Same dragon with a red color filter.',
    'Drag2blue.png' : 'Same dragon with a blue color filter.'
}

for (let i = 0; i < imagescolo.length; i++) {
    const newImagecolo = document.createElement('img');
    newImagecolo.setAttribute('src', 'JSfinalimgs/' + imagescolo[i]);
    newImagecolo.setAttribute('alt', altscolo[i]);
    thumbBarcolo.appendChild(newImagecolo);
    newImagecolo.addEventListener('click', e => {
        displayedImagecolo.src = e.target.src;
        displayedImagecolo.alt = e.target.alt;
        
        
});
}


function displaycoloText1() {
    var colotext1 = document.getElementById("yb");
    if (colotext1.style.display === "none") {
    colotext1.style.display = "block";
} else {
    colotext1.style.display = "none";
}
}

function displaycoloText2() {
    var colotext1 = document.getElementById("rp");
    if (colotext1.style.display === "none") {
    colotext1.style.display = "block";
} else {
    colotext1.style.display = "none";
}
}

function displaycoloText3() {
    var colotext1 = document.getElementById("bw");
    if (colotext1.style.display === "none") {
    colotext1.style.display = "block";
} else {
    colotext1.style.display = "none";
}
}

function displaycoloText4() {
    var colotext1 = document.getElementById("d1");
    if (colotext1.style.display === "none") {
    colotext1.style.display = "block";
} else {
    colotext1.style.display = "none";
}
}

function displaycoloText5() {
    var colotext1 = document.getElementById("d1red");
    if (colotext1.style.display === "none") {
    colotext1.style.display = "block";
} else {
    colotext1.style.display = "none";
}
}

function displaycoloText6() {
    var colotext1 = document.getElementById("d1blue");
    if (colotext1.style.display === "none") {
    colotext1.style.display = "block";
} else {
    colotext1.style.display = "none";
}
}

function displaycoloText7() {
    var colotext1 = document.getElementById("d2");
    if (colotext1.style.display === "none") {
    colotext1.style.display = "block";
} else {
    colotext1.style.display = "none";
}
}

function displaycoloText8() {
    var colotext1 = document.getElementById("d2red");
    if (colotext1.style.display === "none") {
    colotext1.style.display = "block";
} else {
    colotext1.style.display = "none";
}
}

function displaycoloText9() {
    var colotext1 = document.getElementById("d2blue");
    if (colotext1.style.display === "none") {
    colotext1.style.display = "block";
} else {
    colotext1.style.display = "none";
}
}
