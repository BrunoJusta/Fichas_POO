//Defenir array para jogos
const games = []

//Definir um listener
const myForm = document.querySelector("form")
myForm.addEventListener("submit",function(event){

    //1.Obter todos os valores dos elementos
    const gameName = document.querySelector("#name").value
    const gameGenre = document.querySelector("#genre").value
    const gameYear = document.querySelector("#year").value
    const gameCover = document.querySelector("#cover").value

    //2. verificar se o filme ja existe
    const result = isGame(gameName)

    currentYear= new Date().getFullYear();

    if(gameYear < 1959 || gameYear > currentYear){
        alert("ERRO")
    }
    else{
    
    alert("OK!")
    if (result === true) {
        alert("O Jogo já existe")
    }
    else{
        
        //3. Criar um Objeto
        const newGame = {
        name: gameName,
        genre: gameGenre,
        year: gameYear, 
        cover: gameCover
        }

        //4. Guardar o objeto num array
        games.push(newGame);
    }

    //5.Exibir filmes na tabela
    renderTable();

    event.preventDefault();
    }



})


//Função se o filme ja existe
function isGame(gameName){

    for (const game of games) {
        if (game.name === gameName) {
            return true
        }
    }
    return false

}

//Função que cria a tabela
function renderTable() {
    //obter a referencia a tabela
    const myTable = document.querySelector("table")
    
    //Injetar o cabeçalho na tabela
    myTable.innerHTML = `
    <tr>
        <th>Nome</th>
        <th>Ano</th>
        <th>Genero</th>
        <th>Capa</th>
        <th>Opções</th>
    </tr>
    `
    //exibir tosos os filmes em linhas independentes
    for (const game of games) {
        myTable.innerHTML += `
        <tr>
            <td>${game.name}</td>
            <td>${game.year}</td>
            <td>${game.genre}</td>
            <td>
                <button onclick="showCover('${game.cover}')">Ver Capa</button>  
            </td>                 
            <td>
                <button onclick="removeGame('${game.name}')">X</button>                            
            </td>
        </tr>
        `
        
    }

}

//funcao para exibir a janel modal da capa
function showCover(cover){
    const imgCover = document.querySelector("#imgCover")
    imgCover.src = cover

    //exibir a janela
    const dlgCover = document.querySelector("#dlgCover")
    dlgCover.showModal()
}


//butão para fechar a janela da capa
const btnCloseCover = document.querySelector("#btnCloseCover")
btnCloseCover.addEventListener("click", function(){
    const dlgCover = document.querySelector("#dlgCover")
    dlgCover.close()
})


//funcao para remover as linhas
function removeGame(name){
    for (let i = 0; i < games.length; i++) {
        if(games[i].name === name){
            //remover
            games.splice(i,1)
        }
        
    }
    renderTable()
}