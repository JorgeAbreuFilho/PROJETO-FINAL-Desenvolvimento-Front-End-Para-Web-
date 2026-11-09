// Guarda as informações de cada destino
const destinos = {
  inicio: {
    titulo: "Bora explorar o Brasil?",
    pontos: "Fala, mochileiro! Escolhe uma cidade no menu ao lado e descobre os pontos turísticos, a comida típica e a melhor época pra ir",
    comida: "Comida típica: cada cidade tem a sua, é só escolher um destino e conferir",
    epoca: "Melhor época: depende do lugar, então dá uma olhada em cada cidade"
  },
  rio: {
    titulo: "Rio de Janeiro",
    pontos: "Pontos turísticos: Cristo Redentor, Pão de Açúcar, Praia de Copacabana e Escadaria Selarón",
    comida: "Comida típica: feijoada e o clássico biscoito Globo com mate gelado",
    epoca: "Melhor época: de abril a junho e de setembro a outubro, com menos calor e menos chuva"
  },
  saopaulo: {
    titulo: "São Paulo",
    pontos: "Pontos turísticos: Avenida Paulista, Parque Ibirapuera, Mercado Municipal e Beco do Batman",
    comida: "Comida típica: pastel de feira, sanduíche de mortadela e pizza paulistana",
    epoca: "Melhor época: de março a maio e de agosto a outubro, com o tempo mais agradável"
  },
  salvador: {
    titulo: "Salvador",
    pontos: "Pontos turísticos: Pelourinho, Elevador Lacerda, Farol da Barra e Igreja do Bonfim",
    comida: "Comida típica: acarajé, moqueca baiana e vatapá",
    epoca: "Melhor época: de setembro a março, com mais sol e praia boa"
  },
  foz: {
    titulo: "Foz do Iguaçu",
    pontos: "Pontos turísticos: Cataratas do Iguaçu, Parque das Aves, Marco das Três Fronteiras e Usina de Itaipu",
    comida: "Comida típica: chipa, sopa paraguaia e peixe de rio",
    epoca: "Melhor época: de março a maio e de agosto a outubro, com as cataratas cheias e o clima bom"
  }
};

// Guarda qual destino está aberto agora
let destinoAtual = "inicio";

// Troca o título e os pontos turísticos quando clica no menu
function mostrarDestino(nome) {
  destinoAtual = nome;

  // Atualiza o título e o texto na tela
  document.getElementById("titulo").textContent = destinos[nome].titulo;
  document.getElementById("pontos").textContent = destinos[nome].pontos;

  // Esconde a caixinha e volta o botão ao normal ao trocar de cidade
  document.getElementById("info").classList.add("escondido");
  document.getElementById("botao").textContent = "Ver comida e melhor época";
}

// Mostra ou esconde a comida e a melhor época quando clica no botão
function alternarInfo() {
  const info = document.getElementById("info");
  const botao = document.getElementById("botao");

  // Coloca os textos do destino atual dentro da caixinha
  document.getElementById("comida").textContent = destinos[destinoAtual].comida;
  document.getElementById("epoca").textContent = destinos[destinoAtual].epoca;

  // Se estava escondida mostra, se estava visível esconde
  info.classList.toggle("escondido");

  // Muda o texto do botão de acordo com o estado
  if (info.classList.contains("escondido")) {
    botao.textContent = "Ver comida e melhor época";
  } else {
    botao.textContent = "Esconder infos";
  }
}