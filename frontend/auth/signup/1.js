document.getElementById('btn').addEventListener('click', async () => {
    // Create FormData instance
    const formData = new FormData();
  
    // Add text fields
    formData.append('fullname', '1');
    formData.append('username', 'Shwet__prakash');
    formData.append('email', '1@1');
    formData.append('password', '123');
  
    // Add binary files (profile picture and cover image)
    const profilePicture = document.getElementById('profile-picture').files[0];
    const coverImage = document.getElementById('cover-image').files[0];
  
    formData.append('avatar', profilePicture);
    formData.append('coverImage', coverImage);
  
    try {
      const response = await fetch('https://your-server-endpoint.com/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (response.ok) {
        const result = await response.json(); // Adjust based on the server response
        console.log('Success:', result);
      } else {
        console.error('Error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Request failed:', error);
    }
  });
  