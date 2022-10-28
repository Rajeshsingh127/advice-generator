'use strict';
const adviceNo = document.querySelector(".advice_no");
const adviceText = document.querySelector(".advice_text > q");
const diceIcon = document.querySelector('#dice');
const diceBtn = document.querySelector('.button');


const getJSON = async function (url) {
  try{
    let resp = await fetch(url
    );
    let json = await resp.json();
    return json;
  }
  catch(err){
    return new Error("lmao ded");
  }
};



const getAdvice = async function(){
    try{
        let adviceJSON = await getJSON("https://api.adviceslip.com/advice");
        adviceNo.textContent = adviceJSON.slip.id     
        adviceText.textContent = adviceJSON.slip.advice;     
    }
    catch(err){
        adviceNo.textContent = "000";    
        adviceText.textContent = "Something went horribly wrong!!!"     
    }
};


function diceRotate(){
  diceIcon.classList.add("animate");
  setTimeout(() => {
    diceIcon.classList.remove("animate");
  },1000);
}

(async () => {
    window.addEventListener('load',async () =>{
        await getAdvice();
        diceBtn.addEventListener('click',async () => {
          diceRotate();
        await getAdvice();
        })
    })
})();



