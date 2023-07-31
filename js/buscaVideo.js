// importando a variável conectaApi, precisa colocar o from 'diretório'
import { conectaApi } from "./conectaApi.js";

// importando uma função do arquivo mostrarVideos
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
  // o evento submit tem como padrão dar reload na pagina após enviar informação, colocamos preventDefault() para tirar o reload da pagina após o envio
  evento.preventDefault();

  // pegando o valor colocado no input de pesquisa
  const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;

  // passando o valor do input da pesquisa pra API
  const busca = await conectaApi.buscaVideo(dadosDePesquisa);

  // pegando a lista para adicionar o card da busca
  const lista = document.querySelector("[data-lista]");

  // enquanto lista lista tiver primeiro filho, remove ele
  while (lista.firstChild) { // enquanto isso for true
    lista.removeChild(lista.firstChild); // faça isso
  }

  // colocando o elemento da busca no card
  busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

  // caso a busca(Api) não retorne nada, ou seja, busca.length == 0
  if (busca.length == 0) {
    lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com o termo <strong>${dadosDePesquisa}<strong></h2>`
  }
}

const btn = document.querySelector("[data-btn]");

btn.addEventListener("click", evento => buscarVideo(evento))