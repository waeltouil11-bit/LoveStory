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
// ======================================
// LETTRE QUI S'ÉCRIT
// ======================================

const letterMessage =
`Depuis que tu fais partie de ma vie,

chaque journée est plus belle.

Ton sourire illumine mes journées.

Merci d'être toi. ❤️`;

document.getElementById("btn3").onclick = function(){

    showPage(page5);

    createRoses();

};

// ======================================
// EFFET MACHINE À ÉCRIRE POUR LA LETTRE
// ======================================

document.getElementById("envelope").addEventListener("click", ()=>{

    const letter = document.getElementById("letterText");

    letter.textContent = "";

    let index = 0;

    function writeLetter(){

        if(index < letterMessage.length){

            letter.textContent += letterMessage.charAt(index);

            index++;

            setTimeout(writeLetter,40);

        }

    }

    setTimeout(writeLetter,500);

});


// ======================================
// PLUIE DE ROSES
// ======================================

function createRoses(){

    const roses = document.getElementById("roses");

    roses.innerHTML="";

    for(let i=0;i<25;i++){

        const rose=document.createElement("div");

        rose.className="rose";

        rose.innerHTML="🌹";

        rose.style.left=Math.random()*100+"%";

        rose.style.animationDelay=(Math.random()*4)+"s";

        roses.appendChild(rose);

    }

}
// ======================================
// BOUTON PAGE 5
// ======================================

document.getElementById("btn4").onclick = function(){

    showPage(page6);

    startHearts();

    finalMessage();

};


// ======================================
// COEURS FLOTTANTS
// ======================================

function startHearts(){

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="floating-heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"vw";

        heart.style.bottom="-50px";

        heart.style.fontSize=(20+Math.random()*30)+"px";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },6000);

    },250);

}


// ======================================
// MESSAGE FINAL
// ======================================

function finalMessage(){

    const message=

`Tu es la plus belle chose
qui me soit arrivée.

Merci pour tous ces moments.

Je t'aime ❤️`;

    const text=document.getElementById("finalText");

    text.textContent="";

    let i=0;

    function write(){

        if(i<message.length){

            text.textContent+=message.charAt(i);

            i++;

            setTimeout(write,55);

        }

    }

    write();

}
