// LOADER

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},3000);

});

// FLORES

setInterval(()=>{

const flower=document.createElement("div");

flower.classList.add("sakura");

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=
(Math.random()*5+5)+"s";

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},10000);

},300);

// CORAZONES

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},1200);

const btn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

btn.addEventListener("click",()=>{

nav.classList.toggle("active");

});
const cards=document.querySelectorAll(".card");
const modal=document.getElementById("modal");

const modalImg=document.getElementById("modalImg");
const modalTitle=document.getElementById("modalTitle");
const modalDescription=document.getElementById("modalDescription");

cards.forEach(card=>{

card.addEventListener("click",(e)=>{

e.preventDefault();

modal.classList.add("active");

modalImg.src=card.dataset.img;

modalTitle.textContent=
card.dataset.title;

modalDescription.textContent=
card.dataset.description;

});

});

document
.querySelector(".close-modal")
.addEventListener("click",()=>{

modal.classList.remove("active");

});

modal.addEventListener("click",(e)=>{

if(e.target===modal){

modal.classList.remove("active");

}

});