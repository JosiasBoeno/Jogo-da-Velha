var jogador = "x"
var jogadas = 0

function check(id) {
    var src = checkSrc(id)
    var cpu = document.getElementById("cpu").checked
    
    if (src == "t.png") {
        document.getElementById(id).src = jogador + ".png"      
        jogadas++
        if(checkVitoria()) {
            alert("Fim do jogo! Vitoria Do: " + jogador);
            location.reload()
            end(jogadaDoCPU())
        }
        if(jogadas >= 9 && checkVitoria() == false) {
            alert("Jogo Empatado!")
            location.reload()
        }
        if (jogador == "x") {
            jogador = "o"
        } else {
            jogador = "x"
        }
    }
    if(cpu == true && jogador == "o") {
        check(jogadaDoCPU())
    }
}  

function jogadaDoCPU() {
    if (checkSrc("cel_5") == "t.png") {
        return "cel_5"
    } 
    return "cel_" + Math.floor((Math.random() * 9) + 1)
}

function checkSrc(id) {
    var src = document.getElementById(id).src
    return src.substring(src.length - 5, src.length)
}

function checkVitoria() {
    if((checkSrc("cel_1") == checkSrc("cel_2")) && (checkSrc("cel_1") == checkSrc("cel_3")) && (checkSrc("cel_1") != "t.png"))
    {
        return true
    }
    if((checkSrc("cel_4") == checkSrc("cel_5")) && (checkSrc("cel_4") == checkSrc("cel_6")) && (checkSrc("cel_4") != "t.png"))
    {
        return true
    }
    if((checkSrc("cel_7") == checkSrc("cel_8")) && (checkSrc("cel_7") == checkSrc("cel_9")) && (checkSrc("cel_7") != "t.png"))
    {
        return true
    }
    if((checkSrc("cel_1") == checkSrc("cel_4")) && (checkSrc("cel_1") == checkSrc("cel_7")) && (checkSrc("cel_1") != "t.png"))
    {
        return true
    }
    if((checkSrc("cel_2") == checkSrc("cel_5")) && (checkSrc("cel_2") == checkSrc("cel_8")) && (checkSrc("cel_2") != "t.png"))
    {
        return true
    }
    if((checkSrc("cel_3") == checkSrc("cel_6")) && (checkSrc("cel_3") == checkSrc("cel_9")) && (checkSrc("cel_3") != "t.png"))
    {
        return true
    }
    if((checkSrc("cel_3") == checkSrc("cel_5")) && (checkSrc("cel_3") == checkSrc("cel_7")) && (checkSrc("cel_3") != "t.png"))
    {
        return true
    }
    if((checkSrc("cel_1") == checkSrc("cel_5")) && (checkSrc("cel_1") == checkSrc("cel_9")) && (checkSrc("cel_1") != "t.png"))
    {
        return true
    }
    return false
}