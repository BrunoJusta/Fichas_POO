//Alinea B
let b = document.getElementById("p2");
console.log(b);

//Alinea C
let c = document.getElementsByTagName("p");
console.log(c);

//Alinea D
let d = document.querySelectorAll("p");
for( let xd of d)
{
    console.log(xd.innerHTML);
}

//Alinea E
let e = document.getElementsByClassName("red");
console.log(e);

//Alinea F
let f = document.querySelectorAll("p#p3");
console.log(f);

//Alinea G
let g = document.querySelectorAll("p,div");
for(let xg of g)
{
    console.log(xg.innerHTML);    
}

//Alinea H
let h = document.querySelectorAll("span");
for (let xh of h){
    console.log(xh.innerHTML)
}

//Alinea I
let i = document.querySelector("div span").innerHTML;
console.log(i);

//Alinea J
let j = document.querySelector("body>span").innerHTML;
console.log(j);
