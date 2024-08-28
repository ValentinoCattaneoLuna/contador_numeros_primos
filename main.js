import { obtenerSigPrimo, obtenerAntPrimo} from './funciones.js'

document.addEventListener('click', (event) => {
    if (!event.target.closest('.mode-switch')) {
        if (event.button === 0) {
            let primo = obtenerSigPrimo();
            document.querySelector('.contador').textContent = primo;
        }
    }
});

document.addEventListener('contextmenu', (event) => {
    if (!event.target.closest('.mode-switch')) { 
        event.preventDefault(); 
        let primo = obtenerAntPrimo();
        if (primo) {
            document.querySelector('.contador').textContent = primo;
        }
    }
});

let element = document.body;
document.querySelector('.input').addEventListener('input', function(){
    element.classList.toggle('dark-mode')
});





