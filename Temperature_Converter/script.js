const inp=document.getElementById("inp");
const temptoC=document.getElementById("TemptoC");
const temptoF=document.getElementById("TemptoF");
const result=document.getElementById("result");
function convert(){
    let val=inp.value;
    if(temptoC.checked){
        let res=(5*(val-32))/9
        result.textContent=`The Temperature in C is ${res}`;
    }
    else if(temptoF.checked){
        let res=(9*(val/5))+32;
        result.textContent=`The Temperature in F is ${res}`;
    }
    else{
        result.textContent=`You Havent selected unit type!`;
    }
}