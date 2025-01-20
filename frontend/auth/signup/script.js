document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Create a FormData object from the form
    const formData = new FormData(this);

    console.log(typeof(formData));
    

    for (let [key, value] of formData.entries()) {
        console.log(`${key}:`, value);
    }

    // Use fetch to send the data to the backend
    fetch('http://localhost:8000/api/v1/users/register', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())  // Assuming the response is in JSON format
    .then(data => {
        console.log('Success:', data);
        // Handle success (e.g., show a success message or redirect)
    })
    .catch((error) => {
        console.error('Error: !!', error);
        // Handle error (e.g., show an error message)
    });
});

