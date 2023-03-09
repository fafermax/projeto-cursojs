function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById(`txtano`)
   var res = document.querySelector(`div#res`)

   if (fano.value == 0 || fano.value > ano) {
    window.alert(`Verifique os dados e tente novamente`)
   } else {
    var fsex = document.getElementsByName(`radsex`)
    var idade = ano - Number(fano.value)
    //res.innerHTML = `Idade Calculada: ${idade}`... so para testar se estava correto.
    var genero = ``
    //criacao da tag de imagem
    var img = document.createElement(`img`)
    img.setAttribute(`id`,`foto`)
    if (fsex[0].checked) {
      genero = `Homem`
      if (idade >=0 && idade <10) {
         //crianca
         img.setAttribute(`src`,`bebe_homem.jpg`)
      } else if (idade < 21) {
         //jovem
         img.setAttribute(`src`, `jovem_homem.jpg`)
      } else if (idade < 50) {
         //adulto
         img.setAttribute(`src`,`adulto_homem.jpg`)
      } else {
         //idoso
         img.setAttribute(`src`,`idoso_homem.jpg`)
      }
    } else if (fsex[1].checked) {
       genero = `Mulher`
       if (idade >=0 && idade < 10) {
         //crianca
         img.setAttribute(`src`,`bebe_mulher.jpg`)
      } else if (idade < 21) {
         //jovem
         img.setAttribute(`src`,`jovem_mulher.jpg`)
      } else if (idade < 50) {
         //adulto
         img.setAttribute(`src`,`adulto_mulher.jpg`)
      } else {
         //idoso
         img.setAttribute(`src`,`idoso_mulher.jpg`)
      }
   }
    res.style.textAlign = `center`
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
   }
}