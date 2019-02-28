// when an image(.picture-frame) is clicked, show user enlarged version
// const is a "constant" variable that will not be assigned.
const targetElements = document.querySelectorAll("[data-target]");

function respondToClick(event){
    console.log("hello");
    console.log("I am Doggo")
    console.log("Give me food")
    
    console.log(event.target);
    // add the big class to the thing that was clicked.
    // toggle allows the effect to be turned on and off.
    event.target.classList.toggle('big')
}

function attachClickHandler(oneElement){
    // this is how one element is handled
    oneElement.addEventListener("click", respondToClick);
}
targetElements.forEach(attachClickHandler);
