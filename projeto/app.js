// Exibe o conteúdo da variável 'dados' no console do navegador.
// Essa variável provavelmente contém um array de objetos com informações sobre os resultados da pesquisa.
//console.log(dados);

// Obtém a referência ao elemento HTML com o ID "resultados-pesquisa".
// Este elemento será utilizado para exibir os resultados da pesquisa.
let section = document.getElementById("resultados-pesquisa");
//console.log(section);

// Camel case: convenção de nomenclatura em que nomes de variáveis iniciam com letra minúscula e palavras subsequentes iniciam com letra maiúscula.
// Definir variável com nome duplo: neste caso, "campoPesquisa" é mais claro do que "campo_pesquisa".

// Função que realiza a pesquisa e atualiza a seção de resultados.
function pesquisar(){
    // Obtém novamente a referência à seção de resultados (poderia ser armazenada fora da função para otimização).
    let section = document.getElementById("resultados-pesquisa")

    // Obtém a referência ao elemento HTML com o ID "campo-pesquisa".
    // Este elemento é um campo de input onde o usuário digita a pesquisa.
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Ignora se entrada for vazia
    if (campoPesquisa == ""){
        section.innerHTML = "<p>Nada foi encontrado. Digite o nome do atleta ou esporte</p>"
        return
    }
    // Converte
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa formatados em HTML.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada elemento (dado) do array 'dados'.
    for (let dado of dados){
        //console.log(dado.titulo)
        //console.log(campoPesquisa)
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        tags = dado.tags.toLowerCase();
        // Verifica se o título contém a palavra pesquisada
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Saiba mais</a>
                    <p>tags: ${tags}</p>
                </div>`
        };
    };

    if (!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
    // Atribui o conteúdo HTML gerado à propriedade 'innerHTML' da seção de resultados,
    // substituindo o conteúdo anterior.
    section.innerHTML = resultados;
};
