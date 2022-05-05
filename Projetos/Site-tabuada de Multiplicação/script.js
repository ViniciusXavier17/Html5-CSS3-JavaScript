function calcular(){
    let numero = window.document.getElementById('txtnum')
    let tab = window.document.getElementById('seltabu')
    if(numero.value.length == 0){
        window.alert('Campos não preenchidos')
    }else{
        let n = Number(numero.value)
        tab.innerHTML = ''
        for (let i = 0; i < 10;i++){
            let item = window.document.createElement('option')
            item.text = `${n} x ${i+1} = ${n*(i+1)}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}
