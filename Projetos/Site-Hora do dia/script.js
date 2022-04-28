function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas `
    if (hora >=0 && hora < 12) {
        imagem.src = 'Imagens/manha.png'
    }else if(hora >= 12 && hora <18){
        imagem.src = 'Imagens/tarde.png'
    }else{
        imagem.src = 'Imagens/noite.png'
    }
   
}
