var num=Math.floor(Math.random()*6)+1;
var num2=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").addEventListener("click",randomDiceImage);
function randomDiceImage(){
  if(num==1)
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
  else if(num==2)
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
  else if(num==3)
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
  else if(num==4)
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
  else if(num==5)
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
  else
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
}
document.querySelector(".img2").addEventListener("click",randomDiceImage1);
function randomDiceImage1(){
  if(num2==1)
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
  else if(num2==2)
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
  else if(num2==3)
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
  else if(num2==4)
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
  else if(num2==5)
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
  else
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
}
document.querySelector("button").addEventListener("click",computeResult);
function computeResult(){
  if(num>num2)
    document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
  else if(num<num2)
    document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
  else
    document.querySelector("h1").innerHTML="Draw!";
   
}
