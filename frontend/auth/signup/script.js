const url = "http://localhost:8000/api/v1/users/register";

myForm.onsubmit = async (e) => {

    e.preventDefault();

   const formData = new FormData(myForm);


    
       fetch(url , {
        method: 'POST',
        body: formData
       })
       .then( ( res ) => {
        if(!res.ok){
            throw new Error("fettching failed!!")
        }
        return res.json()})
       .then((data) => {console.log(data)})
       .catch((error) => {console.log(error.message)})


    }


