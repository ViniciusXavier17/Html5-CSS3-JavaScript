function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoNasc = window.document.getElementById
    ('txtano')
    var sexo = window.document.getElementsByTagName('radsex')
    var idade
    var res = window.document.getElementById('res')
    var imagem = document.createElement('img')
    imagem.setAttribute('id', 'foto')
    if(anoNasc.value.length == 0 ||anoNasc.value > ano){
       /* window.alert('ERRO: Verifique se os dados foram preenchidos corretamnete')*/
    }else{
        var sexo = window.document.getElementsByName('radsex')
        idade = ano - Number(anoNasc.value)
        var genero
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
                imagem.setAttribute('src', 'Imagens/bebeM.png')
            }else if(idade >=10 && idade <18){
              imagem.setAttribute('src', 'Imagens/jovemM.png')
            }else if(idade >=18 && idade <60){
                imagem.setAttribute('src', 'Imagens/adultoM.png')
            }else {
                imagem.setAttribute('src', 'Imagens/idosoM.png')
            }
        }else{
            genero = 'Mulher' 
            if(idade >=0 && idade < 10){
                imagem.setAttribute('src', 'Imagens/bebeF.png')
            }else if(idade >=10 && idade <18){
              imagem.setAttribute('src', 'Imagens/jovemF.png')
            }else if(idade >=18 && idade <60){
                imagem.setAttribute('src', 'Imagens/adultoF.png')
            }else {
                imagem.setAttribute('src', 'Imagens/idosoF.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${genero} com ${idade} anos`
        res.appendChild(imagem)
        
    }



}