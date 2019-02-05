
async function login(event) {
  event.preventDefault(); // prevent default form submission
  const username = document.getElementById('inputUsername').value;
  const password = document.getElementById('inputPassword').value;
  const credentials = {
    username, // username: value of the variable
    password
  }

  const res = await fetch('http://localhost:3300/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })

  if (res.status === 200) {
    window.location = '../manage-users/manage-users.html';
  } else {
    console.log('failed to log in');
    document.getElementById('inputPassword').value = '';
    document.getElementById('error-message').innerText = 'failed to login';
  }}