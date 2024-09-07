function pesquisaFilmes(){
console.log("1")
let section = document.getElementById("resultados-pesquisa")
let campoPesquisa = document.getElementById("campo-pesquisa").value
console.log(campoPesquisa)
campoPesquisa = campoPesquisa.toLowerCase()
//delcaração de variaveis para comparação na busca do termo
var titulo = "";
var sinopse ='';
var diretor = '';
//se o campo pesquisa não tiver nada 
if(campoPesquisa==""){
    section.innerHTML ="<p>Nada foi encontrado. Por favor revise o termo buscado</p>"
    return
}
let resultados=''
//iteração para comparar termo pesquisado com a base e adicionar os elementos que batem com a pesquisa no html
for (let dado of filmes) {
    titulo = dado.titulo.toLowerCase()
    sinopse = dado.sinopse.toLowerCase()
    let elenco =''
    for(let ator of dado.elenco){
        elenco += ator.toLowerCase();
    }
    //tags = dado.tags.toLowerCase()
    //Conferer se a pesquisa foi referente ao título de um filme
    if(dado.titulo.toLowerCase().includes(campoPesquisa)||dado.sinopse.toLowerCase().includes(campoPesquisa)||elenco.includes(campoPesquisa)){
        console.log("Aqui")
        resultados +=`<div class="item-resultado">
                        <div class="poster" id="poster">
                        <img src="Poster/${dado.titulo}.jpg" class="posterFilmes" alt="Poster do filme ${dado.titulo}">
                        </div>
                        <div class="texto-resultado" id="texto-resultado">
                            <h2>${dado.titulo}</h2>
                                <p class="descricao-meta"><strong>Sinopse do filme:</strong> ${dado.sinopse}</p>
                                <p class="diretor"><strong>Diretor:</strong> ${dado.diretor}</p>
                                <p class="elenco"><strong>Elenco:</strong> ${dado.elenco}</p>
                                <p class= "pais-filme"><strong>Indicações:</strong> ${dado.indicacoes}</p>
                                <p class= "pais-filme"><strong>Prêmios:</strong> ${dado.premios}</p>
                                <a href=${dado.link} target="_blank">Mais informações</a>
                        </div>
                        </div>`;
        }
    //Conferer se o termo pesquisado se refere a um diretor e se o diretor foi indicado ou ganhou o premio no Oscar
    if(dado.diretor.toLowerCase().includes(campoPesquisa)){
        if(dado.indicacoes.includes("Melhor Diretor") && dado.premios.includes("Melhor Diretor")){
        resultados +=`<div class="item-resultado">
                        <div class="poster" id="poster">
                        <img src="diretores/${dado.diretor}.jpg" class="posterFilmes" alt="Foto do Diretor ${dado.diretor}">
                        </div>
                        <div class="texto-resultado" id="texto-resultado">
                            <h2>${dado.diretor}</h2>
                                <p class="descricao-meta">Indicados e ganhadores do prêmio de melhor direção pelo filme ${dado.titulo}</p>
                                <a href=${dado.link} target="_blank">Mais informações</a>
                        </div>
                        </div>`
        } 
        if(dado.indicacoes.includes("Melhor Diretor") && !dado.premios.includes("Melhor Diretor")){
            resultados +=`<div class="item-resultado">
                            <div class="poster" id="poster">
                            <img src="diretores/${dado.diretor}.jpg" class="posterFilmes" alt="Foto do Diretor ${dado.diretor}">
                            </div>
                            <div class="texto-resultado" id="texto-resultado">
                                <h2>${dado.diretor}</h2>
                                    <p class="descricao-meta">Indicado ao prêmio de melhor direção pelo filme ${dado.titulo}</p>
                                    <a href=${dado.link} target="_blank">Mais informações</a>
                            </div>
                            </div>`
        }
        else{
            resultados +=`<div class="item-resultado">
                            <div class="poster" id="poster">
                            <img src="diretores/${dado.diretor}.jpg" class="posterFilmes" alt="Foto do Diretor ${dado.diretor}">
                            </div>
                            <div class="texto-resultado" id="texto-resultado">
                                <h2>${dado.diretor}</h2>
                                    <p class="descricao-meta">Responsável pela direção do filme ${dado.titulo}</p>
                                    <a href=${dado.link} target="_blank">Mais informações</a>
                            </div>
                            </div>`
        }                       
    } 
    //Confere se a pesquisa é de um ator ou atriz presente no elenco dos filmes
    
    //Confere se a pesquisa é de uma categoria do oscar  
     
}
for (let category of oscar2023){
    if(category.categoria.toLowerCase().includes(campoPesquisa)){
        let indicados =''
        for (indicado of category.indicados){
            indicados+=`<p>${indicado}</p>`
        }
        resultados +=`<div class="item-resultado">
                        <div class="poster" id="poster">
                        <img src="${category.vencedor}.jpg" class="posterFilmes" alt="Poster do filme ${category.vencedor}">
                        </div>
                        <div class="texto-resultado" id="texto-resultado">
                            <h2>${category.categoria}</h2>
                                <p class="descricao-meta"><strong>Vencedor:</strong> ${category.vencedor}</p>
                                <p><strong>Indicados:</strong></p>
                                ${indicados}
                        </div>
                        </div>`
    }
}
if(!resultados){
    resultados="Nada foi encontrado na nossa base. Estamos atualizando com mais filmes e mais edições da premiação."
}
let sectionNoticias = document.getElementById("ultimas-noticias");
let sectionIndicados = document.getElementById("filmes-indicados");
let sectionBotao = document.getElementById("botao");
sectionNoticias.hidden=true;
sectionIndicados.hidden=true;
section.hidden=false;
sectionBotao.hidden=false;
section.innerHTML = resultados;
console.log("rodou")
}
function voltarHome(){
    let section = document.getElementById("resultados-pesquisa");
    let sectionNoticias = document.getElementById("ultimas-noticias");
    let sectionIndicados = document.getElementById("filmes-indicados");
    let sectionBotao = document.getElementById("botao");
    section.hidden=true;
    sectionBotao.hidden=true;
    sectionNoticias.hidden=false;
    sectionIndicados.hidden=false;
}
function botaoPoster(tituloBotao){
    let section = document.getElementById("resultados-pesquisa")
    let resultados =''
    console.log(tituloBotao)
    for(let dado of filmes){
        if(dado.titulo.includes(tituloBotao)){
    
    resultados +=`<div class="item-resultado">
                        <div class="poster" id="poster">
                        <img src="Poster/${dado.titulo}.jpg" class="posterFilmes" alt="Poster do filme ${dado.titulo}">
                        </div>
                        <div class="texto-resultado" id="texto-resultado">
                            <h2>${dado.titulo}</h2>
                                <p class="descricao-meta"><strong>Sinopse do filme:</strong> ${dado.sinopse}</p>
                                <p class="diretor"><strong>Diretor:</strong> ${dado.diretor}</p>
                                <p class="elenco"><strong>Elenco:</strong> ${dado.elenco}</p>
                                <p class= "pais-filme"><strong>Indicações:</strong> ${dado.indicacoes}</p>
                                <p class= "pais-filme"><strong>Prêmios:</strong> ${dado.premios}</p>
                                <a href=${dado.link} target="_blank">Mais informações</a>
                        </div>
                        </div>`;}}
    let sectionNoticias = document.getElementById("ultimas-noticias");
    let sectionIndicados = document.getElementById("filmes-indicados");
    let sectionBotao = document.getElementById("botao");
    sectionNoticias.hidden=true;
    sectionIndicados.hidden=true;
    section.hidden=false;
    sectionBotao.hidden=false;
    section.innerHTML = resultados;
    
}