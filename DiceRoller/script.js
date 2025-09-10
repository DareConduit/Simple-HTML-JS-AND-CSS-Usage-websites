const count=document.getElementById("count");
const subm=document.getElementById("subm");
const DiceNumber=document.getElementById("DiceNumber");
const DiceImage=document.getElementById("DiceImage");

function roll(){
    let val=[];
    for(var i=0;i<=(count.value)-1;i++){
        const j =Math.floor(Math.random()*6)+1;
        val[i]=j;
    }
    DiceNumber.textContent=`Dice Roll:${val[0]}`;
    for(var i=1;i<(count.value);i++){
        DiceNumber.textContent+=`, ${val[i]}`;
    }
}