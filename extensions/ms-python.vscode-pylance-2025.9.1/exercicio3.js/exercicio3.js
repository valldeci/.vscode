// data futura (coloque a data que você quiser)
let dataFutura = new Date("2025-12-31 23:59:59");

function calcularTempoRestante(dataFutura) {
  let agora = new Date();
  let diferenca = dataFutura - agora;

  let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  let horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  return {
    dias: dias,
    horas: horas,
    minutos: minutos,
    segundos: segundos
  };
}

function atualizarTemporizador() {
  let t = calcularTempoRestante(dataFutura);

  console.log(
    "Faltam: " +
    t.dias + " dias " +
    t.horas + " horas " +
    t.minutos + " minutos " +
    t.segundos + " segundos"
  );
}

// atualiza a cada 1 segundo
setInterval(atualizarTemporizador, 1000);
// data futura (coloque a data que você quiser)
let dataFutura = new Date("2025-12-31 23:59:59");

function calcularTempoRestante(dataFutura) {
  let agora = new Date();
  let diferenca = dataFutura - agora;

  let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  let horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  let segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  return {
    dias: dias,
    horas: horas,
    minutos: minutos,
    segundos: segundos
  };
}

function atualizarTemporizador() {
  let t = calcularTempoRestante(dataFutura);

  console.log(
    "Faltam: " +
    t.dias + " dias " +
    t.horas + " horas " +
    t.minutos + " minutos " +
    t.segundos + " segundos"
  );
}

// atualiza a cada 1 segundo
setInterval(atualizarTemporizador, 1000);
