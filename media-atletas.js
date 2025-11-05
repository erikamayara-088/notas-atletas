let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

for (let i = 0; i < atletas.length; i++) {

    let atleta = atletas[i];
    let media = calculeMedia(atleta.notas);

    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(",")}`);
    console.log(`Média válida: ${media}`);
    console.log("");
}

function calculeMedia(notas) {
    let soma = 0;
    console.log("Sorted notes ", ordenar(notas))
    notas = ordenar(notas)
    removerMaiorNota(notas)
    removerMenorNota(notas)

    notas.map(function (nota) {
        soma += nota;
    });

    console.log("Soma ", soma)
    console.log("Quantidade ", notas.length);
    return soma / notas.length;
}

function removerMenorNota(notas){
    notas.splice(0, 1);
}

function removerMaiorNota(notas){
    notas.splice(notas.length-1)
}   

function ordenar(notas){
 return notas.sort(function (a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

}