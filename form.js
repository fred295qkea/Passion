// fetch("https://tester-ef90.restdb.io/rest/signups", {
//     method: "post",
//     headers: {
//         "Content-Type": "application/json",
//         "x-apikey": "63f39ef9478852088da684ce",
//     },
//     body: JSON.stringify(data),
// })
//     .then((e)=> e.json())
//     .then(dosomethin);

//     function dosomethin(data){
//         console.log(data);
//     }


    const form = document.querySelector("#drinkForm");
    form.addEventListener("submit",handlesubmit);

    function handlesubmit(event) {
    
        event.preventDefault();
        const username = form.elements.name.value;

        const userspiritus = form.elements.spiritus.value;
        const spiritusarray = userspiritus.split(",");
        
        

        const drinkspiritus = form.elements.alkohol.value;
        // const tekstelementor = form.elements.elementor.value;
        // const elementorarray = tekstelementor.split(",");
        const tastearray = document.querySelectorAll(".checktaste");
        let usertaste = [];
        tastearray.forEach((checkbox)=>{
            if(checkbox.checked){
                usertaste.push(checkbox.value)
            }
        });
        const usertime = form.elements.time.value;

        const userdescription = form.elements.description.value;
        
        
        const useringredients = form.elements.ingredients.value;
        const ingredientsarray = useringredients.split(",");

        const usermake = form.elements.make.value;
        const usermakearray = usermake.split(",");
        
        
        
         const myData = {
             name: username,
             spiritus: spiritusarray,
             alkoholfri: drinkspiritus,
             smag:usertaste,
             tid:usertime,
             beskrivelse: userdescription,
             ingredienser: ingredientsarray,
             fremgangsmåde:usermakearray,

         }
         console.log(myData);

         fetch("https://drinks-df78.restdb.io/rest/drinks", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "x-apikey": "63ef53be478852088da683cf",
            },
            body: JSON.stringify(myData),
        })
            .then((e)=> e.json())
            .then(dosomethin);
        
            function dosomethin(data){
                console.log(data);
            }





    }

    