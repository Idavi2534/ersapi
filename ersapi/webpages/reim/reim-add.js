
async function edit(event) {
    event.preventDefault(); // prevent default form submission
  
    const userid = document.getElementById('userId').value;
    const amount = document.getElementById('amount').value;
    const desc = document.getElementById('desc').value;

  
   
   /* const credentials = {
      username, // username: value of the variable
      password
      
    }*/

    const credentials ={
     userid, amount, desc

    }
  
    const res = await fetch('http://localhost:3300/reimbursements', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
  
    if (res.status === 200) {
      window.location = '/reimbursements';
    } else {
      console.log('Add Failed');
      document.getElementById('error-message').innerText = 'Failed to Add';
    }}