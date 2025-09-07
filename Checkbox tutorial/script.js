const check0=document.getElementById("check0");
const radi1=document.getElementById("radi1");
const radi2=document.getElementById("radi2");
const radi3=document.getElementById("radi3");
const subm=document.getElementById("subm");
const subRes=document.getElementById("subRes");
const paymentRes=document.getElementById("paymentRes");

subm.onclick=function(){
    if(check0.checked){
        subRes.textContent="Check0 Was Ticked!";
    }
    else{
        subRes.textContent="Check0 remains Unchecked...";
    }
    if(radi1.checked){
        paymentRes.textContent="Radi1 was picked!"
    }
    else if(radi2.checked){
        paymentRes.textContent="Radi2 was picked!"
    }
    else if(radi3.checked){
        paymentRes.textContent="Radi3 was picked!"
    }
}