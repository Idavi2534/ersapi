
async function edit(event) {
    event.preventDefault(); // prevent default form submission
    const userid = document.getElementById('id').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
   
   /* const credentials = {
      username, // username: value of the variable
      password
      
    }*/

    const credentials ={
     userid, username, password, fname, lname, email,role

    }
  
    const res = await fetch('http://localhost:3300/users', {
      method: 'PATCH',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
  
    if (res.status === 200) {
      window.location = 'manage-users.html';
    } else {
      console.log('Update Failed');
      document.getElementById('error-message').innerText = 'Failed to Update';
    }}