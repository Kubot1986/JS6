/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";
const mygtukas = document.querySelector("button");
const data = document.getElementById("output");
mygtukas.addEventListener("click", loadUsers);

async function loadUsers() {
  const users = await fetch(ENDPOINT);
  if (users.ok) {
    const usersJSON = await users.json();

    usersJSON.forEach((element) => {
      createUserCard(element);
    });
  } else {
    console.log("Kazkas sugedo" + users.status);
  }
}

function createUserCard(userData) {
  const login = document.createElement("p");
  login.textContent = userData.login;
  const img = document.createElement("img");
  img.src = userData.avatar_url;
  data.appendChild(login);
  data.appendChild(img);
  const pradingo = (document.getElementById("message").textContent = "");
}
