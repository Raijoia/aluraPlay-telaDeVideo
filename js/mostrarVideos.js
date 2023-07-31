// importando a variável conectaApi, precisa colocar o from 'diretório'
import { conectaApi } from "./conectaApi.js";

// pegando a ul para colocar as listas 
const lista = document.querySelector('[data-lista]')

export default function constroiCard(titulo, descricao, url, imagem) {
  // criando uma li
  const video = document.createElement('li')

  // colocando classe na li
  video.className = 'videos__item'

  // adicionando o card no html
  video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
  `

  // retornando
  return video;
}

async function listaVideos() {
  try { // tente isso primeiro
    // pegando a lista no conectaApi, precisa colocar como uma função assíncrona para esperar a promessa se resolver
    const listaApi = await conectaApi.listaVideos();
  
    // colocando a tag li dentro da ul para cada elemento da lista chamando a função constroiCard(passando como parâmetro os dados necessário de cada elemento), usando a arrow function com o forEach
    listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
  } catch { // caso não carregue algum video, faça isso
    lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`
  }
}

listaVideos()