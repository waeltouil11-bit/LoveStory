// ======================================
// TEXTE MACHINE À ÉCRIRE
// ======================================

const typing = document.getElementById("typing");

const message = "J'ai quelque chose d'important à te montrer ❤️";

let i = 0;

function typeWriter(){

    if(i < message.length){

        typing.textContent += message.charAt(i);

        i++;

        setTimeout(typeWriter,70);

    }

}

typeWriter();


// ======================================
// CREATION DES ETOILES
// ======================================

const stars = document.getElementById("stars");

for(let i=0;i<180;i++){

    const star = document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*3+"s";

    star.style.opacity=Math.random();

    stars.appendChild(star);

}


// ======================================
// LES PAGES
// ======================================

const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.getElementById("page3");
const page4=document.getElementById("page4");
const page5=document.getElementById("page5");
const page6=document.getElementById("page6");

function showPage(page){

    document.querySelectorAll(".page").forEach(p=>{

        p.classList.remove("active");

    });

    page.classList.add("active");

}


// ======================================
// BOUTON 1
// ======================================

document.getElementById("btn1").onclick=function(){

    showPage(page2);

};


// ======================================
// BOUTON 2
// ======================================

document.getElementById("btn2").onclick=function(){

    showPage(page3);

};


// ======================================
// ENVELOPPE
// ======================================

document.getElementById("envelope").onclick=function(){

    showPage(page4);

};
