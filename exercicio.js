verificarMedalha()
{
    let posicao = Number(document.getElementById("posicao").value)
    let div = (document.getElementById("resultadoMedalha"))
    //checar o conteúdo da variável
    switch (posicao){//não funciona com < ou >, so por igualdade
        case 1: 
            div.innerText = "Medalha de ouro"
            div.style.color="gold"
        break
        case 2: 
            div.innerText ="Medalha de Prata"
            div.style.color="silver"
        break
        case 3: 
            div.innerText = "Medalha de Bronze"
            div.style.color="brown"
        break
        default : 
            div.innerText = "Posição sem medalha definida"
        break
    }
}
verificarPadrinho()
{
    let padrinho = document.getElementById("padrinho").value.toLowerCase();
    let resultado = document.getElementById("resutadoPadrinho")
    let prof = ""
    switch (padrinho){
        case "computação":
            case "sistemas": prof = "Prof.Daniel"
            if
    }
}
