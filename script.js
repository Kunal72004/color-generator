
let button = document.querySelector('button');
button.addEventListener('click',function(){
    let randomColor = randomColorGenerator();

    let h1 = document.querySelector('h1');
    h1.innerText = randomColor;

    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor;
    div.style.color = "white";

    button.style.backgroundColor =randomColor;
    button.style.color ='white';
})
function randomColorGenerator(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color =`rgb(${red},${green},${blue})`;
    return color;
    
}