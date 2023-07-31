// importando a variável conectaApi, precisa colocar o from 'diretório'
import { conectaApi } from "./conectaApi.js";

// pegando o formulario
const formulario = document.querySelector("[data-formulario]")

// adicionando o video colocado pelo usuário
async function criarVideo(evento) {
  // o evento submit tem como padrão dar reload na pagina após enviar informação, colocamos preventDefault() para tirar o reload da pagina após o envio
  evento.preventDefault();

  // pegando o valor que o usuário colocar nesses campos de digitação
  const imagem = document.querySelector("[data-imagem]").value;
  const url = document.querySelector("[data-url]").value;
  const titulo = document.querySelector("[data-titulo]").value;

  // math.floor usado para arredondar o numero aleatório enviado pelo math.random, o math.random da um numero aleatório de 0 a 10
  const descricao = Math.floor(Math.random() * 10).toString()

  try { // tente isso
    // pegando o import e chamando a function criaVideo e passando os parâmetros pego
    // await para esperar a promessa ser resolvida para enviar os dados
    await conectaApi.criaVideo(titulo, descricao, url, imagem)
  
    // redirecionando o usuário para outra página após ter enviado os dados com sucesso
    window.location.href = "../pages/envio-concluido.html";
  } catch (e) { // caso não consiga o código de cima
    // o catch (e), o (e) pega o erro e o texto colocado no arquivo conectaApi.js
    alert(e);
  }

}

// quando enviar o formulário manda o evento(informações)
formulario.addEventListener('submit', (evento) => criarVideo(evento))
