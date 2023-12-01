const butao = document.getElementById('butao');
const canva = document.getElementById('textoEscrito');

// Array do alfabeto
const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Frase escolhida
butao.addEventListener('click', ()=>{
    canva.innerHTML = "";
    var frase = document.getElementById('frase').value;

    if(frase == ''){
        alert('Por favor preencher o espaço abaixo')
    }
    else{
        frase = frase.toLocaleLowerCase();
        frase = frase.split('');
        
        // Aqui a magia acontece hehe
        var num = 0;
        
        var fraseDesc = "";
        
        function apareceFrase(){
            console.log(frase.length);
            alfabeto.forEach(letra => {
                setTimeout(()=>{
                    if(letra == frase[num] || frase[num] == " "){
                        fraseDesc = fraseDesc + frase[num]
                        canva.innerHTML += `<p>${fraseDesc}</p>`
                        num++
                        apareceFrase()   
                        return false
                    }
                    else if(letra != frase[num] && num < frase.length){
                        canva.innerHTML += `<p>${fraseDesc + letra}</p>`
                        return false
                    } 
                }, 300)
                
            });
        }
        
        apareceFrase()
    }
})


