// Classificador de Nota (1 ponto)

// **Enunciado:**

// Implemente a função classificarNota, que receba uma nota e:

// - Retorna `"Aprovado"` se nota ≥ 6;
// - Retorna `"Reprovado"` se nota < 6;
// - Retorna `"Nota inválida"` se for um valor fora de 0 a 10 ou não numérico.

function classificarNota(nota) {
  return nota
}
function notaAprovado(classificarNota){
  if(nota => 6){
    alert("Aprovado")
    }
}
function notaReprovado(classificarNota){
  if(nota < 6){
    alert("Reprovado")
  }
}
function notaInvalida(classificarNota){
  if(nota >= 10 && nota < 0){
    alert("Nota invalida")
  }
}
//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { classificarNota };