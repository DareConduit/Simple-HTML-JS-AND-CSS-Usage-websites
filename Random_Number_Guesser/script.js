const numbox=document.getElementById("numbox");
const clicked=document.getElementById("clicked");
const ans=document.getElementById("ans");
let num=Math.floor(Math.random()*(10-1))+1;
clicked.onclick=function(){
    let innum=numbox.value;
    if(num==innum){
        ans.textContent="Correct Guess! You win";
    }
    else{
        ans.textContent="Wrong Guess, Try again";
    }
}