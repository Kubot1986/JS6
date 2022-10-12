/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stili22ų;
------------------------------------------------------------------- */
const inputKilogramais = document.getElementById("search");
const form = document.querySelector("form");
const konvertuotiSvarai = document.createElement("p");
const konvertuotiGramai = document.createElement("p");
const konvertuotiUncijos = document.createElement("p");
const outputas = document.getElementById("output");
form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const kg = Number(inputKilogramais.value);
  const sv = kg * 2.2046;
  const gr = kg / 0.001;
  const un = kg * 35.274;

  konvertuotiSvarai.textContent = "Svarai: " + sv.toFixed(0);
  konvertuotiGramai.textContent = "Gramai: " + gr.toFixed(0);
  konvertuotiUncijos.textContent = "Uncijos: " + un.toFixed(0);
  outputas.appendChild(konvertuotiSvarai);
  outputas.appendChild(konvertuotiGramai);
  outputas.appendChild(konvertuotiUncijos);
}
