fetch("https://drinks-df78.restdb.io/rest/drinks", {
  method: "get",
  headers: {
    "x-api-key": "63ef53be478852088da683cf",
  },
})
  .then((e) => e.json())
  .then(dosomethin);

function dosomethin(data) {
  data.forEach(showProducts);
}

function showProducts(data) {
  console.log(data);

  const template = document.querySelector(".productTemplate").content;
  const copy = template.cloneNode(true);

  data.smag.forEach(smagarray);

  function smagarray(data) {
    copy.querySelector(".smag-container").innerHTML += '<p class="product-smag">' + data + "</p>";
  }

  if (data.billede == null) {
    copy.querySelector(".product-pic").style.backgroundImage = "url('img/bruger.webp')";
  } else {
    copy.querySelector(".product-pic").style.backgroundImage = "url(" + data.billede + ".webp)";
  }

  if (data.alkoholfri == true) {
    copy.querySelector(".alkoholfri").textContent = "Alkoholfri";
  } else {
    copy.querySelector(".alkoholfri").textContent = "";
  }

  copy.querySelector(".product-name").textContent = data.name;
  document.querySelector(".products").appendChild(copy);
}
