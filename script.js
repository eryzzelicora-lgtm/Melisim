const startDate = new Date("2026-02-07T00:00:00");

function updateLoveCounter(){

    const now = new Date();

    const difference = now - startDate;


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );


    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );


    const seconds = Math.floor(
        (difference / 1000) % 60
    );


    const counter = document.getElementById("loveCounter");


    if(counter){

        counter.innerHTML = 
        `
        ${days} Gün<br>
        ${hours} Saat ${minutes} Dakika ${seconds} Saniye
        `;

    }

}


setInterval(updateLoveCounter,1000);

updateLoveCounter();

/* ❤️ Uçuşan Kalpler ❤️ */

function createHeart(){

    const container = document.getElementById("hearts");

    if(!container) return;

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = ["❤️","🤍","💖","💕","💗"][Math.floor(Math.random()*5)];

    heart.style.left = Math.random()*100 + "%";

    heart.style.fontSize = (18 + Math.random()*24) + "px";

    heart.style.animationDuration = (6 + Math.random()*6) + "s";

    container.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },12000);

}

setInterval(createHeart,500);

/* ❤️ Sürpriz Butonu ❤️ */

const surpriseButton = document.getElementById("surpriseButton");
const hiddenMessage = document.getElementById("hiddenMessage");

if(surpriseButton && hiddenMessage){

    surpriseButton.addEventListener("click",()=>{

        hiddenMessage.classList.toggle("show");

        if(hiddenMessage.classList.contains("show")){
            surpriseButton.innerHTML="❤️ Seni Çok Seviyorum ❤️";
        }else{
            surpriseButton.innerHTML="🤍 Bana Dokun 🤍";
        }

    });

}

/* Scroll Animasyonu */

const sections = document.querySelectorAll(".glass");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{
    observer.observe(section);
});
