//Defenir array para filmes
const movies = []

//Definir Maximo para o Ano
const textYear= document.querySelector("#txtYear")
txtYear.max = new Date().getFullYear();

//Definir um listener
const myForm = document.querySelector("form")
myForm.addEventListener("submit",function(event){

    //1.Obter todos os valores dos elementos
    const txtTitle = document.querySelector("#txtTitle").value
    const sltGenere = document.querySelector("#sltGenere").value
    const txtYear = document.querySelector("#txtYear").value
    const linkCover = document.querySelector("#linkCover").value
    const linkTrailer = document.querySelector("#linkTrailer").value

    //2. verificar se o filme ja existe
    const result = isMovie(txtTitle)

    if (result === true) {
        alert("O filme já existe")
    }
    else{
        
        //3. Criar um Objeto
        const newMovie = {
        title: txtTitle,
        genere: sltGenere,
        year: txtYear, 
        cover: linkCover,
        trailer: linkTrailer
        }

        //4. Guardar o objeto num array
        movies.push(newMovie);
    }

    //5.Exibir filmes na tabela
    renderTable();

    event.preventDefault();

})

//butão para fechar a janela da capa
const btnCloseCover = document.querySelector("#btnCloseCover")
btnCloseCover.addEventListener("click", function(){
    const dlgCover = document.querySelector("#dlgCover")
    dlgCover.close()
})

//butão para fechar a janela do Trailer
const btnCloseTrailer = document.querySelector("#btnCloseTrailer")
btnCloseTrailer.addEventListener("click", function(){
    const dlgTrailer = document.querySelector("#dlgTrailer")
    dlgTrailer.close()
})

//Função se o filme ja existe
function isMovie(txtTitle){

    for (const movie of movies) {
        if (movie.title === txtTitle) {
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
        <th>Titulo</th>
        <th>Genero</th>
        <th>Opções</th>
    </tr>
    `
    //exibir tosos os filmes em linhas independentes
    for (const movie of movies) {
        myTable.innerHTML += `
        <tr>
            <td>${movie.title}</td>
            <td>${movie.genere}</td>
            <td>
                <button onclick="showCover('${movie.cover}')">Ver Capa</button>
                <button onclick="showTrailer('${movie.trailer}')">Ver Trailer</button>
                <button onclick="removeMovie('${movie.title}')">Remover</button>                            
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

//funcao para exibir a janel modal do trailer
function showTrailer(trailer){
    const vidTrailer = document.querySelector("#vidTrailer")
    vidTrailer.src = trailer

    //exibir a janela
    const dlgTrailer = document.querySelector("#dlgTrailer")
    dlgTrailer.showModal()
}

//funcao para remover as linhas
function removeMovie(title){
    for (let i = 0; i < movies.length; i++) {
        if(movies[i].title === title){
            //remover
            movies.splice(i,1)
        }
        
    }
    renderTable()
}