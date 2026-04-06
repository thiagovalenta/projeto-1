function calcular(){
            //let-declarar variável
            //js é uma linguagem n tipada, n tem tipo de dados
            //Number()-converte texto em nmr
            //recupera o valor dos itens avulsos
            let qtdeArroz = Number(document.getElementById("qtdeArroz").value)//recupera o valor informado no elemnto com id
            let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value) //recupera o valor informado no elemnto com id
            let qtdeOleo = Number (document.getElementById("qtdeOleo").value)
            let qtdeMacarrao = Number (document.getElementById("qtdeMacarrao").value)
            //calcula o valor total itens avulsos
            let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)
            //metas
            //recupera a cor da equipe
            let cor = document.getElementById("cor").value
            let metaprova1 //decara variável
            if (cor == "amarela"){
                metaprova1= 54
            }
            else if ( cor == "cinza"){
                metaprova1=51
            }
            else if (cor == "laranja"){
                metaprova1= 21
            }
            else if (cor == "marrom"){
                metaprova1 = 88
            }
            else if( cor =="preta"){
                metaprova1 = 60
            }

            let = Number(document.getElementById("kitAlimentacao").value)
            if (kitAlimentacao >= metaprova1){
                pontos = pontos + 5000
            
                if(kitAlimentacao > metaprova1){
                    //ganhamos a mais de pontos por itens que ultrapassamos
                    pontos = pontos + (kitAlimentacao - metaprova1) * (5000/metaprova1)
                }

            }
            else {
                pontos= pontos + kitAlimentacao * (5000 / metaprova1)
            }
            //vms exibir o resultado p o usuário
            document.getElementById("resultado").innerText = "Pontuação Total: " + pontos +" pontos"
        }