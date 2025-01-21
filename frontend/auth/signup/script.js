const url = "http://localhost:8000/api/v1/users/register";
const form = document.getElementById('myForm');
const box = document.querySelector('.box');

function renderLoader () {
    box.classList.add('loader')
}

function success(){
    box.classList.add('box1');
    box.classList.add('messageTrue');
    box.classList.remove('loader')
   setTimeout(() => {
    box.classList.remove('box1');
    box.classList.remove('messageTrue');
   } , 10000)
}

function failed(){
    box.classList.add('box1');
    box.classList.add('messageFalse');
    box.classList.remove('loader')
    setTimeout(() => {
        box.classList.remove('box1');
        box.classList.remove('messageFalse');
       } , 10000)
}

function alreadyExist(){
    box.classList.add('box1');
    box.classList.add('alreadyExist');
    box.classList.remove('loader')
    setTimeout(() => {
        box.classList.remove('box1');
        box.classList.remove('alreadyExist');
       } , 10000)
}




form.addEventListener('submit' ,(e) => {

    renderLoader()

    e.preventDefault()
    console.log("loading")
    const formData = new FormData(form);

    fetch(url , {method: 'POST' , body : formData})
    .then( (response) => {
        if(!response.ok){
            console.log(response);

            if(response.status === 409){
                console.log("user already exist!!");
                alreadyExist()
            }
            
            throw new Error("opps fetch failed !!" )
        }else{
            return response.json()
        }
    })
    .then( (data) => {
        success()
        console.log(data)
    })
    .catch( (error) => {
        failed()
        console.log("error message :" , error.message)
    })


})



