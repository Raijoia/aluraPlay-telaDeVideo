// função assíncrona
// await serve para esperar a promise ser resolvida para realizar a função
async function listaVideos() {
  // conectando com a API(pegando a API)
  const conexao = await fetch("http://localhost:3000/videos") // sem declarar nada, considera method get(pegar dados da api)

  // convertendo a promise para json
  const conexaoConvertida = await conexao.json();

  // retornando o resultado
  return conexaoConvertida
}

async function criaVideo(titulo, descricao, url, imagem) {
  const conexao = await fetch("http://localhost:3000/videos", {
    method:"POST", // usando o method post, enviar dados pra api
    headers: { // precisa ter logo após o method post
      "Content-Type": "application/json" // informando qual tipo de arquivo e informação irá enviar
    },
    // precisa ter logo após o method post
    // o JSON precisa estar em letra maiúscula
    body: JSON.stringify({ // colocando qual informações serão enviadas e o stringfy coloca tudo que estamos enviando como string, tudo que enviamos para a API precisa ser considerado uma string
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem
    })
  });

  // se conexao.ok for false
  if (!conexao.ok) {
    throw new Error("Não foi possível enviar o video")
  }

  const conexaoConvertida = await conexao.json();
  return conexaoConvertida
}

async function buscaVideo(busca) {
  // no final da URL, usar ?q=oQueQuerBuscar para procurar na Api e devolver oque a API achou
  const conexao = await fetch(`http://localhost:3000/videos?q=${busca}`)

  // convertendo oque achou para json
  const conexaoConvertida = conexao.json();

  return conexaoConvertida
}

// exportando uma variável com o retorno da função
export const conectaApi = {
  // exportando as functions
  listaVideos, 
  criaVideo,
  buscaVideo
}
