const user_name = prompt('Inserisci il tuo nome');
console.log(user_name);

const user_surname = prompt('Inserisci il tuo cognome');
console.log(user_surname);

const favourite_colour = prompt('Inserisci il tuo colore preferito');
console.log(favourite_colour);

const passwordElement = document.getElementById('password');
console.log(passwordElement);

passwordElement.innerHTML= `${user_name}${user_surname}${favourite_colour}23`;