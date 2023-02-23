var tæl = 0;

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
  console.log(data);
}

function showProducts(data) {
  console.log(data);

  if (tæl < 3) {
    tæl++;

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

    copy.querySelector(".ui-card").addEventListener("click", function () {
      location.href = "product-page.html?q:name=" + data.name;
    });

    copy.querySelector(".product-name").textContent = data.name;
    document.querySelector(".products").appendChild(copy);
  } else {
    console.log("tæl er over 3");
  }
}
document.querySelector(".mobile-burger").addEventListener("click", clickfun);

function clickfun() {
  document.querySelector(".mobile-menu").classList.toggle("mobile-menu-toggle");
}
