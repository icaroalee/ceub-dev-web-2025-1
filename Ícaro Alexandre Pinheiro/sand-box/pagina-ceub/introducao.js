//Se precisar comentar use //

var ola = "Olá Mundo! JS";
console.log(ola);

function log(valor) {
  console.log(valor);
}

//Tipos de variáveis

var valor = 10;
log(typeof valor); //number

var palavra = "Fernando";
log(typeof palavra); // string

var isOK = true;
log(typeof isOK); //boolean

var meuObj = {}; //Object
var meuArray = []; //Array
var nulo = null; // Null
var variavelFlamengo; //Undefined

//Escopo de variável
function compararEscopo() {
  if (true) {
    var varDentro = "Var dentro do bloco";
    let letDentro = "Let dentro do bloco";
    const constDentro = "Const dentro do bloco";

    log(varDentro); //Funciona
    log(letDentro); //Funciona
    log(constDentro); //Funciona
  }

  log(palavra); //Funciona! (Global)
  log(varDentro); //Funciona! (Escopo)
  // log(letDentro); //Erro! (Acesso somente no bloco)
  // log(constDentro); //Erro! (Acesso somente no bloco)
}
compararEscopo();

//Operações Simples
const n1 = 1;
const n2 = 5;
const valorNumericoStr = "5";

log(n1 + n2); //6
log(n1 - n2); //-4
log(n1 / n2); //0.2
log(n1 * n2); //5

log(n1 == n2); // false
log(n2 == valorNumericoStr); // true
log(n2 === valorNumericoStr); // false

log((n2 > n1 || n2 > n1) && 1 > 2); //false

//Manipulação de arrays
let frutas = ["Maça", "Banana", "Laranja"];
log(frutas.length); //3
log(frutas[1]); // Banana

//adicionando novo item
frutas.push("Manga");

log(frutas);

//Remover o último elemento
frutas.pop();

log(frutas);

//Estruturas condicionais
const idade = 18;
if (idade >= 18) {
  log("Sou Adulto");
} else if (idade >= 2) {
  log("Sou uma criança");
} else {
  log("Sou bebê");
}

const instituicao = "CEM10";

switch (instituicao) {
  case "CEM10":
    log("ESCOLA");
    break;
  case "CIL":
    log("ESCOLA DE LÍNGUAS");
    break;
  case "CEUB":
    log("FACULDADE");
    break;
  default:
    log("Não é instituição");
}

//Estrutura de repetição
for (let loop = 0; loop < 5; loop++) {
  log(`Meu valor no loop: ${loop}`);
}

let valorWhile = 0;
while (valorWhile < 5) {
  log(`Meu valor no loop: ${valorWhile}`);
  valorWhile++;
}

//Funções Assíncronas permitem executar operações
// sem bloquear a execução do código
async function buscarDados() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Dados Recebidos"), 4 * 1000);
  });
}

async function executarBusca() {
  log("Buscando...");

  let resultado = await buscarDados();

  log(resultado);
}

executarBusca();

const meuMetodo = function exemploMetodo() {
  log("Execeutei por metodo normal");
};

log(meuMetodo);

const objTeste = {
  oi() {
    log("OI");
  },
  xau() {
    log("XAU");
  },
};

objTeste.oi();
objTeste.xau();

//Manipulação do DOM
//Aqui criamos um elemento dinamicamente e o adicionamos ao corpo da página
document.addEventListener("DOMContentLoaded", () => {
  let titulo = document.createElement("h2");
  titulo.innerText = "Olá DOM";
  document.body.appendChild(titulo);
});

function toggleImagem() {
  let img = document.getElementById("minhaImagem");
  img.style.display = img.style.display === "none" ? "block" : "none";
}

function mostrarValorCombo() {
  let combo = document.getElementById("meuCombo");
  alert("Valor selecionado: " + combo.value);
}

function mostrarValorRadio() {
  let radios = document.getElementsByName("tamanho");

  for (let radio of radios) {
    if (radio.checked) {
      alert("Opção selecionada: " + radio.value);
      break;
    }
  }
}

function mostrarValorCheckbox() {
  let checkboxs = document.getElementsByName("interesse");
  let selecionados = [];

  for (let checkbox of checkboxs) {
    if (checkbox.checked) {
      selecionados.push(checkbox.value);
    }
  }

  alert(
    "Selecionados: " +
      (selecionados.length > 0 ? selecionados.join(", ") : "Nenhum")
  );
}
