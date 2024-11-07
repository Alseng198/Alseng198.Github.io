const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = [ 'Twins.jpeg', 'Thancred.jpeg', 'Yshtola.jpeg', 'Urianger.jpeg', 'Graha-tia.jpeg'];
const alts = {
    'Twins.jpeg' : 'Alphianaud and Alisaie',
    'Thancred.jpeg' : 'Thancred',
    'Yshtola.jpeg' : 'Yshtola',
    'Urianger.jpeg' : 'Uranger',
    'Graha-tia.jpeg' : 'Graha tia'
}

/* Declaring the alternative text for each image file */

/* Looping through images */

for (let i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', '../Img/' + images[i]);
    newImage.setAttribute('alt', alts[i]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
});
}
/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgb(0 0 0 0%)";
    }  
});