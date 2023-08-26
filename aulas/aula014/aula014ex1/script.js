function contar() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('pass')
    let res = document.getElementById('resultado')

    if (ini.value.lenght == 0 || fim.value.length == 0 || passo.value.lenght == 0) {
        res.innerHTML = 'Impossivel Contar!'
        //window.alert('[ERRO] Faltam dados.')
        
    } else {
        res.innerHTML = 'contando: </br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }

        if (i < f) {
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} 👉`
            }
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} 👉`
            }
        }
        res.innerHTML += `🏁`
    }
}
