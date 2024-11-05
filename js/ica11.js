
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

const fortune = "You will be a :job: in :geolocation:, and married to :partname: with :numbchild: kids."
const numbchild = ['0', '1', '3']
const partname = ["John", "Amy", "Gabe", "Mr. Smith"]
const geolocation = ["space", "the Moon", "Africa", "Japan"]
const job = ["artist", "writer", "trash collecter", "bookseller"]

randomize.addEventListener('click', tellFortune);


function tellFortune(numbchild, partname, geolocation, job){
    for(let i = 0; i < 3; i++){
        const fortune = "You will be a :job: in :geolocation:, and married to :partname: with :numbchild: kids."
    }
}