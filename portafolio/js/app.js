const cards = document.querySelectorAll(".card");

function loadAnimationsCards() {
  setTimeout(() => {
    cards[cards.length - 1].classList.add("elevator");
  }, 4000);

  setTimeout(() => {
    cards[cards.length - 2].classList.add("elevator");
  }, 5000);

  setTimeout(() => {
    cards[cards.length - 3].classList.add("elevator");
    
  }, 8000);

  setTimeout(() => {
    cards[cards.length - 4].classList.add("elevator");
  }, 11000);


  setTimeout(() => {
    cards[cards.length - 4].classList.remove("elevator");
}, 13000);

  setTimeout(() => {
    cards[cards.length - 3].classList.remove("elevator");
  }, 14000);

  setTimeout(() => {
    cards[cards.length - 2].classList.remove("elevator");
  }, 15000);

  setTimeout(() => {
    cards[cards.length - 1].classList.remove("elevator");
  }, 16000);
}
loadAnimationsCards();

setInterval(() => {
loadAnimationsCards();
    
}, 23000);


let textAnimado = document.getElementsByClassName("text")[0];

textAnimado.innerHTML = textAnimado.innerHTML.split("").map((letra,index)=>`<span class="efectonombre" style="transition-delay:${index*40}ms; filter: hue-rotate(${index*30}deg)">${letra} </span>` ).join(" ")


const divnombre = document.createElement("div");
const divapellido = document.createElement("div");

divnombre.id = "nombre";

const spannombre = document.querySelectorAll(".efectonombre");

spannombre.forEach( (letra,index) => {
  if (index >= 0 && index < 9) {
    divnombre.appendChild(spannombre[index])
  } else {
    divapellido.appendChild(spannombre[index])
  }
})

textAnimado.prepend(divnombre);
textAnimado.appendChild(divapellido);