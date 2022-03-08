const personagem = require('../../json/dados-personagens.json');
const artefato = require('../../json/dados-artefatos.json');

function buscar(){
    console.log(personagem)
}

function calcular(analise){
    for(i=0; i<artefato.length; i++){
        if(i==0){
            console.log(analise.ATK[13])
            analise.ATK[13] += (artefato[0].set2 * analise.ATK[13] / 100)
            console.log(analise.ATK[13])
            console.log(artefato[0].set2)
        }
    }
}

calcular(personagem[0])