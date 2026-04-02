function calcular(){
            //let-declarar variável
            //js é uma linguagem n tipada, n tem tipo de dados
            //Number()-converte texto em nmr
            let qtdeArroz = Number(document.getElementById("qtdeArroz").value)//recupera o vaor informado no elemnto com id
            let qtdeFeijao = Number(document.getElementById("qtdeFeijao").value) //recupera o vaor informado no elemnto com id
            let qtdeOleo = Number (document.getElementById("qtdeOleo").value)
            let qtdeMacarrao = Number (document.getElementById("qtdeMacarrao").value)
            //calcula o valor total itens avulsos
            let pontos = (qtdeArroz * 10) + (qtdeFeijao * 8) + (qtdeOleo * 4) + (qtdeMacarrao * 2)
            //metas
            let = Number(document.getElementById("kitAlimentacao").value)
            if (kitAlimentacao >= 60){
                pontos = pontos + 5000
            
                if(kitAlimentacao > 60){
                    //ganhamos 83.33 a mais de pontos por itens que ultrapassamos
                    pontos = pontos + (kitAlimentacao - 60) * 83.33
                }

            }
            else {
                pontos= pontos + kitAlimentacao * 83.33
            }
            //vms exibir o resultado p o usuário
            document.getElementById("resultado").innerText = "Pontuação Total: " + pontos +" pontos"
        }