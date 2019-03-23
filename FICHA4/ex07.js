

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
        <input type="button" onclick= "${document.querySelector("table").deleteRow(0)}" value="Remover" />
       
    </td>
    </tr>
    `
  

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