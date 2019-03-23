

//document.getElementById("#but").onsubmit = function() {myFunction()};

function myFunction() {
    const table = document.querySelector("table");
    const titloss= document.querySelector("#tit")
    table.innerHTML +=
    `<tr>
    <td>${titloss}</td>
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