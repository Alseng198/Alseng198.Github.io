/* let ourObject = {
    "name": "casey",
    "profession": "PhD Student",
    "age": 30,
    "pets":[{"name":"Boots", "type":"dog", "age": 9, "unit": "years"}, {"name":"Marty", "type": "cat", "age":5, "unit": "months"}]
}

console.log(ourObject);
*/
let myData = {};

/*
function fetchData(){
fetch('https://catfact.ninja/fact')
    .then(res =>{
        if(res.ok){
            return res.json();
        }else{
            console.log(res);
        }
    }).then(res => {
        myData = res;
        console.log(myData);
        document.getElementById("fact").innerHTML = myData.fact;
    })
    .catch(error => {console.log(error)})
}


let name = "Casey";

let myString = "hello " + name + "!";

*/


function fetchData(){
    const comicNumber = Math.floor(Math.random() * 3000)+1;
    fetch(`https://corsproxy.io/?https://xkcd.com/${comicNumber}/info.0.json`)
    .then(res =>{
        if(res.ok){
            return res.json();
        }else{
            console.log(res);
        }
    }).then(res => {
        myData = res;
        console.log(myData);
        document.getElementById("title").innerHTML = myData.title;
        document.getElementById("img").src = myData.img;
        document.getElementById("alt").setAttribute("alt",myData.alt);

        let m = myData.month;
        let d = myData.day;
        let y = myData.year;
        document.getElementById("date").innerHTML = (m +'/' + d + '/' + y)
        
    })
    .catch(error => {console.log(error)})
}

fetchData();

document.getElementById("generate").addEventListener("click", e=> {fetchData();})

console.log(myData);
