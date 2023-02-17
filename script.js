fetch("https://drinks-df78.restdb.io/rest/drinks", {
    method: "get",
    headers: {
        "x-api-key": "63ef53be478852088da683cf",
    },
})
    .then((e)=> e.json())
    .then(dosomethin);

    function dosomethin(data){
        console.log(data[0].spiritus);
    }