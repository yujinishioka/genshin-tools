const personagem = require('../../json/dados-personagens.json');
const artefato = require('../../json/dados-artefatos.json');

function buscar(){
    console.log(personagem)
}

function calcular(analise){
    for(i1=0; i1<artefato.length; i1++){
        //comparação de sets de 2/2
        if(i1==0){
            //gladiator's finale
            analise.ATK[13] += (artefato[0].set2 * analise.ATK[13] / 100)

            for(i2=0; i2<artefato.length;i2++){
                if(i2==0){
                    //set 4 gladiator's finale
                    if(analise.arma == "espada" || analise.arma == "espadao" || analise.arma == "lanca")
                    analise.dmgNormal += (artefato[0].set4)
                    console.log("Gladiador's Finale")
                }

                if(i2==1){
                    //wanderer's troupe
                    analise.EM += artefato[1].set2
                    console.log("wanderer's troupe")
                }

            //cálculo das skills por personagem
            if(analise.nome=="Albedo"){
                let aa1 = (analise.aa1[9]/100) * analise.ATK[13] * (1 + (analise.dmgNormal/100))
                console.log(aa1)
            }

            if(analise.nome=="Aloy"){
                let aa1 = (analise.aa1[9]/100) * analise.ATK[13] * (1 + (analise.dmgNormal/100))
                console.log(aa1)
            }
            }
        }
    }
}

calcular(personagem[1])