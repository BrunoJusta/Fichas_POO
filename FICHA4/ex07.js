//function deleteRow(r) {
    //const table = document.querySelector("table");
    //var i = r.parentNode.parentNode.rowIndex;
    //table.deleteRow(i);
//}

function myFunction() {
    const table = document.querySelector("table");
    const titloss= document.querySelector("#tit");
    const generos = document.querySelector("#gen");
    const caps = document.querySelector("#capas");
    const trail = document.querySelector("#trai");

    table.innerHTML +=
    `<tr>
    <td>${titloss.value}</td>
    <td>${generos.value}</td>
    <td>
        <input type="button" onclick= "location.href='${caps.value}'" value="Ver Capa" />
        <input type="button" onclick= "location.href='${trail.value}'" value="Ver Trailer" />
    
       
    </td>
    </tr>
    `
   //<input type="button" onclick= "${deleteRow(r)}" value="Remover" />

}

   

const frmmovie = document.querySelector("#movie")
frmmovie.addEventListener
(
    "submit", function(event)
{ 
    myFunction(); 
    event.preventDefault();

}
)