

$(document).ready(
  function(){
      $('#searchbox').keyup(
          function(){
              var searchText = $(this).val();
  
              if (searchText.length > 0) {
                  $('tbody tr:contains('+searchText+')')
                      .addClass('searchResult');
                  $('.searchResult')
                      .not(':contains('+searchText+')')
                      .removeClass('searchResult');
  
                  $('tbody tr')
                      .not(':contains('+searchText+')')
                      .addClass('faded');
                  $('.faded:contains('+searchText+')')
                      .removeClass('faded');
  
                  $('.faded').hide();
                  $('.searchResult').show();
  
              }
              else if (searchText.length == 0) {
                  $('.searchResult').removeClass('searchResult');
                  $('.faded').removeClass('faded');  
                  $('tr').show();
              }
          });
  });







fetch("http://localhost:3300/reimbursements/reimbursements", {
  credentials: 'include',

})
  .then(resp => 
    resp.json())
  .then(users => {
    console.log(users);
    // get the table body
    const tbody = document.getElementById('restaurant-table-body');
    tbody.innerHTML = '';

    // for each user retreived from the db
    users.forEach(user => {

      // create a row
      const tr = document.createElement('tr');

      // add the name data to the row
      let idData = document.createElement('td');
      idData.innerText = user.reimbursementid;
      tr.appendChild(idData);

      // add the username data to the row
      let usernameData = document.createElement('td');
      usernameData.innerText = user.author;
      tr.appendChild(usernameData);
      
      let fnameData = document.createElement('td');
      fnameData.innerText = user.amount;
      tr.appendChild(fnameData);
      

      console.log(user.dateSubmitted)
      let lnameData = document.createElement('td');
      lnameData.innerText = user.datesubmitted;
      tr.appendChild(lnameData);
      
      let enameData = document.createElement('td');
      enameData.innerText = user.dateresolved;
      tr.appendChild(enameData);
      
      
      let rnameData = document.createElement('td');
      rnameData.innerText = user.description;
      tr.appendChild(rnameData);

      let onameData = document.createElement('td');
      onameData.innerText = user.resolver;
      tr.appendChild(onameData);

      let qnameData = document.createElement('td');
      qnameData.innerText = user.status;
      tr.appendChild(qnameData);


      // add the delete data to the row
      let deleteData = document.createElement('td');
      deleteData.innerText = 'DELETE';
      deleteData.className = 'delete-button';
      tr.appendChild(deleteData);

      // add the row to the table body
      tbody.appendChild(tr);

    })
  })
  .catch(console.log);