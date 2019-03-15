//Alinea A
const a1 = document.createElement("table");
document.body.appendChild(a1);
const a2 = document.createElement("tr");
a1.appendChild(a2);
const a3 = document.createElement("th");
a2.appendChild(a3);
const text1 = document.createTextNode("Escola");
a3.appendChild(text1);
const a4 = document.createElement("th");
a2.appendChild(a4);
const text2 = document.createTextNode("Local");
a4.appendChild(text2);
const a5 = document.createElement("tr");
a1.appendChild(a5);
const a6 = document.createElement("td");
a5.appendChild(a6);
const text3 = document.createTextNode("ESMAD");
a6.appendChild(text3);
const a7 = document.createElement("td");
a5.appendChild(a7);
const text4 = document.createTextNode("Vila do Conde");
a7.appendChild(text4);

//Alinea B
const b = document.createElement("table");
b.innerHTML += `<tr><th>Escola</th><th>Local</th></tr><tr><td>ESMAD</td><td>Vila do Conde</td></tr>`;
document.body.appendChild(b);

//Alinea C
b.innerHTML += `<tr><td>ISEP</td><td>Porto</td></tr>`;

//Alinea D
const td = document.querySelector("table:nth-of-type(2) td:last-of-type");
console.log(td);
td.innerHTML = "Vila do Conde/Póvoa de Varzim"

//Alinea E
const e1 = document.querySelector("table")
const e2 = document.querySelector("tr:first-of-type");
e1.removeChild(e2);










