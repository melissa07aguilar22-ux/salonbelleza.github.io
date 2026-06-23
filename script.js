/* ====================================
LOADER
==================================== */

window.addEventListener("load", () => {

setTimeout(() => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

loader.style.visibility = "hidden";

setTimeout(() => {
loader.remove();
}, 800);

}, 3000);

});

/* ====================================
SCROLL REVEAL
==================================== */

const revealElements = document.querySelectorAll(
".section-title, .promo-card, .service-card, .gallery-item, .contact-box"
);

const revealObserver = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{
threshold:0.15
}

);

revealElements.forEach(el => {

el.classList.add("reveal");

revealObserver.observe(el);

});

/* ====================================
SMOOTH SCROLL
==================================== */

document.querySelectorAll('a[href^="#"]')

.forEach(anchor => {

anchor.addEventListener("click",(e)=>{

const target = document.querySelector(

anchor.getAttribute("href")

);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* ====================================
HEADER EFFECT
==================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY > 80){

header.style.background =
"rgba(5,5,10,.95)";

header.style.boxShadow =
"0 10px 30px rgba(0,0,0,.4)";

}
else{

header.style.background =
"rgba(10,10,15,.85)";

header.style.boxShadow =
"none";

}

});



/* ====================================
MOBILE MENU
==================================== */

const menuBtn =
document.querySelector(".menu-btn");

const nav =
document.querySelector("nav");

if(menuBtn){

menuBtn.addEventListener("click",()=>{

nav.classList.toggle("mobile-open");

});

}

/* ====================================
GALLERY ZOOM
==================================== */

const galleryItems =
document.querySelectorAll(".gallery-item img");

galleryItems.forEach(img=>{

img.addEventListener("click",()=>{

const overlay =
document.createElement("div");

overlay.className =
"image-overlay";

overlay.innerHTML = `
<img src="${img.src}">
`;

document.body.appendChild(overlay);

overlay.addEventListener("click",()=>{

overlay.remove();

});

});

});

/* ====================================
FLOATING HEARTS
==================================== */

function createHeart(){

const heart =
document.createElement("div");

heart.className =
"floating-heart";

const icons = [

"💖",
"🌸",
"🎀",
"✨",
"🌺"

];

heart.innerHTML =
icons[Math.floor(Math.random()*icons.length)];

heart.style.left =
Math.random()*100 + "vw";

heart.style.fontSize =
(Math.random()*20+15) + "px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},12000);

}

setInterval(createHeart,1800);

/* ====================================
PARALLAX HERO
==================================== */

const hero =
document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const offset =
window.pageYOffset;

if(hero){

hero.style.backgroundPositionY =
offset * 0.4 + "px";

}

});

/* ====================================
SERVICES HOVER EFFECT
==================================== */

const serviceCards =
document.querySelectorAll(".service-card");

serviceCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =
"translateY(-12px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"translateY(0)";

});

});

/* ====================================
PROMO CARDS GLOW
==================================== */

const promoCards =
document.querySelectorAll(".promo-card");

promoCards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.background =
`
radial-gradient(
circle at ${x}px ${y}px,
rgba(255,110,180,.20),
#171722
)
`;

});

card.addEventListener("mouseleave",()=>{

card.style.background =
"#171722";

});

});

/* ====================================
COPY WHATSAPP NUMBER
==================================== */

const whatsappLinks =
document.querySelectorAll(
'a[href*="wa.me"]'
);

whatsappLinks.forEach(link=>{

link.addEventListener("contextmenu",(e)=>{

navigator.clipboard.writeText(
"+50361207787"
);

});

});

