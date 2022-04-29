function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var anoNasc = window.document.getElementById('txtano')
    var idade
    var res = window.document.getElementById('res')
    if(anoNasc.value.length == 0 ||anoNasc.value > ano){
       /* window.alert('ERRO: Verifique se os dados foram preenchidos corretamnete')*/
    }else{
        var sexo = window.document.getElementsByName('radsex')
        idade = ano - Number(anoNasc.value)

    }



}