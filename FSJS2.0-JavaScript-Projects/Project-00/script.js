let body = document.querySelector("body");
body.addEventListener("click", (e) => {
    let vertical = e.clientY;
    let horizontal = e.clientX;
    let element = document.createElement("div");
    element.classList.add("circle");
    element.style.top = vertical + "px";
    element.style.left = horizontal + "px";
    body.appendChild(element);
    //console.log('hello world');
    
    // element.style.transform = scale(1);

    setTimeout(remove, 5000);
    function remove(){
        body.removeChild(element); 
    }
});