function carregar() {
    var mensagem = window.document.getElementById('mensagem')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    mensagem.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12) {
        //BOM DIA!!
        imagem.src = 'imagens/manha.jpg'
        document.body.style.background = '#FBE8CF'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!!
        imagem.src = 'imagens/tarde.jpg'
        document.body.style.background = '#BBD9F3'
    } else {
        //BOA NOITE!!
        imagem.src = 'imagens/noite.jpg'
        document.body.style.background = '#003878'
    }
}

