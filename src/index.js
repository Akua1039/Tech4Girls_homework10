document.getElementById("num1").addEventListener("click", function() {
    const num1 = document.getElementById('num1');
    num1.innerHTML = 'I know now what the DOM is 🙌';
    num1.style.backgroundColor = "grey";
    num1.style.color = "black";
});

document.getElementById("num2").addEventListener("click", function() {
    const num2 = document.getElementById('num2');
    num2.innerHTML = 'I know how to access / select elements in the DOM. 👊';
    num2.style.backgroundColor = "yellow";
    num2.style.color = "black";
});

document.getElementById("num3").addEventListener("click", function() {
    const num3 = document.getElementById('num3');
    num3.innerHTML = 'I know how to use the style methods to change the style of an element in the DOM ✅';
    num3.style.backgroundColor = "green";
    num3.style.color = "black";
});

document.getElementById("num4").addEventListener("click", function() {
    const num4 = document.getElementById('num4');
    num4.innerHTML = 'I know how the styling properties differ in JS from CSS 👍';
    num4.style.backgroundColor = "purple";
});

document.getElementById("num5").addEventListener("click", function() {
    const num5 = document.getElementById('num5');
    num5.innerHTML = 'Yes I did it!! I manipulated the DOM and styled my elements 😍😍😍😍';
    num5.style.backgroundColor = "black";
    num5.style.color = "white";
});
function openimage (){
let img1= document.querySelector(".image");
img1.style.display = "block";
img1.style.margin = "0 auto";
}


let button = document.querySelector("#button");
button.addEventListener("click", openimage);

function closeimage (){
    let img1= document.querySelector(".image");
    img1.style.display = "block";
    img1.style.margin = "0 auto";

    let close = document.querySelector(".close");
    close.addEventListener("click", closeimage);
    }
    
   
