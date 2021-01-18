document.addEventListener("DOMContentLoaded",()=>{
    "use strict";
    function sendData(event){
        event.preventDefault();
        let nameUser = document.querySelector("#name").value;
        let lastNameUser = document.querySelector("#lastName").value;
        let nameCard = document.querySelector("#nameCard");
        let lastNameCard = document.querySelector("#lastNameCard");
        let classCard = document.querySelector("#card-js");

        classCard.classList.add("tarjeta");
        nameCard.innerText = nameUser;
        lastNameCard.innerHTML = lastNameUser;
    }
    
    document.querySelector("#send-js").addEventListener('click', sendData);

    document.querySelector("#option1").addEventListener('click', ()=>{
        let classCard = document.querySelector("#card-js");
        classCard.classList.add("opcion1");
    })

    document.querySelector("#option2").addEventListener('click', ()=>{
        let classCard = document.querySelector("#card-js");
        classCard.classList.add("opcion2");
    })

    document.querySelector("#option3").addEventListener('click', ()=>{
        let classCard = document.querySelector("#card-js");
        classCard.classList.add("opcion3");
    })
})