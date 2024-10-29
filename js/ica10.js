console.log(document.getElementById("head"));

document.getElementById("img").style.width = "30em";

document.getElementById("head").addEventListener("click",function(e){
    alert("clicked h1");
    document.getElementById("para").innerHTML = "~G'raha Tia";
    document.getElementById("para").style.color = "red";
    document.getElementById("img").src = "../Img/graha.jpg";
})



console.log.document.getElementById("head").innerHTML;
