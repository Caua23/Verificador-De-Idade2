function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value < 1900 || fano.value > ano){
        res.innerHTML = `Sua Idade é muito antiga ou Esta Errada `
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 14){
                //Criança
                img.setAttribute('src', 'Assets/nenemH.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'Assets/adolecenteH.jpg')
            }else if (idade < 60){
                //adulto
                img.setAttribute('src', 'Assets/adultoH.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'Assets/veio.jpg')
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 14){
                //Criança
                img.setAttribute('src', 'Assets/nenemM.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'Assets/adolecenteM.jpg')
            }else if (idade < 60){
                //adulto
                img.setAttribute('src', 'Assets/adultoM.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'Assets/veia.jpg')
            
            }
        }


        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}


