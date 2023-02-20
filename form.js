fetch("https://drinks-df78.restdb.io/rest/drinks", {
    method: "post",
    headers: {
        "Content-Type": "application/json",
        "x-apikey": "63ef53be478852088da683cf",
    },
    body: JSON.stringify(data),
})
    .then((e)=> e.json())
    .then(dosomethin);

    function dosomethin(data){
        console.log(data);
    }


    const form = document.querySelector("#drinkForm");