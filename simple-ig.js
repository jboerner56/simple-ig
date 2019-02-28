// when an image(.picture-frame) is clicked, show user enlarged version
// const is a "constant" variable that will not be assigned.
const targetElements = document.querySelectorAll("[data-target]");

function respondToClick(){
    console.log("hello");
    console.log("I am Doggo")
    console.log("Give me food")
}

function attachClickHandler(oneElement){
    // this is how one element is handled
    oneElement.addEventListener("click", respondToClick);
}


targetElements.forEach(attachClickHandler);
