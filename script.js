document.addEventListener("DOMContentLoaded", function () {

console.log("JS Loaded");

/* ======================================
IMAGE GALLERY + AUTO ROTATE
====================================== */

const stickyBar = document.querySelector(".stickyProduct");
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", function(){

if(window.scrollY > heroSection.offsetHeight){
stickyBar.classList.add("show");
}
else{
stickyBar.classList.remove("show");
}

});

const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumbs img");

let currentIndex = 0;

if(mainImage && thumbs.length > 0){

thumbs.forEach((img,index)=>{

img.addEventListener("click", function(){

mainImage.src = this.src;
currentIndex = index;

});

});

/* auto rotate */

setInterval(function(){

currentIndex++;

if(currentIndex >= thumbs.length){
currentIndex = 0;
}

mainImage.src = thumbs[currentIndex].src;
lens.style.backgroundImage = `url(${thumbs[currentIndex].src})`;

},5000);

}


/* ======================================
IMAGE LENS ZOOM
====================================== */

const lens = document.querySelector(".zoom-lens");
const img = document.getElementById("mainImage");
const container = document.querySelector(".main-image");

if(lens && img){

container.addEventListener("mouseenter", function(){

lens.style.display = "block";
lens.style.backgroundImage = `url(${img.src})`;

});

container.addEventListener("mouseleave", function(){

lens.style.display = "none";

});

container.addEventListener("mousemove", moveLens);

function moveLens(e){

const rect = container.getBoundingClientRect();

let x = e.clientX - rect.left;
let y = e.clientY - rect.top;

const lensSize = 120;
const zoom = 2;

x = x - lensSize/2;
y = y - lensSize/2;

if(x < 0) x = 0;
if(y < 0) y = 0;

if(x > container.offsetWidth - lensSize){
x = container.offsetWidth - lensSize;
}

if(y > container.offsetHeight - lensSize){
y = container.offsetHeight - lensSize;
}

lens.style.left = x + "px";
lens.style.top = y + "px";

const bgX = (x / container.offsetWidth) * 100;
const bgY = (y / container.offsetHeight) * 100;

lens.style.backgroundPosition = `${bgX}% ${bgY}%`;
lens.style.backgroundSize = `${img.width*zoom}px ${img.height*zoom}px`;

}

}


/* ======================================
FAQ ACCORDION
====================================== */

const faqItems = document.querySelectorAll(".faqItem");

faqItems.forEach(item=>{

const question = item.querySelector(".faqQ");
const answer = item.querySelector(".faqA");

question.addEventListener("click", ()=>{

document.querySelectorAll(".faqA").forEach(a=>{
if(a !== answer){
a.style.maxHeight = null;
}
});

if(answer.style.maxHeight){
answer.style.maxHeight = null;
}else{
answer.style.maxHeight = answer.scrollHeight + "px";
}

});

});


/* ======================================
MODALS
====================================== */

const quoteModal = document.getElementById("quoteModal");
const catalogueModal = document.getElementById("catalogueModal");

const quoteButtons = document.querySelectorAll(".openQuote");
const catalogueButtons = document.querySelectorAll(".openCatalogue");

const closeButtons = document.querySelectorAll(".modalClose");


/* OPEN QUOTE */

quoteButtons.forEach(btn=>{

btn.addEventListener("click", ()=>{

if(quoteModal){
quoteModal.style.display="flex";
}

});

});


/* OPEN CATALOGUE */

catalogueButtons.forEach(btn=>{

btn.addEventListener("click", ()=>{

if(catalogueModal){
catalogueModal.style.display="flex";
}

});

});


/* CLOSE BUTTON */

closeButtons.forEach(btn=>{

btn.addEventListener("click", ()=>{

if(quoteModal) quoteModal.style.display="none";
if(catalogueModal) catalogueModal.style.display="none";

});

});


/* CLICK OUTSIDE CLOSE */

window.addEventListener("click", function(e){

if(e.target === quoteModal){
quoteModal.style.display="none";
}

if(e.target === catalogueModal){
catalogueModal.style.display="none";
}

});


/* ======================================
PROCESS TABS
====================================== */

const steps = document.querySelectorAll(".step");
const processTitle = document.querySelector(".processText h3");
const processText = document.querySelector(".processText p");
const processImage = document.querySelector(".processImage img");

const processData = [

{
title:"High-Grade Raw Material Selection",
text:"Our HDPE pipes begin with the careful selection of premium PE100 grade raw materials ensuring durability and long service life.",
image:"assets/images/pipe-main.jpg"
},

{
title:"Precision Extrusion Process",
text:"Molten polymer is extruded through precision dies forming uniform pipe structures with consistent wall thickness.",
image:"assets/images/pipe-1.jpg"
},

{
title:"Controlled Cooling",
text:"Pipes pass through controlled cooling tanks stabilizing the polymer structure and maintaining dimensional accuracy.",
image:"assets/images/pipe-2.jpg"
},

{
title:"Sizing & Calibration",
text:"Automated calibration systems ensure perfect diameter and structural consistency throughout the pipe length.",
image:"assets/images/pipe-3.jpg"
},

{
title:"Quality Inspection",
text:"Each pipe undergoes strict pressure, durability and quality inspections before being approved for delivery.",
image:"assets/images/pipe-4.jpg"
},

{
title:"Cutting & Finishing",
text:"Finished pipes are cut to required lengths and prepared for safe packaging and transportation.",
image:"assets/images/pipe-main.jpg"
}

];


if(steps.length>0){

steps.forEach((btn,index)=>{

btn.addEventListener("click", ()=>{

steps.forEach(b=>b.classList.remove("active"));
btn.classList.add("active");

processTitle.textContent = processData[index].title;
processText.textContent = processData[index].text;
processImage.src = processData[index].image;

});

});

}

});