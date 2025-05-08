// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener or Onclick and getElementById if you're doing it right...


{/* <h1 id="stopButton" class="button">Stop</h1>
<h1 id="slowButton" class="button">Slow</h1>
<h1 id="goButton" class="button">Go</h1> */}


let stopButton = document.getElementById("stopButton")
let slowButton = document.getElementById("slowButton")
let goButton = document.getElementById("goButton")
let stopLight = document.getElementById("stopLight")
let slowLight = document.getElementById("slowLight")
let goLight = document.getElementById("goLight")



stopButton.addEventListener("click", ()=>{
    stopLight.style.backgroundColor= "red"
})
slowButton.addEventListener("click", ()=>{
    slowLight.style.backgroundColor= "yellow"
})
goButton.addEventListener("click", ()=>{
    goLight.style.backgroundColor= "green"
})

