
async function edit(event) {
    event.preventDefault(); // prevent default form submission
    const rId = document.getElementById('id').value;
    const userid = document.getElementById('userId').value;
    const amount = document.getElementById('amount').value;
    const desc = document.getElementById('desc').value;
    const status = document.getElementById('status').value;
  
   
   /* const credentials = {
      username, // username: value of the variable
      password
      
    }*/

    const credentials ={
    rId, userid, amount, desc, status

    }
  
    const res = await fetch('http://localhost:3300/reimbursements', {
      method: 'PATCH',
      body: JSON.stringify(credentials),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
  
    if (res.status === 200) {
      window.location = '/reimbursements';
    } else {
      console.log('Update Failed');
      document.getElementById('error-message').innerText = 'Failed to Update';
    }}