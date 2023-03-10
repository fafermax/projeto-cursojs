function carregar() {

    var msg = document.getElementById(`msg`)
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
   // teste sem mudar o relogio do windows var hora = 23
    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >=0 && hora <12) {
        //bom dia
        img.src = `manha.jpg`
        document.body.style.background = `#e2cd9f`
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = `tarde.jpg`
        document.body.style.background = `#b9846f`
    } else {
        //boa noite
        img.src = `noite.jpg`
        document.body.style.background = `#515154`
    }

}
