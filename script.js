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
