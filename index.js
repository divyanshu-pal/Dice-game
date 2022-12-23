
function checkloveper(){

let number1  = Math.floor(Math.random() *6) +1;
let number2  = Math.floor( Math.random()*6) +1;

if(number1 ===1)
{
    document.querySelector(".img1").setAttribute("src","F:/js/dice game/Dice-game/dice1.png");
}
else if(number1 === 2)
{
    document.querySelector(".img1").setAttribute("src","F:/js/dice game/Dice-game/dice2.png");
}

else if(number1 === 3)
{
    document.querySelector(".img1").setAttribute("src","F:/js/dice game/Dice-game/dice3.png");
}
else if(number1 === 4)
{
    document.querySelector(".img1").setAttribute("src","F:/js/dice game/Dice-game/dice4.png");
}
else if(number1 === 5)
{
    document.querySelector(".img1").setAttribute("src","F:/js/dice game/Dice-game/dice5.png");
}
else if(number1 === 6)
{
    document.querySelector(".img1").setAttribute("src","F:/js/dice game/Dice-game/dice6.png");
}






















if(number2 ===1)
{
    document.querySelector(".img2").setAttribute("src","F:/js/dice game/Dice-game/dice1.png");
}
else if(number2 === 2)
{
    document.querySelector(".img2").setAttribute("src","F:/js/dice game/Dice-game/dice2.png");
}

else if(number2 === 3)
{
    document.querySelector(".img2").setAttribute("src","F:/js/dice game/Dice-game/dice3.png");
}
else if(number2 === 4)
{
    document.querySelector(".img2").setAttribute("src","F:/js/dice game/Dice-game/dice4.png");
}
else if(number2 === 5)
{
    document.querySelector(".img2").setAttribute("src","F:/js/dice game/Dice-game/dice5.png");
}
else if(number2 === 6)
{
    document.querySelector(".img2").setAttribute("src","F:/js/dice game/Dice-game/dice6.png");
}

if(number1>number2){
    document.querySelector(" h1").innerHTML="Player 1 wins";

}

else if(number1<number2)
{
    document.querySelector("h1").innerHTML ="Player 2 wins";
}
else{
    document.querySelector(".container h1").innerHTML ="DRAW";
}

}
