const urlParams = new URLSearchParams(window.location.search);

console.log(urlParams);
const id = urlParams.get("id");

console.log("her er id:"+id);

fetch(`https://drinks-df78.restdb.io/rest/drinks?q={"name": "${id}"}`, {
  method: "get",
  headers: {
    "x-api-key": "63ef53be478852088da683cf",
  },
})
  .then((e) => e.json())
  .then(handeleData);

function handeleData(data) {
  console.log(data);
  const templateContent = document.querySelector(".singleProduct").content;
  const newTemplate = templateContent.cloneNode(true);

  newTemplate.querySelector(".header-container h1").textContent = data[0].name;

  data[0].spiritus.forEach(spiritusarray);
  function spiritusarray(data) {
    newTemplate.querySelector(".spiritus").innerHTML += "<span>" + data + " </span>";
  }

  data[0].smag.forEach(smagarray);
  function smagarray(data) {
    console.log(data);
    newTemplate.querySelector(".smag").innerHTML += "<span>" + data + " </span>";
  }

  newTemplate.querySelector(".time").textContent = data[0].tid;

  newTemplate.querySelector(".beskrivelse").textContent = data[0].beskrivelse;

  data[0].ingredienser.forEach(ingredienserarray);
  function ingredienserarray(data) {
    newTemplate.querySelector(".ingredienser").innerHTML += "<li>" + data + " </li>";
  }

  data[0].fremgangsmåde.forEach(makearray);
  function makearray(data) {
    newTemplate.querySelector(".make").innerHTML += "<li>" + data + " </li>";
  }

  newTemplate.querySelector(".img-container img").src = data[0].billede + ".webp";

  document.querySelector(".insert-drink").appendChild(newTemplate);
}
