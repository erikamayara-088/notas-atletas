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
    removerMaiorNota(notas)
    removerMenorNota(notas)
    console.log("notas final", notas)

    notas.map(function (nota) {
        soma += nota;
    });

    console.log("Soma ", soma)
    console.log("Quantidade ", notas.length);
    return soma / notas.length;
}

function removerMenorNota(notas){
    let menorNota = 0
    for (let i = 1; i < notas.length; i++){
        if (notas[menorNota] > notas[i]){
            menorNota = i
        }
    }
    notas.splice(menorNota, 1);
}

function removerMaiorNota(notas){
    let maiorNota = 0
    for ( let i = 1; i < notas.length; i++){     
        if ( notas[maiorNota] < notas[i]) {
            maiorNota = i
        }
    }
    notas.splice(maiorNota, 1)
}   