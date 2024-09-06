function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-busca").value;
    

let resultados = "";
let titulo = "";
let descricao = "";
let tags = ";"

for (let dado of dados){
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLocaleLowerCase();
    if(campoPesquisa == ""){
        section.innerHTML = "<p>Nenhum atleta encontrado. Você precisa digitar um atleta ou esporte!</p>"
        return
    }
    //console.log(dado.titulo.includes(campoPesquisa));
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += ` 
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>
        `;
    }
     
   
}

if(!resultados){
    resultados = "<p>Nada foi encontrado</p>"
}

section.innerHTML = resultados;
}


