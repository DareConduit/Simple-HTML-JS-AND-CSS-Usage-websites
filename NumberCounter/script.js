const DecreaseB=document.getElementById("DecreaseB");
const resetB=document.getElementById("ResetB");
const IncreaseB=document.getElementById("IncreaseB");
const count=document.getElementById("count");
let con=0;

IncreaseB.onclick=function(){
    con++;
    count.textContent=con;
}

DecreaseB.onclick=function(){
    con--;
    count.textContent=con;
}

ResetB.onclick=function(){
    con=0;
    count.textContent=con;
}