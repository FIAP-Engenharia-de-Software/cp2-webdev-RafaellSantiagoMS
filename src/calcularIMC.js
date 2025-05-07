// ## Calculadora de IMC (1 ponto)

// **Enunciado:**

// Crie a função calcularIMC que receba peso e altura e retorne:

// - `"Abaixo do peso"` se < 18.5
// - `"Peso normal"` se entre 18.5 e 24.9
// - `"Sobrepeso"` se entre 25 e 29.9
// - `"Obesidade"` se ≥ 30
// - `"Erro"` para dados inválidos

// **Fórmula IMC**: peso / (altura * altura)

function calcularIMC(peso, altura) {
  return peso
  return altura
}

function abaixoPeso(calcularIMC){
  if(peso < 18,5){
    alert("Abaixo do peso")
  }

  }

function pesoNormal(calcularIMC) {
  if(peso > 18.5 && peso < 24.9)
    alert("Peso Normal")
}

function sobrePeso(calcularIMC){
  if(peso > 25 && peso < 29.9)
    alert("Sobrepeso")
}

function pesoObesidade(calcularIMC){
  if(peso => 30 )
    alert("Obesidade")
}

function pesoErro(calcularIMC){
  if(peso == "")
    alert("Dados invalidos")
}


// NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcularIMC };