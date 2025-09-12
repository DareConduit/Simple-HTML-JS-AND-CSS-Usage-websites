//array.forEach(function): operates functionfor each element in an array
//array.map(function): operates function for each element in an array, BUT also returns an array
//array.filter(function{should return boolean}): if boolean condition is true, it trims the array and returns it

/*const hello= () =>{console.log("Hello");console.log("old hag");} hello();
this is an equivalent to const hello=function(){console.log("Hello");console.log("old hag");};hello();, but even shorter! we call these, arrow functions*/

//JS OBJECTS
/*const person1={Name:"Bob",LName:"pants",age:20,emp:true,hello:()=>console.log("Hi, i am Bob")};
const person2={Name:"Pat",LName:"Star",age:22,emp:false,hello:()=>console.log("Hi, i am pat")};
console.log(person1.Name);
person1.hello();*/

//like java, we can make classes as class <name> and inside, constructor is defined with constructor()
//static keyword lets use use variables without objects! its like <class>.<variable_name>

//set and get keywords

/*class Rectangle{
    constructor(width, height){
        this.width=width;
        this.height=height;
    }

    set width(newWidth){
        if(newWidth>0){this._width=newWidth;}
        else{console.error("Width must be a positive Number!");}
    }

    set height(newHeight){
        if(newHeight>0){this._height=newHeight;}
        else{console.error("Height must be a positive Number!");}
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }
}

const Rec=new Rectangle(4,6);

console.log(`${Rec.width}`);
console.log(`${Rec.height}`);*/

//Multi Equating and destructuring let a=1;let b=2; [a,b]=[b,a]; console.log(`${a},${b}`);
//that will result in switch of the two variables!

//Date Objects
//order for Date: Date(year, month, day, hour, minute, second, ms)
/*const date=new Date();
console.log(date);
const year=date.getFullYear();
console.log(year);
const month=date.getMonth();
console.log(month);*/

function updateClock(){
    const now= new Date();
    const hours=now.getHours().toString().padStart(2,0);
    const minu=now.getMinutes().toString().padStart(2,0);
    const secs=now.getSeconds().toString().padStart(2,0);
    const textc=`${hours}:${minu}:${secs}`;
    document.getElementById("clock").textContent=textc;
}

setInterval(updateClock,1000);
