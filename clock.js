let secondHand=document.querySelector("#seconds");
let minHand=document.querySelector("#minutes");
let hourHand=document.querySelector("#hours");

setInterval(clockRotating, 1000);

function clockRotating(){
   var date=new Date();
   var getSeconds=date.getSeconds()*6;
   var getMinutes=date.getMinutes()*6;
   var getHours=date.getHours()*30;

   secondHand.style.transform="rotate("+getSeconds*360 +"deg)";
   hourHand.style.transform="rotate("+getHours*360 +"deg)";
   minHand.style.transform="rotate("+getMinutes*360 +"deg)";


   console.log(getSeconds);
   console.log(getMinutes);
   console.log(getHours);
}