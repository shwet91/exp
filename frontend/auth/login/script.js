const url = 'http://localhost:8000/api/v1/users/login';



const form = document.querySelector('#login-form');
const email = document.getElementById('login-email');
const password = document.getElementById('login-password');
const btn = document.getElementById('btn');
const box = document.querySelector('.box')



// setTimeout(()=>{
//     console.log(email.value)
// }, 10000);

function renderLoader () {
    box.classList.add('loader')
};

function failed(){
    box.classList.add('box1');
    box.classList.add('messageFalse');
    box.classList.remove('loader')
    setTimeout(() => {
        box.classList.remove('box1');
        box.classList.remove('messageFalse');
       } , 10000)
}

function failedUnknown(){
    box.classList.add('box1');
    box.classList.add('messageFalse2');
    box.classList.remove('loader')
    setTimeout(() => {
        box.classList.remove('box1');
        box.classList.remove('messageFalse2');
       } , 10000)
}

function notExist(){
    box.classList.add('box1');
    box.classList.add('messageFalse3');
    box.classList.remove('loader')
    setTimeout(() => {
        box.classList.remove('box1');
        box.classList.remove('messageFalse3');
       } , 10000)
}


btn.addEventListener( 'click' , (e) => {

    renderLoader()

    console.log("loading");
    e.preventDefault();

    const data = {
        password : password.value,
        email: email.value
    }

    fetch(url , {method: 'POST',  headers: { 'Content-Type': 'application/json' } , body: JSON.stringify(data)})
    .then((response) => {
       
        if(response.ok){
            console.log(response)
            return response.json();
        }else{
            if(response.status === 401){
                failed()
                console.log("incorect password")
            }
            if(response.status === 400){
                notExist();
                console.log("user does not exist")
            }
           
            // throw new Error("fettiching failed")
        }
    })
    .then((data) => {
        console.log("success :" , data)
    })
    .catch((error) => {

        failedUnknown()
       
        console.log("error " , error)
    })
})

