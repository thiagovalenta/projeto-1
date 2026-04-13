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
            let metakit//decara meta de kit
            if (cor == "amarela"){
                metakit= 54
               
            }
            else if ( cor == "cinza"){
                metakit=51
                 
            }
            else if (cor == "laranja"){
                metakit= 21
        
            }
            else if (cor == "marrom"){
                metakit = 88
                
            }
            else if( cor =="preta"){
                metakit= 60
                
            }
            //calcula meta de suplemento e do leite
            let metasuplemento //decara meta de suplemento
            let metaleite = metakit

            if (metakit % 2==0) {//par
                metasuplemento = metakit
            }
            else {//impar
                metasuplemento = (metakit / 2) + 1
            }
            let metasangue = metasuplemento
            let kitAlimentacao= Number(document.getElementById("kitAlimentacao").value)
            if (kitAlimentacao >= metakit){
                pontos = pontos + 5000
            
                if(kitAlimentacao >  metakit){
                    //ganhamos a mais de pontos por itens que ultrapassamos
                    pontos = pontos + (kitAlimentacao - metakit) * (5000/metakit)
                }

            }
            else {
                pontos = pontos + kitAlimentacao * (5000 / metaprova1)
            }
            //vms exibir o resultado p o usuário
            let qtdelatas = Number (document.getElementById(qtdelatas).value)
            if (qtdelatas >= metasuplemento){
                pontos = pontos + 5000
                if (qtdelatas > metasuplemento){
                    pontos = pontos + (qtdelatas - metasuplemento)* (5000/metasuplemento)
                }

            }
            else {
                pontos = pontos + (qtdelatas * (5000/metasuplemento))
            }
            //calcula a pontuação de leite
            let qtdeLeite = Number (document,getElementById("qtdeLeite").value)
             if (cor == "amarela"){
                metaleite= 54
               
            }
            else if ( cor == "cinza"){
                metaleite=51
                 
            }
            else if (cor == "laranja"){
                metaleite= 21
        
            }
            else if (cor == "marrom"){
                metaleite = 88
                
            }
            else if( cor =="preta"){
                metaleite= 60
                
            }

            //cacula a doação de sangue
            let qtdeDoacao = Number (document,getElementById("qtdeDoacao").value)
            if (metakit % 2==0) {//par
                metasangue = metakit
            }
            else {//impar
                metasangue = (metakit / 2) + 1
            }
            



            document.getElementById("resultado").innerText = "Pontuação Total: " + pontos.toFixed(2) +" pontos"
        }