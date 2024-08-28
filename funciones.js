function esPrimo(n){
    if (n <=1){
        return false;
    }
    else{
        for (let i = 2; i <= Math.sqrt(n);i++){
            if(n%i==0){
                return false;
                }
            }
        return true;
        }
    }


function obtenerSigPrimo(){
    let n = parseInt(document.querySelector('.contador').textContent);
    n++
    while (!esPrimo(n)){
        n++;
    }
    return n;
}

function obtenerAntPrimo() {
    let n = parseInt(document.querySelector('.contador').textContent);
    
    if (n <= 2) {
        return; 
    }
    
    n--; 
    while (n > 1 && !esPrimo(n)) {
        n--;
    }
    
    return n; 
}

export {obtenerSigPrimo, obtenerAntPrimo}