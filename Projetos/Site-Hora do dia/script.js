function carregar() {
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas `
    
    if (hora >=0 && hora < 12) {
        imagem.src = 'Imagens/manha.png'
        document.body.style.background = '#ffe973'
    }else if(hora >= 12 && hora < 18){
        imagem.src = 'Imagens/tarde.png'
        document.body.style.background = '#edb96d'
    }else{
        imagem.src = 'Imagens/noite.png'
        document.body.style.background = '#182946'
    }
   
}
