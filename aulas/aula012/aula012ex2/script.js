function verificar() {
    var data = new Date() // pegar o valor data
    var ano = data.getFullYear() //Ano atual
    var fAno = document.getElementById('ano') //pega o ano que o usuario deu.
    var result = document.querySelector('div#resultado') //mostra o resultado
    if(fAno.value.length == 0  || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fSex = document.getElementsByName('sex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'imagens/')
        if (fSex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 3) {
                // BEBE
                imagem.setAttribute('src', 'imagens/bebe-menino.jpg')
            } else if (idade < 12) {
                //CRIANÇA
                imagem.setAttribute('src', 'imagens/menino.jpg')
            } else if (idade < 22) {
                //JOVEM
                imagem.setAttribute('src', 'imagens/homem-jovem.jpg')
            } else if (idade < 50) {
                //ADULTO
                imagem.setAttribute('src', 'imagens/homem-adulto.jpg')
            } else if (idade < 116){
                //IDOSO
                imagem.setAttribute('src', 'imagens/idoso.jpg')
            } else {
                //MORTO
                imagem.setAttribute('src', 'imagens/caixao.jpg')
            }
        } else if (fSex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 3) {
                // BEBE
                imagem.setAttribute('src', 'imagens/bebe-menina.jpg')
            } else if (idade < 12) {
                //CRIANÇA
                imagem.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade < 22) {
                //JOVEM
                imagem.setAttribute('src', 'imagens/mulher-jovem.jpg')
            } else if (idade < 50) {
                //ADULTO
                imagem.setAttribute('src', 'imagens/mulher-adulta.jpg')
            } else if (idade < 116) {
                //IDOSO
                imagem.setAttribute('src', 'imagens/idosa.jpg')
            } else {
                //MORTO
                imagem.setAttribute('src', 'imagens/caixao.jpg')
            }
        }
        imagem.style.marginTop = '10px'
        imagem.style.width = '200px'
        imagem.style.height = '200px'
        imagem.style.borderRadius = '100%'
        result.innerHTML = `Detectamos ${genero} com ${idade} ano(s)`
        result.appendChild(imagem)
    }
}
