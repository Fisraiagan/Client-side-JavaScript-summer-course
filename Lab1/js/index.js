 characterName = document.querySelector(".CharacterName");
age = document.querySelector(".age");
isSuperhero = document.querySelector(".isSuperhero");
specialpowers = document.querySelector(".specialpowers");
favoriteFood = document.querySelector(".favoriteFood");

userNameInput = document.querySelector("#characterName");
ageInput = document.querySelector("#ageInput");
updateAgeButton = document.querySelector("#updateAgeButton");
updateNameButton = document.querySelector("#updateNameButton");


isSuperhero.textContent = 'Is a Superhero: '+' '+true;
specialpowers.textContent = 'Special Powers: '+' '+'Flying, Super Strength, acrobatics';
favoriteFood.textContent = 'Favorite Food: '+' '+'Hamburger';

let randomNumber = Math.floor(Math.random() * 100) + 1;



