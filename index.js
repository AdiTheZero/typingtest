const word = document.querySelector("#random-word");
const typed = document.querySelector("#typed");
const scoreD = document.querySelector("#score");
const timeD = document.querySelector("#timer");
const msg = document.querySelector("#msg");

let score = 0;
function Score(){
    score++;
    scoreD.innerHTML = score;
}


let time = 11;
function countdown(){
    time--;
    timeD.innerHTML = time;
    if (time <= -1){
        time = 11;
        alert("Game over!!!!!!!!")
    }
}

setInterval(countdown,1000)

let words = [];
let rd=0;
let url="https://random-word-api.herokuapp.com/all";



fetch(url)
  .then(function reslove(response) 
  {
   return response.json()
  })
  .then(function result(data)  
    {
        words=data;
    console.log(words);
     rd = Math.floor(Math.random() * words.length);
     word.innerHTML = words[rd].toLowerCase();
    }
  ).catch(function err(e){
      alert("not working",e);
    });
  // let node = document.createTextNode(words[rd]);
// word.appendChild(node);
function chn(){
    if(typed.value === word.innerHTML)
        {
            msg.innerHTML = "Correct"
            rd = Math.floor(Math.random() * words.length);
            word.innerHTML = words[rd].toLowerCase();
            typed.value = ""
            Score();
            time = 11;
         
        }
    else{
        msg.innerHTML = "Incorrect!!!"
    }
}

typed.addEventListener('input',chn);





