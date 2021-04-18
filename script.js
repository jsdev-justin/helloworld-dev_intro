var outputDOM = document.querySelector(".output");
var toggleCard = document.querySelector(".toggle-play");
var stateDOM = document.querySelector(".state");

var techsArr = ['Javascript', "HTML/CSS", "React", "Vue", "EJS/Handlebars", "Sql/NoSql", "Node.js", "Digital Ocean/VMs", "Linux"];

var counter = 0;
var slideInt;
var isRunning = true;



function slideShow(){
    console.log("slideshow firing")
    outputDOM.innerText = techsArr[counter];
    counter++

    if(counter >= techsArr.length){
        counter=0;
    }

 
}


slideInt = setInterval(()=>{
    slideShow()
 },2005)


 toggleCard.onclick=()=>{
     console.log("outputfx fired")
     if(isRunning){
         isRunning = false;
         stateDOM.innerText = "Play"
         toggleClassname()
     clearInterval(slideInt)
     }
     else{
        isRunning = true;
        stateDOM.innerText = "Pause"

        toggleClassname()
        slideInt = setInterval(()=>{
            slideShow()
         },2005)}
 }


 function toggleClassname(){
     outputDOM.classList.toggle("grow")

 }