let btn = document.querySelector("button");
btn.addEventListener("click", function() {
    console.log("genrate a random color");
    
});
function getRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}