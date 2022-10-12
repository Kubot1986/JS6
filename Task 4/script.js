/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "cars.json";
function autoSkaidymas(cars) {
  const outputas = document.getElementById("output");
  for (let i = 0; i < cars.length; i++) {
    const container = document.createElement("div");
    const marke = document.createElement("div");
    const modelis = document.createElement("div");
    marke.textContent = cars[i].brand;
    modelis.textContent = cars[i].models;
    container.className = "container";
    marke.className = "markeContainer";
    modelis.className = "modelisContainer";
    container.append(marke);
    container.append(modelis);
    outputas.append(container);
  }
}
fetch(ENDPOINT)
  .then((res) => res.json())
  .then((resJSON) => {
    autoData = resJSON;
    autoSkaidymas(autoData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
