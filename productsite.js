const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);
if (id == null) {
  fetch('https://drinks-df78.restdb.io/rest/drinks', {
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

} else if(id != null) {
  
  fetch(`https://drinks-df78.restdb.io/rest/drinks?q={"$and": [{"smag": "${id}"}]}`, {
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
} 



document.querySelector(".sort").href =`productSite.html?id=Syrlig`; 

function clickfun() {
    
}

//https://drinks-df78.restdb.io/rest/drinks?q={"smag":"Syrlig"}

//https://drinks-df78.restdb.io/rest/drinks?q={"smag" : {"$in" : ["Syrlig","Stærk"]}}

// ?q={"$and": [{"smag": "Syrlig"}, {"smag": "Stærk"}]}
// ?q={"$and": [{"smag": "Syrlig"}]}
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

  //   copy.querySelector(".ui-card").onClick = "location.href='product-page.html?q=name:'+ data.name";

  copy.querySelector(".ui-card").addEventListener("click", function () {
    location.href = `product-page.html?id=${data.name}`;
  });  

  copy.querySelector(".product-name").textContent = data.name;
  document.querySelector(".products").appendChild(copy);
}
