const profilePic = document.getElementById('profile-picture');
const CoverPic = document.getElementById('cover-image');
const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const coverImage = document.getElementById('cover-image');


const newData = {
    username: `${username.value}`,
    fullname: `${fullname.value}`,
    email: `${email.value}`,
    password: `${password.value}`,
    avatar: `${profilePic.value}`,
    coverImage: `${coverImage.value}`
}





document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission


    const formData = new FormData(this);  // Create FormData object from the form

    
    fetch('http://localhost:8000/api/v1/users/register', {
        method: 'POST',
        body: formData,  
    })
    .then((response) => { response.json(),  console.log(response)})  
    .then(data => {
        console.log('Success:', data); 
    })
    .catch((error) => {
        console.error('Error: !!', error);  
    });
});

