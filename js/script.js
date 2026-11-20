let contador = 0;

const total = document.querySelector("#total")
total.textContent = contador

const somar = document.querySelector("#somar") 
somar.addEventListener("click", () => {
    contador = contador + 1
    total.textContent = contador
}); 

const zerar = document.querySelector("#zerar") 
zerar.addEventListener("click", () => {
    contador = 0
    total.textContent = contador
});