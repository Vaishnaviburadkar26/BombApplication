let defuserEl=document.getElementById("defuser");
let timerEl=document.getElementById("timer");
let myImgEl=document.getElementById("myImg");

let counter=10;

 let intervalId=setInterval ( () =>{


    counter=counter-1;

    timerEl.textContent=counter;

    if(counter===0){

        clearInterval(intervalId)

        timerEl.style.display="none";

        myImgEl.src="theo-eilertsen-photography-mwlhFUCir_8-unsplash.jpg";
    }



},1000);


function onDefuseBomb(){



    let userVal=defuserEl.value;
    if( userVal===0 && counter>0){

        clearInterval(intervalId)

        timerEl.style.display="none";

        myImgEl.src ="joel-mott-O9Ogddfvl-U-unsplash.jpg";

       


    }
    else{

        clearInterval(intervalId)

        myImgEl.src ="theo-eilertsen-photography-mwlhFUCir_8-unsplash.jpg";

        timerEl.style.display="none";

    }

}