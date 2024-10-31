const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'The sun trapped beyong a layer of endless light that filled the sky, :insertx: set out to bring back the night. When they got to :inserty:, they stared in horror for a few moments at the Lightwarden, then :insertz:. The Crystal Exarch saw the whole thing from within the crystal tower — :insertx: returned to The Source and continued on.';
const insertX = ['The Warrior of Light', 'The Warrior of Darkness', 'Thancred', 'Yshtola','Ryne','Urianger','The twins'];
const insertY = ['the pixie lands', 'Eurlmore', 'Norvrandt'];
const insertZ = ['consumed its light', 'defeated it', 'walked away'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('The Crystal Exarch', name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);

  }

  story.textContent = newStory ;
  story.style.visibility = 'visible';
}