function generate(){
    const PasswordLength=Number(document.getElementById("length").value);
    const IncludeUpper=document.getElementById("incUp").checked;
    const IncludeLower=document.getElementById("incLow").checked;
    const IncludeNum=document.getElementById("incNum").checked;
    const IncludeSym=document.getElementById("incSym").checked;
    const password=document.getElementById("password");

    if(IncludeUpper==false&&IncludeLower==false&&IncludeNum==false&&IncludeSym==false){
        password.textContent="No Checkbox has been selected. Select one!";
        return;
    }
    const nocap="abcdefghijklmnopqrstuvwxyz";
    const Caps="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const num="0123456789";
    const sym="!@#$%^&*?=+-";
    let allowed=""; let pas="";
    allowed+=IncludeUpper==true ? Caps:"";
    allowed+=IncludeLower==true ? nocap:"";
    allowed+=IncludeNum==true ? num:"";
    allowed+=IncludeSym==true ? sym:"";
    for(var i=1;i<=PasswordLength;i++){
        const rando=Math.floor(Math.random()*allowed.length);
        pas+=allowed[rando];
    }
    password.textContent=`Generated Password: ${pas}`;
}